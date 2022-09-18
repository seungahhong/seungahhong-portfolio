import { FunctionComponent, ReactNode } from 'react';
import styled from '@emotion/styled';

interface IPageHeaderProps {
  title: string;
  description?: string;
}

const Title = styled.h1`
  max-height: 1024px;
  text-align: center;
  ${(props) => props.theme.fonts.title1};
  font-size: 60px;
  font-weight: 800;
`;

const Description = styled.p`
  max-height: 780px;
  margin: 24px auto 0;
  font-size: 18px;
`;

const PageHeader: FunctionComponent<IPageHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <>
      {title && <Title>{title}</Title>}
      {description && <Description>{description}</Description>}
    </>
  );
};

export default PageHeader;
