import { allDocuments, DocumentTypes } from '@/.contentlayer/generated';
import { HeadingParagraph, Paragraph } from '@/components';

import Tag from '@/components/atom-components/Tag';
import Link from 'next/link';
import React from 'react';

interface pageProps {
  params: {
    slug: string;
  };
}
interface TagsInterface {
  [key: string]: DocumentTypes[];
}

const tagClassifier = () => {
  const tagObj: TagsInterface = { all: allDocuments };
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

const tags = tagClassifier();

const page = ({ params: { slug } }: pageProps) => {
  return (
    <section>
      <HeadingParagraph>{slug.toUpperCase()}</HeadingParagraph>
      <Paragraph>각 태그 별로 원하는 정보를 찾아볼 수 있습니다.</Paragraph>
      <Paragraph>부디 도움이 되었으면 좋겠습니다.😉</Paragraph>
      <div className=" mt-4 flex gap-2">
        {Object.keys(tags).map((tag, i) => (
          <div key={`tag${i}`}>
            <Link href={`category/${tag}`}>
              <Tag>{tag}</Tag>
            </Link>
          </div>
        ))}
      </div>
      <div>
        {tags[slug].map((post) => (
          <div key={post.title}>{post.title}</div>
        ))}
      </div>
    </section>
  );
};

export default page;
