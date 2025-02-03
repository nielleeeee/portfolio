"use client";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ScrollTop from "@/components/scroll/scrollTop";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { usePathname } from "next/navigation";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Provider({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  const isStudioPath = pathName.startsWith("/studio");

  return (
    <>
      <Analytics />
      <SpeedInsights />

      {!isStudioPath && <Header />}
      {children}
      {!isStudioPath && <ScrollTop />}
      {!isStudioPath && <Footer />}
    </>
  );
}
