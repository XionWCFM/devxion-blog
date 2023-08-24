import React from 'react';
import useThrottle from './useThrottle';
import { FullpageDTO } from '@/dto/FullpageDTO';
import { isNegative, isPositive, scrollTo } from '@/utils';

const useFullPage = (fullpageDTO: FullpageDTO) => {
  const [windowObj, setWindowObj] = React.useState<Window>();
  const [currentPageNum, setCurrentPageNum] = React.useState(1);
  const totalPageLen = fullpageDTO.pageList.length;
  const pageRefList = React.useRef<HTMLDivElement[]>([]);
  const [timestamp, setTimestamp] = React.useState(0);

  const currentPageChange = useThrottle(
    React.useCallback(() => {
      let scroll = windowObj?.scrollY!;
      for (let i = 1; i <= totalPageLen; i++) {
        const isScrollPositive =
          scroll >
          pageRefList.current[i].offsetTop - windowObj!.outerHeight / 3;
        const isScrollNegative =
          scroll <
          pageRefList.current[i].offsetTop -
            windowObj!.outerHeight / 3 +
            pageRefList.current[i].offsetHeight;

        if (isScrollPositive && isScrollNegative) {
          setCurrentPageNum(i);
          break;
        }
      }
    }, [totalPageLen, windowObj]),
    500,
  );

  const pageButtonHandler = (pageNum: number) => {
    const offsetTop = pageRefList.current[pageNum].offsetTop;
    scrollTo(windowObj,offsetTop)
  };

  const wheelHandler = React.useCallback(
    (event: WheelEvent) => {
      event.preventDefault();

      const should_return = 1500 > event.timeStamp - timestamp;
      const isDeltaYNegative = isNegative(event.deltaY);
      const isValidPageNum = isPositive(currentPageNum);
      const downScrolling = pageRefList.current[currentPageNum - 1]?.offsetTop;
      const upScrolling = pageRefList.current[currentPageNum + 1]?.offsetTop;
      const isNotLastPage = currentPageNum < totalPageLen;
      const isDeltaYPositive = isPositive(event.deltaY);

      if (should_return) return;

      if (isDeltaYNegative && isValidPageNum) {
        scrollTo(windowObj, downScrolling);
        setTimestamp(event.timeStamp);
      }

      if (isDeltaYPositive && isNotLastPage) {
        scrollTo(windowObj, upScrolling);
        setTimestamp(event.timeStamp);
      }
    },
    [currentPageNum, timestamp, totalPageLen, windowObj],
  );

  React.useEffect(() => {
    if (window !== undefined) setWindowObj(window);
  }, []);

  React.useEffect(() => {
    windowObj?.addEventListener('scroll', currentPageChange, { passive: true });
    return () => {
      windowObj?.removeEventListener('scroll', currentPageChange);
    };
  }, [currentPageChange, windowObj]);

  React.useEffect(() => {
    windowObj?.addEventListener('wheel', wheelHandler, { passive: false });
    return () => {
      windowObj?.removeEventListener('wheel', wheelHandler);
    };
  }, [wheelHandler, windowObj]);

  return {
    pageButtonHandler,
    currentPageNum,
    pageRefList,
    fullpageDTO,
  };
};

export type FullPageReturnType = ReturnType<typeof useFullPage>;
export default useFullPage;
