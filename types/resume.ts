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
    | 'article';
}

type HighlightParagraph = { highlight: boolean; sentence: string }[][];

interface Channel extends ResumeType {
  type: 'channel';
  itemList: Pick<ResumeItem, 'subject' | 'url'>[];
}

interface Contact extends ResumeType {
  type: 'contact';
  itemList: Pick<ResumeItem, 'subject' | 'content'>[];
}

interface OtherExperience extends ResumeType {
  type: 'otherExperience';
  itemList: Pick<ResumeItem, 'subject' | 'startDate' | 'endDate' | 'content'>;
}

interface PeerFeedback extends ResumeType {
  itemList: Pick<
    ResumeItem,
    'belong' | 'position' | 'name' | 'hightlightContent'
  >;
}

interface Project extends ResumeType {
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
  >;
}

interface Retrospect extends ResumeType {
  highlightDescription: HighlightParagraph;
  url: string;
  asset: string;
}
