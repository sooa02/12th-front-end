const qnaList = [
  {
    q: '1. 설레이는 새학기 ! 학교와 이번 학기에 대한 정보가 필요하다',
    a: [
      { answer: '직접 학기를 경험하며 알아간다', type: ['Swift', 'Kotlin'] },
      {
        answer: '새학기 시작 전에 꼼꼼히 검색을 통해 사전탐색을 해본다',
        type: ['C++', 'Python', 'Java', 'Javascript', 'SQL'],
      },
    ],
  },
  {
    q: '2. 새학기가 되기 전 옷을 사야겠다 !',
    a: [
      { answer: '무신사 탑 랭킹을 참고한다', type: ['Java', 'SQL', 'C++'] },
      {
        answer: '내 스타일대로 개성을 살려 구입한다',
        type: ['Python', 'Javascript', 'Swift', 'Kotlin'],
      },
    ],
  },
  {
    q: '3. 처음보는 동기, 선배들에게 자기소개를 해야할 때 나는??',
    a: [
      {
        answer: '안녕하세요!! 코딩 좋아하는 아기사자입니다!! (막힘없음)',
        type: ['Java', 'Javascript', 'Swift', 'Kotlin'],
      },
      {
        answer: '안녕하세요,,, 아기사자입니다,,! (부끄러움)',
        type: ['C++', 'Python', 'SQL'],
      },
    ],
  },
  {
    q: '4. 대학가면 연애를 할 수 있다는데,,!? ',
    a: [
      {
        answer: '만날 수 있는 기회가 없어,, 소개좀 시켜줘!!',
        type: ['Java', 'C++', 'Kotlin', 'SQL'],
      },
      {
        answer: '무조건 자만추지! 억지 만남은 싫어,,!',
        type: ['Javascript', 'Python', 'Swift'],
      },
    ],
  },
  {
    q: '5. 아이디어톤에 참가하게된 나는?',
    a: [
      {
        answer: '이 세상에 없는 플랫폼을 만들어보겠어!',
        type: ['JavaScript', 'Python', 'Swift'],
      },
      {
        answer: '기존의 플랫폼을 효율적으로 수정하면 더 좋을 것 같아!',
        type: ['Java', 'C++', 'Kotlin', 'SQL'],
      },
    ],
  },

  {
    q: '6. 시험 공부를 시작할 때 나는?',
    a: [
      {
        answer: '공부는 계획부터!',
        type: ['Java', 'C++', 'Kotlin', 'Swift', 'SQL'],
      },
      { answer: '일단 뭐라도 시작하자,,!!', type: ['Javascript', 'Python'] },
    ],
  },
  {
    q: '7. 조별과제에 대한 나의 생각은?',
    a: [
      {
        answer: '다양한 사람들과 같이 하는 것이 좋아!',
        type: ['Java', 'Javascript', 'Swift', 'Kotlin'],
      },
      { answer: '과제는 혼자하는게 편해,,', type: ['C++', 'Python', 'SQL'] },
    ],
  },
  {
    q: '8. 같은 과목에 성향이 다른 두 명의 교수님 선택지가 있다',
    a: [
      { answer: '이론 중심의 나이가 지긋이 드신 교수님', type: ['C++', 'SQL'] },
      {
        answer: '실습 중심의 젊은 교수님',
        type: ['Python', 'Java', 'Javascript', 'Swift', 'Kotlin'],
      },
    ],
  },
  {
    q: '9. 이번 학기 선수 과목을 들을지 말지 고민이다..',
    a: [
      {
        answer: '선수과목을 들어놓으면 다음 학기에도 도움 되니 맞춰서 듣는다',
        type: ['C++', 'Java', 'SQL', 'Kotlin'],
      },
      {
        answer: '신경 안쓰고 듣고 싶은 수업 듣는다',
        type: ['Python', 'Javascript', 'Swift'],
      },
    ],
  },
  {
    q: '10. 동기, 선배에게 선물을 해야할 때 나는? ',
    a: [
      {
        answer: '그 사람에게 필요한 게 있는 지 물어보자!',
        type: ['Javascript', 'Java', 'Kotlin', 'Python', 'SQL'],
      },
      {
        answer: '이쁘고, 기억에 남을 만한 선물을 해야지!',
        type: ['C++', 'Swift'],
      },
    ],
  },
  {
    q: '11. 입학 전 동기들끼리의 단톡이 생겼다 한다 ',
    a: [
      {
        answer: '정보 중요하지 무조건 들어간다',
        type: ['Python', 'Javascript', 'Swift', 'Kotlin'],
      },
      { answer: '너무 부담스럽다', type: ['C++', 'Java', 'SQL'] },
    ],
  },
  {
    q: '12. 동기들, 선배들과의 술자리에서 나는? ',
    a: [
      {
        answer: '말하느라 술 마실 시간도 없다!',
        type: ['Java', 'Javascript', 'Swift', 'Kotlin'],
      },
      {
        answer: '안주, 술을 마시며 도란도란 이야기를 나눈다.',
        type: ['C++', 'Python'],
      },
    ],
  },
];

const resultList = [
  {
    name: '체계적이고 구조화된 개발을 선호하는 사람',
    title: 'Java',
    desc: '객체지향적인 언어로, 플랫폼 독립적이며 안정성과 확장성이 높아 대규모 프로젝트에 적합하며 체계적이고 꼼꼼한 사람들에게 어울리며, 큰 규모의 프로젝트를 다루는데 탁월한 능력을 발휘하는 사람들이 선호한답니다. ',
  },
  {
    name: '웹 개발에 관심이 많고 동적인 환경에서 창의적으로 작업하는 사람',
    title: 'Javascript',
    desc: '웹 개발에 주로 사용되는 스크립트 언어로, 동적인 웹 페이지 구현이 가능해서 다양한 플랫폼에서 실행될 수 있습니다! 창의적이고 유연한 사고를 가진 사람들에게 어울리며, 웹 개발이나 프론트엔드 개발에 관심이 있는 사람들이 선호한답니다.',
  },
  {
    name: '간결하고 가독성이 높은 코드를 선호하며 데이터 분석이나 인공지능에 관심이 있는 사람',
    title: 'Python',
    desc: '읽기 쉽고 간결한 문법을 가진 인터프리터 언어로, 다양한 분야에서 사용되고 있어요 데이터분석, 인공지능, 웹 개발 등에 널리 사용된답니다! 창의적이면서도 실용적인 사고를 가진 사람들에게 어울리며, 데이터 분석이나 인공지능 개발에 관심이 있는 사람들이 선호한답니다. ',
  },
  {
    name: '하드웨어 제어나 성능 최적화에 관심이 있으며 저수준의 프로그래밍을 선호하는 사람',
    title: 'C++',
    desc: '범용 목적의 프로그래밍 언어로, 시스템 소프트웨어, 게임 개발, 임베디드 시스템 등에 널리 사용되며 성능과 효율성에 중점을 두고 있어요. 논리적이고 세부적인 구현에 능숙한 사람들에게 어울리며, 하드웨어와 소프트웨어의 상호작용에 관심이 있는 사람들이 선호한답니다.',
  },
  {
    name: 'iOS 앱 개발에 관심이 있으며 혁신적인 기술을 적용하고자 하는 사람',
    title: 'Swift',
    desc: 'Apple의 iOS와 macOS 애플리케이션 개발을 위해 만들어진 언어로, 안전성과 성능에 초점을 두어요 간결하고 직관적인 문법이 특징이죠!  창의적이면서도 세심한 사람들에게 어울리며, 모바일 애플리케이션 개발에 관심이 있는 사람들이 선호한답니다.',
  },
  {
    name: 'Android 앱 개발, 서버 개발에 관심이 있고 모던한 언어를 선호하는 사람',
    title: 'Kotlin',
    desc: 'JVM에서 실행되는 정적 타입의 프로그래밍 언어로, Java와의 상호운용성이 뛰어나며 안전성과 생산성을 강조하고 안드로이드 앱 개발에 주로 사용되고 있어요! 협업과 생산성을 중요시하는 사람들에게 어울리며, 안드로이드 앱 개발이나 서버 개발에 관심이 있는 사람들이 선호한답니다.',
  },
  {
    name: '데이터베이스 관리 및 조작에 관심이 있는 사람',
    title: 'SQL',
    desc: ' SQL(Structured Query Language)은 관계형 데이터베이스에서 데이터를 관리하고 조작하기 위해 사용되는 언어랍니다 데이터베이스의 구조를 정의하고, 데이터를 삽입, 갱신, 삭제, 조회하는 작업을 수행할 수 있고 SQL은 직관적이고 간결한 문법을 갖고 있어요! 그리고 다양한 데이터 조작 기능을 제공한답니다 분석적인 사고력을 가지고 문제 해결 능력이 있는 사람에게 어울리며,  데이터베이스 시스템을 구축하고 관리하는 업무에 종사하는 사람들이나 데이터 분석가, 개발자 등 데이터 처리에 관련된 업무를 수행하는 사람들이 SQL을 필요로 해요. 데이터에 대한 이해와 분석 능력, 문제 해결 능력이 필요한 분야에서 SQL을 활용할 수 있답니다.',
  },
];
ㅇㅇㄹㅇㄹㄹ{}