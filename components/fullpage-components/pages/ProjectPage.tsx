'use client';
import React from 'react';
import PageWrapper from '../PageWrapper';
import Centering from '@/components/atom-components/Centering';
import HeadingParagraph from '@/components/atom-components/HeadingParagraph';
import { Project } from '@/types/resume';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import Tag from '@/components/atom-components/Tag';
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
        <div className=""></div>
        {/* {project.itemList.map((item, idx) => (
          <div key={`project${idx}`}>
            <HeadingParagraph size={'xs'}>{item.subject}</HeadingParagraph>
            <div className="">{item.description}</div>
          </div>
        ))} */}

        <div>dsa</div>
        <Swiper navigation={true} modules={[Navigation]} className=" w-[70vw]">
          {project.itemList.map((item, idx) => (
            <SwiperSlide
              key={`test${idx}`}
              className=" text-zinc-500 flex justify-center items-center w-full border border-zinc-500"
            >
              <div className=" border border-yellow-400 h-[70vh] flex flex-col ">
                <HeadingParagraph size={'xs'} className="text-center">
                  {item.subject}
                </HeadingParagraph>
                <div className="">
                  <div className=" font-extrabold ">프로젝트 설명</div>
                  <div className="">{item.description}</div>
                </div>
                <div className=" flex gap-2">
                  <span>프로젝트 기간</span>
                  <span>{item.startDate}</span>
                  <span>~</span>
                  <span>{item.endDate}</span>
                  <span>{item.team.significant}</span>
                </div>
                <div className=""></div>
                <div className="">
                  <span>역할</span>
                  {item.role.map((role, idx) => (
                    <div className="" key={`role${idx}`}>
                      {role}
                    </div>
                  ))}
                </div>
                <div className="">
                  <span></span>
                </div>
                <div className=" flex gap-2 text-xs flex-wrap">
                  {item.techStack.map((tech, idx) => (
                    <Tag key={`tech${idx}`}>{tech}</Tag>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Centering>
    </PageWrapper>
  );
};

export default ProjectPage;
