import React from "react";
import { MainContainer } from "@/components/container/containers";
import ListExperience from "@/components/list-experience/listExperience";
import Image from "next/image";
import {
  TransitionMoveLeft,
  TransitionMoveRight,
} from "@/components/animation/transition";
import { performRequest } from "@/lib/datocms";

const PAGE_CONTENT_QUERY = `
  query Experience {
    allEducations(orderBy: _createdAt_ASC) {
      id
      date
      schoolName
      educationLevel
      course
      achievement
    }
    allExperiences(orderBy: _createdAt_ASC) {
      id
      date
      jobTitle
      jobDescription
    }
  }`;

export default async function Experience() {
  const {
    data: { allEducations, allExperiences },
  } = await performRequest({ query: PAGE_CONTENT_QUERY });

  return (
    <section
      id="experience"
      className="relative w-full h-auto bg-[url('/rainbow-vortex.png')] bg-no-repeat bg-center bg-fixed bg-cover py-20"
    >
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>

      <MainContainer>
        <h2 className="w-full text-center text-white font-bold text-3xl mb-10">
          Education
        </h2>

        <div className="flex flex-row justify-evenly mb-20 px-4 md:px-0 lg:px-12 gap-4 lg:gap-8 xl:gap-12 overflow-hidden">
          <div className="md:px-4 w-full md:w-[60%]">
            <TransitionMoveLeft>
              <ol className="relative border-l border-white w-full">
                {allEducations.map((education: any, index: number) => (
                  <li key={index}>
                    <ListExperience
                      date={education.date}
                      jobTitle={education.schoolName}
                      educLevel={education.educationLevel}
                      course={education.course}
                      achievements={education.achievement}
                    />
                  </li>
                ))}
              </ol>
            </TransitionMoveLeft>
          </div>

          <div className="hidden md:flex w-1/2">
            <TransitionMoveRight>
              <Image
                src="/illus-study.gif"
                width={500}
                height={500}
                alt="educ"
                className="w-full rounded-xl backdrop-blur-md"
                unoptimized
              />
            </TransitionMoveRight>
          </div>
        </div>

        <h2 className="w-full text-center text-white font-bold text-3xl mb-10">
          Experience
        </h2>

        <div className="flex flex-row justify-between px-4 md:px-0 lg:px-12 gap-4 lg:gap-8 xl:gap-12 overflow-hidden">
          <div className="md:px-4 md:h-[500px] minimal-scrollbar md:overflow-y-auto w-full md:w-[60%]">
            <TransitionMoveLeft>
              <ol className="relative border-l border-white h-full w-full">
                {allExperiences.map((experience: any, index: number) => (
                  <li key={index}>
                    <ListExperience
                      date={experience.date}
                      jobTitle={experience.jobTitle}
                      jobDescription={experience.jobDescription}
                    />
                  </li>
                ))}
              </ol>
            </TransitionMoveLeft>
          </div>

          <div className="hidden md:flex w-[40%]">
            <TransitionMoveRight>
              <Image
                src="/illus-work.gif"
                width={500}
                height={500}
                alt="educ"
                className="w-full rounded-xl backdrop-blur-md"
                unoptimized
              />
            </TransitionMoveRight>
          </div>
        </div>
      </MainContainer>
    </section>
  );
}
