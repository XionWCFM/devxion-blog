import React from 'react';
import PageWrapper from '../PageWrapper';
import { Article } from '@/types/resume';
import HeadingParagraph from '@/components/atom-components/HeadingParagraph';
import FadeInProvider from '@/components/helper-components/FadeInProvider';
import LineBreakParagraph from '@/components/helper-components/LineBreakParagraph';
import ArticleCard from '../ArticleCard';

interface ArticleProps {
  article: Article;
}

const ArticlePage = ({ article }: ArticleProps) => {
  return (
    <PageWrapper>
      <FadeInProvider>
        <div className=" flex flex-col">
          <HeadingParagraph className=" mb-4 lg:mb-8">
            {article.title}
          </HeadingParagraph>
          <div className="mb-2 lg:mb-12 border-l-2 border-yellow-500 pl-3">
            <LineBreakParagraph className="" str={article.description} />
          </div>
          <ArticleCard articleItemList={article.itemList} />
        </div>
      </FadeInProvider>
    </PageWrapper>
  );
};

export default ArticlePage;
