'use client';
import useFullPage from '@/hooks/useFullPage';
import { PageList } from '@/types/fullpage';
import PageRenderer from './PageRenderer';
import { FullpageDTO } from '@/dto/FullpageDTO';
import ScrollRenderer from './ScrollRenderer';
import MyInfoPage from './pages/MyInfoPage';
import OtherExperiencePage from './pages/OtherExperiencePage';
import PeerFeedbackPage from './pages/PeerFeedbackPage';
import ProjectPage from './pages/ProjectPage';
import { aboutme, channel, contact } from '@/datas/resume';
import PortfolioMain from './pages/PortfolioMain';

const pageObjArray: PageList[] = [
  {
    component: <PortfolioMain />,
  },
  {
    component: (
      <MyInfoPage channel={channel} aboutme={aboutme} contact={contact} />
    ),
  },
  { component: <OtherExperiencePage /> },
  { component: <PeerFeedbackPage /> },
  { component: <ProjectPage /> },
];

const MainFullPageComponent = () => {
  const fullpageDTO = new FullpageDTO(pageObjArray);
  const fullpageResult = useFullPage(fullpageDTO);

  return (
    <>
      <PageRenderer fullpageResult={fullpageResult} />
      <ScrollRenderer fullpageResult={fullpageResult} />
    </>
  );
};

export default MainFullPageComponent;
