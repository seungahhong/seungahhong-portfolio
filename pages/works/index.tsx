import styled from '@emotion/styled';
import facepaint from 'facepaint';

import { worksDatas } from '../../helpers/datas/works';
import { breakpoints } from '../../helpers/styles/mediaQuery';
import PageHeader from '../../templates/components/PageHeader';
import CardC from '../../components/Cards/CardC';
import useInfinityScroll from '../../helpers/hooks/useInfinityScroll';
import useMediaQuery from '../../helpers/hooks/useMediaQuery';
import { CardsType } from '../../components/type';
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

  & > li {
    position: relative;
    margin: ${(props) => props.theme.spacing['spacing-6']}
      ${(props) => props.theme.spacing['spacing-6']} 0;
    ${mq({
      width: ['30%', '100%'],
    })}
  }
`;

const Works: NextPageWithLayout = () => {
  const isMobile = useMediaQuery();
  const [currentRef, cards] = useInfinityScroll<CardsType.ICardItemProps>(
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
                <CardC {...card} href={`/works/${card.href}`} />
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
