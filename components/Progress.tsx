import { FunctionComponent } from 'react';

interface IProgressProps {
  title: string;
  percent: number;
  isStart: boolean;
}

interface IProgressBarInProps {
  percent: number;
  isStart: boolean;
}

const Progress: FunctionComponent<IProgressProps> = ({
  title,
  percent,
  isStart,
}) => {
  return (
    <>
      <span className="flex justify-between items-center text-[#a2a2a2] text-[16px] mb-[8px]">
        <span>{title}</span>
        <span>{percent}%</span>
      </span>
      <div className="relative h-[2px]">
        <div
          className={`bg-[#eb4a4c] h-full ${
            isStart ? `transition-all duration-1000` : null
          }`}
          style={{ width: isStart ? `${percent}%` : 0 }}
        ></div>
      </div>
    </>
  );
};

export default Progress;
