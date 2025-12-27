import { fetchLatestPosts, fetchLatestPublication, fetchLatestVideo, fetchProfile } from "@/lib/sanity";
import { Post, Publication, Profile, Video } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

const fallbackProfile: Profile = {
  _id: "fallback-profile",
  name: "Researcher Name",
  bio: "Building resilient agroecosystems with data, models, and field experiments.",
  social: [
    { label: "LinkedIn", url: "https://linkedin.com" },
    { label: "Google Scholar", url: "https://scholar.google.com" },
  ],
  researchInterests: ["Climate resilience", "Crop modeling", "Remote sensing"],
};

const fallbackPublication: Publication = {
  _id: "fallback-publication",
  title: "Latest publication title",
  slug: "latest-publication",
  authors: ["You"],
  venue: "Journal of Examples",
  year: new Date().getFullYear(),
  abstract: "Short abstract placeholder until Sanity content is connected.",
};

const fallbackVideo: Video = {
  _id: "fallback-video",
  title: "Latest keynote",
  slug: "latest-keynote",
  description: "A brief talk about current research directions.",
  url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  category: "keynote",
};

const fallbackPosts: Post[] = [
  {
    _id: "fallback-post-1",
    title: "Welcome to the new lab site",
    slug: "welcome",
    publishedAt: new Date().toISOString(),
    body: [],
  },
  {
    _id: "fallback-post-2",
    title: "Field season update",
    slug: "field-season-update",
    publishedAt: new Date().toISOString(),
    body: [],
  },
  {
    _id: "fallback-post-3",
    title: "New paper accepted",
    slug: "new-paper-accepted",
    publishedAt: new Date().toISOString(),
    body: [],
  },
];

async function loadData() {
  const hasSanity = Boolean(process.env.SANITY_PROJECT_ID);

  if (!hasSanity) {
    return {
      profile: fallbackProfile,
      publication: fallbackPublication,
      video: fallbackVideo,
      posts: fallbackPosts,
    };
  }

  const [profile, publication, video, posts] = await Promise.all([
    fetchProfile(),
    fetchLatestPublication(),
    fetchLatestVideo(),
    fetchLatestPosts(3),
  ]);

  return {
    profile: profile || fallbackProfile,
    publication: publication || fallbackPublication,
    video: video || fallbackVideo,
    posts: posts?.length ? posts : fallbackPosts,
  };
}

export default async function HomePage() {
  const { profile, publication, video, posts } = await loadData();

  return (
    <main className="space-y-12">
      <section className="grid gap-8 rounded-3xl bg-white p-10 shadow-soft lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-base-800/70">Academic Modern</p>
          <h1 className="font-heading text-4xl sm:text-5xl">{profile?.name || "Alckmin Lab"}</h1>
          <p className="text-lg text-base-800/80">{profile?.bio}</p>
          {profile?.researchInterests?.length ? (
            <div className="flex flex-wrap gap-2 text-sm text-base-800/70">
              {profile.researchInterests.map((interest) => (
                <span key={interest} className="rounded-full bg-base-100 px-3 py-1">
                  {interest}
                </span>
              ))}
            </div>
          ) : null}
          <div className="flex flex-wrap gap-3 text-sm">
            <Link
              href="/publications"
              className="rounded-full bg-accent-600 px-4 py-2 font-medium text-white shadow-md transition hover:bg-accent-500"
            >
              View Publications
            </Link>
            <Link href="/contact" className="rounded-full px-4 py-2 font-medium text-accent-600 hover:bg-base-100">
              Contact
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          <div className="col-span-2 h-48 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 text-white shadow-lg flex items-end p-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/80">Latest Publication</p>
              <p className="text-lg font-semibold leading-tight">{publication?.title}</p>
              <p className="text-sm text-white/80">{publication?.venue} · {publication?.year}</p>
            </div>
          </div>
          <div className="h-40 rounded-2xl bg-white shadow-soft p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-base-800/60">Latest Video</p>
            <p className="mt-2 font-semibold leading-snug">{video?.title}</p>
            <p className="text-sm text-base-800/70">{video?.category}</p>
            <Link href="/videos" className="mt-3 inline-block text-sm font-medium text-accent-600">
              Watch
            </Link>
          </div>
          <div className="h-40 rounded-2xl bg-base-100 p-4 shadow-inner">
            <p className="text-xs uppercase tracking-[0.2em] text-base-800/60">News</p>
            <p className="mt-2 text-sm text-base-800/80">{posts?.[0]?.title}</p>
            <Link href="/blog" className="mt-3 inline-block text-sm font-medium text-accent-600">
              View Blog
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-baseline justify-between">
          <h2 className="font-heading text-2xl">Latest News</h2>
          <Link href="/blog" className="text-sm font-medium text-accent-600">
            View all
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts?.map((post) => (
            <article key={post._id} className="rounded-2xl bg-white p-5 shadow-soft">
              <p className="text-xs uppercase tracking-[0.2em] text-base-800/60">
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>
              <h3 className="mt-2 font-heading text-lg leading-tight">{post.title}</h3>
              <Link href={`/blog/${post.slug}`} className="mt-3 inline-block text-sm font-medium text-accent-600">
                Read more
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
