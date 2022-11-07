import React from 'react';
import { UsersList } from '../../pages/Users/UsersList';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UsersProfile } from '../../pages/Users/UsersProfile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <UsersList />,
  },
  {
    path: 'users/:id',
    element: <UsersProfile />,
  },
]);

export const Root = () => {
  return <RouterProvider router={router} />;
};
