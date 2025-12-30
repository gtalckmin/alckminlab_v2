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
    <main className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-base-800/60">Publications</p>
        <h1 className="font-heading text-3xl">Peer-reviewed outputs</h1>
        <p className="text-sm text-base-800/70">Filter by year to narrow the list.</p>
      </header>

      <div className="flex flex-wrap gap-2 text-sm">
        <Link
          href="/publications"
          className={`rounded-full px-3 py-1 ${yearFilter ? "bg-base-100" : "bg-accent-600 text-white"}`}
        >
          All
        </Link>
        {years.map((year) => (
          <Link
            key={year}
            href={`/publications?year=${year}`}
            className={`rounded-full px-3 py-1 ${yearFilter === year ? "bg-accent-600 text-white" : "bg-base-100"}`}
          >
            {year}
          </Link>
        ))}
      </div>

      <div className="space-y-4">
        {filtered.map((pub) => (
          <article key={pub._id} className="rounded-2xl bg-white p-5 shadow-soft">
            <div className="flex items-baseline justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-base-800/60">{pub.year}</p>
                <h2 className="mt-1 font-heading text-xl leading-tight">{pub.title}</h2>
                <p className="text-sm text-base-800/70">{pub.authors?.join(", ")}</p>
                <p className="text-sm text-base-800/70">{pub.venue}</p>
              </div>
              <div className="flex flex-col items-end gap-2 text-sm">
                {pub.doi && (
                  <Link href={pub.doi} className="text-accent-600" target="_blank" rel="noreferrer">
                    DOI
                  </Link>
                )}
                {pub.pdf?.asset?._ref && <span className="rounded-full bg-base-100 px-3 py-1">PDF</span>}
              </div>
            </div>
            <p className="mt-3 text-sm text-base-800/80">{pub.abstract}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
