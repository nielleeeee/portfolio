"use client";

import Image from "next/image";
import Slider, { Settings } from "react-slick";
import { TechStack } from "../../../type";

export default function TechStackSlider({
  techStacks,
}: {
  techStacks: TechStack[];
}) {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    draggable: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    swipeToSlide: true,
    focusOnSelect: true,
    className: "w-full",
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {techStacks.map((techStack: TechStack, index: number) => (
        <div
          key={index}
          className="cursor-pointer w-full p-2 md:p-6 mx-auto overflow-hidden"
        >
          <Image
            src={techStack.logo as string}
            alt={techStack.name}
            height={100}
            width={100}
            draggable={false}
            className="cursor-pointer mx-auto w-[60px] h-[60px] md:w-[120px] md:h-[120px]"
          />
        </div>
      ))}
    </Slider>
  );
}
