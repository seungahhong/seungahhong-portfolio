/* eslint-disable no-nested-ternary, no-unsafe-optional-chaining */

import { useState, useCallback } from 'react';
import { DIRECTION_TYPE } from '../../types';

type SwipeTypes = {
  dragging: boolean;
  isSwiping: boolean;
  direction: keyof typeof DIRECTION_TYPE;
  currentPos: { x: number; y: number };
  startPos: number;
  delta: number;
};

type SwipeProps = {
  enabled: boolean;
  threshold: number;
  verticalSwiping: boolean;
  handleArrowClick: (direction: keyof typeof DIRECTION_TYPE) => void;
};

type SwipeReturnProps = [
  swipe: SwipeTypes,
  handleTouchStart: (e: TouchEvent | MouseEvent) => void,
  handleTouchMove: (e: TouchEvent | MouseEvent) => void,
  handleTouchEnd: (e: TouchEvent | MouseEvent) => void,
];

const useSwipe = ({
  enabled = false,
  threshold = 100,
  verticalSwiping = false,
  handleArrowClick = () => {},
}: SwipeProps): SwipeReturnProps => {
  const [swipe, setSwipe] = useState<SwipeTypes>({
    dragging: false,
    isSwiping: false,
    direction: verticalSwiping ? DIRECTION_TYPE.BOTTOM : DIRECTION_TYPE.LEFT,
    currentPos: { x: 0, y: 0 },
    startPos: 0,
    delta: 0,
  });

  const getDirection = useCallback(
    (
      currentPos: { x: number; y: number },
      newPos: { x: number; y: number },
    ) => {
      if (currentPos.x - newPos.x < -10) {
        return DIRECTION_TYPE.LEFT;
      }

      if (currentPos.x - newPos.x > 10) {
        return DIRECTION_TYPE.RIGHT;
      }

      if (currentPos.y - newPos.y < -10) {
        return DIRECTION_TYPE.TOP;
      }

      if (currentPos.y - newPos.y > 10) {
        return DIRECTION_TYPE.BOTTOM;
      }

      return DIRECTION_TYPE.LEFT;
    },
    [],
  );

  const getPos = useCallback((e: TouchEvent | MouseEvent) => {
    if ((e as TouchEvent).touches) {
      return {
        x: (e as TouchEvent).touches[0].pageX,
        y: (e as TouchEvent).touches[0].pageY,
      };
    }

    return {
      x: (e as MouseEvent).clientX,
      y: (e as MouseEvent).clientY,
    };
  }, []);

  const handleTouchStart = useCallback(
    (e: TouchEvent | MouseEvent) => {
      if (!enabled) {
        return;
      }

      e.preventDefault();

      setSwipe((prev) => {
        if (prev.dragging) {
          return prev;
        }

        const pos = getPos(e);

        return {
          ...prev,
          dragging: true,
          currentPos: pos,
          startPos: verticalSwiping ? pos.y : pos.x,
        };
      });
    },
    [getPos, enabled, verticalSwiping],
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent | MouseEvent) => {
      if (!enabled) {
        return;
      }

      e.preventDefault();

      setSwipe((prev) => {
        if (!prev.dragging) {
          return prev;
        }

        const pos = getPos(e);
        const direction = getDirection(prev.currentPos, pos);

        if (
          verticalSwiping
            ? direction === DIRECTION_TYPE.LEFT ||
              direction === DIRECTION_TYPE.RIGHT
            : direction === DIRECTION_TYPE.TOP ||
              direction === DIRECTION_TYPE.BOTTOM
        ) {
          return prev;
        }

        const delta = -((verticalSwiping ? pos.y : pos.x) - prev.startPos);

        return {
          ...prev,
          currentPos: pos,
          direction: verticalSwiping
            ? delta < 0
              ? DIRECTION_TYPE.TOP
              : DIRECTION_TYPE.BOTTOM
            : delta < 0
              ? DIRECTION_TYPE.LEFT
              : DIRECTION_TYPE.RIGHT,
          delta,
        };
      });
    },
    [getPos, enabled, verticalSwiping, getDirection],
  );

  const handleTouchEnd = useCallback(() => {
    if (!enabled) {
      return;
    }

    if (Math.abs(swipe.delta) > threshold) {
      handleArrowClick(swipe.direction);
    }

    setSwipe((prev) => ({
      ...prev,
      dragging: false,
      direction: verticalSwiping ? DIRECTION_TYPE.TOP : DIRECTION_TYPE.LEFT,
      startPos: 0,
      delta: 0,
    }));
  }, [swipe, enabled, verticalSwiping, threshold, handleArrowClick]);

  return [swipe, handleTouchStart, handleTouchMove, handleTouchEnd];
};

export default useSwipe;
