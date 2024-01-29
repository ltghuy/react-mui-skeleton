import { useMemo } from 'react';
import { useAuth0, User } from '@auth0/auth0-react';
import { COOKIE_KEYS } from '@constants/cookie';
import { removeTokenInterceptor } from '@services/core';
import Cookies from 'js-cookie';

/**
 * A custom React hook for handling authentication-related logic using Auth0.
 * @returns An object containing authentication-related properties and functions.
 * @typedef {Object} AuthHookResult
 * @property {Error | undefined} error - The authentication error, if any.
 * @property {boolean} isLoading - Indicates whether the authentication information is currently being loaded.
 * @property {boolean} isAuthenticated - Indicates whether the user is authenticated.
 * @property {User | undefined} user - The authenticated user's information.
 * @property {Function} getAccessTokenSilently - A function to get an access token silently.
 * @property {Function} logOut - A function to log the user out.
 */
export const useAuth = () => {
  const {
    error,
    isLoading,
    logout,
    getAccessTokenSilently,
    isAuthenticated: auth0Authenticated,
    user: auth0User,
  } = useAuth0();

  const logOut = () => {
    // Remove token
    removeTokenInterceptor();
    // Clear all user data in the local storage and cookies
    localStorage.clear();
    Cookies.remove(COOKIE_KEYS.AUTH_USER, {
      domain: process.env.VITE_AUTH0_DOMAIN_WILDCARD,
    });
    // Call logout function
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  const cookieUser = useMemo<User | undefined>(() => {
    const userStr = Cookies.get(COOKIE_KEYS.AUTH_USER);
    if (userStr !== undefined) {
      try {
        return JSON.parse(userStr) as User;
      } catch {
        return undefined;
      }
    }
    return undefined;
  }, []);

  const user = auth0User ?? cookieUser;
  const isAuthenticated = auth0Authenticated || Boolean(user);

  return {
    error,
    isLoading,
    isAuthenticated,
    user,
    getAccessTokenSilently,
    logOut,
  };
};
