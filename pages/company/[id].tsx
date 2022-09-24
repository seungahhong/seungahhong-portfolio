import type {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from 'next';
import { companyDatas } from '../../helpers/datas/company';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: companyDatas.map((data) => ({ params: { id: data.href } })),
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

const CompanyItem: NextPage = ({
  id,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <div>{id} 개발 중</div>;
};

export default CompanyItem;
