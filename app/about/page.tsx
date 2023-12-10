'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import SocialLink from '../components/Socials/SocialLink';
import Progress from '../components/Progress';

const About = () => {
  const currentRef = useRef<HTMLDivElement>(null);
  const [isStart, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      if (!entries[0].isIntersecting) {
        return;
      }

      setStart(true);
      observer.disconnect();
    });

    if (currentRef.current === null) {
      return;
    }

    observer.observe(currentRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-1 items-center p-[20px] flex-col lg:flex-row">
      <div className="h-[100%] w-[100%] m-[0_0_32px_0] lg:w-[40%] lg:m-[0_24px_0_0]">
        <div className="relative aspect-square rounded-[16px] overflow-hidden">
          <Image
            src="/profile_logo.webp"
            alt="프로필 로고"
            fill
            quality={80}
            loading="eager"
          />
        </div>
        <div className="flex items-center justify-center lg:hidden">
          <SocialLink
            link={{
              href: 'tel:010-7118-2519',
              title: '핸드폰번호',
            }}
            image={{
              src: '/mobile.svg',
              alt: 'mobile icon',
              width: 30,
              height: 30,
            }}
          />
          <SocialLink
            link={{
              href: 'https://github.com/seungahhong',
              title: 'github',
            }}
            image={{
              src: '/github.svg',
              alt: 'github icon',
              width: 40,
              height: 40,
            }}
          />
          <SocialLink
            link={{
              href: 'https://material-debt-c1c.notion.site/daa60481e37840ea9e1b7e1b12269942',
              title: 'notion',
            }}
            image={{
              src: '/notion.svg',
              alt: 'notion icon',
              width: 30,
              height: 30,
            }}
          />
        </div>
      </div>
      <div className="h-[100%] w-[100%] m-[0_0_12px_0] lg:w-[60%] lg:m-[0_24px_0_0]">
        <div className="m-[0_0_24px] border-b-[#a2a2a2] border-dashed border-b-[1px] pb-[12px]">
          <h3 className="mb-[12px] text-[32px] font-bold [&>em]:text-[#eb4a4c]">
            SeungaAh <em>Hong</em>
          </h3>
          <p className="text-[18px] font-normal text-[#a2a2a2]">
            Front-End Developer
          </p>
        </div>
        <div className="text-[18px] leading-[18px]">
          안녕하세요 홍승아입니다. <br />
          <br />
          저는 프론트엔드 개발자로써, 빠르게 변화하는 기술에 대해서 적극적으로
          관심을 가지고 습득하려는 도전적인 자세를 지녔으며, <br />
          제가 관심있어하는 분야에 대해서는 끊임없이 배우려고 노력하는 자세도
          가지고 있습니다. <br />
          <br />
          또한, 저 혼자만의 발전이 아닌 전체가 발전할 수 있는 개발 생태계를
          만들고 싶어서 제가 알게 된 내용에 대해서 정리하고 공유하려고 노력을
          하고 있습니다.
        </div>
        <div className="m-[40px_0_24px] border-b-[#a2a2a2] border-dashed border-b-[1px] pb-[12px]">
          <h3 className="mb-[12px] text-[32px] font-bold [&>em]:text-[#eb4a4c]">
            Programming <em>Skills</em>
          </h3>
        </div>
        <div ref={currentRef} />
        <div className="mt-[12px]">
          <Progress title="Javascript" percent={100} isStart={isStart} />
        </div>
        <div className="mt-[12px]">
          <Progress title="React" percent={90} isStart={isStart} />
        </div>
        <div className="mt-[12px]">
          <Progress title="Html,Css" percent={90} isStart={isStart} />
        </div>
        <div className="mt-[12px]">
          <Progress title="C,C++" percent={90} isStart={isStart} />
        </div>
        <div className="mt-[12px]">
          <Progress title="Typescript" percent={80} isStart={isStart} />
        </div>
        <div className="mt-[12px]">
          <Progress title="Express" percent={70} isStart={isStart} />
        </div>
      </div>
    </div>
  );
};

export default About;
