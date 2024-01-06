'use client';

import { workProjectValues } from '../../helpers/datas/work';
import { ICardItemProps } from '../../types';
import useInfinityScroll from '../../helpers/hooks/useInfinityScroll';
import useMediaQuery from '../../helpers/hooks/useMediaQuery';
import Header from '../components/Header';
import CardC from '../components/Cards/CardC';

const Work = () => {
  const isMobile = useMediaQuery();
  const [currentRef, cards] = useInfinityScroll<ICardItemProps>(
    workProjectValues,
    isMobile ? 1 : 6,
  );

  return (
    <section className="flex flex-col flex-1 max-w-[1024px] pt-[96px] pb-[60px] mx-[auto] my-[0]">
      <Header title="작업" />
      {cards.length > 0 && (
        <>
          <ul className="flex flex-wrap flex-initial box-border mt-[var(--spacing-6)]">
            {cards.map((card, index) => (
              <li
                key={`WorkCard_${index}`}
                className="w-[100%] lg:w-[30%] relative m-[var(--spacing-6)_var(--spacing-6)_0]"
              >
                <CardC {...card} href={`/work/${card.href}`} />
              </li>
            ))}
          </ul>
          <div ref={currentRef} />
        </>
      )}
    </section>
  );
};

export default Work;
