"use client";

import { useState, useEffect } from "react";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const footerOffset =
      document.documentElement.scrollHeight - window.innerHeight - 160;

    if (scrollY > 200 && scrollY < footerOffset) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
      className={`fixed bottom-8 right-8 w-[45px] h-[45px] flex items-center justify-center cursor-pointer rounded-[50%] border-[none] bg-tertiary shadow-lg z-50 group transition-opacity duration-300
      ${visible ? "opcity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <svg height="1.2em" className="fill-white" viewBox="0 0 512 512">
        <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
      </svg>
    </button>
  );
}
