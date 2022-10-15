import { FunctionComponent } from 'react';
import styled from '@emotion/styled';

import facepaint from 'facepaint';
import { breakpoints } from '../../helpers/styles/mediaQuery';

const mq = facepaint(breakpoints.map((bp) => `@media (max-width: ${bp}px)`));

interface IPageHeaderProps {
  title: string;
  description?: string;
}

const Title = styled.h1`
  max-height: 1024px;
  text-align: center;
  ${(props) => props.theme.fonts.title1};
  font-weight: 800;

  ${mq({
    fontSize: ['60px', '48px'],
  })}
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
