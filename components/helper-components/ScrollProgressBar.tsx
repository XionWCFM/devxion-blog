'use client';
import useThrottle from '@/hooks/useThrottle';
import React from 'react';

interface ScrollProgressBarProps {}

const ScrollProgressBar = ({}: ScrollProgressBarProps) => {
  const [width, setWidth] = React.useState(0);
  const progressRef = React.useRef<HTMLDivElement>(null);
  const handleScroll = useThrottle(
    React.useCallback((): void => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      if (scrollTop === 0) {
        setWidth(0);
        return;
      }
      const windowHeight: number = scrollHeight - clientHeight;
      const currentPercent: number = scrollTop / windowHeight;
      setWidth(currentPercent * 100);
    }, []),
    100,
  );

  React.useEffect(() => {
    if (typeof window === undefined) return;

    window.addEventListener('scroll', handleScroll, true);
    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [handleScroll]);

  return (
    <div
      className=" fixed h-1 w-full bg-zinc-400 top-0 left-0 ring-0 z-10"
      ref={progressRef}
    >
      <div
        className=" h-full bg-orange-500"
        style={{ width: width + '%' }}
      ></div>
    </div>
  );
};

export default ScrollProgressBar;
