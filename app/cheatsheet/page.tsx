import { allCheatSheets } from '@/.contentlayer/generated';
import { CardList, HeadingParagraph, Paragraph } from '@/components';
import React from 'react';

interface pageProps {}

export const generateStaticParams = () => {
  return allCheatSheets.map((cheatsheet) => ({
    slug: cheatsheet.slugAsParams,
  }));
};

const page = ({}: pageProps) => {
  return (
    <div>
      <HeadingParagraph>CHEATSHEET</HeadingParagraph>
      <Paragraph>
        잊어버리기 쉽지만 자주 쓰는 코드들을 모아봤습니다 🤭
      </Paragraph>
      <CardList docArray={allCheatSheets} />
    </div>
  );
};

export default page;
