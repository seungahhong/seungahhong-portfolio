import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import PageHeader from '../components/pages/PageHeader';
import CompanyCard from '../components/pages/company/Card';

interface IContainerProps {
  animation: any;
}

const bounce = keyframes`
  from {
    transform: translate(0, 50px);
  }
  to {
    transform: translate(0);
  }
`;

const Container = styled.section<IContainerProps>`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 1200px;
  padding: 96px 0 60px;
  margin: 0 auto;
  animation: ${({ animation }) => animation} 0.75s 1 ease-in-out;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex: 0 1 auto;
  box-sizing: border-box;
  margin-top: ${(props) => props.theme.spacing['spacing-6']};

  & > li {
    width: calc(4 / 12 * 100%);
  }
`;

const Company: NextPage = () => {
  return (
    <Container animation={bounce}>
      <PageHeader title="Company" />
      <List>
        <li>
          <CompanyCard
            href="/"
            imageSrc="/wadiz_logo.png"
            imageAlt="wadiz logo"
          />
        </li>
        <li>
          <CompanyCard
            href="/"
            imageSrc="/hancom_logo.png"
            imageAlt="hancom logo"
          />
        </li>
        <li>
          <CompanyCard
            href="/"
            imageSrc="/osstem_logo.png"
            imageAlt="osstem logo"
          />
        </li>
        <li>
          <CompanyCard
            href="/"
            imageSrc="/bluebird_logo.png"
            imageAlt="bluebird logo"
          />
        </li>
      </List>
    </Container>
  );
};

export default Company;
