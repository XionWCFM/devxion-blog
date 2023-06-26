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
      <Paragraph>개발을 하면서 알게 된 것들을 정리했습니다.</Paragraph>
      <Paragraph>
        더욱 많은 포스트를 제
        <a
          className=" font-bold px-2 hover:text-yellow-500 transition-colors duration-300"
          href="https://xionwcfm.tistory.com/"
          target={'_blank'}
        >
          Tistory blog
        </a>
        에서 확인하세요!😉
      </Paragraph>
      <CardList docArray={allPosts} />
    </div>
  );
};

export default page;
