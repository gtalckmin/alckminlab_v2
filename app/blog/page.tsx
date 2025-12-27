import Link from "next/link";
import { fetchLatestPosts } from "@/lib/sanity";
import { Post } from "@/lib/types";

const fallbackPosts: Post[] = [
  {
    _id: "fallback-post-1",
    title: "Welcome to the new lab site",
    slug: "welcome",
    publishedAt: new Date().toISOString(),
    body: [],
  },
];

async function loadPosts() {
  const hasSanity = Boolean(process.env.SANITY_PROJECT_ID);
  if (!hasSanity) return fallbackPosts;

  const posts = await fetchLatestPosts(20);
  return posts?.length ? posts : fallbackPosts;
}

export default async function BlogPage() {
  const posts = await loadPosts();
  return (
    <main className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-base-800/60">Blog</p>
        <h1 className="font-heading text-3xl">Latest News</h1>
      </header>
      <div className="space-y-4">
        {posts.map((post) => (
          <article key={post._id} className="rounded-2xl bg-white p-5 shadow-soft">
            <p className="text-xs uppercase tracking-[0.2em] text-base-800/60">
              {new Date(post.publishedAt).toLocaleDateString()}
            </p>
            <h2 className="mt-2 font-heading text-xl leading-tight">{post.title}</h2>
            <Link href={`/blog/${post.slug}`} className="mt-3 inline-block text-sm font-medium text-accent-600">
              Read more
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
