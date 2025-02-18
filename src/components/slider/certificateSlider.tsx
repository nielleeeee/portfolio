"use client";

import Slider, { Settings } from "react-slick";
import Image from "next/image";
import { CertificateItem } from "../../../type";

export default function CertificateSlider({
  certificateItem,
}: {
  certificateItem: CertificateItem[];
}) {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 8000,
    draggable: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    focusOnSelect: true,
    className: "w-full",
  };

  return (
    <div className="px-5 sm:px-10">
      <Slider {...settings}>
        {certificateItem.map((certificate: CertificateItem, index: any) => (
          <div
            key={index}
            className="cursor-pointer w-full px-3 md:px-5 mx-auto flex justify-center items-center overflow-hidden"
          >
            <Image
              src={certificate.image as string}
              alt={certificate.name}
              width={800}
              height={800}
              draggable={false}
              className="object-contain w-full max-w-4xl mx-auto aspect-[4/3] text-center rounded-xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
