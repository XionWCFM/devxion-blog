import { dateFormat, getAllPost } from '@/utils';
import Link from 'next/link';
import React from 'react';

interface pageProps {}

const page = ({}: pageProps) => {
  const posts = getAllPost();
  return (
    <div className="">
      <div className=" grid grid-cols-1 lg:grid-cols-2">
        {posts.map((post) => (
          <Link key={post.title} href={`post/${post.slugAsParams}`}>
            <figure className=" flex items-center justify-between rounded-lg px-4 py-2 cursor-pointer mr-4 mt-4 transition-all duration-300 border-2 border-transparent hover:border-yellow-500">
              <div className=" flex flex-col gap-2">
                <h2 className=" font-extrabold text-2xl">{post.title}</h2>
                <p className=" text-xs">{post.description}</p>
              </div>
              <div className=" text-xs flex flex-col gap-2 items-end">
                <div>{post.tags}</div>
                <div>{dateFormat(post.date)}</div>
              </div>
            </figure>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
