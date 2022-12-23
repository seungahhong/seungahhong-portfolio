import { useLayoutEffect, useState, useCallback, RefObject } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export interface ResizeObserverEntry {
  target: HTMLElement;
  contentRect: DOMRectReadOnly;
}

export const useResizeObserver = (
  ref: RefObject<HTMLElement>,
  callback?: (entry: DOMRectReadOnly) => void
) => {
  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      if (callback) {
        callback(entries[0].contentRect);
      }
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, callback]);
};
