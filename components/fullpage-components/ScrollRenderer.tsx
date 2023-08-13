import { PageList } from '@/types/fullpage';
import React from 'react';
import ScrollButton from './ScrollButton';
import { FullPageReturnType } from '@/hooks/useFullPage';
import { FullpageDTO } from '@/dto/FullpageDTO';

interface ScrollRendererProps {
  fullpageResult: FullPageReturnType;
}

const ScrollRenderer = ({ fullpageResult }: ScrollRendererProps) => {
  const { pageButtonHandler, currentPageNum } = fullpageResult;
  return (
    <div className=" fixed top-1/2 right-10 smooth">
      <div className=" flex flex-col gap-2">
        {fullpageResult.fullpageDTO.pageList.map((item, idx) => (
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
