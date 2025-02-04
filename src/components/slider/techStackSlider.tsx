"use client";

import Image from "next/image";
import Slider, { Settings } from "react-slick";

export default function TechStackSlider({ allTechStacks }: any) {
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
      {allTechStacks.map((source: any, index: any) => (
        <div key={index} className="cursor-pointer w-full p-2 md:p-6 mx-auto overflow-hidden">
          <Image
            src={`${source.logo.url}`}
            alt={`${source.logo.basename}`}
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
