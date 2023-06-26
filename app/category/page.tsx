import { allDocuments } from '@/.contentlayer/generated';
import { TagsInterface } from '@/atoms';
import { CheatSheet, Post } from '@/.contentlayer/generated';
import Tag from '@/components/atom-components/Tag';
import React from 'react';

interface pageProps {}

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
      <div>
        {Object.keys(tags).map((tag, i) => (
          <Tag key={`tag${i}`}>{tag}</Tag>
        ))}
      </div>
    </section>
  );
};

export default page;
