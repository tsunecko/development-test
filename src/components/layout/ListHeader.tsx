import React from 'react';

export interface ListHeaderProps {
  text: string;
}

export const ListHeader: React.FC<ListHeaderProps> = ({ text }) => {
  return (
    <div className="lg:text-center">
      <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
        {text}
      </p>
    </div>
  );
};
