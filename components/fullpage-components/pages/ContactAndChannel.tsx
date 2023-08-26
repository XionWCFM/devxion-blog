import { Channel, Contact } from '@/types/resume';
import React from 'react';
import PageWrapper from '../PageWrapper';
import FadeInProvider from '@/components/helper-components/FadeInProvider';
import HeadingParagraph from '@/components/atom-components/HeadingParagraph';
import Paragraph from '@/components/atom-components/Paragraph';

interface ContactPageProps {
  contact: Contact;
  channel: Channel;
}

const ContactAndChannelPage = ({ contact, channel }: ContactPageProps) => {
  return (
    <PageWrapper>
      <FadeInProvider>
        <HeadingParagraph>
          {contact.title} & {channel.title}
        </HeadingParagraph>
        <Paragraph className=" py-4">
          github, tistory는 클릭하면 해당 링크로 이동해요!
        </Paragraph>

        <div className=" grid grid-cols-1 lg:grid-cols-2 py-4">
          {channel.itemList.map((item, idx) => (
            <div
              key={`channel${idx}`}
              className=" transition-all duration-500 hover:scale-105  hover:-skew-x-2 border-l-2 px-3"
            >
              <HeadingParagraph size={'xs'}>
                <a href={item.url} className=" mt-4" target="_blank">
                  {item.subject}
                </a>
              </HeadingParagraph>
            </div>
          ))}
        </div>

        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-y-4">
          {contact.itemList.map((item, idx) => (
            <div className="" key={`contact${idx}`}>
              <HeadingParagraph size={'xs'}>{item.subject}</HeadingParagraph>
              <Paragraph>{item.content}</Paragraph>
            </div>
          ))}
        </div>
      </FadeInProvider>
    </PageWrapper>
  );
};

export default ContactAndChannelPage;
