'use client';
import useTyping from '@/hooks/useTyping';
import React from 'react';
import PageWrapper from '../PageWrapper';
import { lineBreak } from '@/utils';

interface PortfolioMainProps {
  sentence: string;
}

const PortfolioMain = ({ sentence }: PortfolioMainProps) => {
  const portfolio = useTyping(sentence);
  return (
    <PageWrapper centering>
      <div
        ref={portfolio.targetRef}
        className=" font-extrabold text-xl mb-[10vh] text-zinc-600 dark:text-zinc-200 flex flex-col gap-y-5"
      >
        {lineBreak(portfolio.word).map((item, i) => (
          <p
            className=" text-xs md:text-3xl lg:text-4xl lg:tracking-wider lg:leading-10"
            key={`sentence${i}`}
          >
            {item}
          </p>
        ))}
      </div>
      <div className=" absolute bottom-10">
        <div className=" flex smooth animate-bounce justify-center items-center flex-col gap-y-4">
          <div className=" text-zinc-600 dark:text-zinc-400">
            <div className="">Learn more about what i do</div>
            <div className=" text-5xl text-center">▿</div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default PortfolioMain;
