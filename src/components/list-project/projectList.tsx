import React from "react";
import NewCard from "@/components/cards/newCard";
import { ProjectSection } from "../../../type";

export default function ProjectList({
  projectData,
}: {
  projectData: ProjectSection[];
}) {
  return (
    <div className="flex flex-wrap flex-row gap-8 w-full justify-center items-center px-0 sm:px-4 md:px-8">
      {projectData.map((project: ProjectSection, index: number) => (
        <NewCard key={index} projectData={project} />
      ))}
    </div>
  );
}
