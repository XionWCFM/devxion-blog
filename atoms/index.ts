import { DocumentTypes } from '@/.contentlayer/generated';
import { atom } from 'jotai';

export interface TagsInterface {
  [key: string]: DocumentTypes[];
}

export type AllDocsInterface = DocumentTypes[];

const TagsAtom = atom<TagsInterface>({});
