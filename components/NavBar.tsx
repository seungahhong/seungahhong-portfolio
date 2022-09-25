import { FunctionComponent, useCallback, useState } from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';
import facepaint from 'facepaint';
import Social from './Social';
import useMediaQuery from '../helpers/hooks/useMediaQuery';
import { breakpoints } from '../helpers/styles/mediaQuery';

import NavLink from './NavLink';

const mq = facepaint(breakpoints.map((bp) => `@media (max-width: ${bp}px)`));

interface INavMenuProps {
  color: string;
  fontWeight: number | string;
}

interface INavigationProps {
  isOpen: boolean;
}

const Container = styled.header`
  position: relative;

  ${(props) =>
    mq({
      position: ['fixed', 'relative'],
      width: ['25%', '100%'],
      left: 0,
      top: 0,
      bottom: 0,
      padding: ['0', props.theme.spacing['spacing-7']],
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
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  color: #fff;
  font-weight: 600;

  & > h3 {
    font-size: 28px;
    ${(props) =>
      mq({
        marginBottom: [props.theme.spacing['spacing-5'], 0],
        fontSize: ['28px', '20px'],
      })}
  }

  & > p {
    font-size: 20px;
  }

  ${(props) =>
    mq({
      left: ['auto', 0],
      top: ['auto', 0],
      right: ['auto', 0],
      alignItems: ['stretch', 'center'],
      flexDirection: ['column', 'row'],
      padding: ['60px 30px 52px', props.theme.spacing['spacing-5']],
      justifyContent: ['normal', 'space-between'],
    })}
`;

const NavMenu = styled.div<INavMenuProps>`
  margin-top: 30px;

  & > ul {
    list-style: none;
    font-size: 20px;
    line-height: 1.6;

    a {
      text-decoration: none;
      font-weight: ${(props) => props.fontWeight};
      color: ${(props) => props.color};
    }
  }
`;

const Menu = styled.div`
  position: relative;
  width: 24px;
  height: 20px;
  margin-left: 8px;

  & > span:before {
    top: -8px;
  }

  & > span:after {
    top: 8px;
  }
`;

const MenuItem = styled.span`
  position: absolute;
  top: 8px;
  left: 0;
  width: 100%;
  height: 3px;
  -webkit-transition: all 0.1s;
  transition: all 0.1s;
  background: rgba(255, 255, 255, 0.7);

  &:before {
    content: '';
    position: absolute;
    top: 8px;
    left: 0;
    width: 100%;
    height: 3px;
    transition: all 0.1s;
    background: rgba(255, 255, 255, 0.7);
  }

  &:after {
    content: '';
    position: absolute;
    top: 8px;
    left: 0;
    width: 100%;
    height: 3px;
    transition: all 0.1s;
    background: rgba(255, 255, 255, 0.7);
  }
`;

const Navigation = styled.section<INavigationProps>`
  position: fixed;
  left: ${(props) => (props.isOpen ? 0 : '100%')};
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  background: #ffffff;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  padding: ${(props) => props.theme.spacing['spacing-5']};
  transition: all 0.75s ease;
`;

const NavTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > h2 {
    ${(props) => props.theme.fonts.title1};
  }
`;
const Navbar: FunctionComponent = () => {
  const isMobile = useMediaQuery();
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleNavClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleNavOpen = useCallback(() => {
    setOpen(true);
  }, []);

  return (
    <>
      <Container>
        <Image src="/background-NavBar.jpg" alt="" layout="fill" aria-hidden />
        <Overlay />
        <Content>
          <h3>홍승아 포트폴리오</h3>
          {isMobile && (
            <Menu onClick={handleNavOpen}>
              <MenuItem />
            </Menu>
          )}
          {!isMobile && (
            <>
              <p>성장과 협업을 좋아하는 프론트엔드 개발자입니다.</p>
              <NavMenu color="#ffffff" fontWeight="normal">
                <NavLink />
              </NavMenu>
              <Social />
            </>
          )}
        </Content>
      </Container>
      <Navigation isOpen={isOpen}>
        <NavTitle>
          <h2>Menu</h2>
          <Image
            src="/close_circle.svg"
            alt="Close Button"
            width={32}
            height={32}
            onClick={handleNavClose}
          />
        </NavTitle>
        <NavMenu color="#000000" fontWeight={700}>
          <NavLink handleClose={handleNavClose} />
        </NavMenu>
        <Social />
      </Navigation>
    </>
  );
};

export default Navbar;
