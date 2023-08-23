import React from 'react';
import PageWrapper from '../PageWrapper';
import { Article } from '@/types/resume';
import Centering from '@/components/atom-components/Centering';
import HeadingParagraph from '@/components/atom-components/HeadingParagraph';
import Paragraph from '@/components/atom-components/Paragraph';
import { lineBreak } from '@/utils';

interface ArticleProps {
  article: Article;
}

const ArticlePage = ({ article }: ArticleProps) => {
  return (
    <PageWrapper>
      <Centering col>
        <HeadingParagraph>{article.title}</HeadingParagraph>
        <div className=" flex justify-center items-center flex-col">
          {lineBreak(article.description).map((item, idx) => (
            <Paragraph className=" block my-3" key={`para${idx}`}>
              {item}
            </Paragraph>
          ))}
        </div>

        <div className="">
          <div>
            {article.itemList.map((item, idx) => (
              <article
                key={`article${idx}`}
                className=" p-2 cursor-pointer text-zinc-600 dark:text-zinc-300 rounded-md transition-all duration-300 hover:ring-1 hover:ring-yellow-500"
              >
                <a href={item.url} target="_blank">
                  <h4 className=" font-bold text-md">{item.subject}</h4>
                  <Paragraph className=" text-zinc-400 underline underline-offset-4 opacity-50">
                    {item.createdAt}
                  </Paragraph>
                </a>
              </article>
            ))}
          </div>
        </div>
      </Centering>
    </PageWrapper>
  );
};

export default ArticlePage;
