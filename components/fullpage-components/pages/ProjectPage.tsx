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
        {/* {project.itemList.map((item, idx) => (
          <div key={`project${idx}`}>
            <HeadingParagraph size={'xs'}>{item.subject}</HeadingParagraph>
            <div className="">{item.description}</div>
          </div>
        ))} */}
        <Swiper navigation={true} modules={[Navigation]} className=" w-[70vw]">
          {project.itemList.map((item, idx) => (
            <SwiperSlide
              key={`test${idx}`}
              className=" text-zinc-500 flex justify-center items-center w-full border border-zinc-500"
            >
              <p className=" text-center h-[600px]">엄준식</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </Centering>
    </PageWrapper>
  );
};

export default ProjectPage;
