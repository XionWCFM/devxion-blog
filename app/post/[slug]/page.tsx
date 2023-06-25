import React from 'react';
import Mdx from '@/components/helper-components/Mdx';
import { allPosts } from '@/.contentlayer/generated';
import { notFound } from 'next/navigation';
import PostTitle from '@/components/ui-components/PostTitle';

interface pageProps {
  params: {
    slug: string;
  };
}

const getPostFromParams = (slug: string) => {
  const post = allPosts.find((post) => post.slugAsParams === slug);
  if (!post) notFound();
  return post;
};

const page = ({ params: { slug } }: pageProps) => {
  const post = getPostFromParams(slug);
  // @ts-ignore
  // const date = dateFormat(post.date);

  return (
    <div>
      <PostTitle
        title={post.title}
        description={post.description}
        tags={post.tags}
        date={'2023-06-23'}
      />
      <div>
        <Mdx code={post.body.code} />
      </div>
    </div>
  );
};

export default page;
