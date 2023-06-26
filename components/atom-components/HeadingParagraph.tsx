import React from 'react';

interface HeadingParagraphProps {
  children: React.ReactNode;
}

const HeadingParagraph = ({ children }: HeadingParagraphProps) => {
  return (
    <h2 className=" font-extrabold text-2xl md:text-4xl lg:text-5xl mb-4 smooth text-yellow-500">
      {children}
    </h2>
  );
};

export default HeadingParagraph;
