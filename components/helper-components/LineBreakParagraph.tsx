import { cn, lineBreak } from '@/utils';
import React from 'react';
import Paragraph from '../atom-components/Paragraph';

interface LineBreakProps {
  str: string;
  className?: string;
}
const LineBreakParagraph = ({ str, className }: LineBreakProps) => {
  return (
    <>
      {lineBreak(str).map((line) => (
        <Paragraph key={line} className={cn('block my-2', className)}>
          {line}
        </Paragraph>
      ))}
    </>
  );
};

export default LineBreakParagraph;
