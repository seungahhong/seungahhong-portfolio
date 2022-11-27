import styled from '@emotion/styled';
import facepaint from 'facepaint';

import { workProjectValues } from '../../helpers/datas/work';
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
  margin-top: ${(props) => props.theme.spacing['spacing-6']};

  & > li {
    position: relative;
    margin: ${(props) => props.theme.spacing['spacing-6']}
      ${(props) => props.theme.spacing['spacing-6']} 0;
    ${mq({
      width: ['30%', '100%'],
    })}
  }
`;

const Work: NextPageWithLayout = () => {
  const isMobile = useMediaQuery();
  const [currentRef, cards] = useInfinityScroll<CardsType.ICardItemProps>(
    workProjectValues,
    isMobile ? 1 : 6
  );

  return (
    <>
      <PageHeader title="작업" />
      {cards.length > 0 && (
        <>
          <List>
            {cards.map((card, index) => (
              <li key={`WorkCard_${index}`} role="none">
                <CardC {...card} href={`/work/${card.href}`} />
              </li>
            ))}
          </List>
          <div ref={currentRef} />
        </>
      )}
    </>
  );
};

Work.getLayout = function getLayout(page: React.ReactElement) {
  return <Container>{page}</Container>;
};

export default Work;
