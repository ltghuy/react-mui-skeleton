import { MINUTE } from '@constants/time';
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
  QueryClientProviderProps,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

declare module '@tanstack/react-query' {
  interface QueryMeta {
    errorMessage: string;
  }
}

const queryCache = new QueryCache({
  onError: () => {
    //Handle global error
  },
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      cacheTime: MINUTE * 10,
      retry: 0,
    },
  },
  queryCache,
});

export const AppQueryClientProvider = ({
  children,
  ...props
}: Partial<QueryClientProviderProps>) => (
  <QueryClientProvider {...props} client={queryClient}>
    {children}
    <ReactQueryDevtools
      initialIsOpen={false}
      toggleButtonProps={{
        style: {
          right: 0,
          left: 'auto',
        },
      }}
    />
  </QueryClientProvider>
);
