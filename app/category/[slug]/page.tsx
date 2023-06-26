import { allDocuments } from '@/.contentlayer/generated';
import { CheatSheet, Post } from '@/.contentlayer/generated';
import { HeadingParagraph, Paragraph } from '@/components';
import Tag from '@/components/atom-components/Tag';
import React from 'react';

interface pageProps {
  params: {
    slug: string;
  };
}
interface TagsInterface {
  [key: string]: (CheatSheet | Post)[];
}

const tagClassifier = () => {
  const tagObj: TagsInterface = {};
  allDocuments.map((doc) => {
    if (!tagObj[doc.tags]) {
      tagObj[doc.tags] = [doc];
    } else {
      tagObj[doc.tags].push(doc);
    }
    return doc;
  });
  return tagObj;
};

const page = ({}: pageProps) => {
  const tags = tagClassifier();
  return (
    <section>
      <HeadingParagraph>All</HeadingParagraph>
      <Paragraph>각 태그 별로 원하는 정보를 찾아볼 수 있습니다.</Paragraph>
      <Paragraph>부디 도움이 되었으면 좋겠습니다.😉</Paragraph>
      <div>
        {Object.keys(tags).map((tag, i) => (
          <Tag key={`tag${i}`}>{tag}</Tag>
        ))}
      </div>
    </section>
  );
};

export default page;
