import { HeadingParagraph, Paragraph } from '@/components';
import React from 'react';

interface pageProps {}

const page = ({}: pageProps) => {
  return (
    <main>
      <HeadingParagraph>Contact</HeadingParagraph>
      <div className=" flex flex-col gap-2 mt-6">
        <Paragraph className=" dark:text-zinc-200">
          Email : giljongyudev@gmail.com
        </Paragraph>
        <Paragraph className=" dark:text-zinc-200">
          Blog :{' '}
          <a
            href="https://xionwcfm.tistory.com"
            target={'_blank'}
            className=" text-blue-400 dark:text-blue-400"
          >
            https://xionwcfm.tistory.com
          </a>
        </Paragraph>
        <Paragraph className=" dark:text-zinc-200">
          Github :{' '}
          <a
            href="https://github.com/XionWCFM"
            target={'_blank'}
            className=" text-blue-400 dark:text-blue-400"
          >
            https://github.com/XionWCFM
          </a>{' '}
        </Paragraph>
        <Paragraph className=" dark:text-zinc-200">
          Twitch :{' '}
          <a
            href="https://www.twitch.tv/calflove12"
            target={'_blank'}
            className=" text-blue-400 dark:text-blue-400"
          >
            https://www.twitch.tv/calflove12
          </a>{' '}
        </Paragraph>
      </div>
    </main>
  );
};

export default page;
