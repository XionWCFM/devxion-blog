'use client';

import useFullPage, { PageList } from '@/hooks/useFullPage';
import ScrollButton from './ScrollButton';

interface MainFullPageComponentProps {}

const ComponentA = () => <div>안녕하세요</div>;

const pageObjArray: PageList[] = [
  { pageNum: 1, background: 'bg-[#ffeaa7]', component: ComponentA },
  { pageNum: 2, background: 'bg-[#fab1a0]', component: ComponentA },
  { pageNum: 3, background: 'bg-[#fdcb6e]', component: ComponentA },
  { pageNum: 4, background: 'bg-[#e17055]', component: ComponentA },
];

const MainFullPageComponent = ({}: MainFullPageComponentProps) => {
  const { pageRefList, pageButtonHandler, currentPageNum } =
    useFullPage(pageObjArray);

  return (
    <div>
      {pageObjArray.map((item, idx) => {
        return (
          <div
            key={idx}
            ref={(element) => {
              pageRefList.current[item.pageNum] = element!;
            }}
            className={`w-screen h-screen  ${item.background}`}
          >
            <div className=" h-full w-full justify-center items-center flex">
              <item.component />
              <span>{item.pageNum}</span>
            </div>
          </div>
        );
      })}
      <div className=" fixed top-1/2 right-10 smooth">
        <div className=" flex flex-col gap-2">
          {pageObjArray.map((item, idx) => (
            <ScrollButton
              key={`btn${idx}`}
              pageButtonHandler={pageButtonHandler}
              item={item}
              currentPageNum={currentPageNum}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainFullPageComponent;
