import { OtherExperience } from '@/types/resume';
import React from 'react';
import PageWrapper from '../PageWrapper';
import FadeInProvider from '@/components/helper-components/FadeInProvider';
import HeadingParagraph from '@/components/atom-components/HeadingParagraph';
import { betweenTilde } from '@/utils/betweenTilde';
import LineBreakParagraph from '@/components/helper-components/LineBreakParagraph';

interface OtherExperiencePageProps {
  other: OtherExperience;
}

const OtherExperiencePage = ({ other }: OtherExperiencePageProps) => {
  return (
    <PageWrapper>
      <FadeInProvider>
        <HeadingParagraph>{other.title}</HeadingParagraph>
        <div className=" py-4"></div>
        <div className=" grid grid-cols-1 lg:grid-cols-2">
          {other.itemList.map((career, idx) => (
            <div
              key={`career${idx}`}
              className=" border-l-2 border-dotted pl-5"
            >
              <HeadingParagraph size={'xs'}>{career.subject}</HeadingParagraph>
              <p>{betweenTilde(career.startDate, career.endDate)}</p>
              <LineBreakParagraph str={career.content} />
            </div>
          ))}
        </div>
      </FadeInProvider>
    </PageWrapper>
  );
};

export default OtherExperiencePage;
