import { ReactNode } from 'react';
import { useNavigate } from 'react-router';
import { AppState, Auth0Provider } from '@auth0/auth0-react';
import { AUTHORIZATION_SCOPE } from '@constants/auth0';
import { ROUTES } from '@constants/routes';
import { SEARCH_PARAMS } from '@constants/searchParams';

export interface AppAuth0ProviderProps {
  children: ReactNode;
}

export const AppAuth0Provider = ({ children }: AppAuth0ProviderProps) => {
  const navigate = useNavigate();

  const handleRedirectCallback = (appState?: AppState) => {
    const redirectUri = appState?.returnTo ?? ROUTES.HOME;

    //Remove auth0 search params
    const [originUrl, searchParams] = redirectUri.split('?');
    const params = new URLSearchParams(searchParams);
    Object.values(SEARCH_PARAMS.AUTH).forEach(key => {
      params.delete(key);
    });
    const newParams = params.size ? `?${params}` : params;
    navigate(`${originUrl}${newParams}`, {
      replace: true,
    });
  };

  return (
    <Auth0Provider
      useRefreshTokens
      domain={process.env.VITE_AUTH0_DOMAIN ?? ''}
      clientId={process.env.VITE_AUTH0_CLIENT_ID ?? ''}
      cookieDomain={process.env.VITE_AUTH0_DOMAIN_WILDCARD ?? ''}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: process.env.VITE_AUTH0_AUDIENCE,
        scope: AUTHORIZATION_SCOPE,
      }}
      onRedirectCallback={handleRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
