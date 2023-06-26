import React from 'react';

interface ParagraphProps {
  children: React.ReactNode;
}

const Paragraph = ({ children }: ParagraphProps) => {
  return <p className=" text-xs md:text-sm lg:text-base">{children}</p>;
};

export default Paragraph;
