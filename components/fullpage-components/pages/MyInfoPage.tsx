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
        <HeadingParagraph className="">{aboutme.title}</HeadingParagraph>
        <div className=" my-10 mb-2 lg:mb-6 border-l-2 border-yellow-500 pl-3">
          {aboutme.descriptionArray.map((paragraph, i) => (
            <Paragraph
              key={`aboutme${i}`}
              className=" my-1 text-zinc-700 dark:text-zinc-100 lg:text-xl"
            >
              {paragraph}
            </Paragraph>
          ))}
        </div>

        <div className=" grid grid-cols-1 xl:grid-cols-2 mt-2 lg:mt-4  lg:gap-12 gap-4">
          {aboutme.itemList.map((item, idx) => (
            <div key={`aboutme${idx}`} className=" flex flex-col my-2 lg:my-4">
              <HeadingParagraph size={'xs'}>{item.subject}</HeadingParagraph>
              <div className=" flex flex-col gap-2 mt-1 lg:mt-3">
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
