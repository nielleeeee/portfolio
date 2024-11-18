import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MainContainer } from "@/components/container/containers";
import { TransitionMoveUp } from "@/components/animation/transition";
import { performRequest } from "@/lib/datocms";

const PAGE_CONTENT_QUERY = `
  query About {
    about {
      aboutMe
      aboutMeLink
    }
  }`;

export default async function About() {
  const {
    data: { about },
  } = await performRequest({ query: PAGE_CONTENT_QUERY });

  return (
    <section id="about" className="w-full h-auto bg-white py-10">
      <TransitionMoveUp>
        <MainContainer>
          <div
            id="row-wrapper"
            className="flex flex-col md:flex-row justify-evenly items-center gap-4 lg:gap-8"
          >
            <Image
              src="/computer-seat.gif"
              width={100}
              height={100}
              alt="About Gif"
              className="w-full sm:w-[75%] md:w-1/2 lg:w-1/3 rounded-[30px]"
            />

            <div className="w-full md:w-1/2 flex flex-col gap-4 px-4">
              <p className="font-medium text-justify">{about.aboutMe}</p>

              <Link href={about.aboutMeLink} target="_blank" className="w-max">
                <button className="learn-more">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Learn More</span>
                </button>
              </Link>
            </div>
          </div>
        </MainContainer>
      </TransitionMoveUp>
    </section>
  );
}
