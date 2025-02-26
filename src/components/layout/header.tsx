"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Image as ImageType } from "../../../type";

const navigationList = [
  { label: "Home", path: "#introduction" },
  { label: "About", path: "#about" },
  { label: "Tech Stack", path: "#tech-stack" },
  { label: "Projects", path: "#projects" },
  { label: "Experience", path: "#experience" },
  { label: "Certificates", path: "#certificate" },
  { label: "Contact", path: "#contact" },
];

export default function Header({ logo }: { logo: ImageType | string }) {
  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleActive = () => setIsActive(!isActive);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isActive ? "hidden" : "visible";
  }, [isActive]);

  const NavigationItems = () => {
    return navigationList.map((navigation, index) => (
      <li
        key={index}
        className={`relative group transition-colors duration-300 `}
        onClick={() => setIsActive(false)}
      >
        <Link
          href={`${navigation.path}`}
          id={`nav-${navigation.path}`}
          className=""
        >
          {navigation.label}{" "}
        </Link>

        <span
          className={`block h-[3px] w-full absolute -bottom-1 left-0 transition-transform duration-300 bg-white scale-x-0 group-hover:scale-x-100`}
        />
      </li>
    ));
  };

  return (
    <header
      className={`fixed w-full px-4 lg:px-8 z-30 flex flex-row justify-between py-5 gap-20 transition-all duration-300 ease-in-out ${
        scrolled ? "backdrop-blur-md bg-black/30 shadow" : "backdrop-blur-none"
      }`}
    >
      <div id="logo">
        <Link href={"/"}>
          <Image
            src={logo as string}
            width={1000}
            height={1000}
            alt="logo"
            className="max-w-full w-40 h-auto"
          />
        </Link>
      </div>

      <nav className="flex w-auto">
        {/* Desktop */}
        <ul className="flex-row gap-6 w-full items-center justify-end text-white lg:text-lg font-medium lg:flex hidden">
          <NavigationItems />
        </ul>

        <label className="burger lg:hidden block z-30" htmlFor="burger">
          <input
            type="checkbox"
            id="burger"
            onChange={handleActive}
            checked={isActive}
          />
          <span></span>
          <span></span>
          <span></span>
        </label>

        {/* Sidebar */}
        {isActive && (
          <div className="fixed inset-0 h-screen w-full bg-primary z-20 flex justify-center items-center p-8 transform translate-x-0 transition-transform duration-300 ease-in-out">
            <ul className="text-2xl text-center flex flex-col gap-6">
              <NavigationItems />
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
