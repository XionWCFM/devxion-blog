import { cn } from '@/utils';
import React from 'react';

interface CenteringProps {
  children: React.ReactNode;
  className?: string;
  col?: boolean;
}

const Centering = ({ children, className, col }: CenteringProps) => {
  return (
    <div
      className={cn(
        'flex justify-center items-center',
        col ? 'flex-col' : '',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Centering;
