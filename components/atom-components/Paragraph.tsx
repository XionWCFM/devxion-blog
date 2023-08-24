import { cn } from '@/utils';
import React from 'react';

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const Paragraph = ({ children, className }: ParagraphProps) => {
  return (
    <p
      className={cn(
        ' text-xs md:text-sm lg:text-base text-zinc-500 dark:text-zinc-300 smooth',
        className,
      )}
    >
      {children}
    </p>
  );
};

export default Paragraph;
