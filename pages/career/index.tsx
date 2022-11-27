import styled from '@emotion/styled';
import facepaint from 'facepaint';

import { careerDatas } from '../../helpers/datas/career';
import { breakpoints } from '../../helpers/styles/mediaQuery';
import PageHeader from '../../templates/components/PageHeader';
import CardA from '../../components/Cards/CardA';
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
    ${mq({
      width: ['calc(4 / 12 * 100%)', '100%'],
    })}
  }
`;

const Career: NextPageWithLayout = () => {
  const isMobile = useMediaQuery();
  const [currentRef, cards] = useInfinityScroll<CardsType.ICardItemProps>(
    careerDatas,
    isMobile ? 1 : 6
  );

  return (
    <>
      <PageHeader title="경력" />
      {cards.length > 0 && (
        <>
          <List>
            {cards.map((card, index) => (
              <li key={`CareerCard_${index}`} role="none">
                <CardA {...card} href={`/career/${card.href}`} />
              </li>
            ))}
          </List>
          <div ref={currentRef} />
        </>
      )}
    </>
  );
};

Career.getLayout = function getLayout(page: React.ReactElement) {
  return <Container>{page}</Container>;
};

export default Career;
