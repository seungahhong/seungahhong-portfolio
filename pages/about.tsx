import Image from 'next/image';
import styled from '@emotion/styled';
import facepaint from 'facepaint';
import { NextPageWithLayout } from './_app';
import { breakpoints } from '../helpers/styles/mediaQuery';
import SocialLink from '../components/social/SocialLink';
import Progress from '../components/common/Progress';

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
  return (
    <Content>
      <Profile>
        <ImageProfile>
          <Image src="/profile_logo.png" alt="프로필 로고" layout="fill" />
        </ImageProfile>
        <SocialProfile>
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
          안녕하세요 홍승아입니다. <br />
          저는 프론트엔드 개발자로써, 빠르게 변화하는 기술에 대해서 적극적으로
          관심을 가지고 습득하려는 도전적인 자세를 지녔으며, <br />
          제가 관심있어하는 분야에 대해서는 끊임없이 배우려고 노력하는 자세도
          가지고 있습니다. <br />
          또한, 저 혼자만의 발전이 아닌 전체가 발전할 수 있는 개발 생태계를
          만들고 싶어서 제가 알게 된 내용에 대해서 정리하고 공유하려고 노력을
          하고 있습니다.
        </Description>
        <Title>
          <Name>
            Programming <em>Skills</em>
          </Name>
        </Title>
        <ProgressContainer>
          <Progress title="Javascript" percent={100} />
        </ProgressContainer>
        <ProgressContainer>
          <Progress title="React" percent={90} />
        </ProgressContainer>
        <ProgressContainer>
          <Progress title="Html,Css" percent={90} />
        </ProgressContainer>
        <ProgressContainer>
          <Progress title="C,C++" percent={90} />
        </ProgressContainer>
        <ProgressContainer>
          <Progress title="Typescript" percent={70} />
        </ProgressContainer>
        <ProgressContainer>
          <Progress title="Express" percent={70} />
        </ProgressContainer>
      </Explanation>
    </Content>
  );
};

About.getLayout = function getLayout(page: React.ReactElement) {
  return <Container>{page}</Container>;
};

export default About;
