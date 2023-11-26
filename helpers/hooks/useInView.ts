import { useEffect, useState } from 'react';

const useInView = () => {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [inView, setInView] = useState<boolean>(true);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      if (!entries[0].isIntersecting) {
        return;
      }

      setInView(true);
      observer.disconnect();
    });

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return {
    ref: setRef,
    inView,
  };
};

export default useInView;
