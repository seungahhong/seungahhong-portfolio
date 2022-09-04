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

const Navbar: FunctionComponent = () => {
  const [isMobile] = useMediaQuery();

  return (
    <Container>
      <Image src="/background-NavBar.jpg" alt="" layout="fill" aria-hidden />
      <Overlay />
      <Content>
        <h3>홍승아</h3>
        <p>성장과 협업을 좋아하는 프론트엔드 개발자입니다.</p>
        {!isMobile && (
          <NavMenu>
            <NavLink />
          </NavMenu>
        )}
      </Content>
    </Container>
  );
};

export default Navbar;
