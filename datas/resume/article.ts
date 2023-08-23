import { Article } from '@/types/resume';

export const article: Article = {
  title: 'Article',
  type: 'article',
  description:
    '앞서 언급한 기술블로그에서 평가가 좋았던 Article을 모았습니다. \n 각 아티클을 클릭하면 해당 링크에 대한 새창이 열립니다.',
  itemList: [
    {
      subject:
        '클로저가 뭐냐? 라는 일상적인 질문에 잘 아는 것처럼 행동하는 방법',
      createdAt: '2023-02-23',
      url: 'https://xionwcfm.tistory.com/183',
    },
    {
      subject: 'v8 엔진으로의 DeepDive',
      createdAt: '2023-02-27',
      url: 'https://xionwcfm.tistory.com/186',
    },
    {
      subject: '자바스크립트의 호이스팅에 Deep Dive 해보자',
      createdAt: '2023-04-11',
      url: 'https://xionwcfm.tistory.com/245',
    },
    {
      subject: '왜 타입스크립트는 DOM 요소를 확신하지 못할까?',
      createdAt: '2023-06-02',
      url: 'https://xionwcfm.tistory.com/333',
    },
    {
      subject: '너무 복잡도가 높은 컴포넌트는 어떡하면 좋을까?',
      createdAt: '2023-07-07',
      url: 'https://xionwcfm.tistory.com/358',
    },
    {
      subject: 'next.js에서 react-query가 필요할까?',
      createdAt: '2023-06-08',
      url: 'https://xionwcfm.tistory.com/339',
    },
    {
      subject: '이터러블과 이터레이터 이해하는 방법',
      createdAt: '2023-03-06',
      url: 'https://xionwcfm.tistory.com/198',
    },
    {
      subject: '왜 emotion 같은 css-in-js 프레임워크들은 ssr이 힘든걸까?',
      createdAt: '2023-05-26',
      url: 'https://xionwcfm.tistory.com/329',
    },
  ],
};
