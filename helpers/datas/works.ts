import { IWorkProjectType } from './types';

export const worksDatas = [
  {
    title: '프로젝트',
    description: '기술블로그, 포트폴리오, 특허, 사내블로그 서버개발',
    href: 'project',
    image: {
      src: '/project_logo.jpeg',
      alt: 'project logo',
      objectFit: 'cover',
    },
    date: '2019.12 ~',
  },
  {
    title: '스터디',
    description: '상태관리, MSW, Canvas, Notion',
    href: 'study',
    image: {
      src: '/study_logo.jpeg',
      alt: 'study logo',
      objectFit: 'cover',
    },
    date: '2019.11 ~ ',
  },
];

export const worksDetailDatas: IWorkProjectType = {
  project: [
    {
      title: '기술블로그 웹사이트',
      date: '2022.09 (개인 프로젝트)',
      images: [
        {
          src: '/works_blog_1_logo.png',
          alt: '',
        },
        {
          src: '/works_blog_2_logo.png',
          alt: '',
        },
      ],
      description: {
        'sub-discription': '개발 기술블로그 용도로 제작한 웹사이트입니다',
        labels: [
          {
            name: '주요 기능',
            value: {
              type: 'text',
              data: '자기소개, 카테고리(개발,툴,포멧), 태그(테스트,리액트,form,Canvas..)',
            },
          },
          {
            name: 'Github',
            value: {
              type: 'link',
              data: 'https://github.com/seungahhong/seungahhong.github.io',
            },
          },
          {
            name: 'URL',
            value: {
              type: 'link',
              data: 'https://seungahhong.github.io/',
            },
          },
          {
            name: 'Frontend',
            value: {
              type: 'text',
              data: 'Gatsby, TypeScript, Styled-Components',
            },
          },
          {
            name: 'Deploy',
            value: {
              type: 'text',
              data: 'gh-pages',
            },
          },
        ],
      },
    },
    {
      title: '포트폴리오 웹사이트',
      date: '2022.12 (개인 프로젝트)',
      images: [
        {
          src: '/works_portfolio_1_logo.png',
          alt: '',
        },
        {
          src: '/works_portfolio_2_logo.png',
          alt: '',
        },
      ],
      description: {
        'sub-discription': '개인 포트폴리오 용도로 제작한 웹사이트입니다',
        labels: [
          {
            name: '주요 기능',
            value: {
              type: 'text',
              data: '간단한 자기소개, 인적 사항, 기술 스택, 업무 경력 소개, 프로젝트 소개',
            },
          },
          {
            name: 'Github',
            value: {
              type: 'link',
              data: 'https://github.com/seungahhong/seungahhong-portfolio',
            },
          },
          {
            name: 'URL',
            value: {
              type: 'link',
              data: 'https://seungahhong-portfolio.vercel.app/',
            },
          },
          {
            name: 'Frontend',
            value: {
              type: 'text',
              data: 'NextJS, TypeScript, Emotion',
            },
          },
          {
            name: 'Deploy',
            value: {
              type: 'text',
              data: 'Vercel',
            },
          },
        ],
      },
    },
  ],
  study: [],
};
