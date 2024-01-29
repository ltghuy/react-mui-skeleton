import { ReactNode, useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { FullScreenError } from '@components/errors/FullScreenError';
import { FullScreenLoading } from '@components/loadings/FullScreenLoading';
import { SEARCH_PARAMS } from '@constants/searchParams';
import { useAuth } from '@hooks/core/useAuth';
import { addTokenInterceptor, addVerifyAuthInterceptor } from '@services/core';

interface AuthorizedLayoutProps {
  children?: ReactNode;
}

export const PrivateRouteHandle = ({ children }: AuthorizedLayoutProps) => {
  const { isLoading, isAuthenticated, error, getAccessTokenSilently, logOut } =
    useAuth();
  const [addingToken, setAddingToken] = useState<boolean | undefined>();

  useEffect(() => {
    if (isAuthenticated) {
      setAddingToken(false);
      addTokenInterceptor(getAccessTokenSilently);
      setAddingToken(true);
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  useEffect(() => {
    //Add logout function to axios instance, call logout when get error 401
    addVerifyAuthInterceptor(logOut);
  }, [logOut]);

  if (isLoading || !addingToken) {
    return <FullScreenLoading />;
  }
  if (error) {
    return <FullScreenError onClick={logOut} />;
  }
  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <Outlet />
      {children}
    </>
  );
};

export const PrivateRoute = withAuthenticationRequired(PrivateRouteHandle, {
  onRedirecting: () => <FullScreenLoading />,
  loginOptions: {
    openUrl: url => {
      const params = new URLSearchParams(window.location.search);
      //Back error code to the login page
      if (params.get(SEARCH_PARAMS.AUTH.ERROR)) {
        return window.location.replace(`${url}&${params.toString()}`);
      }
      return window.location.replace(url);
    },
  },
});
