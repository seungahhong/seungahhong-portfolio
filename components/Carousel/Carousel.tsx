import {
  FunctionComponent,
  useCallback,
  useState,
  useRef,
  useMemo,
  TouchEvent,
  useEffect,
} from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Image from 'next/image';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';
import { ICarouselProps } from './type';
import { useResizeObserver } from '../../helpers/hooks/useResizeObserver';

const ARROW_TYPE = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
} as const;

type ArrowButtonTypes = {
  direction: keyof typeof ARROW_TYPE;
};

type SwipeDataTypes = {
  isSwiping: boolean;
  direction?: keyof typeof ARROW_TYPE;
  startPos: number;
  delta: number;
};

interface ICarouselListItem {
  translateX: number;
  transition: string;
}

interface ITouchPos {
  startPagePos: number;
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
  height: calc(100% - 32px);

  transform: translateX(-${({ translateX }) => translateX}px);
  transition: ${({ transition }) => transition};

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
    direction === ARROW_TYPE.LEFT
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

const Carousel: FunctionComponent<ICarouselProps> = ({
  images,
  threshold = 150,
}) => {
  const [swipe, setSwipe] = useState<SwipeDataTypes>({
    isSwiping: false,
    startPos: 0,
    delta: 0,
  });
  const [transition, setTransition] = useState<string>('none');
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const listRef = useRef<HTMLUListElement>(null);
  const listPosData = useRef<listPosData[]>([]);
  const currImages = useMemo(
    () =>
      images.length > 1
        ? [images[images.length - 1], ...images, images[0]]
        : images,
    [images]
  );

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

  const handleLeftArrowClick = useCallback(
    (index: number) => {
      setTransition('100ms ease-in-out');
      setActiveIndex(index - 1 < 0 ? currImages.length - 1 : index - 1);

      setTimeout(() => {
        if (index - 1 === 0) {
          setTransition('none');
          setActiveIndex(currImages.length - 2);
        }
      }, 200);
    },
    [currImages]
  );

  const handleRightArrowClick = useCallback(
    (index: number) => {
      setTransition('100ms ease-in-out');
      setActiveIndex((prev) => (prev >= currImages.length - 1 ? 0 : prev + 1));

      setTimeout(() => {
        if (index + 1 === currImages.length - 1) {
          setTransition('none');
          setActiveIndex(1);
        }
      }, 200);
    },
    [currImages]
  );

  const handleTouchStart = useCallback((e: TouchEvent<HTMLUListElement>) => {
    setSwipe((prev) => ({
      ...prev,
      startPos: e.changedTouches[0].pageX,
    }));
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent<HTMLUListElement>) => {
    setSwipe((prev) => {
      const delta = -(e.changedTouches[0].pageX - prev.startPos);

      return {
        ...prev,
        isSwiping: true,
        direction: delta < 0 ? ARROW_TYPE.LEFT : ARROW_TYPE.RIGHT,
        delta,
      };
    });
  }, []);

  const handleTouchEnd = useCallback(
    (e: TouchEvent<HTMLUListElement>) => {
      if (Math.abs(swipe.delta) > threshold) {
        if (swipe.direction === 'LEFT') {
          handleLeftArrowClick(activeIndex);
        } else {
          handleRightArrowClick(activeIndex);
        }
      }

      setSwipe((prev) => ({
        ...prev,
        direction: ARROW_TYPE.LEFT,
        isSwiping: false,
        startPos: 0,
        delta: 0,
      }));
    },
    [swipe, activeIndex, handleLeftArrowClick, handleRightArrowClick, threshold]
  );

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
          direction={ARROW_TYPE.LEFT}
          title="Left Arrow Button"
          aria-label="Left Arrow Button"
          onClick={() => handleLeftArrowClick(activeIndex)}
        >
          <RiArrowDropLeftLine />
        </ArrowButton>
      )}
      {images.length > 0 && (
        <CarouselList
          ref={listRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {currImages.map((image, index) => (
            <CarouselListItem
              key={`CarouselList_${index}`}
              translateX={
                !swipe.isSwiping
                  ? listPosData.current[activeIndex]?.defaultWidth *
                      activeIndex || 0
                  : (listPosData.current[activeIndex]?.defaultWidth *
                      activeIndex || 0) + swipe.delta
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
            direction={ARROW_TYPE.RIGHT}
            title="Right Arrow Button"
            aria-label="Right Arrow Button"
            onClick={() => handleRightArrowClick(activeIndex)}
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
