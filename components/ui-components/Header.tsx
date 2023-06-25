import Link from 'next/link';
import React from 'react';
import DarkModeToggleBtn from '../helper-components/DarkModeToggleBtn';

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <header className=" sticky top-0 z-30">
      <div className=" flex lg:flex-row flex-col lg:justify-between lg:items-center gap-y-2">
        <div className=" flex items-center gap-12">
          <Link href={'/'}>
            <p className=" font-extrabold text-5xl cursor-pointer">xion</p>
          </Link>
          <div className=" flex gap-4 lg:gap-8">
            <Link href={'/post'}>post</Link>
            <Link href={'/category'}>category</Link>
            <Link href={'/cheatsheet'}>cheatsheet</Link>
            <Link href={'/about'}>about</Link>
          </div>
        </div>
        <div className="flex gap-4 lg:gap-8">
          <input
            type="text"
            className=" rounded-xl pl-4 pr-2 py-1 dark:bg-black dark:bg-opacity-90 dark:text-white bg-gray-200"
            placeholder="search"
          />
          <DarkModeToggleBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;
