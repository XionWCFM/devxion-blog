import React from 'react';

interface CenteringProps {
  children: React.ReactNode;
}

const Centering = ({ children }: CenteringProps) => {
  return <div className=" flex justify-center items-center">{children}</div>;
};

export default Centering;
