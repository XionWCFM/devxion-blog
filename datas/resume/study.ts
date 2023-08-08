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
  itemList: [nextjsdocs],
};
