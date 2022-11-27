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
} from '../../helpers/datas/works';
import { IProjectItem } from '../../types';
import Project from '../../components/Project';
import PageHeader from '../../templates/components/PageHeader';

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
}> = async (context) => {
  const id = context?.params?.id?.toString() || '';
  const items = workProjectDetailType[id];

  return {
    props: {
      id,
      items,
    }, // will be passed to the page component as props
  };
};

const WorksItem = ({
  id,
  items,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    items.length > 0 && (
      <Container>
        <PageHeader title={`${id === 'project' ? '프로젝트' : '스터디'}`} />
        <Content>
          {items.map((item, index) => (
            <Project
              key={`Work_${index}`}
              item={item}
              style={{ marginTop: index > 0 ? '36px' : 0 }}
            />
          ))}
        </Content>
      </Container>
    )
  );
};

export default WorksItem;
