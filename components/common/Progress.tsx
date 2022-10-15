import { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { keyframes, Keyframes } from '@emotion/react';

interface IProgressProps {
  title: string;
  percent: number;
}

interface IProgressBarInProps {
  percent: number;
}

const bounce = (width: number) => keyframes`
  from {
    width: 0;
  }
  to {
    width: ${width}%;
  }
`;
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
  width: ${(props) => props.percent}%;
  animation: ${(props) => bounce(props.percent)} 1s 1 ease-in-out;
  transition: all 1s;
`;

const Progress: FunctionComponent<IProgressProps> = ({ title, percent }) => {
  return (
    <>
      <ProgressTitle>
        <span>{title}</span>
        <span>{percent}%</span>
      </ProgressTitle>
      <ProgressBar>
        <ProgressBarIn percent={percent} />
      </ProgressBar>
    </>
  );
};

export default Progress;
