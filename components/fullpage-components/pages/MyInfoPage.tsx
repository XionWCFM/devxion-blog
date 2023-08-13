'use client';
import React from 'react';
import PageWrapper from '../PageWrapper';
import { Aboutme, Channel, Contact } from '@/types/resume';
import HeadingParagraph from '@/components/atom-components/HeadingParagraph';
import Centering from '@/components/atom-components/Centering';
import Paragraph from '@/components/atom-components/Paragraph';
import Between from '@/components/atom-components/Between';
interface MyInfoPageProps {
  aboutme: Aboutme;
  channel: Channel;
  contact: Contact;
}

const MyInfoPage = ({ aboutme, channel, contact }: MyInfoPageProps) => {
  return (
    <PageWrapper>
      <Centering col>
        <HeadingParagraph className=" mt-6 smooth">
          {aboutme.title}
        </HeadingParagraph>
        {aboutme.descriptionArray.map((paragraph, i) => (
          <Paragraph key={`aboutme${i}`}>{paragraph}</Paragraph>
        ))}
      </Centering>
      <Between>
        <Between.harfitem>안녕</Between.harfitem>
        <Between.harfitem>안녕</Between.harfitem>
      </Between>
    </PageWrapper>
  );
};

export default MyInfoPage;

const sentenceMaker = (word: string, ms_delay: number) => {};
