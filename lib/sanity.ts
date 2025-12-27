import { createClient } from "next-sanity";
import { groq } from "next-sanity";

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || "production";
const apiVersion = process.env.SANITY_API_VERSION || "2023-01-01";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_READ_TOKEN,
});

export const postFields = groq`
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  mainImage,
  body
`;

export const publicationFields = groq`
  _id,
  title,
  "slug": slug.current,
  authors,
  venue,
  year,
  doi,
  pdf,
  abstract
`;

export const videoFields = groq`
  _id,
  title,
  "slug": slug.current,
  description,
  url,
  category
`;

export const profileFields = groq`
  _id,
  name,
  bio,
  photo,
  social,
  researchInterests
`;

export async function fetchLatestPosts(limit = 3) {
  return sanityClient.fetch(
    groq`*[_type == "post"]|order(publishedAt desc)[0...$limit]{${postFields}}`,
    { limit }
  );
}

export async function fetchLatestPublication() {
  return sanityClient.fetch(
    groq`*[_type == "publication"]|order(year desc)[0]{${publicationFields}}`
  );
}

export async function fetchLatestVideo() {
  return sanityClient.fetch(
    groq`*[_type == "video"]|order(_createdAt desc)[0]{${videoFields}}`
  );
}

export async function fetchPublications() {
  return sanityClient.fetch(groq`*[_type == "publication"]|order(year desc){${publicationFields}}`);
}

export async function fetchVideos() {
  return sanityClient.fetch(groq`*[_type == "video"]|order(_createdAt desc){${videoFields}}`);
}

export async function fetchProfile() {
  return sanityClient.fetch(groq`*[_type == "profile"][0]{${profileFields}}`);
}
