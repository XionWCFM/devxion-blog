import { allPosts } from '@/.contentlayer/generated';
import { CardList } from '@/components';
import React from 'react';

interface pageProps {}

export const generateStaticParams = () => {
  return allPosts.map((post) => ({
    slug: post.slugAsParams,
  }));
};

const page = ({}: pageProps) => {
  return <CardList docArray={allPosts} />;
};

export default page;
