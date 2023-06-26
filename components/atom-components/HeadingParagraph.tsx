import React from 'react';

interface HeadingParagraphProps {
  children: React.ReactNode;
}

const HeadingParagraph = ({ children }: HeadingParagraphProps) => {
  return <h2>{children}</h2>;
};

export default HeadingParagraph;
