import { allCheatSheets } from '@/.contentlayer/generated';
import { Mdx, PostTitle } from '@/components';
import { dateFormat } from '@/utils';
import { notFound } from 'next/navigation';

interface pageProps {
  params: {
    slug: string;
  };
}
export const generateStaticParams = () => {
  return allCheatSheets.map((cheatsheet) => ({
    slug: cheatsheet.slugAsParams,
  }));
};

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const cheatsheet = allCheatSheets.find(
    (cheatsheet) => cheatsheet.slugAsParams === params.slug,
  );
  if (!cheatsheet) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: cheatsheet.title };
};

const getCheatSheetFromParams = (slug: string) => {
  const cheatsheet = allCheatSheets.find((post) => post.slugAsParams === slug);
  if (!cheatsheet) notFound();
  return cheatsheet;
};

const page = ({ params: { slug } }: pageProps) => {
  const cheatsheet = getCheatSheetFromParams(slug);

  const date = dateFormat(cheatsheet.date);
  return (
    <div>
      <PostTitle
        title={cheatsheet.title}
        description={cheatsheet.description}
        tags={cheatsheet.tags}
        date={date}
      />
      <div>
        <Mdx code={cheatsheet.body.code} />
      </div>
    </div>
  );
};

export default page;
