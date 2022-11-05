import React from 'react';
import { Text } from '../../types/text.type';

export const HeaderTableCell = ({ text }: Text) => {
  return (
    <th scope="col" className="py-3 px-6">
      {text}
    </th>
  );
};
