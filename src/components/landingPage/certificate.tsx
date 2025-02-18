import { TransitionMoveUp } from "@/components/animation/transition";
import { MainContainer } from "@/components/container/containers";
import CertificateSlider from "@/components/slider/certificateSlider";
import { CertificateSection } from "../../../type";

export default async function Certificate({
  certificateData,
}: {
  certificateData: CertificateSection;
}) {
  const { title, certificateList } = certificateData;

  return (
    <section
      id="certificate"
      className="w-full py-10 bg-[url('/bg-wave.png')] bg-no-repeat bg-bottom bg-cover"
    >
      <MainContainer>
        <TransitionMoveUp>
          <div className="flex flex-col justify-center gap-4 lg:gap-8 z-10">
            <h3 className="font-bold text-3xl text-secondary text-center">
              {title}
            </h3>

            <CertificateSlider certificateItem={certificateList} />
          </div>
        </TransitionMoveUp>
      </MainContainer>
    </section>
  );
}
