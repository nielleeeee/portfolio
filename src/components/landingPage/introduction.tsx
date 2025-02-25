import { MainContainer } from "@/components/container/containers";
import Socials from "@/components/socials/socials";
import Image from "next/image";
import {
  TransitionFadeIn,
  TransitionMoveUp,
} from "@/components/animation/transition";
import { HeroSection, WebsiteSettings } from "../../../type";
import { PortableText } from "next-sanity";

export default async function introduction({
  heroSectionData,
  websiteSettings,
}: {
  websiteSettings: WebsiteSettings;
  heroSectionData: HeroSection;
}) {
  const { title, description, image } = heroSectionData;

  return (
    <section
      id="introduction"
      className="w-full h-auto bg-[url('/sun-tornado.png')] bg-no-repeat bg-center bg-fixed bg-cover"
    >
      <TransitionFadeIn>
        <MainContainer>
          <div className="flex flex-col-reverse lg:flex-row gap-4 md:gap-8 py-[60px] pt-36 justify-evenly items-center">
            <TransitionMoveUp>
              <div className="flex flex-col gap-4">
                <h1 className="text-4xl font-bold text-white text-center">
                  {title}
                </h1>

                <div className="text-xl font-medium text-white max-w-lg text-center mx-auto">
                  <PortableText value={description} />
                </div>

                <div className="w-full flex items-center justify-center mt-10">
                  <Socials websiteSettings={websiteSettings} />
                </div>
              </div>
            </TransitionMoveUp>

            <Image
              src={image as string}
              alt="Hero Image"
              className="w-full max-w-[360px] lg:max-w-[460px] rounded-3xl"
              height={500}
              width={500}
            />
          </div>
        </MainContainer>
      </TransitionFadeIn>
    </section>
  );
}
