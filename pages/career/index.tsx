import { careerProjectValues } from '../../helpers/datas/career';
import PageHeader from '../../templates/components/PageHeader';
import CardA from '../../components/Cards/CardA';
import useInfinityScroll from '../../helpers/hooks/useInfinityScroll';
import useMediaQuery from '../../helpers/hooks/useMediaQuery';
import { CardsType } from '../../components/type';
import { NextPageWithLayout } from '../_app';

const Career: NextPageWithLayout = () => {
  const isMobile = useMediaQuery();
  const [currentRef, cards] = useInfinityScroll<CardsType.ICardItemProps>(
    careerProjectValues,
    isMobile ? 1 : 6
  );

  return (
    <>
      <PageHeader title="경력" />
      {cards.length > 0 && (
        <>
          <ul className="flex flex-wrap flex-initial mt-[var(--spacing-6)]">
            {cards.map((card, index) => (
              <li
                key={`CareerCard_${index}`}
                role="none"
                className="w-[100%] lg:w-[calc(4_/_12_*_100%)]"
              >
                <CardA {...card} href={`/career/${card.href}`} />
              </li>
            ))}
          </ul>
          <div ref={currentRef} />
        </>
      )}
    </>
  );
};

Career.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <section className="flex flex-col flex-1 max-w-[1024px] pt-[96px] pb-[60px] mx-[auto] my-0">
      {page}
    </section>
  );
};

export default Career;
