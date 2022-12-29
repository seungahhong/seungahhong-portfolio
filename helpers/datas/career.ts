import { CardsType } from '../../components/type';
import { IProjectItemType } from '../../types';

export const careerProjectValues: CardsType.ICardItemProps[] = [
  {
    title: '와디즈',
    href: 'wadiz',
    image: {
      src: '/wadiz_logo.png',
      alt: 'wadiz logo',
      objectFit: 'contain',
    },
    description: '펀딩, 스토어, 스튜디오',
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

export const careerProjectDetailType: IProjectItemType = {
  wadiz: {
    header: '와디즈',
    items: [
      {
        title: '펀딩 상품옵션 개선',
        date: '2022.07 ~ 2022.10',
        images: [
          {
            src: '/wadiz-option-change-log1.png',
            alt: '와디즈 펀딩 상품옵션 개선 첫번째 이미지',
          },
          {
            src: '/wadiz-option-change-log2.png',
            alt: '와디즈 펀딩 상품옵션 개선 두번째 이미지',
          },
        ],
        description: {
          'sub-discription': [
            '펀딩 상품이 3depth 서브옵션까지 지원 가능하도록 기능개발',
            '기존에 지원하던 옵션없는 상품, 직접입력, 상품옵션 레거시 기능/디자인을 개편작업(리액트, 디자인시스템으로 개편)',
          ],
          labels: [
            {
              name: 'Role',
              value: {
                type: 'text',
                data: 'Front-End Developer',
              },
            },
            {
              name: 'URL',
              value: {
                type: 'link',
                data: 'https://help.wadiz.kr/ko/articles/2303579-%EB%A6%AC%EC%9B%8C%EB%93%9C-%EC%98%B5%EC%85%98%EC%9D%80-%EB%AC%B4%EC%97%87%EC%9D%B4%EA%B3%A0-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%84%A4%EC%A0%95%ED%95%98%EB%82%98%EC%9A%94?_ga=2.179797347.673619699.1672277230-1234746516.1654083430&_gac=1.158640712.1672277234.CjwKCAiA76-dBhByEiwAA0_s9XTCaGTJxV3AW4e2ZKj7ImCR46BaiM_hjgZu9OAV8YCANe6HU_Zh5BoCGDsQAvD_BwE',
                title: '펀딩 리워드 옵션개선 URL',
              },
            },
            {
              name: 'Frontend',
              value: {
                type: 'text',
                data: 'React, Scss, React-query, Storybook, Jest, Cypress, MSW',
              },
            },
          ],
        },
      },
      {
        title: '서포터클럽',
        date: '2022.02 ~ 2022.05',
        images: [
          {
            src: '/wadiz-supporterclub-log1.png',
            alt: '와디즈 서포터클럽 첫번째 이미지',
          },
          {
            src: '/wadiz-supporterclub-log2.png',
            alt: '와디즈 서포터클럽 두번째 이미지',
          },
          {
            src: '/wadiz-supporterclub-log3.png',
            alt: '와디즈 서포터클럽 세번째 이미지',
          },
          {
            src: '/wadiz-supporterclub-log4.png',
            alt: '와디즈 서포터클럽 이벤트페이지 이미지',
          },
        ],
        description: {
          'sub-discription': [
            '와디즈 서비스 안에서 다양한 멤버십 콘텐츠, 혜택을 제공하는 서포터클럽 UI 기능개발',
            '펀딩/스토어 결제, 서포터클럽 가입프로세스, 서포터클럽 이벤트 페이지 개발',
          ],
          labels: [
            {
              name: 'Role',
              value: {
                type: 'text',
                data: 'Front-End Developer',
              },
            },
            {
              name: 'URL',
              value: {
                type: 'link',
                data: 'https://www.wadiz.kr/web/supporter-club/intro',
              },
            },
            {
              name: 'Frontend',
              value: {
                type: 'text',
                data: 'React, Scss, React-query, React-hook-form, Storybook, Jest, MSW',
              },
            },
          ],
        },
      },
      {
        title: '스토어 상세페이지',
        date: '2021.05 ~ 2021.08',
        images: [
          {
            src: '/wadiz-store-detail-log1.png',
            alt: '와디즈 스토어 상세페이지 첫번째 이미지',
          },
          {
            src: '/wadiz-store-detail-log2.png',
            alt: '와디즈 스토어 상세페이지 두번째 이미지',
          },
          {
            src: '/wadiz-store-detail-log3.png',
            alt: '와디즈 스토어 상세페이지 세번째 이미지',
          },
        ],
        description: {
          'sub-discription': [
            '와디즈 스토어 상세페이지 UI 기능개발',
            '스토리, 만족도평가, 반품/교환 기능개발',
            '상품 구매 프로세스 기능 개발(상품 선택, 재고수량 관리)',
          ],
          labels: [
            {
              name: 'Role',
              value: {
                type: 'text',
                data: 'Front-End Developer',
              },
            },
            {
              name: 'URL',
              value: {
                type: 'link',
                data: 'https://www.wadiz.kr/web/store/main',
              },
            },
            {
              name: 'Frontend',
              value: {
                type: 'text',
                data: 'React, Scss, React-query, Redux Toolkit, Storybook, Jest, MSW',
              },
            },
          ],
        },
      },
      {
        title: '펀딩/스토어/스튜디오 운영업무',
        date: '2020.12 ~ 2022.12',
        images: [
          {
            src: '/wadiz-operation-log1.png',
            alt: '와디즈 펀딩 메이커 스튜디오 이미지',
          },
          {
            src: '/wadiz-operation-log2.png',
            alt: '와디즈 펀딩 상세페이지 이미지',
          },
          {
            src: '/wadiz-operation-log3.png',
            alt: '와디즈 스토어 상세페이지 이미지',
          },
        ],
        description: {
          'sub-discription': [
            '펀딩 프로젝트 개설에 필요한 메이커스튜디오 기능/UI 개발',
            '펀딩/스토어 도메인 운영 업무 대응',
          ],
          labels: [
            {
              name: 'Role',
              value: {
                type: 'text',
                data: 'Front-End Developer',
              },
            },
            {
              name: 'URL',
              value: {
                type: 'link',
                data: 'https://www.wadiz.kr/web/main',
              },
            },
            {
              name: 'Frontend',
              value: {
                type: 'text',
                data: 'React, Scss, React-query, Redux Toolkit, React-hook-form, Storybook, Jest, Cypress, MSW',
              },
            },
          ],
        },
      },
    ],
  },
  hancom: {
    header: '한글과 컴퓨터',
    items: [
      {
        title: '웹한글기안기 개발',
        date: '2016.12 ~ 2020.12',
        images: [
          {
            src: '/hancom_webhwpctrl_logo.png',
            alt: '웹한글기안기 로고',
          },
        ],
        description: {
          'sub-discription': [
            '웹한글기안기 엔진모델/렌더링 관련 액션/기능개발, 프레임 관련 툴바/컨텍스트메뉴/다이얼로그/단축키 엔진연동 및 UI기능개발',
            '웹한글기안기 고객지원 컨트롤 OpenAPI 제공기능 개발',
          ],
          labels: [
            {
              name: 'Role',
              value: {
                type: 'text',
                data: 'Front-End Developer',
              },
            },
            {
              name: 'Frontend',
              value: {
                type: 'text',
                data: 'HTML, CSS, Javascript, Markdown',
              },
            },
            {
              name: 'URL',
              value: {
                type: 'link',
                data: 'https://m.etnews.com/20200214000099?obj=Tzo4OiJzdGRDbGFzcyI6Mjp7czo3OiJyZWZlcmVyIjtOO3M6NzoiZm9yd2FyZCI7czoxMzoid2ViIHRvIG1vYmlsZSI7fQ%3D%3D',
              },
            },
          ],
        },
      },
      {
        title: '웹한글 개발',
        date: '2016.12 ~ 2020.12',
        images: [
          {
            src: '/hancom_webhwp_logo.png',
            alt: '웹한글 로고',
          },
        ],
        description: {
          'sub-discription': [
            '웹한글 엔진모델/렌더링 관련 액션/기능개발, 프레임 관련 툴바/컨텍스트메뉴/다이얼로그/단축키 엔진연동 및 UI기능개발',
            '웹한글 동시편집 액션,UI 업무지원 및 웹서비스 필요한 상태표시 기능추가',
          ],
          labels: [
            {
              name: 'Role',
              value: {
                type: 'text',
                data: 'Front-End Developer',
              },
            },
            {
              name: 'Frontend',
              value: {
                type: 'text',
                data: 'HTML, CSS, Javascript, Canvas',
              },
            },
            {
              name: 'URL',
              value: {
                type: 'link',
                data: 'http://it.chosun.com/site/data/html_dir/2019/03/06/2019030601116.html',
              },
            },
          ],
        },
      },
    ],
  },
  osstem: {
    header: '오스템 임플란트',
    items: [
      {
        title: '글로벌 치과용 프로그램 개발',
        date: '2015.09 ~ 2016.12',
        images: [
          {
            src: '/osstem_elecchart_logo.png',
            alt: '글로벌 치과용 프로그램 OneClick 전자차트 메인화면 로고',
          },
        ],
        description: {
          'sub-discription': [
            '치과에서 진료를 한 후 프로그램 중 전자차트/보험차트에 진료입력, 입력된 내역 수정,삭제 기능을 제공하는 모듈개발',
            '치과진료 입력내용을 바탕으로 심사평가원에 보험청구하는 모듈개발(보험청구,EDI)',
          ],
          labels: [
            {
              name: 'Role',
              value: {
                type: 'text',
                data: 'Medical Insurance & Charge App Windows Developer',
              },
            },
            {
              name: 'Windows',
              value: {
                type: 'text',
                data: 'C#, WPF',
              },
            },
            {
              name: 'URL',
              value: {
                type: 'link',
                data: 'http://www.dentalarirang.com/news/articleView.html?idxno=25815',
              },
            },
          ],
        },
      },
      {
        title: '국내 치과용 프로그램 개발',
        date: '2013.04 ~ 2016.12',
        images: [
          {
            src: '/osstem_oldinsurechart_logo.png',
            alt: '국내 치과용 프로그램 하나로/두번에 보험차트 메인화면 로고',
          },
        ],
        description: {
          'sub-discription': [
            '심사평가원 국가기관에서 보험제도 변경될 때마다 자사에서 제공하는 프로그램에 진료/청구 기능개발',
            '심사평가원 국가기관에서 수신 받을 수 있는 전자문서(EDI)를 수신받아서 사용자에 보여주는 기능개발',
          ],
          labels: [
            {
              name: 'Role',
              value: {
                type: 'text',
                data: 'Medical Insurance & Charge App Windows Developer',
              },
            },
            {
              name: 'Windows',
              value: {
                type: 'text',
                data: 'C/C++, MFC',
              },
            },
            {
              name: 'URL',
              value: {
                type: 'link',
                data: 'http://www.dentalnews.or.kr/news/article.html?no=23828',
              },
            },
          ],
        },
      },
    ],
  },
  bluebird: {
    header: '블루버드 소프트',
    items: [
      {
        title: '단말기 모뎀 디바이스 개발/이동통신사 품질보증',
        date: '2010.08 ~ 2012.04',
        images: [
          {
            src: '/bluebird_modemdevelop_logo.png',
            alt: 'BPL-10 모뎀디바이스 개발 및 품질보증 단말기 메인화면 로고',
          },
        ],
        description: {
          'sub-discription': [
            'WindowsCE 5.0 단말기(BPL-10)에 내장된 모뎀디바이스 개발 및 품질보증 업무 담당(SKT,KT)',
            'WindowsCE 5.0, Windows Mobile 6.5 단말기(BIP-7000lite, BM-170) 모뎀디바이스 개발',
          ],
          labels: [
            {
              name: 'Role',
              value: {
                type: 'text',
                data: 'Embedded System Developer',
              },
            },
            {
              name: 'Windows',
              value: {
                type: 'text',
                data: 'C, C++, API, MFC',
              },
            },
            {
              name: '품질보증',
              value: {
                type: 'text',
                data: 'SKT, KT',
              },
            },
            {
              name: 'URL',
              value: {
                type: 'link',
                data: 'http://www.digitaltoday.co.kr/news/articleView.html?idxno=23131',
              },
            },
          ],
        },
      },
      {
        title: 'Wince, WindowsMobile 단말기 개발',
        date: '2010.06 ~ 2012.04',
        images: [
          {
            src: '/bluebird_windowsce_device_logo.png',
            alt: 'WinCE 5.0 단말기 메인화면 로고',
          },
        ],
        description: {
          'sub-discription': [
            'WindowsCE 5.0 단말기(BPL-10)를 이용한 현장 결제 기능 개발 및 단말기 유지보수',
            'Windows Mobile 5.1/6.1/65060/6530 버전의 단말기 개발',
          ],
          labels: [
            {
              name: 'Role',
              value: {
                type: 'text',
                data: 'Embedded System Developer',
              },
            },
            {
              name: 'Windows',
              value: {
                type: 'text',
                data: 'C, C++, API, MFC',
              },
            },
            {
              name: 'URL',
              value: {
                type: 'link',
                data: 'http://bluebirdcorp.com/products/Mobile-Computers/Handheld-Computers/BIP7000',
              },
            },
          ],
        },
      },
    ],
  },
};
