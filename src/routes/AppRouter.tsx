import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '@components/layouts/MainLayout';
import { FullScreenLoading } from '@components/loadings/FullScreenLoading';
import { ROUTES } from '@constants/routes';
import loadable from '@loadable/component';
import { AppRouterError } from '@routes/AppRouterError';
import { PrivateRoute } from '@routes/PrivateRoute';
import { RootRouter } from '@routes/RootRoute';

const HomePage = loadable(() => import('@pages/HomePage'));
const ForbiddenPage = loadable(() => import('@pages/_base/ForbiddenPage'));
const NotFoundPage = loadable(() => import('@pages/_base/NotFoundPage'));

export const appRoute = createBrowserRouter([
  {
    errorElement: <AppRouterError />,
    element: <RootRouter />,
    children: [
      {
        element: <PrivateRoute />,
        children: [
          {
            element: <MainLayout />,
            path: ROUTES.HOME,
            children: [
              {
                path: ROUTES.HOME,
                element: <HomePage />,
              },
            ],
          },
        ],
      },
      {
        path: ROUTES.NOT_FOUND,
        element: <NotFoundPage />,
      },
      {
        path: ROUTES.FORBIDDEN,
        element: <ForbiddenPage />,
      },
    ],
  },
]);

export const AppRouter = () => (
  <RouterProvider router={appRoute} fallbackElement={<FullScreenLoading />} />
);
