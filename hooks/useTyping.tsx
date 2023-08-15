'use client';
import React from 'react';
import useRequestAnimationFrame from './useRequestAnimationFrame';
import useIntersectionObserver from './useIntersectionObserver';

const useTyping = (sentence: string, ms_delay = 100) => {
  const [word, setWord] = React.useState('');
  const targetRef = React.useRef<
    HTMLDivElement | HTMLParagraphElement | HTMLHeadingElement
  >(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const animateTyping = () => {
    if (sentence.length > currentIndex) {
      setWord((state) => {
        const newState = (state += sentence[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
        return newState;
      });
    }
  };
  
  const intersectHandler = () => {
    setCurrentIndex(0);
    setWord('');
  };

  useRequestAnimationFrame(animateTyping, ms_delay);

  useIntersectionObserver({
    onIntersect: intersectHandler,
    target: targetRef,
  });

  return { word, targetRef, setWord };
};

export default useTyping;
