interface ListExperience {
  date: string;
  jobTitle: string;
  jobDescription?: string;
  educLevel?: string;
  course?: string;
  achievements?: string;
}

export default function ListExperience({
  date,
  jobTitle,
  jobDescription,
  educLevel,
  course,
  achievements,
}: ListExperience) {
  const currDate =
    new Date().toLocaleString("en-US", { month: "long" }) +
    " " +
    new Date().getFullYear().toString();

  return (
    <div className="mb-10 ml-4">
      <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5 border border-white"></div>
      <time className="mb-1 text-sm font-normal leading-none text-white">
        {date ? date : currDate}
      </time>
      <h3 className="mb-2 text-lg font-semibold text-white">
        {jobTitle ? jobTitle : "This is a job title"}
      </h3>
      {jobDescription && (
        <p className="mb-1 text-base font-normal text-white text-left">
          {jobDescription}
        </p>
      )}
      {educLevel && (
        <p className="mb-1 text-base font-normal text-white">{educLevel}</p>
      )}
      {course && (
        <p className="mb-1 text-base font-normal text-white">{course}</p>
      )}
      {achievements && (
        <p className="mb-1 text-base font-normal text-white">{achievements}</p>
      )}
    </div>
  );
}
