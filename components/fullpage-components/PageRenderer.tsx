import React from 'react';
import { FullPageReturnType } from '@/hooks/useFullPage';
import { cn, isZero } from '@/utils';

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
            className={cn(
              isZero(idx) ? 'w-screen h-screen' : '',
              item.background,
            )}
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
