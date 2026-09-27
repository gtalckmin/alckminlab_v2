import { fetchPublications } from "@/lib/sanity";
import { Publication } from "@/lib/types";
import Link from "next/link";

const fallbackPublications: Publication[] = [
  {
    _id: "fallback-publication",
    title: "Example Publication",
    slug: "example-publication",
    authors: ["You"],
    venue: "Journal of Examples",
    year: new Date().getFullYear(),
    abstract: "Abstract placeholder until Sanity is connected.",
  },
];

async function loadPublications(): Promise<Publication[]> {
  const hasSanity = Boolean(process.env.SANITY_PROJECT_ID);
  if (!hasSanity) return fallbackPublications;

  const pubs = await fetchPublications();
  return pubs?.length ? pubs : fallbackPublications;
}

export default async function PublicationsPage({ searchParams }: { searchParams?: Promise<{ year?: string }> }) {
  const publications = await loadPublications();
  const resolvedParams = await searchParams;
  const yearFilter = resolvedParams?.year ? Number(resolvedParams.year) : undefined;
  const filtered = yearFilter
    ? publications.filter((p) => p.year === yearFilter)
    : publications;
  const years = Array.from(new Set(publications.map((p) => p.year))).sort((a, b) => b - a);

  return (
    <main>
      <header className="page-heading">
        <p className="eyebrow">Publications</p>
        <h1 className="page-title">Research, in print.</h1>
        <p className="page-lede">Peer-reviewed work across remote sensing, machine learning, and agriculture.</p>
      </header>

      <div className="flex flex-wrap gap-2 text-sm">
        <Link
          href="/publications"
          className={`rounded-full border px-4 py-2 ${yearFilter ? "border-base-200 bg-white/50 text-base-800" : "border-accent-600 bg-accent-600 text-white"}`}
        >
          All
        </Link>
        {years.map((year) => (
          <Link
            key={year}
            href={`/publications?year=${year}`}
            className={`rounded-full border px-4 py-2 ${yearFilter === year ? "border-accent-600 bg-accent-600 text-white" : "border-base-200 bg-white/50 text-base-800"}`}
          >
            {year}
          </Link>
        ))}
      </div>

      <div className="mt-8 border-t border-base-200">
        {filtered.map((pub) => (
          <article key={pub._id} className="grid gap-4 border-b border-base-200 py-7 md:grid-cols-[100px_1fr_auto]">
            <p className="pt-1 text-sm font-semibold tracking-wide text-accent-700">{pub.year}</p>
            <div>
              <h2 className="font-heading text-2xl leading-tight tracking-tight">{pub.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-base-800/70">{pub.authors?.join(", ")}</p>
              <p className="mt-1 text-sm italic text-base-800/70">{pub.venue}</p>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-base-800/80">{pub.abstract}</p>
            </div>
            <div className="flex flex-row items-start gap-3 text-sm md:flex-col md:items-end">
              {pub.doi && (
                <Link href={pub.doi} className="text-link" target="_blank" rel="noreferrer">
                  DOI <span aria-hidden="true">↗</span>
                </Link>
              )}
              {pub.pdf?.asset?._ref && <span className="tag">PDF</span>}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
