'use client';

import { cn } from '@/utils';
import { cva } from 'class-variance-authority';

import Link from 'next/link';
import DarkModeToggleBtn from '../helper-components/DarkModeToggleBtn';

const HighlightVariants = cva(
  ` transition-colors duration-300 hover:text-yellow-400 dark:hover:text-yellow-400
    font-extrabold text-zinc-800 dark:text-white
  `,
  {
    variants: {
      variant: {
        default: '',
        highlight:
          ' text-yellow-400  dark:text-yellow-400 underline underline-offset-8 decoration-dashed',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

const navigateArray = ['post', 'cheatsheet', 'category', 'about'];

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <header className=" fixed pb-4 pt-3 smooth top-0 left-0 right-0 z-50 dark:bg-black bg-white">
      <div className=" flex lg:flex-row flex-col items-center lg:justify-between gap-y-8 max-w-[1024px] mx-auto px-12 ">
        <div className=" flex items-center gap-12">
          <Link href={'/'}>
            <p className=" font-extrabold text-5xl cursor-pointer transition-all duration-500 ">
              xion
            </p>
          </Link>
          <nav className=" gap-4 lg:gap-8 grid grid-cols-2 lg:flex lg:flex-row lg:items-start items-end">
            {navigateArray.map((item) => (
              <Link
                href={item === 'category' ? `/${item}/all` : `/${item}`}
                key={item}
                className={cn(HighlightVariants())}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex gap-4 lg:gap-8 ">
          {/* <input
            type="text"
            className=" rounded-xl pl-4 pr-2 py-1 dark:bg-zinc-700 lg:dark:bg-black dark:bg-opacity-90 dark:text-white bg-gray-200 focus:border-2 border-yellow-500  "
            placeholder="Search..."
          /> */}

          <DarkModeToggleBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;
