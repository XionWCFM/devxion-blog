import { cn } from '@/utils';
import React from 'react';

interface CenteringProps {
  children: React.ReactNode;
  className?: string;
  row?: boolean;
}

const Centering = ({ children, className, row }: CenteringProps) => {
  return (
    <div
      className={cn(
        'flex justify-center items-center flex-col flex-wrap',
        row ? 'flex-row' : '',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Centering;
