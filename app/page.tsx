import { fetchLatestPosts, fetchLatestPublication, fetchProfile } from "@/lib/sanity";
import { Post, Publication, Profile } from "@/lib/types";
import Link from "next/link";

const fallbackProfile: Profile = {
  _id: "fallback-profile",
  name: "Gustavo Togeiro de Alckmin",
  nickname: "Gustavo",
  greeting: "Hi, I am",
  designation: "University Lecturer",
  company: "The University of Western Australia",
  companyUrl: "https://www.uwa.edu.au/",
  bio: "I am a University Lecturer at The University of Western Australia, coordinating Crops and Cropping Systems and Precision Agriculture. My research experience spans remote sensing, machine learning, and pasture monitoring.",
  summaryPoints: [
    "Remote sensing for crops and pastures",
    "Precision agriculture and digital agronomy",
    "Machine learning for spectral and time-series analysis",
    "Agricultural data science and decision support",
  ],
  social: [
    { label: "GitHub", url: "https://www.github.com/gtalckmin" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/gtalckmin/" },
  ],
  researchInterests: ["Remote Sensing", "Machine Learning", "Precision Agriculture", "Spectroscopy", "Pasture Management"],
};

const fallbackPublication: Publication = {
  _id: "fallback-publication",
  title: "From field to airborne spectroscopy – advancing spectral data analytics for accurate retrieval of perennial ryegrass biomass and feed quality",
  slug: "field-to-airborne-spectroscopy",
  authors: ["Gustavo Togeiro de Alckmin", "et al."],
  venue: "PhD Research",
  year: 2021,
  abstract: "A spectral data analytics framework for estimating perennial ryegrass biomass and feed quality using field and airborne sensing technologies.",
};

const fallbackPosts: Post[] = [
  {
    _id: "fallback-post-1",
    title: "Digital agriculture and remote sensing for pasture monitoring",
    slug: "digital-agriculture-pasture-monitoring",
    publishedAt: new Date().toISOString(),
    body: [],
  },
  {
    _id: "fallback-post-2",
    title: "Advancing spectral analytics for biomass and feed quality",
    slug: "advancing-spectral-analytics",
    publishedAt: new Date().toISOString(),
    body: [],
  },
  {
    _id: "fallback-post-3",
    title: "From field sensors to airborne monitoring",
    slug: "field-sensors-to-airborne-monitoring",
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
      posts: fallbackPosts,
    };
  }

  const [profile, publication, posts] = await Promise.all([
    fetchProfile(),
    fetchLatestPublication(),
    fetchLatestPosts(3),
  ]);

  return {
    profile: profile || fallbackProfile,
    publication: publication || fallbackPublication,
    posts: posts?.length ? posts : fallbackPosts,
  };
}

export default async function HomePage() {
  const { profile, publication, posts } = await loadData();

  return (
    <main>
      <section className="home-hero">
        <div className="home-hero__content">
          <p className="eyebrow">Remote sensing · agriculture · data science</p>
          <h1 className="page-title">{profile?.name || "Alckmin Lab"}</h1>
          <p className="home-hero__role">{profile?.designation}{profile?.company ? ` at ${profile.company}` : ""}</p>
          <p className="home-hero__bio">{profile?.bio}</p>
          {profile?.researchInterests?.length ? (
            <div className="mt-5 flex flex-wrap gap-2">
              {profile.researchInterests.slice(0, 4).map((interest: string) => (
                <span key={interest} className="tag border-white/20 bg-white/5 text-white/85">
                  {interest}
                </span>
              ))}
            </div>
          ) : null}
          <div className="home-hero__actions">
            <Link href="/publications" className="button-primary">
              Explore publications <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/about" className="button-secondary">
              About the research
            </Link>
          </div>
        </div>
        <div className="home-hero__visual" aria-hidden="true">
          <div className="orbit-art">
            <span className="orbit-art__label">Earth observation</span>
          </div>
        </div>
      </section>

      <section className="home-section" aria-labelledby="highlights-heading">
        <div className="home-section__heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 id="highlights-heading" className="section-title mt-3">Research in focus</h2>
          </div>
        </div>
        <div className="home-feature-grid">
          <article className="content-card feature-card feature-card--publication">
            <div>
              <p className="feature-card__label">Latest publication</p>
              <h3 className="feature-card__title">{publication?.title}</h3>
              <p className="feature-card__meta">{publication?.venue} · {publication?.year}</p>
            </div>
            <Link href="/publications" className="text-link mt-5">
              Browse publications <span aria-hidden="true">→</span>
            </Link>
          </article>
          <article className="content-card feature-card">
            <div>
              <p className="feature-card__label">Field notes</p>
              <h3 className="feature-card__title">{posts?.[0]?.title}</h3>
              <p className="feature-card__meta">News from Alckmin Lab</p>
            </div>
            <Link href="/blog" className="text-link mt-5">
              Read the journal <span aria-hidden="true">→</span>
            </Link>
          </article>
        </div>
      </section>

      <section className="home-section" aria-labelledby="news-heading">
        <div className="home-section__heading">
          <div>
            <p className="eyebrow">From the lab</p>
            <h2 id="news-heading" className="section-title mt-3">Latest news</h2>
          </div>
          <Link href="/blog" className="text-link">
            All updates <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="news-list">
          {posts?.map((post: Post) => (
            <article key={post._id} className="news-item">
              <p className="news-item__date">{new Date(post.publishedAt).toLocaleDateString()}</p>
              <h3 className="news-item__title">{post.title}</h3>
              <Link href={`/blog/${post.slug}`} className="text-link" aria-label={`Read ${post.title}`}>
                Read <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
