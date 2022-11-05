import React from 'react';
import { UsersList } from '../../views/Users/UsersList';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UsersProfile } from '../../views/Users/UsersProfile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <UsersList />,
  },
  {
    path: ':id',
    element: <UsersProfile />,
  },
]);

export const Root = () => {
  return <RouterProvider router={router} />;
};
