import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CriarConta from './components/CriarConta';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { UserPage } from './pages/UserPage';

import './style.css';

const browser = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/criar conta',
    element: <CriarConta />,
  },
  {
    path: '/usuario',
    element: <UserPage />,
  },
]);

export const App: FC<{ name: string }> = ({ name }) => {
  return <RouterProvider router={browser}></RouterProvider>;
};
