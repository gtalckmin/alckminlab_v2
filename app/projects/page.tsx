import { fetchProjects } from "@/lib/sanity";
import { Project } from "@/lib/types";

const fallbackProjects: Project[] = [
  {
    _id: "1",
    name: "Spectral analytics for pasture biomass and feed quality",
    slug: "spectral-analytics-pasture-biomass",
    role: "Doctoral research",
    timeline: "2016 - 2021",
    url: "https://doi.org/10.18174/544521",
    summary: "A PhD research program focused on field and airborne spectroscopy to estimate perennial ryegrass biomass and feed quality with high accuracy.",
    tags: ["research", "remote-sensing", "pasture-management"],
    order: 1,
  },
  {
    _id: "2",
    name: "Digital agriculture and remote sensing workflows",
    slug: "digital-agriculture-remote-sensing-workflows",
    role: "Applied research",
    timeline: "2021 - Present",
    summary: "Development of proximal sensors, satellite data pipelines, and web-based visualisation tools to support decision making in agricultural systems.",
    tags: ["precision-agriculture", "machine-learning", "data-science"],
    order: 2,
  },
  {
    _id: "3",
    name: "Precision agriculture teaching and field analytics",
    slug: "precision-agriculture-teaching",
    role: "Academic leadership",
    timeline: "2022 - Present",
    summary: "Curriculum design and delivery for precision agriculture, crop monitoring, and remote sensing applications for agronomy students.",
    tags: ["education", "agronomy", "remote-sensing"],
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
    <main>
      <header className="page-heading">
        <p className="eyebrow">Projects</p>
        <h1 className="page-title">Research &amp; development</h1>
        <p className="page-lede">
          Applied research and teaching initiatives spanning remote sensing, pasture systems, and precision agriculture.
        </p>
      </header>

      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <span
              key={tag}
              className="tag"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project._id}
            className="content-card flex flex-col p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h2 className="font-heading text-2xl tracking-tight">{project.name}</h2>
                {project.role && (
                  <p className="text-sm text-accent-600">{project.role}</p>
                )}
              </div>
              {project.timeline && (
                <span className="tag whitespace-nowrap">
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
                    className="tag"
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
