'use client';
import React from 'react';
import PageWrapper from '../PageWrapper';
import HeadingParagraph from '@/components/atom-components/HeadingParagraph';
import { Project } from '@/types/resume';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Tag from '@/components/atom-components/Tag';
import FadeInProvider from '@/components/helper-components/FadeInProvider';
import Paragraph from '@/components/atom-components/Paragraph';
import { betweenTilde } from '@/utils/betweenTilde';
import Image from 'next/image';
interface ProjectPageProps {
  project: Project;
}
const ProjectPage = ({ project }: ProjectPageProps) => {
  return (
    <PageWrapper>
      <FadeInProvider>
        <HeadingParagraph>{project.title}</HeadingParagraph>
        <div className="">
          {project.itemList.map((item, idx) => (
            <article
              key={`pj${idx}`}
              className=" border border-zinc-400 flex flex-col-reverse lg:flex-row justify-between p-8"
            >
              <div className="">
                <HeadingParagraph className=" font-black mt-4" size={'xs'}>
                  {item.subject}
                </HeadingParagraph>
                <div className=" text-zinc-400 text-xs dark:text-zinc-300">
                  <span>{betweenTilde(item.startDate, item.endDate)}</span>{' '}
                  <span>{item.team.significant}</span>
                </div>
                <div className=" mt-2 flex flex-wrap gap-y-1">
                  {item.techStack.map((tech, idx) => (
                    <span
                      key={`${idx}${tech}`}
                      className=" cursor-pointer duration-500 transition-all hover:rotate-6 hover:scale-105 text-xs px-2 py-1 rounded-sm mr-1 bg-yellow-500 text-zinc-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className=" text-xs text-zinc-400 dark:text-zinc-300 mt-2">
                  {item.description}
                </p>
              </div>
              <div className="">
                <Swiper
                  className=" w-[300px]"
                  navigation={true}
                  rewind={true}
                  modules={[Navigation, Pagination]}
                  pagination={{ clickable: true }}
                >
                  {item.asset.map((img, idx) => (
                    <SwiperSlide key={`${img}`}>
                      <div className="">
                        <Image
                          src={img}
                          alt={'portfolio image'}
                          width={300}
                          height={180}
                          className={
                            'rounded-md  hover:scale-110 transition-transform ease-in-out duration-500 object-cover w-[300px] h-[180px]'
                          }
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </article>
          ))}
        </div>
      </FadeInProvider>
    </PageWrapper>
  );
};

export default ProjectPage;
