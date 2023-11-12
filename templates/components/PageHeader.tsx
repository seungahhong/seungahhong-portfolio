import { FunctionComponent } from 'react';

interface IPageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: FunctionComponent<IPageHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <>
      {title && (
        <h1 className="title-3 max-h-[1024px] text-center font-extrabold !text-[48px] lg:!text-[60px]">
          {title}
        </h1>
      )}
      {description && (
        <p className="max-h-[780px] mt-[24px] mb-0 mx-auto text-[18px]">
          {description}
        </p>
      )}
    </>
  );
};

export default PageHeader;
