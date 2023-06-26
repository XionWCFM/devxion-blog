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
      <Paragraph>각 태그별로 원하는 정보를 찾아볼 수 있습니다.</Paragraph>
      <Paragraph>부디 도움이 되었으면 좋겠습니다.😉</Paragraph>
      <CardList docArray={allCheatSheets} />
    </div>
  );
};

export default page;
