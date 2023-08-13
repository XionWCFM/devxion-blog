import { PageList } from '@/types/fullpage';
import React from 'react';
import ScrollButton from './ScrollButton';
import { FullPageReturnType } from '@/hooks/useFullPage';
import { FullpageDTO } from '@/dto/FullpageDTO';

interface ScrollRendererProps {
    fullpageDTO:FullpageDTO
  fullPageResult: FullPageReturnType;
}

const ScrollRenderer = ({ fullpageDTO, fullPageResult }: ScrollRendererProps) => {
  const { pageButtonHandler, currentPageNum } = fullPageResult;
  return (
    <div className=" fixed top-1/2 right-10 smooth">
      <div className=" flex flex-col gap-2">
        {fullpageDTO.pageList.map((item, idx) => (
          <ScrollButton
            key={`btn${idx}`}
            pageButtonHandler={pageButtonHandler}
            item={item}
            currentPageNum={currentPageNum}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollRenderer;
