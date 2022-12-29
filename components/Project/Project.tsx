import type { CSSProperties, FunctionComponent } from 'react';
import { useMemo, useState } from 'react';
import styled from '@emotion/styled';
import facepaint from 'facepaint';

import { breakpoints } from '../../helpers/styles/mediaQuery';
import { IProjectItem } from '../../types';
import Carousel from '../Carousel';

const mq = facepaint(breakpoints.map((bp) => `@media (max-width: ${bp}px)`));

interface IProjectProps {
  item: IProjectItem;
  style?: CSSProperties;
}

const Container = styled.div`
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

  & > p {
    white-space: pre-line;
    ${mq({
      marginTop: ['0', '16px'],
    })}
  }

  & > ul > li {
    display: flex;
    align-items: baseline;

    &:before {
      display: inline;
      content: '●';
    }

    & > span {
      line-height: 20px;
      padding-left: ${(props) => props.theme.spacing['spacing-5']};
    }
  }
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

const Project: FunctionComponent<IProjectProps> = ({ item, style }) => {
  const descriptionElement = useMemo(() => {
    const description = item.description['sub-discription'];
    if (Array.isArray(description)) {
      return (
        <ul>
          {description.map((desc, index) => (
            <li key={`discription_${index}`}>
              <span>{desc}</span>
            </li>
          ))}
        </ul>
      );
    }
    return <p>{description}</p>;
  }, [item.description]);

  return (
    <Container style={style}>
      <Head>
        <Title>{item.title}</Title>
        <Date>{item.date}</Date>
      </Head>
      <Content>
        <ContentImage>
          <Carousel images={item.images} />
        </ContentImage>
        <Description>
          {descriptionElement}
          <Divider />
          {item.description.labels.length > 0 && (
            <LabelOrderList>
              {item.description.labels.map((label, index) => (
                <li key={`Description_${index}`}>
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
    </Container>
  );
};

export default Project;
