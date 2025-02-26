import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Image as ImageType } from "../../../type";

interface FooterSectionProps {
  logoFooter: ImageType | string;
  footerDescription: string;
}

export default function Footer({
  logoFooter,
  footerDescription,
}: FooterSectionProps) {
  const currYear = new Date().getFullYear();

  return (
    <footer className="bg-primary shadow-[0px_2px_4px_rgba(0,0,0,0.2),0px_-2px_4px_rgba(0,0,0,0.2)]">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center text-teal-600 lg:justify-start">
              <Link href={"/"}>
                <Image
                  src={logoFooter as string}
                  width={400}
                  height={400}
                  alt="logo"
                  className="max-w-full w-[200px] h-auto"
                />
              </Link>
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-black lg:text-left">
              {footerDescription}
            </p>
          </div>

          <div className="flex flex-col">
            <ul className="mt-12 flex flex-wrap justify-center gap-2 md:gap-4 lg:mt-0 lg:justify-end lg:gap-12">
              <li>
                <Link
                  className="text-black transition hover:text-white"
                  href="#about"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  className="text-black transition hover:text-white"
                  href="#tech-stack"
                >
                  Tech Stack
                </Link>
              </li>

              <li>
                <Link
                  className="text-black transition hover:text-white"
                  href="#projects"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  className="text-black transition hover:text-white"
                  href="#experience"
                >
                  Experience
                </Link>
              </li>

              <li>
                <Link
                  className="text-black transition hover:text-white"
                  href="#certificate"
                >
                  Certificates
                </Link>
              </li>

              <li>
                <Link
                  className="text-black transition hover:text-white"
                  href="#contact"
                >
                  Contact
                </Link>
              </li>
            </ul>

            <p className="mt-8 text-center text-sm text-black lg:text-right">
              &copy; Jan Danielle Plaza {currYear}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
