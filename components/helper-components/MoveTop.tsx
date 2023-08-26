'use client';

import { Icons } from '@/assets';
import Image from 'next/image';

interface MoveTopProps {}

const MoveTop = ({}: MoveTopProps) => {
  const moveTopHandler = () => {
    if (typeof window === undefined) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="invisible md:visible hover:animate-pulse fixed bottom-6 right-12 md:right-16 lg:right-24 transition-all hover:scale-125 duration-300">
      <button
        onClick={moveTopHandler}
        className="   rounded-full p-5 bg-yellow-500 dark:bg-yellow-500"
      >
        <Image
          priority
          src={Icons.topDirectionIcon.src}
          alt={Icons.topDirectionIcon.alt}
          width={20}
          height={20}
        />
      </button>
    </div>
  );
};

export default MoveTop;
