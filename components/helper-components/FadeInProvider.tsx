import useAnimation from '@/hooks/useAnimation';
import React from 'react';

interface FadeInProviderProps {
  children: React.ReactNode;
}

const FadeInProvider = ({ children }: FadeInProviderProps) => {
  const [targetRef] = useAnimation(['smooth']);

  return <div ref={targetRef}>{children}</div>;
};

export default FadeInProvider;
