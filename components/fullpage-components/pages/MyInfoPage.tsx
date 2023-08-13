import React from 'react';
import PageWrapper from '../PageWrapper';
import { Aboutme, Channel, Contact } from '@/types/resume';
import HeadingParagraph from '@/components/atom-components/HeadingParagraph';
import Centering from '@/components/atom-components/Centering';
interface MyInfoPageProps {
  aboutme: Aboutme;
  channel: Channel;
  contact: Contact;
}

const MyInfoPage = ({ aboutme, channel, contact }: MyInfoPageProps) => {
  return (
    <PageWrapper>
      <Centering>
        <HeadingParagraph className=" mt-6 smooth">
          {aboutme.title}
        </HeadingParagraph>
      </Centering>
    </PageWrapper>
  );
};

export default MyInfoPage;
