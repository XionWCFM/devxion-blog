import { cn, matchCss } from '@/utils';
import { PageList } from '@/types/fullpage';
import Button from '../atom-components/Button';

interface ScrollButtonProps {
  pageButtonHandler: (pageNum: number) => void;
  item: PageList;
  currentPageNum: number;
}

const ScrollButton = ({
  pageButtonHandler,
  item,
  currentPageNum,
}: ScrollButtonProps) => {
  return (
    <Button
      onClick={() => pageButtonHandler(item.pageNum)}
      className={cn(
        'rounded-full w-4 h-4',
        matchCss(currentPageNum, item.pageNum)
          ? 'bg-orange-500'
          : 'bg-gray-200',
      )}
    ></Button>
  );
};

export default ScrollButton;
