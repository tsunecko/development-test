import React from 'react';
import { Cell } from '../../types/cell.type';

export const TableCell = ({ text, avatar }: Cell) => {
  return (
    <td
      scope="col"
      className={`${avatar ? 'flex items-center' : ''} py-4 px-6`}
    >
      {avatar ? (
        <img
          className="h-12 w-12 rounded-full mr-3"
          src={avatar}
          alt="avatar"
          aria-hidden="true"
        />
      ) : null}
      <div className={avatar ? 'font-semibold' : ''}>{text}</div>
    </td>
  );
};
