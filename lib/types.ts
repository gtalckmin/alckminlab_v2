export type Post = {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  mainImage?: any;
  body: any;
};

export type Publication = {
  _id: string;
  title: string;
  slug: string;
  authors: string[];
  venue: string;
  year: number;
  doi?: string;
  pdf?: any;
  abstract: string;
};

export type Video = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  url: string;
  category: string;
};

export type Profile = {
  _id: string;
  name: string;
  nickname?: string;
  greeting?: string;
  designation?: string;
  company?: string;
  companyUrl?: string;
  bio: string;
  summaryPoints?: string[];
  photo?: any;
  resume?: any;
  email?: string;
  social?: { label?: string; url?: string; icon?: string }[];
  researchInterests?: string[];
};

export type Skill = {
  _id: string;
  name: string;
  logo?: any;
  summary?: string;
  url?: string;
  percentage?: number;
  order?: number;
};

export type Education = {
  _id: string;
  degree: string;
  institution: string;
  institutionUrl?: string;
  timeframe?: string;
  description?: string;
  publications?: { title: string; url: string }[];
  activities?: string[];
  order?: number;
};

export type Experience = {
  _id: string;
  company: string;
  companyUrl?: string;
  location?: string;
  overview?: string;
  position: string;
  startDate?: string;
  endDate?: string;
  responsibilities?: string[];
  order?: number;
};

export type Project = {
  _id: string;
  name: string;
  slug: string;
  logo?: any;
  role?: string;
  timeline?: string;
  summary?: string;
  url?: string;
  repoUrl?: string;
  tags?: string[];
  order?: number;
};
