import { cn } from '@/utils';
import React from 'react';

interface HeadingParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const HeadingParagraph = ({ children, className }: HeadingParagraphProps) => {
  return (
    <h2
      className={cn(
        ' font-extrabold text-2xl md:text-4xl lg:text-5xl mb-4 smooth text-yellow-500',
        className,
      )}
    >
      {children}
    </h2>
  );
};

export default HeadingParagraph;
