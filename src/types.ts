export enum Role {
  PI = "Principal Investigator",
  PHD = "PhD Student",
  MASTER = "Master Student",
  ALUMNI = "Alumni"
}

export interface Member {
  id: string;
  name: string;
  role: Role;
  bio: string;
  email?: string;
  image: string; // URL
  links?: {
    googleScholar?: string;
    twitter?: string;
    github?: string;
    website?: string;
  };
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  highlight?: boolean; // For "Selected Publications"
  links?: {
    pdf?: string;
    code?: string;
    project?: string;
  };
}

export interface NewsItem {
  id: string;
  date: string; // YYYY-MM-DD
  title: string;
  description?: string;
  link?: string; // Optional external or internal link
}

export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface LabInfo {
  name: string;
  university: string;
  description: string;
  address: string;
  email: string;
}