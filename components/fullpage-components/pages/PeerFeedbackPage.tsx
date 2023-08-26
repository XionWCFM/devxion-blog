import React from 'react';
import PageWrapper from '../PageWrapper';
import FadeInProvider from '@/components/helper-components/FadeInProvider';
import { PeerFeedback } from '@/types/resume';
import HeadingParagraph from '@/components/atom-components/HeadingParagraph';
import HighlightSentence from '@/components/ui-components/HighlightSentence';
import LineBreakParagraph from '@/components/helper-components/LineBreakParagraph';

interface PeerFeedbackProps {
  peer: PeerFeedback;
}

const PeerFeedbackPage = ({ peer }: PeerFeedbackProps) => {
  return (
    <PageWrapper>
      <FadeInProvider>
        <HeadingParagraph className=" mb-4">{peer.title}</HeadingParagraph>
        <LineBreakParagraph className=" py-4" str={peer.description} />
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-3 lg:gap-y-6">
          {peer.itemList.map((item, idx) => (
            <div
              key={idx}
              className=" cursor-pointer border-l-2 border-yellow-500 border-dotted pl-3 py-3 hover:brightness-110 hover:scale-105 transition-all duration-200 rounded-md"
            >
              <div className=" flex gap-x-2 text-yellow-500 dark:text-yellow-400 text-base lg:text-xl mb-4">
                <span className=" font-extrabold">{item.belong}</span>
                <span>{item.name}</span>
                <span>{item.position}</span>
              </div>
              <div className="">
                <HighlightSentence
                  highlightParagraph={item.hightlightContent}
                  className=" text-xs lg:text-xs hover:text-sm duration-500 transition-all"
                />
              </div>
            </div>
          ))}
        </div>
      </FadeInProvider>
    </PageWrapper>
  );
};

export default PeerFeedbackPage;
