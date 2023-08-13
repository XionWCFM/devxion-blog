'use client';
import useFullPage from '@/hooks/useFullPage';
import { PageList } from '@/types/fullpage';
import ScrollButton from './ScrollButton';
import PageRenderer from './PageRenderer';

const ComponentA = () => <div>안녕하세요</div>;

const pageObjArray: PageList[] = [
  { pageNum: 1, background: 'bg-[#ffeaa7]', component: ComponentA },
  { pageNum: 2, background: 'bg-[#fab1a0]', component: ComponentA },
  { pageNum: 3, background: 'bg-[#fdcb6e]', component: ComponentA },
  { pageNum: 4, background: 'bg-[#e17055]', component: ComponentA },
];

const MainFullPageComponent = () => {
  const { pageRefList, pageButtonHandler, currentPageNum } =
    useFullPage(pageObjArray);

  return (
    <div>
      <PageRenderer pageList={pageObjArray} pageRefList={pageRefList} />
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
