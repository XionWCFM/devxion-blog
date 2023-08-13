import React from 'react';

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <section className="  w-[75vw] h-[80vh] border border-red-400">
      {children}
    </section>
  );
};

export default PageWrapper;
