"use client";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ScrollTop from "@/components/scroll/scrollTop";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";
import { PageViewTracker } from "@/components/pageTracker/pageTracker";
import { WebsiteSettings } from "../../type";

import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Provider({
  children,
  websiteSettings,
}: {
  children: React.ReactNode;
  websiteSettings: WebsiteSettings;
}) {
  const { logo, logoFooter, footerDescription } = websiteSettings;
  const pathName = usePathname();
  const isStudioPath = pathName.startsWith("/studio");

  return (
    <>
      <Analytics />
      <SpeedInsights />
      <ToastContainer />

      <PageViewTracker />

      {!isStudioPath && <Header logo={logo} />}
      {children}
      {!isStudioPath && <ScrollTop />}
      {!isStudioPath && <Footer logoFooter={logoFooter} footerDescription={footerDescription as string} />}
    </>
  );
}
