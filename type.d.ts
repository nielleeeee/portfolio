import { PortableTextBlock } from "@sanity/block-content-to-react";

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  hotspot?: boolean;
  crop?: {
    _type: "crop";
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

interface File {
  _type: "file";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

interface CTA {
  name: string;
  slug: {
    _type: "slug";
    current: string;
  };
}

interface TechStack {
  name: string;
  logo: Image | string;
}

interface HeroSection {
  _type: "heroSection";
  image: Image | string;
  title: string;
  description: PortableTextBlock[];
}

interface AboutSection {
  _type: "aboutSection";
  image: Image | string;
  description: PortableTextBlock[];
  cta: CTA;
}

interface TechStackSection {
  _type: "techStackSection";
  title: string;
  techStacks: TechStack[];
}

export interface ProjectSection {
  _type: "projectSection";
  title: string;
  description: PortableTextBlock[];
  previewLink?: string;
  githubLink?: string;
  status: "active" | "inactive" | "inProgress" | "onHold" | "completed";
  type: "work" | "personal" | "other";
  image: string[] | Image[];
}

interface ExperienceItem {
  title: string;
  organization: string;
  date: string;
  description: PortableTextBlock[];
}

interface ExperienceSection {
  _type: "experienceSection";
  title: string;
  experienceList: ExperienceItem[];
}

interface CertificateItem {
  name: string;
  image: Image | string;
}

interface CertificateSection {
  _type: "certificateSection";
  title: string;
  certificateList: CertificateItem[];
}

interface ContactSection {
  _type: "contactSection";
  title: string;
  description: PortableTextBlock[];
}

interface WebsiteSettings {
  _type: "websiteSettings";
  logo: Image | string;
  title: string;
  contactNumber: string;
  email: string;
  address: string;
  resume: File | string;
  facebook: string;
  instagram: string;
  github: string;
  linkedin: string;
  footerDescription: string;
  metaTitle: string;
  metaDescription: string;
  metaTags: string[];
}
