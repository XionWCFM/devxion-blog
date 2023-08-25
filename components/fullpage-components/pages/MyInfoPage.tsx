'use client';
import React from 'react';
import PageWrapper from '../PageWrapper';
import { Aboutme, Article, Channel, Contact } from '@/types/resume';
import HeadingParagraph from '@/components/atom-components/HeadingParagraph';
import Paragraph from '@/components/atom-components/Paragraph';
import { lineBreak } from '@/utils';
import FadeInProvider from '@/components/helper-components/FadeInProvider';
interface MyInfoPageProps {
  aboutme: Aboutme;
}

const MyInfoPage = ({ aboutme }: MyInfoPageProps) => {
  return (
    <PageWrapper>
      <FadeInProvider>
        <HeadingParagraph className=" mt-6 smooth">
          {aboutme.title}
        </HeadingParagraph>
        {aboutme.descriptionArray.map((paragraph, i) => (
          <Paragraph
            key={`aboutme${i}`}
            className=" my-1 text-zinc-700 dark:text-zinc-100 lg:text-xl"
          >
            {paragraph}
          </Paragraph>
        ))}

        <div className=" flex flex-col flex-wrap  gap-12 md:gap-8 mt-8">
          {aboutme.itemList.map((item, idx) => (
            <div key={`aboutme${idx}`} className=" flex flex-col">
              <HeadingParagraph size={'xs'}>{item.subject}</HeadingParagraph>
              <div className=" flex flex-col gap-2">
                {lineBreak(item.content).map((sentence, idx) => (
                  <Paragraph key={`line${idx}`}>{sentence}</Paragraph>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeInProvider>
    </PageWrapper>
  );
};

export default MyInfoPage;
