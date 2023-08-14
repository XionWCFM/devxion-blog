'use client';
import React from 'react';
import PageWrapper from '../PageWrapper';
import { Aboutme, Channel, Contact } from '@/types/resume';
import HeadingParagraph from '@/components/atom-components/HeadingParagraph';
import Centering from '@/components/atom-components/Centering';
import Paragraph from '@/components/atom-components/Paragraph';
import Between from '@/components/atom-components/Between';
import useTyping from '@/hooks/useTyping';
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
        <Centering col className=" my-6">
          {aboutme.descriptionArray.map((paragraph, i) => (
            <Paragraph
              key={`aboutme${i}`}
              className=" my-1 text-zinc-700 dark:text-zinc-100 lg:text-xl"
            >
              {paragraph}
            </Paragraph>
          ))}
        </Centering>
      </Centering>
      <Between>
        <Between.harfitem>{channel.title}</Between.harfitem>
        <Between.harfitem>{contact.title}</Between.harfitem>
      </Between>
    </PageWrapper>
  );
};

export default MyInfoPage;
