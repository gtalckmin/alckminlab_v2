import { certifications, certificationsByTopic } from "@/lib/certifications";

export const metadata = {
  title: "Certifications",
  description: "Online certifications held by Gustavo Alckmin in generative AI, MLOps, deep learning, geospatial analysis, and data science.",
  alternates: { canonical: "/certifications" },
};

export default function CertificationsPage() {
  const groups = certificationsByTopic();

  return (
    <main>
      <header className="page-heading">
        <p className="eyebrow">Certifications</p>
        <h1 className="page-title">Continuous learning.</h1>
        <p className="page-lede">
          {certifications.length} online credentials across generative AI, machine learning engineering, deep learning, geospatial
          analysis, and data science.
        </p>
      </header>

      <nav aria-label="Certification topics" className="flex flex-wrap gap-2">
        {groups.map((group) => (
          <a key={group.slug} href={`#${group.slug}`} className="tag hover:underline">
            {group.title} ({group.items.length})
          </a>
        ))}
      </nav>

      <div className="mt-10 space-y-12">
        {groups.map((group) => (
          <section key={group.slug} id={group.slug} className="scroll-mt-28">
            <div className="mb-5">
              <h2 className="section-title">{group.title}</h2>
              <p className="mt-2 text-sm text-base-800/70">{group.summary}</p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {group.items.map((cert, index) => (
                <li key={`${cert.name}-${index}`} className="content-card p-4">
                  <h3 className="font-medium leading-snug">{cert.name}</h3>
                  <p className="mt-1 text-sm text-base-800/70">
                    {cert.issuer} <span aria-hidden="true">·</span> {cert.issued ?? "Date not listed"}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
