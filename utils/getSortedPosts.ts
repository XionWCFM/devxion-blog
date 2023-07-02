import { DocumentTypes } from '@/.contentlayer/generated';

const getSortedPosts = (documents: DocumentTypes[]) => {
  return documents.sort((postA, postB) => {
    return new Date(postB.date).getTime() - new Date(postA.date).getTime();
  });
};

export default getSortedPosts;
