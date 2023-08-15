'use client';
import React from 'react';

const useTyping = (sentence: string, ms_delay = 100) => {
  const [word, setWord] = React.useState('');
  const targetRef = React.useRef<
    HTMLDivElement | HTMLParagraphElement | HTMLHeadingElement
  >(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const lastTimestamp = React.useRef<number | null>(null);
  React.useEffect(() => {
    let animationFrameId: number;
    const animateTyping = (timestamp: number) => {
      if (lastTimestamp.current === null) lastTimestamp.current = timestamp;
      const elapsed = timestamp - lastTimestamp.current;
      if (elapsed > ms_delay) {
        lastTimestamp.current = timestamp;
        if (sentence.length > currentIndex) {
          setWord((state) => {
            const newState = (state += sentence[currentIndex]);
            setCurrentIndex((prevIndex) => prevIndex + 1);
            return newState;
          });
        }
      }
      animationFrameId = requestAnimationFrame(animateTyping);
    };
    animationFrameId = requestAnimationFrame(animateTyping);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [currentIndex, ms_delay, sentence]);

  React.useEffect(() => {
    let observer: IntersectionObserver;
    const { current } = targetRef;

    if (current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setCurrentIndex(0);
            setWord('');
          }
        },
        { threshold: 0.5 },
      ); // threshold 값을 조정
      observer.observe(current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return { word, targetRef, setWord };
};

export default useTyping;
