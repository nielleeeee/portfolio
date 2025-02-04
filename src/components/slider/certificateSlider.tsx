"use client";

import Slider, { Settings } from "react-slick";
import { Image as DatoImage } from "react-datocms";

export default function CertificateSlider({ certificateSources }: any) {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 8000,
  };

  return (
    <div className="px-5 sm:px-10">
      <Slider {...settings}>
        {certificateSources.map((certificate: any, index: any) => (
          <div
            key={index}
            className="w-full px-3 md:px-5 mx-auto flex justify-center items-center overflow-hidden"
          >
            <DatoImage
              data={certificate.image.responsiveImage}
              pictureClassName={
                "object-contain w-full max-w-4xl mx-auto aspect-[4/3] text-center rounded-xl"
              }
              className="!max-w-none"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
