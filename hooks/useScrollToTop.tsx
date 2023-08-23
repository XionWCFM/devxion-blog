import { useEffect } from 'react';
import { scrollTo } from '@/utils';

const useScrollToTop = () => {
  useEffect(() => {
    if (window !== undefined) {
      scrollTo(window, 0);
    }
  }, []);
};

export default useScrollToTop;
