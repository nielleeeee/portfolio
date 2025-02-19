import Introduction from "@/components/landingPage/introduction";
import TechStack from "@/components/landingPage/techstack";
import About from "@/components/landingPage/about";
import Projects from "@/components/landingPage/projects";
import Experience from "@/components/landingPage/experience";
import Contact from "@/components/landingPage/contact";
import Certificate from "@/components/landingPage/certificate";
import { sanityFetch } from "@/sanity/lib/client";

const PAGE_QUERY = `{
  "heroSection": *[_type == "heroSection"] {
    title,
    description,
    "image": image.asset->url,
  },

  "aboutSection": *[_type == "aboutSection"] {
    description,
    cta,
    "image": image.asset->url,
  },

  "techStackSection": *[_type == "techStackSection"] {
    title,
    techStacks[] {
      name,
      "logo": logo.asset->url,
    }
  },

  "personalProjectSection": *[_type == "projectSection" && type == "personal"] | order(_createdAt asc) {
    title,
    description,
    previewLink,
    githubLink,
    status,
    type,
    "image": image[].asset->url,
  },

  "workProjectSection": *[_type == "projectSection" && type == "work"] | order(_createdAt asc) {
    title,
    description,
    previewLink,
    githubLink,
    status,
    type,
    "image": image[].asset->url,
  },

  "experienceSection": *[_type == "experienceSection"] {
    title,
    experienceList[] {
      title,
      organization,
      date,
      description
    }
  },

  "certificateSection": *[_type == "certificateSection"] {
    title,
    certificateList[] {
      name,
      "image": image.asset->url,
    }
  },

  "contactSection": *[_type == "contactSection"] {
    title,
    description
  },


}`;

// "websiteSettings": *[_type == "websiteSettings"] {
//   email,
//   contactNumber,
//   address,
//   "resume": resume.asset->url,
//   facebook,
//   instagram,
//   github,
//   linkedin,
// }

export default async function Home() {
  const {
    heroSection,
    aboutSection,
    techStackSection,
    personalProjectSection,
    workProjectSection,
    experienceSection,
    certificateSection,
    contactSection,
  } = await sanityFetch<any>({
    query: PAGE_QUERY,
  });

  return (
    <main>
      <Introduction heroSectionData={heroSection[0]} />

      <About aboutSectionData={aboutSection[0]} />

      <TechStack techStackData={techStackSection[0]} />

      <Projects
        personalProjectData={personalProjectSection}
        workProjectData={workProjectSection}
      />

      <Experience experienceData={experienceSection[0]} />

      <Certificate certificateData={certificateSection[0]} />

      <Contact contactData={contactSection[0]} />
    </main>
  );
}
