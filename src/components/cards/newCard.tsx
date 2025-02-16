import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "next-sanity";
import { ProjectSection } from "../../../type";

export default function NewCard({
  projectData,
}: {
  projectData: ProjectSection;
}) {
  const { title, description, previewLink, githubLink, image } = projectData;

  return (
    <Link
      href={(previewLink && githubLink) || "#"}
      target="_blank"
      className="group w-full basis-full lg:basis-[48%] aspect-[16/10] relative text-[#252525] bg-black rounded-lg overflow-hidden shadow-[inset_0_-4px_4px_rgba(0,0,0,0.8)] transition-shadow duration-[0.3s] ease-[ease-in-out];"
    >
      <Image
        alt={title}
        width={600}
        height={600}
        src={image[0] as string}
        className="absolute inset-0 h-full w-full object-cover opacity-40 transition-opacity group-hover:opacity-20"
      />

      <div className="relative flex flex-col justify-between p-4 sm:p-6 lg:p-8 w-full h-full">
        <div>
          <p className="text-xl font-bold text-white sm:text-2xl">
            {title ? title : "Project Name?"}
          </p>
        </div>

        <div className="">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-[0] group-hover:opacity-100">
            <div className="text-sm sm:text-base text-white">
              <PortableText value={description} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
