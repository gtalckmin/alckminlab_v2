import { fetchPostBySlug } from "@/lib/sanity";
import { Post } from "@/lib/types";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { personName, siteUrl } from "@/lib/site";

function postExcerpt(post: Post, length = 160) {
  const text = (post.body ?? [])
    .filter((block: any) => block._type === "block" && block.style === "normal")
    // Skip italic-only notes such as "Originally published on…".
    .filter((block: any) => !block.children?.every((child: any) => child.marks?.includes("em")))
    .flatMap((block: any) => block.children?.map((child: any) => child.text) ?? [])
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
  return text.length > length ? `${text.slice(0, length - 1).trimEnd()}…` : text;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post: Post | null = process.env.SANITY_PROJECT_ID ? await fetchPostBySlug(slug) : null;
  if (!post) return {};
  const description = postExcerpt(post);
  return {
    title: post.title,
    description,
    authors: [{ name: personName, url: siteUrl }],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description,
      url: `/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      authors: [personName],
    },
  };
}

const fallbackPost: Post = {
  _id: "fallback-post-1",
  title: "Welcome to the new lab site",
  slug: "welcome",
  publishedAt: new Date().toISOString(),
  body: [
    {
      _key: "1",
      _type: "block",
      children: [
        {
          _key: "1",
          _type: "span",
          text: "This is a placeholder post. Once you connect Sanity and create content, this will be replaced.",
          marks: [],
        },
      ],
      markDefs: [],
      style: "normal",
    },
  ],
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const hasSanity = Boolean(process.env.SANITY_PROJECT_ID);
  let post: Post | null = null;

  if (hasSanity) {
    post = await fetchPostBySlug(slug);
  } else if (slug === "welcome") {
    post = fallbackPost;
  }

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: postExcerpt(post),
    datePublished: post.publishedAt,
    url: `${siteUrl}/blog/${post.slug}`,
    author: { "@id": `${siteUrl}/#person`, "@type": "Person", name: personName, url: siteUrl },
  };

  return (
    <article className="content-card mx-auto max-w-4xl p-6 sm:p-10 lg:p-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <header className="mx-auto max-w-3xl space-y-4">
        <p className="eyebrow">
          {new Date(post.publishedAt).toLocaleDateString()}
        </p>
        <h1 className="font-heading text-4xl tracking-tight text-base-900 sm:text-5xl">{post.title}</h1>
      </header>

      {post.mainImage && (
        <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-xl">
          {/* Note: You'll need a proper image builder for Sanity images in production */}
          <div className="absolute inset-0 bg-base-200 flex items-center justify-center text-base-400">
            Image Placeholder
          </div>
        </div>
      )}

      <div className="prose prose-lg prose-stone mx-auto mt-10 max-w-3xl">
        <PortableText value={post.body} />
      </div>
    </article>
  );
}
