'use client';
import React from 'react';
import PageWrapper from '../PageWrapper';
import HeadingParagraph from '@/components/atom-components/HeadingParagraph';
import { Project } from '@/types/resume';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import FadeInProvider from '@/components/helper-components/FadeInProvider';
import { betweenTilde } from '@/utils/betweenTilde';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import LineBreakParagraph from '@/components/helper-components/LineBreakParagraph';

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
              className=" border border-zinc-400 my-6 border-dotted rounded-md shadow-md flex flex-col-reverse lg:flex-row items-center justify-between p-8"
            >
              <div className=" lg:border-r lg:pr-8 lg:min-w-[60%] lg:max-w-[60%]">
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
                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-2 my-4">
                  {item.urlList.map((link, idx) => (
                    <a key={link.url} target="_blank" href={link.url}>
                      <p className=" transition-all duration-500 hover:rotate-3 text-zinc-400 dark:text-zinc-300 text-xs border-2 border-dotted px-2 py-1">
                        {link.type}
                      </p>
                    </a>
                  ))}
                </div>

                <LineBreakParagraph
                  str={item.description}
                  className="text-xs text-zinc-400 lg:text-xs dark:text-zinc-300 mt-2 mb-6 lg:mb-12"
                />
                <div className=" flex flex-col gap-y-4">
                  {item.role.map((role, idx) => (
                    <p
                      key={role}
                      className=" font-extrabold text-zinc-400 underline underline-offset-2 lg:underline-offset-8 decoration-wavy decoration-yellow-500 dark:text-zinc-300"
                    >
                      {role}
                    </p>
                  ))}
                </div>
              </div>
              <div className=" lg:pl-4">
                <Swiper
                  className=" w-[50vw] lg:w-[25vw]"
                  navigation={true}
                  rewind={true}
                  modules={[Navigation, Pagination, Autoplay]}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                >
                  {item.asset.map((img, idx) => (
                    <SwiperSlide key={`${img}`}>
                      <div className="">
                        <Image
                          src={img}
                          alt={'portfolio image'}
                          width={500}
                          height={250}
                          className={
                            'rounded-md  hover:scale-105 transition-transform ease-in-out duration-500 object-cover w-[500px] h-[250px]'
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
