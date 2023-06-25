import { allPosts } from '@/.contentlayer/generated';
import { notFound } from 'next/navigation';

export const getPostFromParams = (slug: string) => {
  const post = allPosts.find((post) => post.slugAsParams === slug);
  if (!post) notFound();
  return post;
};

export const getAllPost = () => {
  return allPosts;
};
