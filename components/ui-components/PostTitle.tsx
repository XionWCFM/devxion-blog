import React from 'react';
import Tag from '../atom-components/Tag';

interface PostTitleProps {
  title: string;
  description: string;
  tags: string;
  date: string;
}

const PostTitle = ({ title, description, tags, date }: PostTitleProps) => {
  return (
    <div className=" flex justify-center items-center flex-col mb-24 cursor-pointer">
      <h1 className=" font-extrabold text-2xl md:text-4xl lg:text-6xl mb-4 cursor-pointer">
        {title}
      </h1>
      <p className=" opacity-70 mb-4 underline underline-offset-2 cursor-pointer">
        {description}
      </p>
      <div className=" flex flex-row gap-4 justify-center items-center">
        <Tag>{tags}</Tag>
        <p className=" text-xs">{date}</p>
      </div>
    </div>
  );
};

export default PostTitle;
