import { FunctionComponent, ReactNode } from 'react';
import styled from '@emotion/styled';
import Navbar from './NavBar';
import Footer from './Footer';
import facepaint from 'facepaint';

import { breakpoints } from '../helpers/styles/mediaQuery';

const mq = facepaint(breakpoints.map((bp) => `@media (max-width: ${bp}px)`));

interface LayoutProps {
  children: ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0 auto;
`;

const Content = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  ${mq({
    paddingLeft: ['25%', '0'],
  })}
`;

const FooterLayout = styled.section<LayoutProps>`
  ${mq({
    paddingLeft: ['25%', '0'],
  })}
`;

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <Content>{children}</Content>
      <FooterLayout>
        <Footer />
      </FooterLayout>
    </Container>
  );
};

export default Layout;
