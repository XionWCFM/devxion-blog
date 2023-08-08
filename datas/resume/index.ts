type ResumeType =
  | 'channel'
  | 'contact'
  | 'otherExperience'
  | 'peerFeedback'
  | 'retrospect';

const channel = {
  title: 'Channel',
  itemList: [
    {
      type: 'channel',
      subject: 'GitHub',
      url: 'https://github.com/XionWCFM',
    },
    {
      type: 'channel',
      subject: 'Tistory Blog',
      url: 'https://xionwcfm.tistory.com/',
    },
  ],
};

const contact = {
  title: 'Contact',
  itemList: [
    {
      type: 'contact',
      subject: 'email',
      content: 'giljongyudev@gmail.com',
    },
    {
      type: 'contact',
      subject: 'phone',
      content: '010-0000-0000',
    },
  ],
};

const otherExperience = {
  title: 'OtherExperience',
  itemList: [
    {
      type: 'otherExperience',
      subject: '코드스테이츠 프론트엔드 44기',
      startDate: '2023-02',
      endDate: '2023-08',
      content: '',
    },
    {
      type: 'otherExperience',
      subject: '호서대학교 글로벌통상학과',
      startDate: '2016-02',
      endDate: '2023-02',
      content: '',
    },
  ],
};

const peerFeedback = {
  title: '팀원 평가',
  itemList: [
    {
      type: 'peerFeedback',
      belong: 'PliP',
      position: '멘토',
      name: 'XXX',
      content: [
        [
          {
            highlight: false,
            sentence:
              '길종님은 스스로 더 좋은 코드를 치기 위해 많은 고민을 하시는 분 같아요',
          },
        ],
        [
          {
            highlight: false,
            sentence: '질문을 주실 때',
          },
          {
            highlight: true,
            sentence: '더 좋은 코드와 방식에 대해 많은 고민',
          },
          {
            highlight: false,
            sentence: '을 하신다는 느낌을 받았어요',
          },
        ],
        [
          {
            highlight: false,
            sentence:
              '개발자를 두 부류로 나누어보면, 비즈니스에 관심이 많은 비즈니스 형 개발자와,',
          },
        ],
        [
          {
            highlight: false,
            sentence: '기술에 관심이 많은 기술형 개발자로 나뉘는 것 같아요.',
          },
        ],
        [
          {
            highlight: false,
            sentence: '길종님은 후자에 가깝다고 생각했어요.',
          },
        ],
      ],
    },

    {
      type: 'peerFeedback',
      belong: 'PliP',
      position: '팀원',
      name: '성지현',
      content: [
        [
          {
            highlight: false,
            sentence: '길종님은',
          },
          {
            highlight: true,
            sentence:
              '재사용 가능하고 추상화가 잘 된 코드를 작성하는 능력이 탁월',
          },
          {
            highlight: false,
            sentence: '하다고 생각합니다.',
          },
        ],
        [
          {
            highlight: false,
            sentence:
              '그렇게 작성하기 까지 이리저리 연습도 많이 하셨을 것 같아서',
          },
        ],
        [
          {
            highlight: false,
            sentence: '이런 노력 정말 꼭 본 받아야겠다고 생각했습니다.',
          },
        ],
        [
          {
            highlight: false,
            sentence: '코드 보면서 배울점도 많았고 몰랐던 스택도 알게 돼서 ',
          },
        ],
        [
          {
            highlight: false,
            sentence: '길종님과 함께 프로젝트를 했다는게 제겐 정말 뜻깊습니다',
          },
        ],
      ],
    },

    {
      type: 'peerFeedback',
      belong: 'PliP',
      position: '팀원',
      name: '이진유',
      content: [
        [
          {
            highlight: false,
            sentence: '길종님의 가장 큰 강점은',
          },
          {
            highlight: true,
            sentence: '깊은 탐구심과 호기심',
          },
          {
            highlight: false,
            sentence: '인 것 같아요.',
          },
        ],
        [
          {
            highlight: false,
            sentence:
              '부트캠프 초창기 당시 거의 모든 사람들의 레포지토리를 탐방하며 궁금한 점을 적극적으로 물어보는 태도가 정말 좋았어요!',
          },
        ],
        [
          {
            highlight: false,
            sentence: '그리고 한 번 공부를 하기로',
          },
          {
            highlight: true,
            sentence: '마음먹은 개념을 끝까지 파시는 부분',
          },
          {
            highlight: false,
            sentence: '이 정말 부러운 능력이에요.',
          },
        ],
        [
          {
            highlight: false,
            sentence:
              '저는 나름 깊게 공부했다고 생각했는데 길종님의 블로그 포스팅 글들을 보면',
          },
        ],
        [
          {
            highlight: false,
            sentence: '내가 깊이가 부족했구나" 하는 부분이 정말 많았어요!',
          },
        ],
        [
          {
            highlight: false,
            sentence:
              '길종님처럼 탐구심과 호기심을 가지고 끝까지 붙들고 계시는 분들은 많지 않을 거에요!',
          },
        ],
      ],
    },

    {
      type: 'peerFeedback',
      belong: 'PliP',
      position: '팀원',
      name: '윤다영',
      content: [
        [
          {
            highlight: false,
            sentence:
              '길종 님 덕분에 토큰 관리 법을 배워가서 너무 좋았습니다..',
          },
        ],
        [
          {
            highlight: false,
            sentence: '길종님께 배운게 많은 것 같아용.',
          },
        ],
        [
          {
            highlight: false,
            sentence:
              '같이 개발할 수 있어 행복했숩니다.. 막힘이 없었던 것 같아영',
          },
        ],
      ],
    },

    {
      type: 'peerFeedback',
      belong: 'PliP',
      position: '팀원',
      name: '박지인',
      content: [
        [
          {
            highlight: false,
            sentence:
              '프론트 분들과 디스코드에 긴 시간 상주하셔서 적극적으로 커뮤니케이션 하시는게 보기 좋았습니다.',
          },
        ],
        [
          {
            highlight: false,
            sentence: '백엔드와도',
          },
          {
            highlight: true,
            sentence: '원활하게 협업이 이루어질 수 있도록 유쾌한 분위기',
          },
          {
            highlight: false,
            sentence: '만들어주셔서 감사합니다!',
          },
        ],
        [
          {
            highlight: false,
            sentence: '앞으로도 좋은 개발자 되시길 응원하겠습니다!',
          },
        ],
      ],
    },

    {
      type: 'peerFeedback',
      belong: 'Stackoverflow Clone',
      position: '팀원',
      name: '정민지',
      content: [
        [
          {
            highlight: false,
            sentence: '길종님이 가지고 계신 경험과 지식 덕분에',
          },
        ],
        [
          {
            highlight: false,
            sentence:
              '프로젝트 동안 발생했던 오류들을 조금 수월하게 해결했던 것 같습니다.',
          },
        ],
        [
          {
            highlight: false,
            sentence: '맡으신 부분은 항상 잘 해내시는 부분이 멋있었습니다!',
          },
        ],
      ],
    },
  ],
};

const retrospect = {
  type: 'retrospect',
  title: '간헐적 회고',
  description: [
    [
      {
        highlight: false,
        sentence:
          '간헐적 회고는 매일 회고를 해야 한다는 부채 의식이 회고가 싫어지게 만드는 심리에서 착안해',
      },
    ],
    [
      {
        highlight: true,
        sentence: '생각이 났을 때, 여유가 있을 때 회고',
      },
      {
        highlight: false,
        sentence: '를 하는 것이 회고를 미루거나 안 하는 것보다 낫다는 마음으로',
      },
    ],
    [
      {
        hightlight: false,
        sentence: '시작한 비 정기적이고',
      },
      {
        hightlight: true,
        sentence: '개인적인',
      },
      {
        hightlight: false,
        sentence: '회고입니다.',
      },
    ],
  ],
  url: 'https://xionwcfm.tistory.com/category/%EA%B0%84%ED%97%90%EC%A0%81%20%ED%9A%8C%EA%B3%A0',
};
