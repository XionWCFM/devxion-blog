import React from 'react';
import { FullPageReturnType } from '@/hooks/useFullPage';

interface PageRendererProps {
  fullpageResult: FullPageReturnType;
}

const PageRenderer = ({ fullpageResult }: PageRendererProps) => {
  const { pageRefList } = fullpageResult;
  return (
    <>
      {fullpageResult.fullpageDTO.pageList.map((item, idx) => {
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
