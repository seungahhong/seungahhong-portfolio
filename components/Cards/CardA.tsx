import React, { FunctionComponent, useCallback } from 'react';
import { keyframes, Keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import Image, { ImageProps } from 'next/image';
import { ICardItemProps } from './type';

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
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  padding: 20px;
  background: rgba(248, 249, 250, 0.8);
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;
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

const Date = styled.p`
  font-size: 16px;
  margin-top: ${(props) => props.theme.spacing['spacing-4']};
  color: #7e7e7e;
`;

const CardA: FunctionComponent<ICardItemProps> = ({
  href,
  image,
  title,
  description,
  date,
}) => {
  const withAnchore = useCallback(
    (href: string | undefined, WrappedComponent: React.ReactNode) => {
      if (!href) {
        return WrappedComponent;
      }

      return (
        <Link href={href}>
          <a href={href}>{WrappedComponent}</a>
        </Link>
      );
    },
    []
  );

  return (
    <Container animation={bounce}>
      <Inner>
        {withAnchore(
          href,
          <>
            <CardImage>
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                aria-label="logo"
                objectFit={image.objectFit as ImageProps['objectFit']}
              />
            </CardImage>
            <Content>
              <Title>{title}</Title>
              {description && <Description>{description}</Description>}
              {date && <Date>{date}</Date>}
            </Content>
          </>
        )}
      </Inner>
    </Container>
  );
};

export default CardA;
