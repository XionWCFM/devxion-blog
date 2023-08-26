import { HighlightParagraph } from '@/types/resume';
import { cn } from '@/utils';
import React from 'react';

interface HighlightSentenceProps {
  highlightParagraph: HighlightParagraph;
  highlightStyle?: string;
  normalStyle?: string;
  className?: string;
}

const HighlightSentence = ({
  highlightParagraph,
  highlightStyle,
  normalStyle,
  className,
}: HighlightSentenceProps) => {
  return (
    <div className={cn(' leading-8', className)}>
      {highlightParagraph.map((item, idx) => (
        <div key={`hi${idx}`}>
          {item.map((highlightObj, i) => {
            if (highlightObj.highlight) {
              return (
                <span
                  key={`highlight${i}`}
                  className={cn(
                    'text-yellow-500 dark:text-yellow-400 font-bold text-xs lg:text-base',
                    highlightStyle,
                  )}
                >
                  {highlightObj.sentence}
                </span>
              );
            }
            return (
              <span
                key={`highlight${i}`}
                className={cn(
                  ' text-xs lg:text-base text-zinc-400 dark:text-zinc-300',
                  normalStyle,
                )}
              >
                {highlightObj.sentence}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default HighlightSentence;
