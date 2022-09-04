import { useState, useEffect } from 'react';
import { useMediaQuery as useMedia } from 'react-responsive';

type ReturnTypes = [boolean];

const useMediaQuery = (): ReturnTypes => {
  // useState를 이용해서 isMobile state 생성
  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMedia({
    query: '(max-width: 1024px)',
  });

  useEffect(() => {
    // mobile 쿼리로 인해 값이 바뀔 때 수행
    if (mobile) setIsMobile(true);
  }, [mobile]);

  return [isMobile];
};

export default useMediaQuery;
