import React from 'react';
import PageWrapper from '../PageWrapper';
import { Article } from '@/types/resume';
import HeadingParagraph from '@/components/atom-components/HeadingParagraph';
import Paragraph from '@/components/atom-components/Paragraph';
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
        <HeadingParagraph>{article.title}</HeadingParagraph>
        <LineBreakParagraph str={article.description} />
        <ArticleCard articleItemList={article.itemList} />
      </FadeInProvider>
    </PageWrapper>
  );
};

export default ArticlePage;
