import { Project } from '@/types/resume';
import PlipImage1 from '../asset/plip/plip1.webp';
import PlipImage2 from '../asset/plip/plip2.webp';
import Devxion1 from '../asset/devxion/devxion1.png';
const plip = {
  subject: 'PliP',
  startDate: '2023-06-29',
  endDate: '2023-07.28',
  team: {
    isTeam: true,
    significant: '프론트엔드 3명 백엔드 3명',
  },
  description:
    '지도를 기반으로 여행 일정을 편리하게 관리할 수 있는 서비스입니다.',
  urlList: [
    {
      type: 'deploy',
      url: 'https://plip.netlify.app',
    },
    {
      type: 'github',
      url: 'https://github.com/codestates-seb/seb44_main_012',
    },
    {
      type: 'post',
      url: 'https://xionwcfm.tistory.com/382',
    },
    {
      type: 'youtube',
      url: 'https://www.youtube.com/watch?v=6rWULPkc6fM',
    },
  ],
  techStack: [
    'typescript',
    'react-query',
    'react',
    'react-hook-form',
    'zod',
    'redux-toolkit',
    'axios',
    'tailwind-css',
  ],
  role: [
    'Provider 패턴 도입을 통한 토큰 핸들링 구현',
    'fetch로 작성된 코드 axios로 리팩토링',
    'Atomic Design System 적용',
    'Suspense , Error Boundary 도입을 통한 로직 분리',
    'code spliting 및 lazy loading 적용',
  ],
  asset: [PlipImage1, PlipImage2],
};

const devxionBlog = {
  subject: 'devxion blog',
  startDate: '2023-06-25',
  endDate: '진행중',
  team: {
    isTeam: false,
    significant: '개인 프로젝트',
  },
  description: 'next.js의 app router를 이용해 구축한 블로그입니다.',
  urlList: [
    {
      type: 'deploy',
      url: 'https://devxion-blog.vercel.app/',
    },
    {
      type: 'github',
      url: 'https://github.com/XionWCFM/devxion-blog',
    },
  ],
  techStack: ['typescript', 'nextjs', 'tailwind-css'],
  role: [
    'requestAnimationFrame과 TimeStamp를 활용한 typing 애니메이션 구현',
    'intersectionObserver를 이용하여 typing reset 기능 구현',
    'font layoutshift 최적화',
    'throttling을 통한 event 최적화',
    'Barrel Export 패턴 적용',
  ],
  asset: [Devxion1],
};

export const project: Project = {
  type: 'project',
  title: 'Project',
  itemList: [plip, devxionBlog],
};
