import React from 'react';

interface ParagraphProps {
  children: React.ReactNode;
}

const Paragraph = ({ children }: ParagraphProps) => {
  return (
    <p className=" text-xs md:text-sm lg:text-base text-gray-400 dark:text-gray-200">
      {children}
    </p>
  );
};

export default Paragraph;
