import { workProjectValues } from '../../helpers/datas/work';
import PageHeader from '../../templates/components/PageHeader';
import CardC from '../../components/Cards/CardC';
import useInfinityScroll from '../../helpers/hooks/useInfinityScroll';
import useMediaQuery from '../../helpers/hooks/useMediaQuery';
import { CardsType } from '../../components/type';
import { NextPageWithLayout } from '../_app';

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
    </>
  );
};

Work.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <section className="flex flex-col flex-1 max-w-[1024px] pt-[96px] pb-[60px] mx-[auto] my-[0]">
      {page}
    </section>
  );
};

export default Work;
