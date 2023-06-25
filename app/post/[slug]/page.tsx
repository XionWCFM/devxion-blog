import React from 'react';
import { notFound } from 'next/navigation';
import { allPosts } from 'contentlayer/generated';
import Mdx from '@/components/helper-components/Mdx';
import { GetStaticPaths } from 'next';

interface pageProps {
  params: {
    slug: string;
  };
}

const getDocFromparams = (slug: string) => {
  const post = allPosts.find((doc) => doc.slugAsParams === slug);
  if (!post) notFound();
  return post;
};

const page = ({ params: { slug } }: pageProps) => {
  const post = getDocFromparams(slug);

  return (
    <div>
      <Mdx code={post.body.code} />
    </div>
  );
};

export default page;
