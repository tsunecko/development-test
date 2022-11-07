import React from 'react';
import { ListHeader } from '../../components/layout/ListHeader';
import { UsersTable } from './UsersTable';

export const UsersList = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <ListHeader text={'Users list'} />

      <div className="mt-10 overflow-x-auto relative shadow-md sm:rounded-lg">
        <UsersTable />
      </div>
    </div>
  );
};
