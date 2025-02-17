import { PortableText, PortableTextComponents } from "next-sanity";
import { ExperienceItem } from "../../../type";

export default function ListExperience({
  experienceItem,
}: {
  experienceItem: ExperienceItem;
}) {
  const { date, title, description, organization } = experienceItem;

  const portableTextComponents: PortableTextComponents = {
    list: {
      bullet: ({ children }) => <ul className="list-disc pl-6">{children}</ul>,
    },

    listItem: {
      bullet: ({ children }) => <li className="mb-2">{children}</li>,
    }
  };

  return (
    <div className="mb-10 ml-4">
      <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5 border border-white"></div>

      <time className="mb-1 text-sm font-normal leading-none text-white">
        {date}
      </time>

      <h3 className="mb-2 text-lg font-semibold text-white">
        {title} - {organization}
      </h3>

      <div className="mb-1 text-base font-normal text-white text-left">
        <PortableText value={description} components={portableTextComponents} />
      </div>
    </div>
  );
}
