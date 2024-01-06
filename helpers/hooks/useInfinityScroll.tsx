import { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";

type InfinityScrollType<T> = [RefObject<HTMLDivElement>, T[]];

const useInfinityScroll = <T,>(
  datas: T[] = [],
  INIT_PER_PAGE_NUMBER: number = 6,
): InfinityScrollType<T> => {
  const currentRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState<number>(1);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, _observer) => {
      if (!entries[0].isIntersecting) {
        return;
      }

      setCount((prev) => prev + 1);
      _observer.disconnect();
    });

    if (
      INIT_PER_PAGE_NUMBER * count >= datas.length ||
      currentRef.current === null
    ) {
      return;
    }

    observer.observe(currentRef.current);

    // eslint-disable-next-line consistent-return
    return () => {
      observer.disconnect();
    };
  }, [count, datas, currentRef, INIT_PER_PAGE_NUMBER]);

  return [currentRef, datas.slice(0, count * INIT_PER_PAGE_NUMBER)];
};

export default useInfinityScroll;
