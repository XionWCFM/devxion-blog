import { Article } from '@/types/resume';
import React from 'react';
import Paragraph from '../atom-components/Paragraph';

interface ArticleCardProps {
  articleItemList: Article['itemList'];
}

const ArticleCard = ({ articleItemList }: ArticleCardProps) => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {articleItemList.map((item, idx) => (
        <article
          key={`article${idx}`}
          className=" p-2 cursor-pointer text-zinc-600 dark:text-zinc-300 rounded-md transition-all duration-300 hover:ring-1 hover:ring-yellow-500"
        >
          <a href={item.url} target="_blank">
            <h4 className=" font-bold text-md overflow-hidden whitespace-nowrap break-words text-ellipsis">
              {item.subject}
            </h4>
            <Paragraph className=" text-yellow-600 dark:text-yellow-400 underline underline-offset-4 opacity-50 dark:opacity-80 ">
              {item.createdAt}
            </Paragraph>
          </a>
        </article>
      ))}
    </div>
  );
};

export default ArticleCard;
