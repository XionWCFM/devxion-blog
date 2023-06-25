import React from 'react';
import Mdx from '@/components/helper-components/Mdx';
import PostTitle from '@/components/ui-components/PostTitle';

import { getPostFromParams } from '@/utils';
import { dateFormat } from '@/utils';

interface pageProps {
  params: {
    slug: string;
  };
}

const page = ({ params: { slug } }: pageProps) => {
  const post = getPostFromParams(slug);
  // @ts-ignore
  const date = dateFormat(post.date);

  return (
    <div>
      <PostTitle
        title={post.title}
        description={post.description}
        tags={post.tags}
        date={date}
      />
      <div>
        <Mdx code={post.body.code} />
      </div>
    </div>
  );
};

export default page;
