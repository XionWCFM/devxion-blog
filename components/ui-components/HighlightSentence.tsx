import { HighlightParagraph } from '@/types/resume';
import React from 'react';

interface HighlightSentenceProps {
  highlightParagraph: HighlightParagraph;
}

const HighlightSentence = ({ highlightParagraph }: HighlightSentenceProps) => {
  return (
    <div>
      {highlightParagraph.map((item, idx) => (
        <div key={`hi${idx}`}>
          {item.map((highlightObj, i) => {
            if (highlightObj.highlight) {
              return (
                <span
                  key={`highlight${i}`}
                  className=" text-yellow-500 font-bold"
                >
                  {highlightObj.sentence}
                </span>
              );
            }
            return <span key={`highlight${i}`}>{highlightObj.sentence}</span>;
          })}
        </div>
      ))}
    </div>
  );
};

export default HighlightSentence;
