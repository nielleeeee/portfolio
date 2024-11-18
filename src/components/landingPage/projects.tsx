import React from "react";
import { MainContainer } from "@/components/container/containers";
import { TransitionMoveUp } from "@/components/animation/transition";
import { performRequest } from "@/lib/datocms";
import ProjectList from "@/components/list-project/projectList";

const PAGE_CONTENT_QUERY = `
query Project {
  allPersonalProjects(orderBy: _createdAt_ASC) {
    name
    description
    link
    image {
      responsiveImage {
        srcSet
        webpSrcSet
        sizes
        src
        width
        height
        aspectRatio
        alt
        title
        base64
      }
    }
  }
  allWorkProjects(orderBy: _createdAt_ASC) {
    name
    description
    link
    image {
      responsiveImage {
        srcSet
        webpSrcSet
        sizes
        src
        width
        height
        aspectRatio
        alt
        title
        base64
      }
    }
  }
}`;

export default async function Projects() {
  const {
    data: { allPersonalProjects, allWorkProjects },
  } = await performRequest({ query: PAGE_CONTENT_QUERY });

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
              <ProjectList projectList={allPersonalProjects} />
            </div>
          </div>
        </TransitionMoveUp>

        <TransitionMoveUp>
          <div className="py-5 lg:py-10">
            <h2 className="w-full text-center text-secondary font-bold text-3xl mb-10">
              Work Projects
            </h2>
            <div className="w-full flex flex-col gap-4 md:gap-8">
              <ProjectList projectList={allWorkProjects} />
            </div>
          </div>
        </TransitionMoveUp>
      </MainContainer>
    </section>
  );
}
