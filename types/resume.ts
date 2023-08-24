export type HighlightParagraph = { highlight: boolean; sentence: string }[][];

interface HighlightDescription {
  highlightDescription: HighlightParagraph;
}

interface Description {
  description: string;
}

interface DescriptionArray {
  descriptionArray: string[];
}

interface ResumeItem {
  subject: string;
  url: string;
  startDate: string;
  endDate: string;
  name: string;
  belong: string;
  position: string;
  content: string;
  hightlightContent: HighlightParagraph;
  description: string;
  highlightDescription: HighlightParagraph;
  team: {
    isTeam: boolean;
    significant: string;
  };
  urlList: {
    type: string;
    url: string;
  }[];
  techStack: string[];
  role: string[];
  asset: string[];
  createdAt: string;
}

interface ResumeType {
  title: string;
  type:
    | 'channel'
    | 'contact'
    | 'otherExperience'
    | 'peerFeedback'
    | 'retrospect'
    | 'project'
    | 'study'
    | 'article'
    | 'aboutme';
}

export interface Channel extends ResumeType {
  type: 'channel';
  itemList: Pick<ResumeItem, 'subject' | 'url'>[];
}

export interface Contact extends ResumeType {
  type: 'contact';
  itemList: Pick<ResumeItem, 'subject' | 'content'>[];
}

export interface OtherExperience extends ResumeType {
  type: 'otherExperience';
  itemList: Pick<ResumeItem, 'subject' | 'startDate' | 'endDate' | 'content'>[];
}

export interface PeerFeedback extends ResumeType {
  type: 'peerFeedback';
  itemList: Pick<
    ResumeItem,
    'belong' | 'position' | 'name' | 'hightlightContent'
  >[];
}

export interface Project extends ResumeType {
  itemList: Pick<
    ResumeItem,
    | 'subject'
    | 'startDate'
    | 'endDate'
    | 'team'
    | 'description'
    | 'urlList'
    | 'techStack'
    | 'role'
    | 'asset'
  >[];
}

export interface Retrospect extends ResumeType, HighlightDescription {
  type: 'retrospect';
  url: string;
  asset: string[];
}

export interface Study extends ResumeType, HighlightDescription {
  type: 'study';
  itemList: Pick<ResumeItem, 'subject' | 'url' | 'highlightDescription'>[];
}

export interface Article extends ResumeType, Description {
  type: 'article';
  itemList: Pick<ResumeItem, 'subject' | 'createdAt' | 'url'>[];
}

export interface Aboutme extends ResumeType, DescriptionArray {
  type: 'aboutme';
  itemList: Pick<ResumeItem, 'subject' | 'content'>[];
}
