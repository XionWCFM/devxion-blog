import React from 'react';
import Button from './Button';

interface TagProps {
  children: React.ReactNode;
}

const Tag = ({ children }: TagProps) => {
  return (
    <Button className=" flex">
      <div className=" text-xs px-4 bg-yellow-400 rounded-lg py-1 dark:text-gray-200 text-white dark:bg-yellow-600 cursor-pointer">
        {children}
      </div>
    </Button>
  );
};

export default Tag;
