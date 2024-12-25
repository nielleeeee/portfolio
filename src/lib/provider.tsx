import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Hotjar from "@/lib/hotjar";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Analytics />
      <SpeedInsights />
      <Hotjar />

      <Header />
      {children}
      <Footer />
    </>
  );
}
