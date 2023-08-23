import { Study } from '@/types/resume';
const nextjsdocs = {
  subject: 'Nextjs-docs-Korean-translation',
  url: 'https://github.com/XionWCFM/Nextjs-docs-Korean-translation',
  highlightDescription: [
    [
      {
        highlight: true,
        sentence: '⭐GitHub Star 30개 이상',
      },
      {
        highlight: false,
        sentence: '⬆ 🖨총',
      },
      {
        highlight: true,
        sentence: '번역 문서 90개 이상',
      },
      {
        highlight: false,
        sentence: '⬆',
      },
      {
        highlight: true,
        sentence:
          '👱‍♂️[Repository 보러가기](https://github.com/XionWCFM/Nextjs-docs-Korean-translation)',
      },
    ],
    [
      {
        highlight: true,
        sentence: 'next.js',
      },
      {
        highlight: false,
        sentence: '의 공식 문서를',
      },
      {
        highlight: true,
        sentence: '20 여명',
      },
      {
        highlight: false,
        sentence: '의 스터디원들과 함께 한글 번역한 프로젝트',
      },
    ],
  ],
};

const effectiveTypescriptStudy = {
  subject: 'effective-typescript-study',
  url: 'https://github.com/XionWCFM/effective-typescript-study',
  highlightDescription: [
    [
      {
        highlight: true,
        sentence: '이펙티브 타입스크립트',
      },
      {
        highlight: false,
        sentence: '를 읽고 느낀점을 공유하는 스터디입니다.',
      },
    ],
    [
      {
        highlight: false,
        sentence: '스터디를 진행하면서',
      },
      {
        highlight: true,
        sentence: '상표 표기법, private 키워드와 #키워드의 차이',
      },
      {
        highlight: false,
        sentence: '등 타입스크립트를 좀 더 깊이 알 수 있었습니다.',
      },
    ],
  ],
};

const reactStudy = {
  subject: 'react-study',
  url: 'https://github.com/XionWCFM/react-article-study',
  highlightDescription: [
    [
      {
        highlight: true,
        sentence: 'react-study',
      },
      {
        highlight: false,
        sentence:
          '는 각자 리액트의 모르는 부분을 공부하고 발표하는 스터디입니다.',
      },
    ],
    [
      {
        highlight: false,
        sentence: '스터디를 진행하면서',
      },
      {
        highlight: true,
        sentence: 'servercomponent, concurrency render',
      },
      {
        highlight: false,
        sentence: '등 react 18 version의 기능들에 대한 이해를 얻었습니다.',
      },
    ],
  ],
};

export const study: Study = {
  title: 'Study',
  type: 'study',
  highlightDescription: [
    [
      {
        highlight: true,
        sentence: '좋은 사람들이 모여서 만드는 시너지',
      },
      {
        highlight: false,
        sentence: '를 좋아하는 저는',
      },
    ],
    [
      {
        highlight: false,
        sentence: '부트캠프를 진행하는 동안',
      },
      {
        highlight: true,
        sentence: '스터디를 개설하고 꾸준히 운영',
      },
      {
        highlight: false,
        sentence: '해왔습니다.',
      },
    ],
  ],
  itemList: [nextjsdocs, effectiveTypescriptStudy, reactStudy],
};
