import React from 'react';
import { FullPageReturnType } from '@/hooks/useFullPage';
import { cn } from '@/utils';

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
              pageRefList.current[idx + 1] = element!;
            }}
            className={cn(`w-screen h-screen max-h-screen`, item.background)}
          >
            <div className=" h-full w-full justify-center items-end flex">
              {item.component}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PageRenderer;
