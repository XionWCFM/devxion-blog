import { allCheatSheets } from '@/.contentlayer/generated';
import { CardList, Tag } from '@/components';
import React from 'react';

interface pageProps {}

export const generateStaticParams = () => {
  return allCheatSheets.map((cheatsheet) => ({
    slug: cheatsheet.slugAsParams,
  }));
};

const page = ({}: pageProps) => {
  return <CardList docArray={allCheatSheets} />;
};

export default page;
