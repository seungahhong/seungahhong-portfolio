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
import ProjectItem from '../../components/ProjectItem';

const mq = facepaint(breakpoints.map((bp) => `@media (max-width: ${bp}px)`));

const Container = styled.section`
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  font-size: 16px;

  ${mq({
    padding: ['4rem', '1rem'],
  })}
`;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: workProjectValues.map((data) => ({ params: { id: data.href } })),
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps: GetStaticProps<{
  items: IProjectItem[];
}> = async (context) => {
  const id = context?.params?.id?.toString() || '';
  const items = workProjectDetailType[id];

  return {
    props: {
      items,
    }, // will be passed to the page component as props
  };
};

const WorksItem = ({
  items,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    items.length > 0 && (
      <Container>
        {items.map((item, index) => (
          <ProjectItem
            key={`Work_${index}`}
            item={item}
            style={{ marginTop: index > 0 ? '36px' : 0 }}
          />
        ))}
      </Container>
    )
  );
};

export default WorksItem;
