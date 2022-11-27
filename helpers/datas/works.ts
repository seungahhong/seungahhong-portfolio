import { CardsType } from '../../components/type';
import { IProjectItemType } from '../../types';

export const workProjectValues: CardsType.ICardItemProps[] = [
  {
    title: '프로젝트',
    description: '기술블로그, 포트폴리오, 특허',
    href: 'project',
    image: {
      src: '/project_logo.jpeg',
      alt: 'project logo',
      objectFit: 'cover',
    },
    date: '2020.01 ~',
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

export const workProjectDetailType: IProjectItemType = {
  project: [
    {
      title: '포트폴리오 웹사이트',
      date: '2022.12 (개인 프로젝트)',
      images: [
        {
          src: '/works_portfolio_1_logo.png',
          alt: '포트폴리오 이미지 1',
        },
        {
          src: '/works_portfolio_2_logo.png',
          alt: '포트폴리오 이미지 2',
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
    {
      title: '기술블로그 웹사이트',
      date: '2022.09 (개인 프로젝트)',
      images: [
        {
          src: '/works_blog_1_logo.png',
          alt: '기술블로그 이미지 1',
        },
        {
          src: '/works_blog_2_logo.png',
          alt: '기술블로그 이미지 1',
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
      title: '웹 전자 문서 편집 동작 방법(특허)',
      date: '2020.01',
      images: [
        {
          src: '/works_patent_logo.jpeg',
          alt: '특허 이미지',
        },
      ],
      description: {
        'sub-discription':
          '(특허)크로스 브라우징을 지원하는 웹 전자 문서 편집 장치 및 이의 동작 방법을 토대로 특허 등록이 되어 있습니다.',
        labels: [
          {
            name: '주요 기능',
            value: {
              type: 'text',
              data: '웹한글/웹한글기안기 widget(컨트롤) 상태/업데이트 로직으로 특허 등록',
            },
          },
          {
            name: '검색 방법',
            value: {
              type: 'text',
              data: '특허정보검색서비스 검색창에 등록번호(1020674990000) 넣고 검색해보시면 확인이 가능합니다.',
            },
          },
          {
            name: 'URL',
            value: {
              type: 'link',
              data: 'http://kportal.kipris.or.kr/kportal/search/total_search.do',
            },
          },
          {
            name: 'Frontend',
            value: {
              type: 'text',
              data: 'Vanilla, CSS',
            },
          },
        ],
      },
    },
  ],
  study: [],
};
