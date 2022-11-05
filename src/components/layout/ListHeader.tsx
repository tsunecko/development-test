import React from 'react';
import { Text } from '../../types/text.type';

export const ListHeader = ({ text }: Text) => {
  return (
    <div className="lg:text-center">
      <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
        {text}
      </p>
    </div>
  );
};
