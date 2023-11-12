import type {
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from 'next';
import {
  workProjectValues,
  workProjectDetailType,
} from '../../helpers/datas/work';
import { IProjectItem } from '../../types';
import Project from '../../components/Project';
import PageHeader from '../../templates/components/PageHeader';
import useInfinityScroll from '../../helpers/hooks/useInfinityScroll';
import useMediaQuery from '../../helpers/hooks/useMediaQuery';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: workProjectValues.map((data) => ({ params: { id: data.href } })),
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps: GetStaticProps<{
  id: string;
  items: IProjectItem[];
  header: string;
}> = async (context) => {
  const id = context?.params?.id?.toString() || '';
  const { header, items } = workProjectDetailType[id];

  return {
    props: {
      id,
      items,
      header,
    }, // will be passed to the page component as props
  };
};

const WorkItem = ({
  id,
  items,
  header,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const isMobile = useMediaQuery();
  const [currentRef, datas] = useInfinityScroll<IProjectItem>(
    items,
    isMobile ? 1 : 2
  );

  return (
    <div className="flex flex-col w-[100%] bg-[#f5f5f5] text-base py-[96px]">
      <PageHeader title={header} />
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

export default WorkItem;
