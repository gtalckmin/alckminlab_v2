import { fetchProjects } from "@/lib/sanity";
import { Project } from "@/lib/types";
import Link from "next/link";

const fallbackProjects: Project[] = [
  {
    _id: "1",
    name: "Google Earth Engine (GEE)",
    slug: "gee",
    role: "Developer",
    timeline: "March 2018 - Present",
    summary: "Working with GEE for remote sensing analysis and satellite imagery processing.",
    tags: ["professional", "academic", "remote-sensing"],
    order: 1,
  },
  {
    _id: "2",
    name: "Coursera Data Science Specialization",
    slug: "coursera-ds",
    role: "Student",
    timeline: "Jun 2017 - Present",
    url: "https://www.coursera.org/specializations/jhu-data-science",
    summary: "Coursera Data Science Specialization offered by Johns Hopkins University.",
    tags: ["professional", "machine-learning"],
    order: 2,
  },
  {
    _id: "3",
    name: "PhD Thesis",
    slug: "phd-thesis",
    role: "Candidate",
    timeline: "May 2016 - May 2021",
    url: "https://doi.org/10.18174/544521",
    summary: "From field to airborne spectroscopy – advancing spectral data analytics for accurate retrieval of perennial ryegrass biomass and feed quality.",
    tags: ["academic", "research"],
    order: 3,
  },
];

async function loadProjects(): Promise<Project[]> {
  const hasSanity = Boolean(process.env.SANITY_PROJECT_ID);
  if (!hasSanity) return fallbackProjects;

  const projects = await fetchProjects();
  return projects?.length ? projects : fallbackProjects;
}

export default async function ProjectsPage() {
  const projects = await loadProjects();

  // Extract unique tags
  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags || [])));

  return (
    <main className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-base-800/60">Projects</p>
        <h1 className="font-heading text-3xl">Research & Development</h1>
        <p className="text-base-800/70">
          A collection of academic and professional projects.
        </p>
      </header>

      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-base-100 px-3 py-1 text-xs text-base-800/70"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project._id}
            className="flex flex-col rounded-2xl bg-white p-6 shadow-soft"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h2 className="font-heading text-xl">{project.name}</h2>
                {project.role && (
                  <p className="text-sm text-accent-600">{project.role}</p>
                )}
              </div>
              {project.timeline && (
                <span className="whitespace-nowrap rounded-full bg-base-100 px-3 py-1 text-xs text-base-800/60">
                  {project.timeline}
                </span>
              )}
            </div>

            {project.summary && (
              <p className="mt-3 flex-1 text-sm text-base-800/70">{project.summary}</p>
            )}

            {project.tags?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent-50 px-2 py-0.5 text-xs text-accent-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}

            <div className="mt-4 flex gap-3">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-accent-600 hover:underline"
                >
                  View Project →
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-base-800/60 hover:underline"
                >
                  Repository
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
