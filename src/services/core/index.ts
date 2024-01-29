import { API_ROUTES } from '@constants/apiRoutes';
import { HTTP_STATUS } from '@constants/httpStatus';
import { SECOND } from '@constants/time';
import axios, { AxiosError, AxiosInstance } from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';

export const auth0Instance: AxiosInstance = axios.create({
  baseURL: `https://${process.env.VITE_AUTH0_DOMAIN ?? ''}/api/v2/`,
  timeout: 0,
});

export const apiInstance: AxiosInstance = axios.create({
  baseURL: API_ROUTES.BASE,
  timeout: 0,
});

export const apiMockInstance: AxiosInstance = axios.create({
  baseURL: API_ROUTES.BASE,
  timeout: 0,
});

export const mockAPI = new AxiosMockAdapter(apiMockInstance, {
  delayResponse: SECOND * 0.8,
});

export const addTokenInterceptor = (getToken: () => Promise<string>) => {
  [apiInstance, auth0Instance].forEach(instance => {
    instance.interceptors.request.use(async config => {
      if (config?.headers) {
        const token = await getToken();
        config.headers.Authorization = `Bearer ${token}`;
        config.headers['Content-Type'] = 'application/json';
      }
      return config;
    });
  });
};

export const removeTokenInterceptor = () => {
  [apiInstance, auth0Instance].forEach(instance => {
    instance.interceptors.request.use(async config => {
      if (config?.headers) {
        delete config.headers.Authorization;
      }
      return config;
    });
  });
};

export const addVerifyAuthInterceptor = (logout: () => void) => {
  [apiInstance, auth0Instance].forEach(instance => {
    instance.interceptors.response.use(
      response => response,
      (error: AxiosError) => {
        //Logout when 401
        if (error?.response?.status === HTTP_STATUS.UNAUTHORIZED) {
          logout();
        } else {
          throw error;
        }
      }
    );
  });
};
