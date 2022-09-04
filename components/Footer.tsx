import { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.spacing['spacing-5']};
  border-top: 1px solid gray;
`;

const Footer: FunctionComponent = () => {
  return (
    <Container>
      Thank You for Visiting HongSeungAh Portfolio,
      <br />
      Powered By NextJs.
    </Container>
  );
};

export default Footer;
