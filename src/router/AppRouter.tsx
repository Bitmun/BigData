import { Footer, Header } from '@components';

import { ROUTES } from 'constants/routes';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: ROUTES,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
