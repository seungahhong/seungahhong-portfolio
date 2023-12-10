'use client';

import { careerProjectDetailType } from '../../../helpers/datas/career';
import { IProjectItem } from '../../../types';
import useInfinityScroll from '../../../helpers/hooks/useInfinityScroll';
import useMediaQuery from '../../../helpers/hooks/useMediaQuery';
import Header from '../../components/Header';

import Project from '../../components/Project';

const CareerItem = ({
  params,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const { header, items } = careerProjectDetailType[params.slug];

  const isMobile = useMediaQuery();
  const [currentRef, datas] = useInfinityScroll<IProjectItem>(
    items,
    isMobile ? 1 : 2
  );
  return (
    <div className="flex flex-col w-[100%] bg-[#f5f5f5] text-base py-[96px]">
      <Header title={header} />
      {items.length > 0 && (
        <>
          <section className="width-[100%] p-4 lg:p-12">
            {datas.map((item, index) => (
              <Project
                key={`CareerItem_${index}`}
                item={item}
                style={{ marginTop: index > 0 ? '36px' : 0 }}
              />
            ))}
          </section>
          <div ref={currentRef} />
        </>
      )}
      <div ref={currentRef} />
    </div>
  );
};

export default CareerItem;
