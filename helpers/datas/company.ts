import { IProjectType } from './types';

export const companyDatas = [
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

export const companyProdjectDatas: IProjectType[] = [
  {
    title: '웹한글기안기 개발',
    image: {
      src: '/webhwpctrl_logo.png',
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
      src: '/webhwp_logo.png',
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
];
