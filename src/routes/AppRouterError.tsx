import { useEffect, useMemo, useState } from 'react';
import { useRouteError } from 'react-router-dom';
import { FullScreenError } from '@components/errors/FullScreenError';
import { ROUTER_ERROR } from '@constants/error/router';
import { LOCAL_STORAGE_KEY } from '@constants/localStorage';
import { AUTO_RELOAD_OLD_PAGE_VERSION_TIME, SECOND } from '@constants/time';

export const AppRouterError = () => {
  const error = useRouteError();
  const isDynamicImportError = useMemo(
    () =>
      error instanceof TypeError &&
      error.message.includes(ROUTER_ERROR.DYNAMIC_IMPORT),
    [error]
  );
  const isForceReloaded = useMemo(
    () => Boolean(localStorage.getItem(LOCAL_STORAGE_KEY.FORCE_RELOAD)),
    []
  );

  const [counter, setCounter] = useState(AUTO_RELOAD_OLD_PAGE_VERSION_TIME);

  useEffect(() => {
    if (isDynamicImportError && !isForceReloaded) {
      const timeOut = setTimeout(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY.FORCE_RELOAD, String(true));
        window.location.reload();
      }, AUTO_RELOAD_OLD_PAGE_VERSION_TIME);
      const timeInterval = setInterval(() => {
        setCounter(currentTime => (currentTime > 0 ? currentTime - SECOND : 0));
      }, SECOND);
      return () => {
        clearTimeout(timeOut);
        clearInterval(timeInterval);
      };
    }
    return () => undefined;
  }, [isDynamicImportError, isForceReloaded]);

  const description = useMemo(() => {
    const currentCounter = counter / SECOND;
    if (isForceReloaded) {
      return 'Please try again';
    }
    return `We will update you to the new version in <strong>${currentCounter}</strong> ${
      currentCounter > 1 ? 'seconds' : 'second'
    }...`;
  }, [counter, isForceReloaded]);

  return (
    <FullScreenError
      description={isDynamicImportError ? description : undefined}
      buttonText='Reload'
      title={
        isDynamicImportError
          ? 'New version is now available.'
          : 'Can not load this page'
      }
      onClick={isForceReloaded ? () => window.location.reload() : undefined}
    />
  );
};
