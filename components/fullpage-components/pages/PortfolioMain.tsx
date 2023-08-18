import useTyping from '@/hooks/useTyping';
import React from 'react';
import PageWrapper from '../PageWrapper';
import Centering from '@/components/atom-components/Centering';

interface PortfolioMainProps {}

const PortfolioMain = ({}: PortfolioMainProps) => {
  const sentence = '안녕하세요! 더 좋은 방향을 고민하는 개발자 유길종입니다.';

  const { word, targetRef } = useTyping(sentence);
  return (
    <PageWrapper>
      <Centering col className=" justify-center items-center">
        <p ref={targetRef}>{word}</p>
      </Centering>
    </PageWrapper>
  );
};

export default PortfolioMain;
