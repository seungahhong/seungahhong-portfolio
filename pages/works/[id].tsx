import type {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from 'next';
import styled from '@emotion/styled';
import { worksDatas } from '../../helpers/datas/works';
import Carousel from '../../components/Carousel';

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

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
`;

const WorkImage = styled.div`
  width: 50%;
  height: 50%;
`;

const WorkContent = styled.div`
  flex: 1;
`;

const images = [
  {
    src: '/works_blog_1_logo.png',
    alt: '',
  },
  {
    src: '/works_blog_2_logo.png',
    alt: '',
  },
];

const WorksItem: NextPage = ({
  id,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <WorkImage>
        <Carousel images={images} />
      </WorkImage>
      <WorkContent>Content 작성 중...</WorkContent>
    </Container>
  );
};

export default WorksItem;
