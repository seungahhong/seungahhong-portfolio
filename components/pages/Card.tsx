import { FunctionComponent } from 'react';
import { keyframes, Keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';

interface IPageCardProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description?: string;
  date?: string;
}

interface IContainerProps {
  animation: Keyframes;
}

const bounce = keyframes`
  from {
    transform: translate(0, 100px);
  }
  to {
    transform: translate(0);
  }
`;

const Container = styled.div<IContainerProps>`
  will-change: transform;
  padding: 20px;
  overflow: hidden;
  animation: ${({ animation }) => animation} 0.75s 1 ease-in-out;

  & a {
    text-decoration: none;
    color: inherit;
  }
`;

const Inner = styled.div`
  border-radius: 16px;
  transform: translate(0);
  transition: all 0.2s;
  height: 100%;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 15%) 0px 0px 8px;
  overflow: hidden;

  @media (hover: hover) {
    &:hover {
      transform: translate(0, -10px);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }
  }
`;

const CardImage = styled.div`
  position: relative;
  height: 0;
  padding-bottom: 70%;
  overflow: hidden;

  img {
    position: absolute;
    object-fit: contain;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  margin-top: ${(props) => props.theme.spacing['spacing-6']};
  padding: 20px;
  background: rgba(248, 249, 250, 0.8);
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;
  padding-bottom: 15%;
`;

const Title = styled.h2`
  margin: ${(props) => props.theme.spacing['spacing-5']} 0;
  ${(props) => props.theme.fonts.title6};
  font-size: 1.5em;
  font-weight: 700;
`;

const Description = styled.p`
  font-size: 16px;
  margin-top: ${(props) => props.theme.spacing['spacing-2']};
`;

const Card: FunctionComponent<IPageCardProps> = ({
  href,
  imageSrc,
  imageAlt,
  title,
  description,
  date,
}) => {
  return (
    <Container animation={bounce}>
      <Inner>
        <Link href={href}>
          <a href={href}>
            <CardImage>
              <Image
                src={imageSrc}
                alt={imageAlt}
                layout="fill"
                aria-label="logo"
              />
            </CardImage>
            <Content>
              <Title>{title}</Title>
              {description && <Description>{description}</Description>}
              {date && <Description>{date}</Description>}
            </Content>
          </a>
        </Link>
      </Inner>
    </Container>
  );
};

export default Card;
