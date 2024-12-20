'use client';

/* eslint-disable no-nested-ternary, no-unsafe-optional-chaining */
import {
  FunctionComponent,
  useCallback,
  useState,
  useRef,
  useMemo,
  useEffect,
} from 'react';
import Image from 'next/image';
import { useResizeObserver } from '../../../helpers/hooks/useResizeObserver';
import { DIRECTION_TYPE } from '../../../types';
import useSwipe from '../../../helpers/hooks/useSwipe';

export interface ICarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  threshold?: number;
  transitionEffect?: string;
  verticalSwiping?: boolean;
}

type ListPosData = {
  defaultWidth: number;
  defaultHeight: number;
};

const Carousel: FunctionComponent<ICarouselProps> = ({
  images = [],
  threshold = 100,
  verticalSwiping = false,
  transitionEffect = '100ms ease-in-out',
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [transition, setTransition] = useState<string>('none');
  const listRef = useRef<HTMLUListElement>(null);
  const listPosData = useRef<ListPosData[]>([]);
  const currImages = useMemo(
    () =>
      images.length > 1
        ? [images[images.length - 1], ...images, images[0]]
        : images,
    [images],
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
    [currImages, transitionEffect],
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
    [currImages, transitionEffect],
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
    [handleLeftArrowClick, handleRightArrowClick, activeIndex],
  );
  const [swipe, handleTouchStart, handleTouchMove, handleTouchEnd] = useSwipe({
    enabled: images.length > 1,
    threshold,
    verticalSwiping,
    handleArrowClick,
  });

  const handleListPos = useCallback((elements: HTMLElement | null) => {
    if (elements) {
      listPosData.current = [];
      const childElements = Object.values(elements.childNodes) as HTMLElement[];
      // eslint-disable-next-line no-restricted-syntax
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
    <div className="relative w-full h-full">
      {images.length > 1 && (
        <button
          type="button"
          className={`absolute z-[1] cursor-pointer bg-transparent border-none text-black text-[40px] m-0 p-0 ${
            !verticalSwiping
              ? '-left-[20px] top-1/2 transform translate-x-0 -translate-y-1/2'
              : '-top-[20px] left-1/2 transform -translate-x-1/2 translate-y-0 [&>svg]:transform [&>svg]:rotate-90'
          }`}
          title={`${
            verticalSwiping ? DIRECTION_TYPE.TOP : DIRECTION_TYPE.LEFT
          } 화살표 버튼`}
          aria-label={`${
            verticalSwiping ? DIRECTION_TYPE.TOP : DIRECTION_TYPE.LEFT
          } 화살표 버튼`}
          onClick={() =>
            handleArrowClick(
              verticalSwiping ? DIRECTION_TYPE.BOTTOM : DIRECTION_TYPE.LEFT,
            )
          }
        >
          <Image
            src="/left-arrow.png"
            alt="오른쪽 화살표"
            width="20"
            height="20"
          />
        </button>
      )}
      {images.length > 0 && (
        <ul
          className="flex h-full overflow-hidden w-hull"
          ref={listRef}
          style={{
            height: images.length > 1 ? '90%' : '100%',
            flexDirection: verticalSwiping ? 'column' : 'row',
          }}
        >
          {currImages.map((image, index) => (
            <li
              className="relative flex-[1_0_100%] w-full"
              key={`CarouselList_${index}`}
              style={{
                transform: `translate(
                  -${
                    verticalSwiping
                      ? 0
                      : !swipe.dragging
                        ? listPosData.current[activeIndex]?.defaultWidth *
                            activeIndex || 0
                        : (listPosData.current[activeIndex]?.defaultWidth *
                            activeIndex || 0) + swipe.delta
                  }px,
                  -${
                    verticalSwiping
                      ? !swipe.dragging
                        ? listPosData.current[activeIndex]?.defaultHeight *
                            activeIndex || 0
                        : (listPosData.current[activeIndex]?.defaultHeight *
                            activeIndex || 0) + swipe.delta
                      : 0
                  }px)`,
                transition,
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </li>
          ))}
        </ul>
      )}
      {images.length > 1 && (
        <>
          <div
            role="presentation"
            className={`absolute z-[1] cursor-pointer bg-transparent border-none text-black text-[40px] m-0 p-0 ${
              !verticalSwiping
                ? '-right-[20px] top-1/2 transform translate-x-0 -translate-y-1/2'
                : '-bottom-[20px] left-1/2 transform -translate-x-1/2 translate-y-0 [&>svg]:transform [&>svg]:rotate-90'
            }`}
            title={`${
              verticalSwiping ? DIRECTION_TYPE.BOTTOM : DIRECTION_TYPE.RIGHT
            } 화살표 버튼`}
            aria-label={`${
              verticalSwiping ? DIRECTION_TYPE.BOTTOM : DIRECTION_TYPE.RIGHT
            } 화살표 버튼`}
            onClick={() =>
              handleArrowClick(
                verticalSwiping ? DIRECTION_TYPE.TOP : DIRECTION_TYPE.RIGHT,
              )
            }
          >
            <Image
              src="/right-arrow.png"
              alt="오른쪽 화살표"
              width="20"
              height="20"
            />
          </div>
          <div className="absolute bottom-0 flex items-center transform -translate-x-1/2 left-1/2 translate-y-0 text-[12px] font-[900] [&>svg]:text-[24px]">
            <span>
              {activeIndex === 0
                ? images.length
                : activeIndex === currImages.length - 1
                  ? 1
                  : activeIndex}{' '}
              / {currImages.length - 2}
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
