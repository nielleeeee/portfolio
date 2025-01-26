import React from "react";
import { MainContainer } from "@/components/container/containers";
import Socials from "@/components/socials/socials";
import { Image as DatocmsImage } from "react-datocms";
import {
  TransitionFadeIn,
  TransitionMoveUp,
} from "@/components/animation/transition";
import { performRequest } from "@/lib/datocms";

const PAGE_CONTENT_QUERY = `
  query About {
    introduction {
      title
      subtitle
      media {
        responsiveImage {
          sizes
          src
          width
          height
          alt
          title
          base64
        }
      }
    }
  }`;

export default async function introduction() {
  const {
    data: { introduction },
  } = await performRequest({ query: PAGE_CONTENT_QUERY });

  const title = introduction.title;
  const subtitle = introduction.subtitle;
  const media = introduction.media.responsiveImage;

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

                <h2 className="text-xl font-medium text-white max-w-lg text-center mx-auto">
                  {subtitle}
                </h2>

                <div className="w-full flex items-center justify-center mt-10">
                  <Socials />
                </div>
              </div>
            </TransitionMoveUp>

            <DatocmsImage
              data={media}
              className="w-full !max-w-[360px] lg:!max-w-[460px] rounded-3xl"
            />
          </div>
        </MainContainer>
      </TransitionFadeIn>
    </section>
  );
}
