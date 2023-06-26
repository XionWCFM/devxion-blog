'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import DarkModeToggleBtn from '../helper-components/DarkModeToggleBtn';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils';

const HighlightVariants = cva(
  `transition-all duration-300 
  hover:text-yellow-400 hover:font-extrabold
  `,
  {
    variants: {
      variant: {
        default: 'hover:scale-110',
        highlight: ' text-yellow-400 font-extrabold scale-110',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

const navigateArray = ['post', 'category', 'cheatsheet', 'about'];

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const currentRoute = usePathname();
  return (
    <header className=" flex lg:block lg:sticky top-0 z-30 bg-white  pb-4 pt-3 border-b dark:border-gray-200 border-gray-200 dark:bg-black smooth">
      <div className=" flex lg:flex-row flex-col lg:justify-between lg:items-center gap-y-8 max-w-[1024px] mx-auto px-12 ">
        <div className=" flex items-center gap-12">
          <Link href={'/'}>
            <p className=" font-extrabold text-5xl cursor-pointer transition-all duration-500 hover:scale-110 ">
              xion
            </p>
          </Link>
          <div className=" flex gap-4 lg:gap-8 flex-col lg:flex-row lg:items-start items-end">
            {navigateArray.map((item) => (
              <Link
                href={item === 'category' ? `/${item}/all` : `/${item}`}
                key={item}
                className={
                  currentRoute === `/${item}`
                    ? cn(HighlightVariants({ variant: 'highlight' }))
                    : cn(HighlightVariants())
                }
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex gap-4 lg:gap-8 justify-between ">
          <input
            type="text"
            className=" rounded-xl pl-4 pr-2 py-1 dark:bg-gray-900 lg:dark:bg-black dark:bg-opacity-90 dark:text-white bg-gray-200 focus:border-2 border-yellow-500  "
            placeholder="Search..."
          />
          <DarkModeToggleBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;
