import { MainContainer } from "@/components/container/containers";
import { TransitionMoveUp } from "@/components/animation/transition";
import ProjectList from "@/components/list-project/projectList";
import { ProjectSection } from "../../../type";

export default async function Projects({
  personalProjectData,
  workProjectData,
}: {
  personalProjectData: ProjectSection[];
  workProjectData: ProjectSection[];
}) {
  return (
    <section
      id="projects"
      className="w-full h-auto bg-white py-10 bg-[url('/endless-constellation.png')] bg-no-repeat bg-center bg-fixed bg-cover"
    >
      <MainContainer>
        <TransitionMoveUp>
          <div className="py-5 lg:py-10">
            <h2 className="w-full text-center text-secondary font-bold text-3xl mb-10">
              Personal Projects
            </h2>
            <div className="w-full flex flex-col gap-4 md:gap-8">
              <ProjectList projectData={personalProjectData} />
            </div>
          </div>
        </TransitionMoveUp>

        <TransitionMoveUp>
          <div className="py-5 lg:py-10">
            <h2 className="w-full text-center text-secondary font-bold text-3xl mb-10">
              Work Projects
            </h2>
            <div className="w-full flex flex-col gap-4 md:gap-8">
              <ProjectList projectData={workProjectData} />
            </div>
          </div>
        </TransitionMoveUp>
      </MainContainer>
    </section>
  );
}
