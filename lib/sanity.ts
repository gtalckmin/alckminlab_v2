import { createClient } from "next-sanity";
import { groq } from "next-sanity";

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || "production";
const apiVersion = process.env.SANITY_API_VERSION || "2023-01-01";

export const sanityClient = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: process.env.NODE_ENV === "production",
      token: process.env.SANITY_API_READ_TOKEN,
    })
  : null;

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
  if (!sanityClient) return null;
  return sanityClient.fetch(
    groq`*[_type == "post"]|order(publishedAt desc)[0...$limit]{${postFields}}`,
    { limit }
  );
}

export async function fetchPostBySlug(slug: string) {
  if (!sanityClient) return null;
  return sanityClient.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{${postFields}}`,
    { slug }
  );
}

export async function fetchLatestPublication() {
  if (!sanityClient) return null;
  return sanityClient.fetch(
    groq`*[_type == "publication"]|order(year desc)[0]{${publicationFields}}`
  );
}

export async function fetchLatestVideo() {
  if (!sanityClient) return null;
  return sanityClient.fetch(
    groq`*[_type == "video"]|order(_createdAt desc)[0]{${videoFields}}`
  );
}

export async function fetchPublications() {
  if (!sanityClient) return null;
  return sanityClient.fetch(groq`*[_type == "publication"]|order(year desc){${publicationFields}}`);
}

export async function fetchVideos() {
  if (!sanityClient) return null;
  return sanityClient.fetch(groq`*[_type == "video"]|order(_createdAt desc){${videoFields}}`);
}

export async function fetchProfile() {
  if (!sanityClient) return null;
  return sanityClient.fetch(groq`*[_type == "profile"][0]{${profileFields}}`);
}
