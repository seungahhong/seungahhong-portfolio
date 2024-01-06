import { RefObject, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export interface ResizeObserverEntry {
  target: HTMLElement;
  contentRect: DOMRectReadOnly;
}

export const useResizeObserver = (
  ref: RefObject<HTMLElement>,
  callback?: (entry: DOMRectReadOnly) => void,
) => {
  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      if (callback) {
        callback(entries[0].contentRect);
      }
    });

    observer.observe(ref.current);

    // eslint-disable-next-line consistent-return
    return () => {
      observer.disconnect();
    };
  }, [ref, callback]);
};
