import { FunctionComponent } from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';
import facepaint from 'facepaint';
import useMediaQuery from '../helpers/hooks/useMediaQuery';
import { breakpoints } from '../helpers/styles/mediaQuery';

import NavLink from './NavLink';

const mq = facepaint(breakpoints.map((bp) => `@media (max-width: ${bp}px)`));

const Container = styled.header`
  position: relative;
  background: yellow;

  ${mq({
    position: ['fixed', 'relative'],
    width: ['25%', '100%'],
    left: 0,
    top: 0,
    bottom: 0,
    padding: ['0', '80px 40px'],
  })}
`;

const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(22, 27, 33, 0.7);
`;

const Content = styled.div`
  position: absolute;
  bottom: 0;
  padding: 60px 30px 52px;
  color: #fff;
  font-weight: 600;

  & > h3 {
    font-size: 28px;
    ${(props) =>
      mq({
        marginBottom: [
          props.theme.spacing['spacing-5'],
          props.theme.spacing['spacing-3'],
        ],
      })}
  }

  & > p {
    font-size: 20px;
  }
`;

const NavMenu = styled.div`
  margin-top: 30px;

  & > ul {
    list-style: none;
    font-size: 20px;
    line-height: 1.6;

    a {
      text-decoration: none;
      color: #fff;
    }
  }
`;

const SocialLinkContainer = styled.div`
  display: grid;
  grid-template-columns: 40px 40px 40px 40px;
  grid-gap: 8px;
  margin-top: 36px;
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.7);
  color: #161b21;
  width: 40px;
  height: 40px;
  min-width: 40px;
  font-size: 20px;
  border: none;
  border-radius: 50%;
`;

const Navbar: FunctionComponent = () => {
  const isMobile = useMediaQuery();

  return (
    <Container>
      <Image src="/background-NavBar.jpg" alt="" layout="fill" aria-hidden />
      <Overlay />
      <Content>
        <h3>홍승아</h3>
        <p>성장과 협업을 좋아하는 프론트엔드 개발자입니다.</p>
        {!isMobile && (
          <>
            <NavMenu>
              <NavLink />
            </NavMenu>
            <SocialLinkContainer>
              <SocialLink
                href="https://github.com/seungahhong"
                rel="noopener noreferrer"
                title="github"
                target="_blank"
              >
                <Image
                  src="/github.svg"
                  alt="github icon"
                  width={40}
                  height={40}
                />
              </SocialLink>
              <SocialLink
                href="https://material-debt-c1c.notion.site/daa60481e37840ea9e1b7e1b12269942"
                rel="noopener noreferrer"
                title="notion"
                target="_blank"
              >
                <Image
                  src="/notion.svg"
                  alt="notion icon"
                  width={30}
                  height={30}
                />
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/seungahhong/"
                rel="noopener noreferrer"
                title="linkedin"
                target="_blank"
              >
                <Image
                  src="/linkedin.svg"
                  alt="linkedin icon"
                  width={38}
                  height={38}
                />
              </SocialLink>
              <SocialLink
                href="https://www.facebook.com/people/%ED%99%8D%EC%8A%B9%EC%95%84/100002349562000/"
                rel="noopener noreferrer"
                title="facebook"
                target="_blank"
              >
                <Image
                  src="/facebook.svg"
                  alt="facebook icon"
                  width={32}
                  height={32}
                />
              </SocialLink>
            </SocialLinkContainer>
          </>
        )}
      </Content>
    </Container>
  );
};

export default Navbar;
