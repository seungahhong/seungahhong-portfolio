import { IProjectType } from './types';

export const careerDatas = [
  {
    title: '와디즈',
    href: 'wadiz',
    image: {
      src: '/wadiz_logo.png',
      alt: 'wadiz logo',
      objectFit: 'contain',
    },
    description: '펀딩, 스토어',
    date: '2020.11 ~',
  },
  {
    title: '한글과컴퓨터',
    href: 'hancom',
    image: {
      src: '/hancom_logo.png',
      alt: 'hancom logo',
      objectFit: 'contain',
    },
    description: '웹한글, 웹한글기안기',
    date: '2016.12 ~ 2020.11',
  },
  {
    title: '오스템임플란트',
    href: 'osstem',
    image: {
      src: '/osstem_logo.png',
      alt: 'osstem logo',
      objectFit: 'contain',
    },
    description: '치과용 프로그램',
    date: '2013.04 ~ 2016.12',
  },
  {
    title: '블루버드소프트',
    href: 'bluebird',
    image: {
      src: '/bluebird_logo.png',
      alt: 'bluebird logo',
      objectFit: 'contain',
    },
    description: '산업용 PDA개발',
    date: '2010.06 ~ 2012.04',
  },
];

export const careerProdjectDatas: IProjectType = {
  wadiz: [],
  hancom: [
    {
      title: '웹한글기안기 개발',
      image: {
        src: '/hancom_webhwpctrl_logo.png',
        alt: '웹한글기안기 로고',
      },
      date: 'Dec 2016 - Nov 2020',
      descriptions: [
        {
          type: 'Hangul Ctrl WebApp',
          role: 'Front-End Developer',
          skills: 'HTML, CSS, Javascript, Markdown',
          tools: 'intellij, git',
          contents: [
            '웹한글기안기 엔진모델/렌더링 관련 액션/기능개발, 프레임 관련 툴바/컨텍스트메뉴/다이얼로그/단축키 엔진연동 및 UI기능개발',
            '웹한글기안기 고객지원 컨트롤 OpenAPI 제공기능 개발',
          ],
        },
      ],
      link: {
        href: 'https://m.etnews.com/20200214000099?obj=Tzo4OiJzdGRDbGFzcyI6Mjp7czo3OiJyZWZlcmVyIjtOO3M6NzoiZm9yd2FyZCI7czoxMzoid2ViIHRvIG1vYmlsZSI7fQ%3D%3D',
        label: '웹한글기안기 링크',
      },
    },
    {
      title: '웹한글 개발',
      image: {
        src: '/hancom_webhwp_logo.png',
        alt: '웹한글 로고',
      },
      date: 'Dec 2016 - Nov 2020',
      descriptions: [
        {
          type: 'Hangul WebApp',
          role: 'Front-End Developer',
          skills: 'HTML, CSS, Javascript, Canvas',
          tools: 'intellij, git',
          contents: [
            '웹한글 엔진모델/렌더링 관련 액션/기능개발, 프레임 관련 툴바/컨텍스트메뉴/다이얼로그/단축키 엔진연동 및 UI기능개발',
            '웹한글 동시편집 액션,UI 업무지원 및 웹서비스 필요한 상태표시 기능추가',
          ],
        },
      ],
      link: {
        href: 'http://it.chosun.com/site/data/html_dir/2019/03/06/2019030601116.html',
        label: '웹한글 링크',
      },
    },
  ],
  osstem: [
    {
      title: '글로벌 치과용 프로그램 개발',
      image: {
        src: '/osstem_elecchart_logo.png',
        alt: '글로벌 치과용 프로그램 OneClick 전자차트 메인화면 로고',
      },
      date: 'Sep 2015 - Dec 2016',
      descriptions: [
        {
          type: 'Medical Windows App',
          role: 'Medical Insurance & Charge App Developer',
          skills: 'C#, WPF',
          tools: 'VS2013, GIT',
          contents: [
            '치과에서 진료를 한 후 프로그램 중 전자차트/보험차트에 진료입력, 입력된 내역 수정,삭제 기능을 제공하는 모듈개발',
            '치과진료 입력내용을 바탕으로 심사평가원에 보험청구하는 모듈개발(보험청구,EDI)',
          ],
        },
      ],
      link: {
        href: 'http://www.dentalarirang.com/news/articleView.html?idxno=25815',
        label: 'OneClick 링크',
      },
    },
    {
      title: '국내 치과용 프로그램 개발',
      image: {
        src: '/osstem_oldinsurechart_logo.png',
        alt: '국내 치과용 프로그램 하나로/두번에 보험차트 메인화면 로고',
      },
      date: 'Apr 2013 - Dec 2016',
      descriptions: [
        {
          type: 'Medical Windows App',
          role: 'Medical Insurance & Charge App Developer',
          skills: 'C/C++',
          tools: 'VS2013/6.0, GIT, Sourcesafe',
          contents: [
            '심사평가원 국가기관에서 보험제도 변경될 때마다 자사에서 제공하는 프로그램에 진료/청구 기능개발',
            '심사평가원 국가기관에서 수신 받을 수 있는 전자문서(EDI)를 수신받아서 사용자에 보여주는 기능개발',
          ],
        },
      ],
      link: {
        href: 'http://www.dentalnews.or.kr/news/article.html?no=23828',
        label: '하나로/두번에 링크',
      },
    },
  ],
  bluebird: [
    {
      title: '단말기 모뎀 디바이스 개발/이동통신사 품질보증',
      image: {
        src: '/bluebird_modemdevelop_logo.png',
        alt: 'BPL-10 모뎀디바이스 개발 및 품질보증 단말기 메인화면 로고',
      },
      date: 'Aug 2010 - Apr 2012',
      descriptions: [
        {
          type: 'Wince/WindowsMobile System App',
          role: 'Embedded System Developer',
          skills: 'C, C++, API, MFC',
          tools: 'VS2015, PlatformBuilder, CVS',
          contents: [
            'WindowsCE 5.0 단말기(BPL-10)에 내장된 모뎀디바이스 개발 및 품질보증 업무 담당(SKT,KT)',
            'WindowsCE 5.0, Windows Mobile 6.5 단말기(BIP-7000lite, BM-170) 모뎀디바이스 개발',
          ],
        },
      ],
      link: {
        href: 'http://www.digitaltoday.co.kr/news/articleView.html?idxno=23131',
        label: 'BPL-10 단말기 기사링크',
      },
    },
    {
      title: 'Wince, WindowsMobile 단말기 개발',
      image: {
        src: '/bluebird_windowsce_device_logo.png',
        alt: 'WinCE 5.0 단말기 메인화면 로고',
      },
      date: 'Jun 2010 - Apr 2012',
      descriptions: [
        {
          type: 'Wince/WindowsMobile System App',
          role: 'Embedded System Developer',
          skills: 'C, C++, API, MFC',
          tools: 'VS2015, PlatformBuilder, CVS',
          contents: [
            'WindowsCE 5.0 단말기(BPL-10)를 이용한 현장 결제 기능 개발 및 단말기 유지보수',
            'Windows Mobile 5.1/6.1/65060/6530 버전의 단말기 개발',
          ],
        },
      ],
      link: {
        href: 'http://bluebirdcorp.com/products/Mobile-Computers/Handheld-Computers/BIP7000',
        label: 'Wince, WindowsMobile 단말기 기사링크',
      },
    },
  ],
};
