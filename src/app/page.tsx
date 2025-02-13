import Introduction from "@/components/landingPage/introduction";
import TechStack from "@/components/landingPage/techstack";
import About from "@/components/landingPage/about";
import Projects from "@/components/landingPage/projects";
import Experience from "@/components/landingPage/experience";
import Contact from "@/components/landingPage/contact";
import Certificate from "@/components/landingPage/certificate";
// import { sanityFetch } from "@/sanity/lib/client";

// const PAGE_QUERY = `{
//   "heroSection": *[_type == "heroSection"] {
//     title,
//     description,
//     "imageUrl": image.asset->url,
//   },

//   "aboutSection": *[_type == "aboutSection"] {
//     description,
//     cta,
//     "image": image.asset->url,
//   },

//   "techStackSection": *[_type == "techStackSection"] {
//     title,
//     techStacks[] {
//       name,
//       "logoUrl": logo.asset->url,
//     }
//   }
// }`;

export default async function Home() {
  // const { heroSection, aboutSection, techStackSection } =
  //   await sanityFetch<any>({
  //     query: PAGE_QUERY,
  //   });

  return (
    <main>
      <Introduction />

      <About />

      <TechStack />

      <Projects />

      <Experience />

      <Certificate />

      <Contact />
    </main>
  );
}
