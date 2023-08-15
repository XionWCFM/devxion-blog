import { DocumentTypes } from '@/.contentlayer/generated';

export const getSortedPosts = (documents: DocumentTypes[]) => {
  return documents.sort((postA, postB) => {
    return new Date(postB.date).getTime() - new Date(postA.date).getTime();
  });
};
