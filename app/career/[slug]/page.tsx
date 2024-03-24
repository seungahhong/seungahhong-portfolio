import { careerProjectDetailType } from '../../../helpers/datas/career';
import Header from '../../components/Header';

import Project from '../../components/Project';

export async function generateStaticParams() {
  return Object.keys(careerProjectDetailType).map((key) => [{ slug: key }]);
}

const CareerItem = ({
  params,
}: {
  params: { slug: string };
  // searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const { header, items } = careerProjectDetailType[params.slug];

  return (
    <div className="flex flex-col w-[100%] bg-[#f5f5f5] text-base py-[96px]">
      <Header title={header} />
      {items.length > 0 && (
        <section className="width-[100%] p-4 lg:p-12">
          {items.map((item, index) => (
            <Project
              key={`CareerItem_${index}`}
              item={item}
              style={{ marginTop: index > 0 ? '36px' : 0 }}
            />
          ))}
        </section>
      )}
    </div>
  );
};

export default CareerItem;
