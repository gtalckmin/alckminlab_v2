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

async function loadPosts(): Promise<Post[]> {
  const hasSanity = Boolean(process.env.SANITY_PROJECT_ID);
  if (!hasSanity) return fallbackPosts;

  const posts = await fetchLatestPosts(20);
  return posts?.length ? posts : fallbackPosts;
}

export default async function BlogPage() {
  const posts = await loadPosts();
  return (
    <main>
      <header className="page-heading">
        <p className="eyebrow">Journal</p>
        <h1 className="page-title">Notes from the lab.</h1>
        <p className="page-lede">Updates, ideas, and news from our work in agricultural remote sensing.</p>
      </header>
      <div className="news-list">
        {posts.map((post) => (
          <article key={post._id} className="news-item">
            <p className="news-item__date">
              {new Date(post.publishedAt).toLocaleDateString()}
            </p>
            <h2 className="news-item__title">{post.title}</h2>
            <Link href={`/blog/${post.slug}`} className="text-link" aria-label={`Read ${post.title}`}>
              Read <span aria-hidden="true">↗</span>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
