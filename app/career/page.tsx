'use client';

import { careerProjectValues } from '../../helpers/datas/career';
import { ICardItemProps } from '../../types';
import useInfinityScroll from '../../helpers/hooks/useInfinityScroll';
import useMediaQuery from '../../helpers/hooks/useMediaQuery';
import CardA from '../components/Cards/CardA';
import Header from '../components/Header';

const Career = () => {
  const isMobile = useMediaQuery();
  const [currentRef, cards] = useInfinityScroll<ICardItemProps>(
    careerProjectValues,
    isMobile ? 1 : 6,
  );

  return (
    <section className="flex flex-col flex-1 max-w-[1024px] pt-[96px] pb-[60px] mx-[auto] my-0">
      <Header title="경력" />
      {cards.length > 0 && (
        <>
          <ul className="flex flex-wrap flex-initial mt-[var(--spacing-6)]">
            {cards.map((card, index) => (
              <li
                key={`CareerCard_${index}`}
                className="w-[100%] lg:w-[calc(4_/_12_*_100%)]"
              >
                <CardA {...card} href={`/career/${card.href}`} />
              </li>
            ))}
          </ul>
          <div ref={currentRef} />
        </>
      )}
    </section>
  );
};

export default Career;
