import { cn } from '@/utils';
import React from 'react';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
  centering?: boolean;
}

const PageWrapper = ({ children, centering, className }: PageWrapperProps) => {
  return (
    <section
      className={cn(
        'w-[75vw] h-[80vh] lg:h-[90vh] ',
        centering ? ' flex justify-center items-center' : '',
        className,
      )}
    >
      {children}
    </section>
  );
};

export default PageWrapper;
