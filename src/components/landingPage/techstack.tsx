import React from "react";
import { MainContainer } from "@/components/container/containers";
import { TransitionMoveUp } from "@/components/animation/transition";
import TechStackSlider from "@/components/slider/techStackSlider";
import { performRequest } from "@/lib/datocms";

const PAGE_CONTENT_QUERY = `
  query Certificate {
    allTechStacks {
      logo {
        url
        basename
      }
    }
  }`;

export default async function TechStack() {
  const {
    data: { allTechStacks },
  } = await performRequest({ query: PAGE_CONTENT_QUERY });

  return (
    <section
      id="tech-stack"
      className="w-full h-auto bg-[url('/liquid-cheese.png')] bg-no-repeat bg-center bg-fixed bg-cover py-20"
    >
      <TransitionMoveUp>
        <MainContainer>
          <h2 className="w-full text-center text-secondary font-bold text-3xl mb-10 xl:mb-20">
            Tech Stack
          </h2>

          <div
            id="logo-carousel"
            className="cursor-pointer flex flex-row gap-8 pb-8"
          >
            <TechStackSlider allTechStacks={allTechStacks} />
          </div>
        </MainContainer>
      </TransitionMoveUp>
    </section>
  );
}
