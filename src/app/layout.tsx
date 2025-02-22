import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Providers from "@/lib/provider";
import { sanityFetch } from "@/sanity/lib/client";
import { WebsiteSettings } from "../../type";

const inter = Montserrat({ subsets: ["latin"] });

const PAGE_QUERY = `{
  "websiteSettings": *[_type == "websiteSettings"] {
    title, 
    metaTitle, 
    metaDescription, 
    metaTags,
    footerDescription,
    "logo": logo.asset->url,
  }
}`;

export async function generateMetadata(): Promise<Metadata> {
  const { websiteSettings } = await sanityFetch<any>({
    query: PAGE_QUERY,
  });

  const { title, metaTitle, metaDescription, metaTags } =
    websiteSettings[0] as WebsiteSettings;

  return {
    title: {
      template: `%s - ${title || metaTitle || "Danielle Portfolio"}`,
      default: title || metaTitle || "Danielle Portfolio",
    },

    description: metaDescription,

    keywords: metaTags,

    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
      },
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white scroll-smooth`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
