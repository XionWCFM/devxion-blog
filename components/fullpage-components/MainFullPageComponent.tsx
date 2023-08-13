'use client';
import useFullPage from '@/hooks/useFullPage';
import { PageList } from '@/types/fullpage';
import PageRenderer from './PageRenderer';
import { FullpageDTO } from '@/dto/FullpageDTO';
import ScrollRenderer from './ScrollRenderer';

const ComponentA = () => <div>안녕하세요</div>;

const pageObjArray: PageList[] = [
  { pageNum: 1, background: 'bg-[#fab1a0]', component: ComponentA },
  { pageNum: 2, background: 'bg-[#fab1a0]', component: ComponentA },
  { pageNum: 3, background: 'bg-[#fdcb6e]', component: ComponentA },
  { pageNum: 4, background: 'bg-[#e17055]', component: ComponentA },
];

const fullpageDTO = new FullpageDTO(pageObjArray);

const MainFullPageComponent = () => {
  const fullPageResult = useFullPage(pageObjArray);
  return (
    <>
      <PageRenderer fullpageDTO={fullpageDTO} fullPageResult={fullPageResult} />
      <ScrollRenderer
        fullpageDTO={fullpageDTO}
        fullPageResult={fullPageResult}
      />
    </>
  );
};

export default MainFullPageComponent;
