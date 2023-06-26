'use client';

import { usePathname } from 'next/navigation';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils';
import { Icons } from '@/assets';
import Link from 'next/link';
import React from 'react';
import DarkModeToggleBtn from '../helper-components/DarkModeToggleBtn';
import Button from '../atom-components/Button';
import Image from 'next/image';

const HighlightVariants = cva(
  `transition-all duration-300 
  hover:text-yellow-400 font-extrabold text-zinc-600 dark:text-zinc-300
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

const navigateArray = ['post', 'category', 'cheatsheet', 'about'];

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const currentRoute = usePathname().split('/')[1];

  return (
    <header className=" flex lg:block  top-0 z-30 bg-white  pb-4 pt-3 border-b dark:border-none border-gray-200 dark:bg-inherit smooth">
      <div className=" flex lg:flex-row flex-col lg:justify-between lg:items-center gap-y-8 max-w-[1024px] mx-auto px-12 ">
        <div className=" flex items-center gap-12">
          <Link href={'/'}>
            <p className=" font-extrabold text-5xl cursor-pointer transition-all duration-500 ">
              xion
            </p>
          </Link>
          <div className=" gap-4 lg:gap-8 grid grid-cols-2 lg:flex lg:flex-row lg:items-start items-end">
            {navigateArray.map((item) => (
              <Link
                href={item === 'category' ? `/${item}/all` : `/${item}`}
                key={item}
                className={
                  currentRoute === item
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
            className=" rounded-xl pl-4 pr-2 py-1 dark:bg-zinc-700 lg:dark:bg-black dark:bg-opacity-90 dark:text-white bg-gray-200 focus:border-2 border-yellow-500  "
            placeholder="Search..."
          />
          <Button className=" -ml-9 lg:-ml-6">
            <Image
              src={Icons.SearchIcon.src}
              alt={Icons.SearchIcon.alt}
              width={25}
              height={25}
            />
          </Button>
          <DarkModeToggleBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;
