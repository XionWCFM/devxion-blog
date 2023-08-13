import React, { MutableRefObject } from 'react';
import { PageList } from '@/types/fullpage';

interface PageRendererProps {
  pageList: PageList[];
  pageRefList: MutableRefObject<HTMLDivElement[]>;
}

const PageRenderer = ({ pageList, pageRefList }: PageRendererProps) => {
  return (
    <>
      {pageList.map((item, idx) => {
        return (
          <div
            key={idx}
            ref={(element) => {
              pageRefList.current[item.pageNum] = element!;
            }}
            className={`w-screen h-screen  ${item.background}`}
          >
            <div className=" h-full w-full justify-center items-center flex">
              <item.component />
              <span>{item.pageNum}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PageRenderer;
