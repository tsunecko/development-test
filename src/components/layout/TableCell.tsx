import React from 'react';

interface TableCellProps {
  text: string | React.ReactElement;
  avatar?: string;
}

export const TableCell: React.FC<TableCellProps> = ({ text, avatar }) => {
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
