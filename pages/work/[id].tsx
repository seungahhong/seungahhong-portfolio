import type {
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from 'next';
import styled from '@emotion/styled';
import facepaint from 'facepaint';

import { breakpoints } from '../../helpers/styles/mediaQuery';
import {
  workProjectValues,
  workProjectDetailType,
} from '../../helpers/datas/work';
import { IProjectItem } from '../../types';
import Project from '../../components/Project';
import PageHeader from '../../templates/components/PageHeader';
import useInfinityScroll from '../../helpers/hooks/useInfinityScroll';
import useMediaQuery from '../../helpers/hooks/useMediaQuery';

const mq = facepaint(breakpoints.map((bp) => `@media (max-width: ${bp}px)`));

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #f5f5f5;
  font-size: 16px;
  padding: 96px 0;
`;

const Content = styled.section`
  width: 100%;
  ${mq({
    padding: ['3rem', '1rem'],
  })}
`;

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
    <Container>
      <PageHeader title={header} />
      {items.length > 0 && (
        <>
          <Content>
            {datas.map((item, index) => (
              <Project
                key={`CareerItem_${index}`}
                item={item}
                style={{ marginTop: index > 0 ? '36px' : 0 }}
              />
            ))}
          </Content>
          <div ref={currentRef} />
        </>
      )}
      <div ref={currentRef} />
    </Container>
  );
};

export default WorkItem;
