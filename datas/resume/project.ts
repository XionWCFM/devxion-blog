import { Project } from '@/types/resume';

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
    'Atomic Design System 적용',
    'tailwind-css 클래스 우선순위 문제 해결',
    '로그인 회원가입 구현 및 토큰 관리',
    'fetch로 작성된 코드 axios로 리팩토링',
    '랜딩 페이지 초기 로딩 개선 (4s -> 2s)',
    '불필요한 API 호출 최소화(기존 대비 60% 감소)',
  ],
  asset: ['../asset/plip/plip1.webp', '../asset/plip/plip2.webp'],
};

const devxionBlog = {
  subject: 'devxion blog',
  startDate: '2023-06-25',
  endDate: '진행중',
  team: {
    isTeam: false,
    significant: '개인 프로젝트',
  },
  description: 'next.js의 app router를 이용한 블로그입니다.',
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
    'WheelEvent 와 TimeStamp를 활용하여 FullPage 기능 구현',
    'font layoutshift 최적화',
    'scroll event Throttling 적용',
    'Barrel Export 패턴 적용',
  ],
  asset: ['../asset/retrospect/retrospect.webp'],
};

export const project: Project = {
  type: 'project',
  title: 'Project',
  itemList: [plip, devxionBlog],
};
