'use client';

import { cn } from '@/utils';
import React from 'react';

interface MainFullPageComponentProps {}

export interface IPageObj {
  pageNum: number;
  bgColor: string;
}

const ComponentA = () => <div>엄준식</div>;

const pageObjArray = [
  { pageNum: 1, bgColor: 'bg-[#ffeaa7]', component: ComponentA },
  { pageNum: 2, bgColor: 'bg-[#fab1a0]', component: ComponentA },
  { pageNum: 3, bgColor: 'bg-[#fdcb6e]', component: ComponentA },
  { pageNum: 4, bgColor: 'bg-[#e17055]', component: ComponentA },
];

const MainFullPageComponent = ({}: MainFullPageComponentProps) => {
  const [windowObj, setWindowObj] = React.useState<Window>();
  const [currentPageNum, setCurrentPageNum] = React.useState(1);
  const totalNum = pageObjArray.length;
  const pageRefs = React.useRef<HTMLDivElement[]>([]);
  const [isExecuting, setIsExecuting] = React.useState(false);
  React.useEffect(() => {
    if (window !== undefined) {
      setWindowObj(window);
    }
  }, []);

  const handlePageChange = React.useCallback(
    (event: Event) => {
      let scroll = windowObj?.scrollY!;
      for (let i = 1; i <= totalNum; i++) {
        if (
          scroll > pageRefs.current[i].offsetTop - windowObj!.outerHeight / 3 &&
          scroll <
            pageRefs.current[i].offsetTop -
              windowObj!.outerHeight / 3 +
              pageRefs.current[i].offsetHeight
        ) {
          setCurrentPageNum(i);
          break;
        }
      }
    },
    [totalNum, windowObj],
  );

  const handlePointClick = (pageNum: number) => {
    windowObj?.scrollTo({
      top: pageRefs.current[pageNum].offsetTop,
      behavior: 'smooth',
    });
  };
  const wheelHandler = React.useCallback(
    (e: WheelEvent) => {
      e.preventDefault();
      if (!isExecuting) {
        setIsExecuting(true);

        if (e.deltaY < 0 && currentPageNum > 1) {
          windowObj?.scrollTo({
            top: pageRefs.current[currentPageNum - 1].offsetTop,
            behavior: 'smooth',
          });
          setCurrentPageNum((state) => state - 1);
        }

        if (e.deltaY > 0 && currentPageNum < totalNum) {
          windowObj?.scrollTo({
            top: pageRefs.current[currentPageNum + 1].offsetTop,
            behavior: 'smooth',
          });
          setCurrentPageNum((state) => state + 1);
        }

        setTimeout(() => {
          setIsExecuting(false);
        }, 600);
      }
    },
    [currentPageNum, totalNum, windowObj, isExecuting, setIsExecuting],
  );

  React.useEffect(() => {
    windowObj?.addEventListener('scroll', handlePageChange);
    return () => {
      windowObj?.removeEventListener('scroll', handlePageChange);
    };
  }, [windowObj, handlePageChange]);

  React.useEffect(() => {
    windowObj?.addEventListener('wheel', wheelHandler, { passive: false });
    return () => {
      windowObj?.removeEventListener('wheel', wheelHandler);
    };
  }, [wheelHandler, windowObj]);

  return (
    <div>
      {pageObjArray.map((item, idx) => {
        return (
          <div
            key={idx}
            ref={(element) => {
              pageRefs.current[item.pageNum] = element!;
            }}
            className={`w-screen h-screen  ${item.bgColor}`}
          >
            <item.component />
            <span>{item.pageNum}</span>
            {pageObjArray.map((item, idx) => {
              return (
                <div
                  key={item.pageNum}
                  className={cn(
                    'rounded-full transition-all w-4 h-4',
                    currentPageNum === item.pageNum
                      ? 'bg-black'
                      : 'bg-gray-400',
                  )}
                  onClick={() => {
                    handlePointClick(item.pageNum);
                  }}
                ></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default MainFullPageComponent;
