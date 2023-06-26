import { allPosts } from '@/.contentlayer/generated';
import { CardList, HeadingParagraph, Paragraph } from '@/components';
import React from 'react';

interface pageProps {}

export const generateStaticParams = () => {
  return allPosts.map((post) => ({
    slug: post.slugAsParams,
  }));
};

const page = ({}: pageProps) => {
  return (
    <div>
      <HeadingParagraph>POST</HeadingParagraph>
      <Paragraph>각 태그별로 원하는 정보를 찾아볼 수 있습니다.</Paragraph>
      <Paragraph>부디 도움이 되었으면 좋겠습니다.😉</Paragraph>
      <CardList docArray={allPosts} />;
    </div>
  );
};

export default page;
