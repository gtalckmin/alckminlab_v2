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
  bio: string;
  photo?: any;
  social?: { label?: string; url?: string }[];
  researchInterests?: string[];
};
