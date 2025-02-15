import { MainContainer } from "@/components/container/containers";
import { TransitionMoveUp } from "@/components/animation/transition";
import TechStackSlider from "@/components/slider/techStackSlider";
import { TechStackSection } from "../../../type";

export default async function TechStack({
  techStackData,
}: {
  techStackData: TechStackSection;
}) {
  const { title, techStacks } = techStackData;

  return (
    <section
      id="tech-stack"
      className="w-full h-auto bg-[url('/liquid-cheese.png')] bg-no-repeat bg-center bg-fixed bg-cover py-20"
    >
      <TransitionMoveUp>
        <MainContainer>
          <h2 className="w-full text-center text-secondary font-bold text-3xl mb-5 md:mb-10 xl:mb-20">
            {title}
          </h2>

          <TechStackSlider techStacks={techStacks} />
        </MainContainer>
      </TransitionMoveUp>
    </section>
  );
}
