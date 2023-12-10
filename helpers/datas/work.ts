import dayjs from 'dayjs';
import { IProjectItemType, ICardItemProps } from '../../types';

const today = dayjs().format('YYYY.MM');

export const workProjectValues: ICardItemProps[] = [
  {
    title: '프로젝트',
    description: '기술블로그, 포트폴리오, 특허, 회사블로그',
    href: 'project',
    image: {
      src: '/project_logo.webp',
      alt: 'project logo',
      objectFit: 'cover',
    },
    date: '2020.01 ~',
  },
  {
    title: '스터디',
    description: '상태관리, Canvas, Form, 스터디',
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
  project: {
    header: '프로젝트',
    items: [
      {
        title: '포트폴리오 웹사이트',
        date: `${today} (개인 프로젝트)`,
        images: [
          {
            src: '/works_portfolio_1_logo.webp',
            alt: '포트폴리오 이미지 1',
          },
          {
            src: '/works_portfolio_2_logo.webp',
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
                data: 'React, NextJS, TypeScript, TailwindCss',
              },
            },
            {
              name: 'E2E Test',
              value: {
                type: 'text',
                data: 'Playwright',
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
        date: `${today} (개인 프로젝트)`,
        images: [
          {
            src: '/works_blog_1_logo.webp',
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
                data: 'React, Gatsby, TypeScript, Styled-Components',
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
      {
        title: '회사 기술 블로그 기고',
        date: '2022.08',
        images: [
          {
            src: '/company_blog_logo.png',
            alt: '회사 기술 블로그 이미지',
          },
        ],
        description: {
          'sub-discription':
            '상세페이지 성능 개선을 위해서 작업한 기술적인 내용에 대해서 회사 기술블로그에 기고한 내용입니다.',
          labels: [
            {
              name: '주요 기능',
              value: {
                type: 'text',
                data: '이미지 지연 로딩 기술 적용, 콘텐츠 리플로우 방지, 화면보다 넓은 범위의 이미지 프리로딩 기술에 대한 내용',
              },
            },
            {
              name: 'URL',
              value: {
                type: 'link',
                data: 'https://blog.wadiz.kr/%ed%8e%80%eb%94%a9%ed%95%98%ea%b8%b0-%ec%83%81%ec%84%b8-%ed%8e%98%ec%9d%b4%ec%a7%80-%ec%84%b1%eb%8a%a5-%ea%b0%9c%ec%84%a0%ed%95%98%ea%b8%b0/',
              },
            },
            {
              name: 'Frontend',
              value: {
                type: 'text',
                data: 'VanillaJS, CSS, React',
              },
            },
          ],
        },
      },
    ],
  },
  study: {
    header: '스터디',
    items: [
      {
        title: '스터디',
        date: '2022.12',
        images: [
          {
            src: '/works_blog_1_logo.webp',
            alt: '기술블로그 이미지 1',
          },
          {
            src: '/works_study_notion_1_logo.png',
            alt: 'Notion 이미지 1',
          },
        ],
        description: {
          'sub-discription':
            '프론트엔드 기술에 대한 특징, 사용법을 정리하고 전체가 발전할 수 있는 개발 생태계를 구성하기 위해서 꾸준히 공유하고 있습니다.',
          labels: [
            {
              name: '기술블로그',
              value: {
                type: 'link',
                data: 'https://seungahhong.github.io/',
              },
            },
            {
              name: '노션',
              value: {
                type: 'link',
                data: 'https://material-debt-c1c.notion.site/daa60481e37840ea9e1b7e1b12269942',
              },
            },
            {
              name: 'Frontend',
              value: {
                type: 'text',
                data: 'Playwright, Jest, MSW, CSS-in-JS...',
              },
            },
          ],
        },
      },
      {
        title: '블로그 서버구축',
        date: '2022.10',
        images: [
          {
            src: '/works_study_blog_server_1_logo.png',
            alt: '블로그 서버구축 이미지 1',
          },
          {
            src: '/works_study_blog_server_2_logo.png',
            alt: '블로그 서버구축 스터디 이미지 1',
          },
        ],
        description: {
          'sub-discription': `NodeJS 기반의 Express 특징, 사용법을 익히기 위해서 간단한 블로그용 서버를 구축한 스터디 내용입니다.
           기술스택으로는 Server: Express, Log: winston/morgan, Markdown: remark,
           DB: MongoDB, ODM: Mongoose, Cloud DBaas: Atlas를 사용하였습니다.
          `,
          labels: [
            {
              name: 'Github',
              value: {
                type: 'link',
                data: 'https://github.com/seungahhong/express-blog-server',
              },
            },
            {
              name: '특징',
              value: {
                type: 'link',
                data: 'https://www.notion.so/express-b41a66c8ea9b4245bd8859c899ffbeaf',
              },
            },
            {
              name: 'Backend',
              value: {
                type: 'text',
                data: 'express, typescript, mongodb, remark, morgin, winston',
              },
            },
          ],
        },
      },
      {
        title: 'Canvas',
        date: '2022.03',
        images: [
          {
            src: '/works_study_canvas_1_logo.png',
            alt: '캔버스 스터디 이미지 1',
          },
        ],
        description: {
          'sub-discription':
            '캔버스에 특징, 사용법을 익히기 위해서 만든 웹사이트이며, 렌더링 형태로는 사각형, 삼각형, 원, 라인, 텍스트, 이미지 타입이 있습니다.',
          labels: [
            {
              name: 'Github',
              value: {
                type: 'link',
                data: 'https://github.com/seungahhong/canvas-paint',
              },
            },
            {
              name: 'URL',
              value: {
                type: 'link',
                data: 'https://canvas-paint-nine.vercel.app/',
              },
            },
            {
              name: '특징',
              value: {
                type: 'link',
                data: 'https://seungahhong.github.io/blog/2022/03/2022-03-29-canvas/',
              },
            },
            {
              name: 'Frontend',
              value: {
                type: 'text',
                data: 'react, typescript, jotai, mui',
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
        title: '상태관리',
        date: '2022.06',
        images: [
          {
            src: '/works_study_state_1_logo.png',
            alt: '상태관리 스터디 이미지 1',
          },
        ],
        description: {
          'sub-discription':
            '리액트에서 사용하는 상태관리에 대한 특징, 사용법을 익히기 위해서 동일한 로직을 여러 상태관리로 구현할 경우에 대해서 정리한 웹사이트 입니다.',
          labels: [
            {
              name: 'Github',
              value: {
                type: 'link',
                data: 'https://github.com/seungahhong/states-todos',
              },
            },
            {
              name: 'URL',
              value: {
                type: 'link',
                data: 'https://seungahhong.github.io/states-todos',
              },
            },
            {
              name: '특징',
              value: {
                type: 'link',
                data: 'https://material-debt-c1c.notion.site/state-management-0bbd0e51f3784ee1b477515dd19d608b',
              },
            },
            {
              name: 'Frontend',
              value: {
                type: 'text',
                data: 'react, typescript, @reduxjs/toolkit, redux, mobx, recoil, react-query, swr, jotai, zustand',
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
        title: '라우터',
        date: '2022.03',
        images: [
          {
            src: '/works_study_router_1_logo.png',
            alt: '라우터 스터디 이미지 1',
          },
        ],
        description: {
          'sub-discription':
            '라우팅 방식에 대한 특징, 사용법을 익히기 위해서 동일한 로직을 전통적 링크, AJAX, Hash, PJAX 방식으로 구현한 웹사이트입니다.',
          labels: [
            {
              name: 'Github',
              value: {
                type: 'link',
                data: 'https://github.com/seungahhong/router-tutorial',
              },
            },
            {
              name: '특징',
              value: {
                type: 'link',
                data: 'https://www.notion.so/pure-router-f3126bda56e74cd8bce7a04f04bb6edd',
              },
            },
            {
              name: 'Frontend',
              value: {
                type: 'text',
                data: 'react, react-router, scss',
              },
            },
          ],
        },
      },
      {
        title: '폼 상태',
        date: '2022.03',
        images: [
          {
            src: '/works_study_form_1_logo.png',
            alt: '폼 상태 스터디 이미지 1',
          },
        ],
        description: {
          'sub-discription':
            '폼 상태,유효성에 대한 특징, 사용법을 VanilaJS, React, React-hook-form 3가지의 방식으로 구현한 웹사이트입니다.',
          labels: [
            {
              name: 'Github',
              value: {
                type: 'link',
                data: 'https://github.com/seungahhong/form-tutorial',
              },
            },
            {
              name: '특징',
              value: {
                type: 'link',
                data: 'https://seungahhong.github.io/blog/2022/05/2022-05-30-form/',
              },
            },
            {
              name: 'Frontend',
              value: {
                type: 'text',
                data: 'vanillaJS, react, react-hook-form, scss, mui',
              },
            },
          ],
        },
      },
    ],
  },
};
