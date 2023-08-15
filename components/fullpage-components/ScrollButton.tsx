import { cn, matchCss } from '@/utils';
import { PageList } from '@/types/fullpage';
import Button from '../atom-components/Button';

interface ScrollButtonProps {
  pageButtonHandler: (pageNum: number) => void;
  currentPageNum: number;
  idx: number;
}

const ScrollButton = ({
  pageButtonHandler,
  idx,
  currentPageNum,
}: ScrollButtonProps) => {
  return (
    <Button
      onClick={() => pageButtonHandler(idx + 1)}
      className={cn(
        'rounded-full w-4 h-4',
        matchCss(currentPageNum, idx + 1) ? 'bg-yellow-500' : 'bg-gray-200',
      )}
    ></Button>
  );
};

export default ScrollButton;
