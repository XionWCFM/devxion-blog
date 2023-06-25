import { getAllPost } from '@/utils';
import React from 'react';

interface pageProps {}

const page = ({}: pageProps) => {
  const posts = getAllPost();
  return (
    <div>
      {posts.map((post) => (
        <div key={post.title}>{post.title}</div>
      ))}
    </div>
  );
};

export default page;
