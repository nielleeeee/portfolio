import { MainContainer } from "@/components/container/containers";
import ListExperience from "@/components/list-experience/listExperience";
import Image from "next/image";
import {
  TransitionMoveLeft,
  TransitionMoveRight,
} from "@/components/animation/transition";
import { ExperienceSection, ExperienceItem } from "../../../type";

export default async function Experience({
  experienceData,
}: {
  experienceData: ExperienceSection;
}) {
  const { title, experienceList } = experienceData;

  return (
    <section
      id="experience"
      className="relative w-full h-auto bg-[url('/rainbow-vortex.png')] bg-no-repeat bg-center bg-fixed bg-cover py-20"
    >
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>

      <MainContainer>
        <h2 className="w-full text-center text-white font-bold text-3xl mb-10">
          {title}
        </h2>

        <div className="flex flex-row justify-between gap-4 lg:gap-8 xl:gap-12 overflow-hidden">
          <div className="hidden md:flex w-[30%]">
            <TransitionMoveRight>
              <div className="h-full flex flex-col justify-evenly items-center">
                <Image
                  src="/svg/laptopCoding.svg"
                  width={500}
                  height={500}
                  alt="educ"
                  className="w-full rounded-xl backdrop-blur-md"
                />

                <Image
                  src="/svg/laptopMan.svg"
                  width={600}
                  height={600}
                  alt="educ"
                  className="w-full rounded-xl backdrop-blur-md"
                />
              </div>
            </TransitionMoveRight>
          </div>

          <div className="md:px-4 md:h-[800px] minimal-scrollbar md:overflow-y-auto w-full md:w-[70%]">
            <TransitionMoveLeft>
              <ol className="relative border-l border-white border-dashed h-full w-full">
                {experienceList.map(
                  (experience: ExperienceItem, index: number) => (
                    <li key={index}>
                      <ListExperience experienceItem={experience} />
                    </li>
                  )
                )}
              </ol>
            </TransitionMoveLeft>
          </div>
        </div>
      </MainContainer>
    </section>
  );
}
