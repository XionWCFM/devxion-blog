import { Project } from '@/types/resume';
import PlipImage1 from '../asset/plip/plip1.webp';
import PlipImage2 from '../asset/plip/plip2.webp';
import Devxion1 from '../asset/devxion/devxion1.png';
import Yeonpick1 from '../asset/yeonpick/yeonpick1.png';
const yeonpick = {
  subject: 'Yeonpick',
  startDate: '2023-09-16',
  endDate: '-ing',
  team: {
    isTeam: false,
    significant: '쿼카크루',
  },
  description:
    '쿼카크루라는 회사에서 연픽이라는 앱을 개발하고 있습니다. \n 주로 기존 코드베이스에 쌓여있던 기술 부채를 해소하며 더 좋은 구조로 리팩토링하는 작업을 수행하고 있습니다. \n 또한 페어 프로그래밍을 적극적으로 도입하며 좋은 개발 문화를 위해 노력하고 있습니다. ',
  urlList: [
    {
      type: '배포 페이지 보러가기',
      url: 'https://yeonpick.kr',
    },
    {
      type: '앱스토어 다운로드 받기',
      url: 'https://apps.apple.com/kr/app/%EC%97%B0%ED%94%BD-%EC%9A%94%EC%A6%98-%EB%8C%80%ED%95%99%EC%83%9D%EB%93%A4%EC%9D%98-%EC%97%B0%EC%95%A0/id1661759931',
    },
    {
      type: '플레이스토어 다운로드 받기',
      url: 'https://play.google.com/store/apps/details?id=com.yeonpick.app&hl=en_US',
    },
  ],
  techStack: [
    'typescript',
    'react-query',
    'next.js',
    'react-hook-form',
    'zod',
    'zustand',
    'tailwind-css',
  ],
  role: [
    'any로 작성된 기존 코드 베이스를 명확한 타입으로 대체',
    'useEffect로 작성된 data fetching 코드 react-query로 마이그레이션',
    'redux -> zustand 마이그레이션',
    '그리드 시스템, 아토믹 디자인 시스템 도입',
  ],
  asset: [Yeonpick1],
};

const plip = {
  subject: 'PliP',
  startDate: '2023-06-29',
  endDate: '2023-07.28',
  team: {
    isTeam: true,
    significant: '프론트엔드 3명 백엔드 3명',
  },
  description:
    '지도를 기반으로 여행 일정을 편리하게 관리할 수 있는 서비스입니다. \n 회원 기능을 맡아 개발을 하며 토큰 관리 전략에 대해 깊이 고민하는 경험을 얻었습니다. \n SRP 원칙을 유의하며 개발하고자 노력한 프로젝트입니다. ',
  urlList: [
    {
      type: '배포 페이지 보러가기',
      url: 'https://plip.netlify.app',
    },
    {
      type: '소스코드 보러가기',
      url: 'https://github.com/codestates-seb/seb44_main_012',
    },
    {
      type: '프로젝트 회고 보러가기',
      url: 'https://xionwcfm.tistory.com/382',
    },
    {
      type: '기술 발표 구경하기(04:35 ~ 06:18)',
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
    'cva, tailwind-merge를 통한 Atomic Design System 적용',
    'Suspense , Error Boundary 도입을 통한 관심사 분리 수행',
    'Provider 패턴을 통한 토큰 핸들링 구현',
    'lazy loading을 통한 code spliting 수행',
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
  description:
    'next.js의 app router를 이용해 구축한 포트폴리오 사이트 겸 블로그입니다. \n 콘텐츠와 컴포넌트를 분리하는 것에 신경을 많이 쓴 프로젝트입니다. \n 많은 기능들을 라이브러리 대신 web api를 활용하여 만들었습니다. ',
  urlList: [
    {
      type: '배포 페이지 보러가기',
      url: 'https://devxion-blog.vercel.app/',
    },
    {
      type: '소스코드 보러가기',
      url: 'https://github.com/XionWCFM/devxion-blog',
    },
  ],
  techStack: ['typescript', 'nextjs', 'tailwind-css'],
  role: [
    'requestAnimationFrame과 TimeStamp를 활용하여 typing 애니메이션 구현',
    'intersectionObserver와 Provider 패턴을 통해 fadein 애니메이션 구현',
    'utility type "Pick"을 이용하여 중복 타이핑 최소화',
    'throttling 구현을 통한 잦은 event 최적화',
    'Barrel Export 패턴 적용',
    'next/font를 통해 font layoutshift 최적화',
  ],
  asset: [Devxion1],
};

export const project: Project = {
  type: 'project',
  title: 'Project',
  itemList: [yeonpick, plip, devxionBlog],
};
