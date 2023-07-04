import { PageList } from '@/hooks/useFullPage';
import { cn } from '@/utils';
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
        currentPageNum === item.pageNum ? 'bg-black' : 'bg-gray-400',
      )}
    ></Button>
  );
};

export default ScrollButton;
