import { allCheatSheets } from '@/.contentlayer/generated';
import { dateFormat } from '@/utils';
import Link from 'next/link';
import React from 'react';

interface pageProps {}

export const generateStaticParams = () => {
  return allCheatSheets.map((cheatsheet) => ({
    slug: cheatsheet.slugAsParams,
  }));
};

const page = ({}: pageProps) => {
  return (
    <div className="">
      <div className=" grid grid-cols-1 lg:grid-cols-2">
        {allCheatSheets.map((cheatsheet) => (
          <Link
            key={cheatsheet.title}
            href={`cheatsheet/${cheatsheet.slugAsParams}`}
          >
            <figure className=" flex items-center justify-between rounded-lg px-4 py-2 cursor-pointer mr-4 mt-4 transition-all duration-300 border-2 border-transparent hover:border-yellow-500">
              <div className=" flex flex-col gap-2">
                <h2 className=" font-extrabold text-2xl text-ellipsis overflow-hidden whitespace-nowrap">
                  {cheatsheet.title}
                </h2>
                <p className=" text-xs">{cheatsheet.description}</p>
              </div>
              <div className=" text-xs flex flex-col gap-2 items-end">
                <div>{cheatsheet.tags}</div>
                <div className="overflow-hidden whitespace-nowrap">
                  {dateFormat(cheatsheet.date)}
                </div>
              </div>
            </figure>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
