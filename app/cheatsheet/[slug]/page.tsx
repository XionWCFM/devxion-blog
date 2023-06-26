import React from 'react';

import { dateFormat } from '@/utils';
import { allCheatSheets } from '@/.contentlayer/generated';
import { notFound } from 'next/navigation';
import { Mdx, PostTitle } from '@/components';

interface pageProps {
  params: {
    slug: string;
  };
}

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
