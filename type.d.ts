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
  _type: 'projectSection';
  title: string;
  description: PortableTextBlock[];
  previewLink?: string;
  githubLink?: string;
  status: 'active' | 'inactive' | 'inProgress' | 'onHold' | 'completed';
  type: 'work' | 'personal' | 'other';
  image: string[] | Image[];
}

interface ExperienceItem {
  title: string;
  organization: string;
  date: string;
  description: PortableTextBlock[];
}

export interface ExperienceSection {
  _type: 'experienceSection';
  title: string;
  experienceList: ExperienceItem[];
}