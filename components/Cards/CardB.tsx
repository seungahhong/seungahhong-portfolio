import { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from '@emotion/styled';
import facepaint from 'facepaint';

import { breakpoints } from '../../helpers/styles/mediaQuery';
import { ICardBItemProps } from './type';

const mq = facepaint(breakpoints.map((bp) => `@media (max-width: ${bp}px)`));

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Date = styled.div`
  margin-top: ${(props) => props.theme.spacing['spacing-4']};
  color: #abb7b7;
`;

const Title = styled.h2`
  ${(props) => props.theme.fonts.title1};
  font-weight: 800;
  margin-top: ${(props) => props.theme.spacing['spacing-4']};

  & > a {
    text-decoration: none;
    color: #2a2f36;

    @media (hover: hover) {
      &:hover {
        color: #a2ded0;
      }
    }
  }
`;

const Content = styled.div`
  display: flex;
  margin-top: ${(props) => props.theme.spacing['spacing-6']};

  ${mq({
    flexDirection: ['row', 'column'],
  })}
`;

const CardImage = styled.div`
  ${mq({
    width: ['33.333%', 'auto'],
    marginRight: ['1rem', '0'],
  })}

  & img {
    aspect-ratio: auto 800 / 600;
  }
`;

const Description = styled.div`
  flex: 1 1 0;
  color: rgba(75, 85, 99);
`;

const CardB: FunctionComponent<ICardBItemProps> = ({
  date,
  title,
  className,
  descriptions,
  image: { src, alt, width = 800, height = 600 },
  link: { href, label },
}) => {
  return (
    <Container className={className}>
      {title && (
        <Title>
          <Link href={href} passHref>
            <a
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </a>
          </Link>
        </Title>
      )}
      {date && <Date>{date}</Date>}
      <Content>
        <CardImage>
          <Image src={src} alt={alt} width={width} height={height} />
        </CardImage>
        {descriptions && <Description>{descriptions}</Description>}
      </Content>
    </Container>
  );
};

export default CardB;
