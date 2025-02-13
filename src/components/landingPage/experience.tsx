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
                src="/svg/laptopMan.svg"
                width={600}
                height={600}
                alt="educ"
                className="w-full rounded-xl backdrop-blur-md"
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
                src="/svg/laptopCoding.svg"
                width={500}
                height={500}
                alt="educ"
                className="w-full rounded-xl backdrop-blur-md"
              />
            </TransitionMoveRight>
          </div>
        </div>
      </MainContainer>
    </section>
  );
}


{/* <div className="flex h-screen items-center justify-center bg-white px-6 md:px-60">
  <div className="space-y-6 border-l-2 border-dashed">
    <div className="relative w-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500">
        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
      </svg>
      <div className="ml-6">
        <h4 className="font-bold text-blue-500">Frontend Development.</h4>
        <p className="mt-2 max-w-screen-sm text-sm text-gray-500">Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.</p>
        <span className="mt-1 block text-sm font-semibold text-blue-500">2007</span>
      </div>
    </div>
    <div className="relative w-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500">
        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
      </svg>
      <div className="ml-6">
        <h4 className="font-bold text-blue-500">Graphic Design.</h4>
        <p className="mt-2 max-w-screen-sm text-sm text-gray-500">Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.</p>
        <span className="mt-1 block text-sm font-semibold text-blue-500">2007</span>
      </div>
    </div>
    <div className="relative w-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500">
        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
      </svg>
      <div className="ml-6">
        <h4 className="font-bold text-blue-500">Lead Ui/Ux Designer.</h4>
        <p className="mt-2 max-w-screen-sm text-sm text-gray-500">Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor</p>
        <span className="mt-1 block text-sm font-semibold text-blue-500">2007</span>
      </div>
    </div>
    <div className="relative w-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500">
        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
      </svg>
      <div className="ml-6">
        <h4 className="font-bold text-blue-500">Lead Ui/Ux Designer.</h4>
        <p className="mt-2 max-w-screen-sm text-sm text-gray-500">Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor</p>
        <span className="mt-1 block text-sm font-semibold text-blue-500">2007</span>
      </div>
    </div>
  </div>
</div> */}