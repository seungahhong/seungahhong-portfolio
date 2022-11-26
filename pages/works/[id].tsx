import type {
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from 'next';
import styled from '@emotion/styled';
import facepaint from 'facepaint';

import { breakpoints } from '../../helpers/styles/mediaQuery';
import { worksDatas, worksDetailDatas } from '../../helpers/datas/works';
import Carousel from '../../components/Carousel';
import { IWorkProjectDatas } from '../../helpers/datas/types';

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

const Project = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: white;
  border-radius: 8px;

  ${mq({
    height: ['500px', 'auto'],
  })}
`;

const Head = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  ${(props) => props.theme.fonts.title1};
  font-weight: bold;
  text-align: center;
`;

const Date = styled.p`
  margin-bottom: 2rem;
  font-weight: 400;
  font-size: 1rem;
  color: #6c757d;
  text-align: center;
  opacity: 0.8;
`;

const Content = styled.div`
  display: flex;
  flex: 1;

  ${mq({
    flexDirection: ['row', 'column'],
  })}
`;

const ContentImage = styled.div`
  width: 40%;
  margin-right: 3rem;

  ${mq({
    width: ['40%', '100%'],
    height: ['auto', '200px'],
  })}
`;

const Description = styled.div`
  ${mq({
    width: ['calc(60% - 3rem)', '100%'],
  })}
`;

const Divider = styled.hr`
  margin: ${(props) => props.theme.spacing['spacing-5']} 0;
`;

const LabelOrderList = styled.ol`
  & * {
    word-break: break-all;
  }

  & > li {
    display: flex;
    margin-bottom: ${(props) => props.theme.spacing['spacing-5']};

    ${mq({
      flexDirection: ['row', 'column'],
    })}
  }
`;

const LabelName = styled.span`
  display: inline-block;
  vertical-align: top;
  width: 50px;
  min-width: 150px;
  font-weight: 800;

  &:before {
    content: '●';
    display: inline;
    padding-right: 0.5rem;
  }

  ${mq({
    marginBottom: ['0', `4px`],
  })}
`;

const LabelValue = styled.span`
  flex: 1;
`;

const LabelLinkValue = styled.a`
  flex: 1;
  color: blue;
  text-decoration: underline;
`;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: worksDatas.map((data) => ({ params: { id: data.href } })),
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps: GetStaticProps<{
  datas: IWorkProjectDatas[];
}> = async (context) => {
  const id = context?.params?.id?.toString() || '';
  const datas = worksDetailDatas[id];

  return {
    props: {
      datas,
    }, // will be passed to the page component as props
  };
};

const WorksItem = ({
  datas,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    datas.length > 0 && (
      <Container>
        {datas.map((data, index) => (
          <Project
            key={`Work_${index}`}
            style={{ marginTop: index > 0 ? '36px' : 0 }}
          >
            <Head>
              <Title>{data.title}</Title>
              <Date>{data.date}</Date>
            </Head>
            <Content>
              <ContentImage>
                <Carousel images={data.images} />
              </ContentImage>
              <Description>
                <div>{data.description['sub-discription']}</div>
                <Divider />
                {data.description.labels.length > 0 && (
                  <LabelOrderList>
                    {data.description.labels.map((label, index) => (
                      <li key={`WorkDescription_${index}`}>
                        <LabelName>{label.name}</LabelName>
                        {label.value.type === 'link' && (
                          <LabelLinkValue
                            href={label.value.data}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {label.value.data}
                          </LabelLinkValue>
                        )}
                        {label.value.type === 'text' && (
                          <LabelValue>{label.value.data}</LabelValue>
                        )}
                      </li>
                    ))}
                  </LabelOrderList>
                )}
              </Description>
            </Content>
          </Project>
        ))}
      </Container>
    )
  );
};

export default WorksItem;
