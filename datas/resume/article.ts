import { Article } from '@/types/resume';

export const article: Article = {
  title: 'Article',
  type: 'article',
  description:
    '저는 글을 작성하는 것을 좋아해서 기술 블로그를 꾸준히 운영했습니다. \n 그 결과 10여 개월 간 370여개의 포스트를 작성했고 최근엔 월 방문자 6000+을 달성했어요 \n 그래서 제가 작성한 글 중 보여드리고 싶은 글들을 조금 모아봤습니다.',
  itemList: [
    {
      subject:
        '클로저가 뭐냐? 라는 일상적인 질문에 잘 아는 것처럼 행동하는 방법',
      createdAt: '2023-02-23',
      url: 'https://xionwcfm.tistory.com/183',
    },
    {
      subject: '자바스크립트의 호이스팅에 Deep Dive 해보자',
      createdAt: '2023-04-11',
      url: 'https://xionwcfm.tistory.com/245',
    },
    {
      subject: '포트폴리오의 타이핑 효과를 구현한 과정',
      createdAt: '2023-08-15',
      url: 'https://xionwcfm.tistory.com/395',
    },
    {
      subject: '왜 우리는 리액트를 사용할까?',
      createdAt: '2023-08-04',
      url: 'https://xionwcfm.tistory.com/391',
    },
    {
      subject: '함수형과 클래스형 컴포넌트의 차이는 뭘까?',
      createdAt: '2023-02-05',
      url: 'https://xionwcfm.tistory.com/172',
    },
    {
      subject: 'display:none과 visibility:hidden의 차이를 아시나요?',
      createdAt: '2023-08-24',
      url: 'https://xionwcfm.tistory.com/399',
    },
  ],
};
