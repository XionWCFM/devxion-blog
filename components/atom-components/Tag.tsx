import { cn } from '@/utils';
import Button from './Button';

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

const Tag = ({ children, className }: TagProps) => {
  return (
    <Button className=" flex">
      <span
        className={cn(
          ' text-xs px-4 rounded-lg py-1 dark:text-gray-200 text-white bg-yellow-600 dark:bg-yellow-600 cursor-pointer',
          className,
        )}
      >
        {children}
      </span>
    </Button>
  );
};

export default Tag;
