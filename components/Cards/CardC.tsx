import React, { FunctionComponent, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from '@emotion/styled';
import { keyframes, Keyframes } from '@emotion/react';
import facepaint from 'facepaint';

import { breakpoints } from '../../helpers/styles/mediaQuery';
import { ICardItemProps } from './type';

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

      return <Link href={href}>{WrappedComponent}</Link>;
    },
    []
  );

  return (
    <Container animation={bounce}>
      <Inner>
        {withAnchore(
          href,
          <>
            <div className="absolute top-0 left-0 right-0 bottom-[30%] lg:bottom-0">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: image.objectFit }}
              />
            </div>
            <DesktopOverlay>
              <figcaption className="flex flex-col items-center w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full opacity-0 transition-all duration-500 p-[var(--spacing-8)] title-4 text-white">
                <h2 className="m-[var(--spacing-4)_0] text-[1.5em] font-bold leading-[26px] tracking-[-0.6px]">
                  {title}
                </h2>
                {description && (
                  <p className="text-[16px] mt-[var(--spacing-4)]">
                    {description}
                  </p>
                )}
                {date && (
                  <p className="text-[16px] mt-[var(--spacing-4)]">{date}</p>
                )}
              </figcaption>
            </DesktopOverlay>
            <MobileContent>
              <h2 className="m-[var(--spacing-4)_0] text-[1.5em] font-bold leading-[26px] tracking-[-0.6px]">
                {title}
              </h2>
              {description && (
                <p className="text-[16px] mt-[var(--spacing-4)]">
                  {description}
                </p>
              )}
              {date && (
                <p className="text-[16px] mt-[var(--spacing-4)] text-[#7e7e7e]">
                  {date}
                </p>
              )}
            </MobileContent>
          </>
        )}
      </Inner>
    </Container>
  );
};

export default CardC;
