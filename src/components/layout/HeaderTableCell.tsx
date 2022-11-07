import React from 'react';

export interface HeaderTableCellProps {
  text: string;
}

export const HeaderTableCell: React.FC<HeaderTableCellProps> = ({ text }) => {
  return (
    <th scope="col" className="py-3 px-6">
      {text}
    </th>
  );
};
