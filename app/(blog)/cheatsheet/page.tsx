import { CardList, HeadingParagraph, Paragraph } from '@/components';

import React from 'react';
import { allCheatSheets } from '@/.contentlayer/generated';

interface pageProps {}

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
