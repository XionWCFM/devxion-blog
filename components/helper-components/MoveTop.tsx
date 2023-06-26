'use client';
import Button from '../atom-components/Button';
import React from 'react';

interface MoveTopProps {}

const MoveTop = ({}: MoveTopProps) => {
  const moveTopHandler = () => {
    if (typeof window === undefined) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className=" fixed bottom-6 left-12 lg:right-24">
      <button
        onClick={moveTopHandler}
        className=" rounded-full p-5  bg-gray-200 dark:bg-gray-800"
      ></button>
    </div>
  );
};

export default MoveTop;
