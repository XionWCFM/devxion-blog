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
import {
  aboutme,
  channel,
  contact,
  peerFeedback,
  project,
} from '@/datas/resume';
import PortfolioMain from './pages/PortfolioMain';
import { article } from '@/datas/resume';
import ArticlePage from './pages/ArticlePage';
import React from 'react';
import useScrollToTop from '@/hooks/useScrollToTop';
const pageObjArray: PageList[] = [
  {
    component: <PortfolioMain />,
  },
  {
    component: <MyInfoPage aboutme={aboutme} />,
  },
  { component: <ArticlePage article={article} /> },
  { component: <ProjectPage project={project} /> },
  { component: <PeerFeedbackPage peer={peerFeedback} /> },
  { component: <OtherExperiencePage /> },
];

const MainFullPageComponent = () => {
  const fullpageDTO = new FullpageDTO(pageObjArray);
  const fullpageResult = useFullPage(fullpageDTO);
  useScrollToTop();
  return (
    <>
      <PageRenderer fullpageResult={fullpageResult} />
      <ScrollRenderer fullpageResult={fullpageResult} />
    </>
  );
};

export default MainFullPageComponent;
