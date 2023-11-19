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
    <div
      className="flex flex-col p-8 bg-white rounded-[8px] h-auto lg:h-[500px]"
      style={style}
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-bold text-center title-1">{item.title}</h2>
        <p className="mb-8 font-normal text-[1rem] text-[#6c757d] text-center opacity-80">
          {item.date}
        </p>
      </div>
      <div className="flex flex-col flex-1 lg:flex-row">
        <div className="mr-12 w-full h-[200px] lg:w-[40%] lg:h-auto">
          <Carousel images={item.images} />
        </div>
        <Description>
          {descriptionElement}
          <hr className="m-[var(--spacing-5)]" />
          {item.description.labels.length > 0 && (
            <LabelOrderList>
              {item.description.labels.map((label, index) => (
                <li key={`Description_${index}`}>
                  <LabelName>{label.name}</LabelName>
                  {label.value.type === 'link' && (
                    <a
                      className="flex-1 text-[blue] underline"
                      href={label.value.data}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {label.value.title || label.value.data}
                    </a>
                  )}
                  {label.value.type === 'text' && (
                    <span className="flex-1">{label.value.data}</span>
                  )}
                </li>
              ))}
            </LabelOrderList>
          )}
        </Description>
      </div>
    </div>
  );
};

export default Project;
