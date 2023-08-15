import useTyping from '@/hooks/useTyping';
import React from 'react';
import PageWrapper from '../PageWrapper';
import Centering from '@/components/atom-components/Centering';

interface PortfolioMainProps {}

const PortfolioMain = ({}: PortfolioMainProps) => {
  const { word, targetRef } = useTyping('fdsfdsfdsads');
  return (
    <PageWrapper>
      <Centering col className=" justify-center items-center">
        <p ref={targetRef}>{word}</p>
      </Centering>
    </PageWrapper>
  );
};

export default PortfolioMain;
