import type {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from 'next';
import { worksDatas } from '../../helpers/datas/works';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: worksDatas.map((data) => ({ params: { id: data.href } })),
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.id?.toString() || '';

  return {
    props: {
      id,
    }, // will be passed to the page component as props
  };
};

const WorksItem: NextPage = ({
  id,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <div>{id} 개발 중</div>;
};

export default WorksItem;
