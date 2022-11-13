import { FunctionComponent } from 'react';
import styled from '@emotion/styled';

interface IProgressProps {
  title: string;
  percent: number;
  isStart: boolean;
}

interface IProgressBarInProps {
  percent: number;
  isStart: boolean;
}

const ProgressTitle = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #a2a2a2;
  font-size: 16px;
  margin-bottom: 8px;
`;

const ProgressBar = styled.div`
  position: relative;
  height: 2px;
`;

const ProgressBarIn = styled.div<IProgressBarInProps>`
  background: #eb4a4c;
  height: 100%;

  ${(props) =>
    props.isStart
      ? `
    width: ${props.percent}%;
    transition: all 1s;
  `
      : `width: 0;`}
`;

const Progress: FunctionComponent<IProgressProps> = ({
  title,
  percent,
  isStart,
}) => {
  return (
    <>
      <ProgressTitle>
        <span>{title}</span>
        <span>{percent}%</span>
      </ProgressTitle>
      <ProgressBar>
        <ProgressBarIn percent={percent} isStart={isStart} />
      </ProgressBar>
    </>
  );
};

export default Progress;
