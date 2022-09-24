import styled from '@emotion/styled';
import facepaint from 'facepaint';

import { worksDatas } from '../../helpers/datas/works';
import { breakpoints } from '../../helpers/styles/mediaQuery';
import PageHeader from '../../components/pages/PageHeader';
import Card, { ICardProps } from '../../components/pages/Card';
import useInfinityScroll from '../../helpers/hooks/useInfinityScroll';
import useMediaQuery from '../../helpers/hooks/useMediaQuery';
import { NextPageWithLayout } from '../_app';

const mq = facepaint(breakpoints.map((bp) => `@media (max-width: ${bp}px)`));

const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 1024px;
  padding: 96px 0 60px;
  margin: 0 auto;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex: 0 1 auto;
  box-sizing: border-box;
  margin-top: ${(props) => props.theme.spacing['spacing-6']};

  & > li {
    ${mq({
      width: ['calc(4 / 12 * 100%)', '100%'],
    })}
  }
`;

const Works: NextPageWithLayout = () => {
  const isMobile = useMediaQuery();
  const [currentRef, cards] = useInfinityScroll<ICardProps>(
    worksDatas,
    isMobile ? 1 : 6
  );

  return (
    <>
      <PageHeader title="Works" />
      {cards.length > 0 && (
        <>
          <List>
            {cards.map((card, index) => (
              <li key={`WorksCard_${index}`} role="none">
                <Card {...card} href={`/works/${card.href}`} />
              </li>
            ))}
          </List>
          <div ref={currentRef} />
        </>
      )}
    </>
  );
};

Works.getLayout = function getLayout(page: React.ReactElement) {
  return <Container>{page}</Container>;
};

export default Works;
