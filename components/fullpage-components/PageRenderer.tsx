import React, { MutableRefObject } from 'react';
import { FullPageReturnType } from '@/hooks/useFullPage';
import { PageList } from '@/types/fullpage';
import { FullpageDTO } from '@/dto/FullpageDTO';

interface PageRendererProps {
  fullpageDTO: FullpageDTO;
  fullPageResult: FullPageReturnType;
}

const PageRenderer = ({ fullpageDTO, fullPageResult }: PageRendererProps) => {
  const { pageRefList } = fullPageResult;
  return (
    <>
      {fullpageDTO.pageList.map((item, idx) => {
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
