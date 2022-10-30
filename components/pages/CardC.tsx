import React, { FunctionComponent, useCallback } from 'react';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import styled from '@emotion/styled';
import { keyframes, Keyframes } from '@emotion/react';
import facepaint from 'facepaint';

import { breakpoints } from '../../helpers/styles/mediaQuery';
import { ICardItemProps } from '../types';

const mq = facepaint(breakpoints.map((bp) => `@media (max-width: ${bp}px)`));

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
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 100%;
  will-change: transform;
  cursor: pointer;

  animation: ${({ animation }) => animation} 0.75s 1 ease-in-out;
`;

const Inner = styled.figure`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 8px;
`;

const InnerImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  ${mq({
    bottom: [0, '30%'],
  })}
`;

const DesktopOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0);

  @media (hover: hover) {
    &:hover {
      background: rgba(0, 0, 0, 0.7);

      & > figcaption {
        transform: translate(-50%, -50%);
        opacity: 1;
      }
    }
  }

  ${mq({
    display: ['block', 'none'],
  })}
`;

const DesktopContent = styled.figcaption`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);
  opacity: 0;
  transition: all 0.5s;
  padding: ${(props) => props.theme.spacing['spacing-8']};

  ${(props) => props.theme.fonts.title4};
  color: #ffffff;
`;

const MobileContent = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: ${(props) => props.theme.spacing['spacing-5']}
    ${(props) => props.theme.spacing['spacing-6']};
  background: white;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;
  color: rgb(30, 30, 30);

  ${mq({
    display: ['none', 'block'],
  })}
`;

const Title = styled.h3`
  margin: ${(props) => props.theme.spacing['spacing-4']} 0;
  ${(props) => props.theme.fonts.title4};
  font-size: 1.5em;
  font-weight: 700;
`;

const Description = styled.p`
  font-size: 16px;
  margin-top: ${(props) => props.theme.spacing['spacing-4']};
`;

const Date = styled.p`
  font-size: 16px;
  margin-top: ${(props) => props.theme.spacing['spacing-4']};
  color: #7e7e7e;
`;

const CardC: FunctionComponent<ICardItemProps> = ({
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
            <InnerImage>
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit={image.objectFit as ImageProps['objectFit']}
              />
            </InnerImage>
            <DesktopOverlay>
              <DesktopContent>
                <Title>{title}</Title>
                {description && <Description>{description}</Description>}
                {date && <Description>{date}</Description>}
              </DesktopContent>
            </DesktopOverlay>
            <MobileContent>
              <Title>{title}</Title>
              {description && <Description>{description}</Description>}
              {date && <Date>{date}</Date>}
            </MobileContent>
          </>
        )}
      </Inner>
    </Container>
  );
};

export default CardC;
