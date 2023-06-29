'use client';

interface MoveTopProps {}

const MoveTop = ({}: MoveTopProps) => {
  const moveTopHandler = () => {
    if (typeof window === undefined) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="invisible md:visible fixed bottom-6 right-12 md:right-16 lg:right-24 transition-all hover:scale-125 duration-300">
      <button
        onClick={moveTopHandler}
        className="   rounded-full p-5  bg-zinc-600 dark:bg-zinc-200"
      ></button>
    </div>
  );
};

export default MoveTop;
