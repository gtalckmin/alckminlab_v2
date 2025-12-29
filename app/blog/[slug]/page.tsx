import { fetchPostBySlug } from "@/lib/sanity";
import { Post } from "@/lib/types";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";

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

  return (
    <article className="mx-auto max-w-3xl space-y-8 bg-white p-8 rounded-3xl shadow-soft">
      <header className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-base-800/60">
          {new Date(post.publishedAt).toLocaleDateString()}
        </p>
        <h1 className="font-heading text-3xl sm:text-4xl">{post.title}</h1>
      </header>

      {post.mainImage && (
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
          {/* Note: You'll need a proper image builder for Sanity images in production */}
          <div className="absolute inset-0 bg-base-200 flex items-center justify-center text-base-400">
            Image Placeholder
          </div>
        </div>
      )}

      <div className="prose prose-lg prose-stone mx-auto">
        <PortableText value={post.body} />
      </div>
    </article>
  );
}
