import React from 'react';

interface PostTitleProps {
  title: string;
  description: string;
  tags: string;
  date: string;
}

const PostTitle = ({ title, description, tags, date }: PostTitleProps) => {
  return (
    <div className=" flex justify-center items-center flex-col mb-24">
      <h1 className=" font-extrabold text-2xl md:text-4xl lg:text-6xl mb-4">
        {title}
      </h1>
      <p className=" opacity-70 mb-4 underline underline-offset-2">
        {description}
      </p>
      <div className=" flex flex-row gap-4 justify-center items-center">
        <div className=" text-xs px-4 bg-yellow-400 rounded-lg py-1 dark:text-gray-200 text-white dark:bg-yellow-600">
          {tags}
        </div>
        <p className=" text-xs">{date}</p>
      </div>
    </div>
  );
};

export default PostTitle;
