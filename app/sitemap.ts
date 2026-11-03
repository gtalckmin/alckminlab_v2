import type { MetadataRoute } from "next";
import { fetchLatestPosts } from "@/lib/sanity";
import { Post } from "@/lib/types";
import { siteUrl } from "@/lib/site";

export const revalidate = 3600;

const staticPages = ["", "/about", "/projects", "/consultancy", "/publications", "/certifications", "/blog", "/contact"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts: Post[] = (await fetchLatestPosts(100).catch(() => null)) ?? [];

  return [
    ...staticPages.map((path) => ({
      url: `${siteUrl}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : path === "/about" ? 0.9 : 0.7,
    })),
    ...posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: post.publishedAt,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
