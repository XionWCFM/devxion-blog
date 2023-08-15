import { cn } from '@/utils';
import React from 'react';

interface BetweenProps {
  children: React.ReactNode;
  className?: string;
}

const Between = ({ children, className }: BetweenProps) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 lg:grid-cols-2 place-items-center ',
        className,
      )}
    >
      {children}
    </div>
  );
};

Between.harfitem = ({ children, className }: BetweenProps) => {
  return (
    <div
      className={cn(
        'flex justify-center items-center w-[100%] lg:w-[50%] ',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Between;
