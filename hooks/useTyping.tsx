'use client';
import React from 'react';

const useTyping = (sentence: string, ms_delay = 200) => {
  const [word, setWord] = React.useState('');
  const targetRef = React.useRef<
    HTMLDivElement | HTMLParagraphElement | HTMLHeadingElement
  >(null);
  const currentIndex = React.useRef(0);

  const handleScroll: IntersectionObserverCallback = React.useCallback(
    ([entry]) => {
      if (entry.isIntersecting) {
        currentIndex.current = 0;
        setWord('');
      }
    },
    [],
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (sentence.length > currentIndex.current) {
        setWord((state) => {
          const newState = (state += sentence[currentIndex.current]);
          currentIndex.current += 1;
          return newState;
        });
      }
    }, ms_delay);

    return () => {
      clearTimeout(interval);
    };
  }, [ms_delay, sentence]);

  React.useEffect(() => {
    let observer: IntersectionObserver;
    const { current } = targetRef;
    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
      observer.observe(current);
    }

    return () => observer && observer.disconnect();
  }, [handleScroll]);
  return { word, targetRef, setWord };
};

export default useTyping;
