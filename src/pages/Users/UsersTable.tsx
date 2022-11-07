import React from 'react';
import { HeaderTableCell } from '../../components/layout/HeaderTableCell';
import { TableCell } from '../../components/layout/TableCell';
import { Link } from 'react-router-dom';
import { User } from '../../types/user.interface';

export const UsersTable = () => {
  const [list, setList] = React.useState<User[]>([]);

  React.useEffect(() => {
    fetch(`https://reqres.in/api/users?page=1`)
      .then((res) => res.json())
      .then((data) => setList(data.data));
  }, [list]);

  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <HeaderTableCell text={'User name'} />
          <HeaderTableCell text={'Email'} />
          <HeaderTableCell text={'Action'} />
        </tr>
      </thead>

      <tbody>
        {list.map((user) => (
          <tr key={user.id} className="bg-white border-b">
            <TableCell
              text={`${user.first_name} ${user.last_name}`}
              avatar={user.avatar}
            />
            <TableCell text={user.email} />
            <TableCell
              text={
                <Link
                  to={`/users/${user.id}`}
                  className="font-medium text-blue-600 hover:underline"
                >
                  View
                </Link>
              }
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
