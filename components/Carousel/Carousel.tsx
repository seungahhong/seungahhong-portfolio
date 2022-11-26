import { FunctionComponent, useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Image from 'next/image';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';
import { ICarouselProps } from './type';

type ArrowButtonTypes = {
  direction: 'left' | 'right';
};

interface ICarouselListItem {
  activeIndex: number;
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const CarouselList = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const CarouselListItem = styled.li<ICarouselListItem>`
  position: relative;
  flex: 1 0 100%;
  width: 100%;
  height: calc(100% - 32px);

  transform: translateX(-${({ activeIndex }) => activeIndex * 100}%);
  transition: 300ms ease-in-out;

  & > img {
    width: 100%;
    height: fit-content;
  }
`;

const ArrowButton = styled.button<ArrowButtonTypes>`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 1;
  cursor: pointer;
  background: transparent;
  border: none;
  color: #000;
  font-size: 40px;
  margin: 0;
  padding: 0;

  ${({ direction }) =>
    direction === 'left'
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `};
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0);
  font-size: 12px;
  font-weight: 900;

  & > svg {
    font-size: 24px;
  }
`;

const Carousel: FunctionComponent<ICarouselProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const handleLeftArrowClick = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 < 0 ? images.length - 1 : prev - 1));
  }, [images]);

  const handleRightArrowClick = useCallback(() => {
    setActiveIndex((prev) => (prev >= images.length - 1 ? 0 : prev + 1));
  }, [images]);

  return (
    <Container>
      {images.length > 1 && (
        <ArrowButton
          direction="left"
          title="Left Arrow Button"
          aria-label="Left Arrow Button"
          onClick={handleLeftArrowClick}
        >
          <RiArrowDropLeftLine />
        </ArrowButton>
      )}
      {images.length > 0 && (
        <CarouselList>
          {images.map((image, index) => (
            <CarouselListItem
              key={`CarouselList_${index}`}
              activeIndex={activeIndex}
            >
              <Image src={image.src} alt={image.alt} layout="fill" />
            </CarouselListItem>
          ))}
        </CarouselList>
      )}
      {images.length > 1 && (
        <ArrowButton
          direction="right"
          title="Right Arrow Button"
          aria-label="Right Arrow Button"
          onClick={handleRightArrowClick}
        >
          <RiArrowDropRightLine />
        </ArrowButton>
      )}
      {images.length > 0 && (
        <NavContainer>
          <RiArrowDropLeftLine />
          <span>
            {activeIndex + 1} / {images.length}
          </span>
          <RiArrowDropRightLine />
        </NavContainer>
      )}
    </Container>
  );
};

export default Carousel;
