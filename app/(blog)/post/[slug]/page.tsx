import { allPosts } from '@/.contentlayer/generated';
import Mdx from '@/components/helper-components/Mdx';
import PostTitle from '@/components/ui-components/PostTitle';
import { dateFormat } from '@/utils';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface pageProps {
  params: {
    slug: string;
  };
}

export const generateStaticParams = () => {
  return allPosts.map((post) => ({
    slug: post.slugAsParams,
  }));
};

export const generateMetadata = ({
  params,
}: {
  params: { slug: string };
}): Metadata => {
  const post = allPosts.find((post) => post.slugAsParams === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return {
    title: post.title,
    description: post.description,
    robots: {
      index: true,
      follow: true,
    },
    authors: [{ name: 'giljong yu', url: 'https://devxion-blog.vercel.app' }],
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      locale: 'ko-KR',
      siteName: 'https://devxion-blog.vercel.app',
    },
    twitter: {
      title: post.title,
      description: post.description,
    },
  };
};

const getPostFromParams = (slug: string) => {
  const post = allPosts.find((post) => post.slugAsParams === slug);
  if (!post) notFound();
  return post;
};

const page = ({ params: { slug } }: pageProps) => {
  const post = getPostFromParams(slug);
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
