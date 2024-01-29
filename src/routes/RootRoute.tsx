import { ReactNode, useEffect } from 'react';
import { Outlet } from 'react-router';
import { useAuth0 } from '@auth0/auth0-react';
import { COOKIE_KEYS } from '@constants/cookie';
import { LOCAL_STORAGE_KEY } from '@constants/localStorage';
import { AppAuth0Provider } from '@contexts/AppAuth0Provider';
import Cookies from 'js-cookie';

interface RootRouterProps {
  children?: ReactNode;
}

export const RootRouter = ({ children }: RootRouterProps) => {
  return (
    <AppAuth0Provider>
      {children}
      <Outlet />
      <RootRouterHandler />
    </AppAuth0Provider>
  );
};

const RootRouterHandler = () => {
  const { user } = useAuth0();
  useEffect(() => {
    //Load success, remove force reload flag in localstorage
    localStorage.removeItem(LOCAL_STORAGE_KEY.FORCE_RELOAD);
  }, []);

  useEffect(() => {
    if (user) {
      //Save current login user to cookie storage
      Cookies.set(COOKIE_KEYS.AUTH_USER, JSON.stringify(user), {
        domain: process.env.VITE_AUTH0_DOMAIN_WILDCARD,
      });
    }
  }, [user]);
  return null;
};
