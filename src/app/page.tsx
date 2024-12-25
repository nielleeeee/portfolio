import Introduction from "@/components/landingPage/introduction";
import TechStack from "@/components/landingPage/techstack";
import About from "@/components/landingPage/about";
import Projects from "@/components/landingPage/projects";
import Experience from "@/components/landingPage/experience";
import Contact from "@/components/landingPage/contact";
import { ToastContainer } from "react-toastify";
import Certificate from "@/components/landingPage/certificate";

import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <main>
      <ToastContainer />
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
