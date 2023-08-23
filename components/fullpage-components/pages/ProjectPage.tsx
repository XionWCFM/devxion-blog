import React from 'react';
import PageWrapper from '../PageWrapper';
import Centering from '@/components/atom-components/Centering';
import HeadingParagraph from '@/components/atom-components/HeadingParagraph';
import { Project } from '@/types/resume';

interface ProjectPageProps {
  project: Project;
}
const ProjectPage = ({ project }: ProjectPageProps) => {
  return (
    <PageWrapper>
      <Centering col>
        <div className="">
          <HeadingParagraph>{project.title}</HeadingParagraph>
        </div>
        <div className="">
          {project.itemList.map((item, idx) => (
            <div key={`project${idx}`}>
              <HeadingParagraph size={'xs'}>{item.subject}</HeadingParagraph>
              <div className="">{item.description}</div>
            </div>
          ))}
        </div>
      </Centering>
    </PageWrapper>
  );
};

export default ProjectPage;
