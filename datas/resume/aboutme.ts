import { Aboutme } from '@/types/resume';

export const aboutme: Aboutme = {
  type: 'aboutme',
  title: 'About Me',
  descriptionArray: [
    '저는 외우는 것보다 이해하는 것을 더 중요하게 생각합니다.',
    '그래서 제 기술 블로그에는 무언가를 이해하고 정리한 내용들로 가득합니다.',
  ],
  itemList: [
    {
      subject: '왜 이해하는 것을 중요하게 생각하나요?',
      content: '기술은 기존 방식의 문제를 해결할 때 발전한다고 생각합니다. \n 그렇기 때문에 ',
    },
    {
      subject: '저는 왜 프론트엔드 개발자가 되려고 할까요?',
      content:
        '저는 사람과 가장 가깝게 맞닿아 있는 것이 프론트엔드 개발의 매력이라고 생각합니다. \n 사용자와 맞닿아있기에 고려할 점과 문제가 생기고 그것을 해결하기 위해 고민하는 것이 즐거웠습니다. \n 그래서 저는 프론트엔드 개발자가 되기 위해 공부하고 있습니다.',
    },
    {
      subject: '저는 문제를 만나면 어떻게 해결할까요?',
      content:
        '저는 먼저 문제의 원인을 찾는 것을 우선합니다. \n 예컨대 지금 보이는 화면의 fullpage , typing 기능 들은 모두 제가 직접 구현한 기능입니다. \n 이 기능들을 가볍게 구현했을 때에는 부자연스러운 동작들을 많이 발견할 수 있었습니다. \n 그러나 차근차근 원인을 정의하고 그에 따른 해결방법을 고민하는 것을 통해 보다 자연스럽게 동작하도록 고칠 수 있었습니다.',
    },
  ],
};
