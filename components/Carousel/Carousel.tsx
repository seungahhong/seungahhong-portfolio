import {
  FunctionComponent,
  useCallback,
  useState,
  useRef,
  useMemo,
  useEffect,
} from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Image from 'next/image';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';
import { useResizeObserver } from '../../helpers/hooks/useResizeObserver';
import { DIRECTION_TYPE } from '../../types';
import { useSwipe } from '../../helpers/hooks/useSwipe';

export interface ICarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  threshold?: number;
  transitionEffect?: string;
  verticalSwiping?: boolean;
}

type ArrowButtonTypes = {
  direction: keyof typeof DIRECTION_TYPE;
};

interface ICarouselListItem {
  translateX: number;
  translateY: number;
  transition: string;
}

type listPosData = {
  defaultWidth: number;
  defaultHeight: number;
};

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

  transform: translate(
    -${({ translateX }) => translateX}px,
    -${({ translateY }) => translateY}px
  );
  transition: ${({ transition }) => transition};

  & > img {
    width: 100%;
    height: fit-content;
  }
`;

const ArrowButton = styled.button<ArrowButtonTypes>`
  position: absolute;
  z-index: 1;
  cursor: pointer;
  background: transparent;
  border: none;
  color: #000;
  font-size: 40px;
  margin: 0;
  padding: 0;

  ${({ direction }) =>
    direction === DIRECTION_TYPE.LEFT || direction === DIRECTION_TYPE.RIGHT
      ? css`
          ${direction === DIRECTION_TYPE.LEFT
            ? 'left: -20px;'
            : 'right: -20px;'}
          top: 50%;
          transform: translate(0, -50%);
        `
      : css`
          ${direction === DIRECTION_TYPE.TOP ? 'top: -20px;' : 'bottom: -20px;'}
          left: 50%;
          transform: translate(-50%, 0);
          svg {
            transform: rotate(90deg);
          }
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

const Carousel: FunctionComponent<ICarouselProps> = ({
  images = [],
  threshold = 100,
  verticalSwiping = false,
  transitionEffect = '100ms ease-in-out',
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [transition, setTransition] = useState<string>('none');
  const listRef = useRef<HTMLUListElement>(null);
  const listPosData = useRef<listPosData[]>([]);
  const currImages = useMemo(
    () =>
      images.length > 1
        ? [images[images.length - 1], ...images, images[0]]
        : images,
    [images]
  );
  const handleLeftArrowClick = useCallback(
    (index: number) => {
      setTransition(transitionEffect);
      setActiveIndex(index - 1 < 0 ? currImages.length - 1 : index - 1);

      setTimeout(() => {
        if (index - 1 === 0) {
          setTransition('none');
          setActiveIndex(currImages.length - 2);
        }
      }, 200);
    },
    [currImages, transitionEffect]
  );

  const handleRightArrowClick = useCallback(
    (index: number) => {
      setTransition(transitionEffect);
      setActiveIndex(index >= currImages.length - 1 ? 0 : index + 1);

      setTimeout(() => {
        if (index + 1 === currImages.length - 1) {
          setTransition('none');
          setActiveIndex(1);
        }
      }, 200);
    },
    [currImages, transitionEffect]
  );

  const handleArrowClick = useCallback(
    (direction: keyof typeof DIRECTION_TYPE) => {
      if (
        direction === DIRECTION_TYPE.LEFT ||
        direction === DIRECTION_TYPE.TOP
      ) {
        handleLeftArrowClick(activeIndex);
      } else {
        handleRightArrowClick(activeIndex);
      }
    },
    [handleLeftArrowClick, handleRightArrowClick, activeIndex]
  );
  const [swipe, handleTouchStart, handleTouchMove, handleTouchEnd] = useSwipe({
    enabled: images.length > 1,
    threshold: threshold,
    verticalSwiping: verticalSwiping,
    handleArrowClick,
  });

  const handleListPos = useCallback((elements: HTMLElement | null) => {
    if (elements) {
      listPosData.current = [];
      const childElements = Object.values(elements.childNodes) as HTMLElement[];
      for (const childEl of childElements) {
        listPosData.current.push({
          defaultWidth: childEl.offsetWidth,
          defaultHeight: childEl.offsetHeight,
        });
      }
    }
  }, []);

  useEffect(() => {
    const RefValue = listRef.current;
    if (listRef.current && images.length > 1) {
      listRef.current.addEventListener('touchstart', handleTouchStart);
      listRef.current.addEventListener('touchmove', handleTouchMove);
      listRef.current.addEventListener('touchend', handleTouchEnd);

      listRef.current.addEventListener('mousedown', handleTouchStart);
      listRef.current.addEventListener('mousemove', handleTouchMove);
      listRef.current.addEventListener('mouseup', handleTouchEnd);
      listRef.current.addEventListener('mouseleave', handleTouchEnd);
    }

    return () => {
      if (RefValue && images.length > 1) {
        RefValue.removeEventListener('touchstart', handleTouchStart);
        RefValue.removeEventListener('touchmove', handleTouchMove);
        RefValue.removeEventListener('touchend', handleTouchEnd);

        RefValue.removeEventListener('mousedown', handleTouchStart);
        RefValue.removeEventListener('mousemove', handleTouchMove);
        RefValue.removeEventListener('mouseup', handleTouchEnd);
        RefValue.removeEventListener('mouseleave', handleTouchEnd);
      }
    };
  }, [images, handleTouchStart, handleTouchMove, handleTouchEnd]);

  useEffect(() => {
    if (currImages.length > 0 && listPosData.current.length === 0) {
      handleListPos(listRef.current);
      setActiveIndex(1);
    }
  }, [currImages.length, handleListPos]);

  useResizeObserver(listRef, () => handleListPos(listRef.current));

  return (
    <Container>
      {images.length > 1 && (
        <ArrowButton
          direction={verticalSwiping ? DIRECTION_TYPE.TOP : DIRECTION_TYPE.LEFT}
          title={`${
            verticalSwiping ? DIRECTION_TYPE.TOP : DIRECTION_TYPE.LEFT
          } Arrow Button`}
          aria-label={`${
            verticalSwiping ? DIRECTION_TYPE.TOP : DIRECTION_TYPE.LEFT
          } Arrow Button`}
          onClick={() =>
            handleArrowClick(
              verticalSwiping ? DIRECTION_TYPE.BOTTOM : DIRECTION_TYPE.LEFT
            )
          }
        >
          <RiArrowDropLeftLine />
        </ArrowButton>
      )}
      {images.length > 0 && (
        <CarouselList
          ref={listRef}
          style={{
            height: images.length > 1 ? '90%' : '100%',
            flexDirection: verticalSwiping ? 'column' : 'row',
          }}
        >
          {currImages.map((image, index) => (
            <CarouselListItem
              key={`CarouselList_${index}`}
              translateX={
                verticalSwiping
                  ? 0
                  : !swipe.dragging
                  ? listPosData.current[activeIndex]?.defaultWidth *
                      activeIndex || 0
                  : (listPosData.current[activeIndex]?.defaultWidth *
                      activeIndex || 0) + swipe.delta
              }
              translateY={
                verticalSwiping
                  ? !swipe.dragging
                    ? listPosData.current[activeIndex]?.defaultHeight *
                        activeIndex || 0
                    : (listPosData.current[activeIndex]?.defaultHeight *
                        activeIndex || 0) + swipe.delta
                  : 0
              }
              transition={transition}
            >
              <Image src={image.src} alt={image.alt} layout="fill" />
            </CarouselListItem>
          ))}
        </CarouselList>
      )}
      {images.length > 1 && (
        <>
          <ArrowButton
            direction={
              verticalSwiping ? DIRECTION_TYPE.BOTTOM : DIRECTION_TYPE.RIGHT
            }
            title={`${
              verticalSwiping ? DIRECTION_TYPE.BOTTOM : DIRECTION_TYPE.RIGHT
            } Arrow Button`}
            aria-label={`${
              verticalSwiping ? DIRECTION_TYPE.BOTTOM : DIRECTION_TYPE.RIGHT
            } Arrow Button`}
            onClick={() =>
              handleArrowClick(
                verticalSwiping ? DIRECTION_TYPE.TOP : DIRECTION_TYPE.RIGHT
              )
            }
          >
            <RiArrowDropRightLine />
          </ArrowButton>
          <NavContainer>
            <RiArrowDropLeftLine />
            <span>
              {activeIndex === 0
                ? images.length
                : activeIndex === currImages.length - 1
                ? 1
                : activeIndex}{' '}
              / {currImages.length - 2}
            </span>
            <RiArrowDropRightLine />
          </NavContainer>
        </>
      )}
    </Container>
  );
};

export default Carousel;
