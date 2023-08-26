import { Study } from '@/types/resume';
import React from 'react';
import PageWrapper from '../PageWrapper';
import HeadingParagraph from '@/components/atom-components/HeadingParagraph';
import HighlightSentence from '@/components/ui-components/HighlightSentence';
import FadeInProvider from '@/components/helper-components/FadeInProvider';

interface StudyPageProps {
  study: Study;
}

const StudyPage = ({ study }: StudyPageProps) => {
  return (
    <PageWrapper>
      <FadeInProvider>
        <HeadingParagraph>{study.title}</HeadingParagraph>

        <HighlightSentence
          className=" py-2 lg:py-4"
          highlightParagraph={study.highlightDescription}
        />

        <div className="">
          {study.itemList.map((studycard, idx) => (
            <a href={studycard.url} target="_blank" key={`study${idx}`}>
              <div className=" cursor-pointer border-2 p-5 my-6 border-dashed rounded-md shadow-inner duration-500 transition-all hover:scale-105">
                <HeadingParagraph size={'xs'}>
                  {studycard.subject}
                </HeadingParagraph>
                <HighlightSentence
                  highlightParagraph={studycard.highlightDescription}
                />
              </div>
            </a>
          ))}
        </div>
      </FadeInProvider>
    </PageWrapper>
  );
};

export default StudyPage;
