import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';
import facepaint from 'facepaint';

import { breakpoints } from '../helpers/styles/mediaQuery';
import SocialLink from '../components/Socials/SocialLink';
import Progress from '../components/Progress';
import { NextPageWithLayout } from './_app';

const mq = facepaint(breakpoints.map((bp) => `@media (max-width: ${bp}px)`));

const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 1024px;
  padding: 96px 0 60px;
  margin: 0 auto;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 20px;

  ${mq({
    flexDirection: ['row', 'column'],
  })}
`;

const Profile = styled.div`
  height: 100%;

  ${mq({
    width: ['40%', '100%'],
    margin: ['0 24px 0 0', '0 0 32px 0'],
  })}
`;

const ImageProfile = styled.div`
  position: relative;
  aspect-ratio: 1 / 1;
  border-radius: 16px;
  overflow: hidden;
`;

const SocialProfile = styled.div`
  align-items: center;
  justify-content: center;
  ${mq({
    display: ['none', 'flex'],
  })}
`;

const Explanation = styled.div`
  height: 100%;

  ${mq({
    width: ['60%', '100%'],
    margin: ['0 24px 0 0', '0 0 12px 0'],
  })}
`;

const Title = styled.div`
  margin: 40px 0 24px;
  border-bottom: 1px dashed #a2a2a2;
  padding-bottom: 12px;
`;

const Description = styled.div`
  font-size: 18px;
  line-height: 18px;
`;

const Name = styled.h3`
  margin-bottom: 12px;
  font-size: 32px;
  font-weight: 700;

  & > em {
    color: #eb4a4c;
  }
`;

const Role = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #a2a2a2;
`;

const ProgressContainer = styled.div`
  margin-top: 12px;
`;

const About: NextPageWithLayout = () => {
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
    <Content>
      <Profile>
        <ImageProfile>
          <Image src="/profile_logo.png" alt="????????? ??????" layout="fill" />
        </ImageProfile>
        <SocialProfile>
          <SocialLink
            link={{
              href: 'tel:010-7118-2519',
              title: '???????????????',
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
        </SocialProfile>
      </Profile>
      <Explanation>
        <Title style={{ marginTop: 0 }}>
          <Name>
            SeungaAh <em>Hong</em>
          </Name>
          <Role>Front-End Developer</Role>
        </Title>
        <Description>
          ??????????????? ??????????????????. <br />
          <br />
          ?????? ??????????????? ???????????????, ????????? ???????????? ????????? ????????? ???????????????
          ????????? ????????? ??????????????? ???????????? ????????? ????????????, <br />
          ?????? ?????????????????? ????????? ???????????? ???????????? ???????????? ???????????? ?????????
          ????????? ????????????. <br />
          <br />
          ??????, ??? ???????????? ????????? ?????? ????????? ????????? ??? ?????? ?????? ????????????
          ????????? ????????? ?????? ?????? ??? ????????? ????????? ???????????? ??????????????? ?????????
          ?????? ????????????.
        </Description>
        <Title>
          <Name>
            Programming <em>Skills</em>
          </Name>
        </Title>
        <div ref={currentRef} />
        <ProgressContainer>
          <Progress title="Javascript" percent={100} isStart={isStart} />
        </ProgressContainer>
        <ProgressContainer>
          <Progress title="React" percent={90} isStart={isStart} />
        </ProgressContainer>
        <ProgressContainer>
          <Progress title="Html,Css" percent={90} isStart={isStart} />
        </ProgressContainer>
        <ProgressContainer>
          <Progress title="C,C++" percent={90} isStart={isStart} />
        </ProgressContainer>
        <ProgressContainer>
          <Progress title="Typescript" percent={70} isStart={isStart} />
        </ProgressContainer>
        <ProgressContainer>
          <Progress title="Express" percent={70} isStart={isStart} />
        </ProgressContainer>
      </Explanation>
    </Content>
  );
};

About.getLayout = function getLayout(page: React.ReactElement) {
  return <Container>{page}</Container>;
};

export default About;
