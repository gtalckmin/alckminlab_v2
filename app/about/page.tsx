import { fetchProfile, fetchSkills, fetchEducation, fetchExperiences } from "@/lib/sanity";
import { Profile, Skill, Education, Experience } from "@/lib/types";
import Link from "next/link";

const fallbackProfile: Profile = {
  _id: "fallback",
  name: "Gustavo Togeiro de Alckmin",
  nickname: "Gustavo",
  greeting: "Hi, I am",
  designation: "Postdoc Researcher",
  company: "University of Missouri",
  companyUrl: "https://muforagelivestock.org/",
  bio: "I work with Remote Sensing and Machine Learning for Agriculture.",
  summaryPoints: [
    "I am an Ag-Tech Professional",
    "I work with R & Python",
    "I work on Remote Sensing",
    "Farming is happiness",
  ],
  email: "gustavo.togeirodealckmin@missouri.edu",
  social: [
    { label: "GitHub", url: "https://www.github.com/gtalckmin" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/gtalckmin/" },
    { label: "Twitter", url: "https://twitter.com/GustavoTA8" },
  ],
  researchInterests: ["Remote Sensing", "Machine Learning", "Precision Agriculture"],
};

const fallbackSkills: Skill[] = [
  { _id: "1", name: "R Programming", summary: "10+ years experience", percentage: 95, order: 1 },
  { _id: "2", name: "Remote Sensing", summary: "Satellite and UAV imagery", percentage: 100, order: 2 },
  { _id: "3", name: "Machine Learning", summary: "Regression and classification", percentage: 85, order: 3 },
  { _id: "4", name: "Python", summary: "Data science and automation", percentage: 80, order: 4 },
];

const fallbackEducation: Education[] = [
  {
    _id: "1",
    degree: "Ph.D in Remote Sensing",
    institution: "University of Tasmania & Wageningen University",
    timeframe: "2016-2021",
    order: 1,
  },
  {
    _id: "2",
    degree: "M.Sc. in Sustainable Agriculture",
    institution: "Montpellier SupAgro & UPM",
    timeframe: "2012-2014",
    order: 2,
  },
  {
    _id: "3",
    degree: "Agronomic Engineering",
    institution: "University of São Paulo (ESALQ)",
    timeframe: "2005-2010",
    order: 3,
  },
];

const fallbackExperiences: Experience[] = [
  {
    _id: "1",
    company: "University of Missouri",
    position: "Post Doctoral Researcher",
    location: "Columbia, MO",
    startDate: "August 2021",
    responsibilities: [
      "Development of Remote Sensing Techniques for biomass estimation",
      "Development of canopy-height sensor and web-based applications",
      "Scientific Writing and Publication",
    ],
    order: 1,
  },
];

async function loadData() {
  const hasSanity = Boolean(process.env.SANITY_PROJECT_ID);

  if (!hasSanity) {
    return {
      profile: fallbackProfile,
      skills: fallbackSkills,
      education: fallbackEducation,
      experiences: fallbackExperiences,
    };
  }

  const [profile, skills, education, experiences] = await Promise.all([
    fetchProfile(),
    fetchSkills(),
    fetchEducation(),
    fetchExperiences(),
  ]);

  return {
    profile: profile || fallbackProfile,
    skills: skills?.length ? skills : fallbackSkills,
    education: education?.length ? education : fallbackEducation,
    experiences: experiences?.length ? experiences : fallbackExperiences,
  };
}

export default async function AboutPage() {
  const { profile, skills, education, experiences } = await loadData();

  return (
    <main className="space-y-12">
      {/* Hero / Profile Section */}
      <section className="rounded-3xl bg-white p-8 shadow-soft">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-base-800/60">
            {profile.greeting || "Hi, I am"}
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl">{profile.name}</h1>
          <p className="text-lg text-accent-600">
            {profile.designation}
            {profile.company && (
              <>
                {" "}
                at{" "}
                {profile.companyUrl ? (
                  <a
                    href={profile.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-accent-500"
                  >
                    {profile.company}
                  </a>
                ) : (
                  profile.company
                )}
              </>
            )}
          </p>
          <p className="text-base-800/80">{profile.bio}</p>

          {profile.summaryPoints?.length ? (
            <ul className="list-inside list-disc space-y-1 text-base-800/70">
              {profile.summaryPoints.map((point: string, i: number) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          ) : null}

          {profile.researchInterests?.length ? (
            <div className="flex flex-wrap gap-2 pt-2">
              {profile.researchInterests.map((interest: string) => (
                <span
                  key={interest}
                  className="rounded-full bg-accent-100 px-3 py-1 text-sm text-accent-700"
                >
                  {interest}
                </span>
              ))}
            </div>
          ) : null}

          {profile.social?.length ? (
            <div className="flex flex-wrap gap-3 pt-4">
              {profile.social.map((link: { label?: string; url?: string }) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-base-100 px-4 py-2 text-sm font-medium text-base-800 hover:bg-base-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-4">
        <h2 className="font-heading text-2xl">Skills</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill: Skill) => (
            <div key={skill._id} className="rounded-2xl bg-white p-5 shadow-soft">
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-lg">{skill.name}</h3>
                {skill.percentage && (
                  <span className="text-sm text-accent-600">{skill.percentage}%</span>
                )}
              </div>
              {skill.summary && (
                <p className="mt-2 text-sm text-base-800/70">{skill.summary}</p>
              )}
              {skill.percentage && (
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-base-100">
                  <div
                    className="h-full rounded-full bg-accent-500"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="space-y-4">
        <h2 className="font-heading text-2xl">Education</h2>
        <div className="space-y-4">
          {education.map((edu: Education) => (
            <div key={edu._id} className="rounded-2xl bg-white p-5 shadow-soft">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-heading text-lg">{edu.degree}</h3>
                  {edu.institutionUrl ? (
                    <a
                      href={edu.institutionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-600 hover:underline"
                    >
                      {edu.institution}
                    </a>
                  ) : (
                    <p className="text-base-800/70">{edu.institution}</p>
                  )}
                </div>
                {edu.timeframe && (
                  <span className="rounded-full bg-base-100 px-3 py-1 text-sm text-base-800/60">
                    {edu.timeframe}
                  </span>
                )}
              </div>
              {edu.description && (
                <p className="mt-2 text-sm text-base-800/70">{edu.description}</p>
              )}
              {edu.publications?.length ? (
                <div className="mt-3">
                  <p className="text-xs uppercase tracking-wider text-base-800/50">
                    Publications
                  </p>
                  <ul className="mt-1 space-y-1">
                    {edu.publications.map((pub, i) => (
                      <li key={i}>
                        <a
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-accent-600 hover:underline"
                        >
                          {pub.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {edu.activities?.length ? (
                <div className="mt-3">
                  <p className="text-xs uppercase tracking-wider text-base-800/50">
                    Activities
                  </p>
                  <ul className="mt-1 list-inside list-disc text-sm text-base-800/70">
                    {edu.activities.map((activity, i) => (
                      <li key={i}>{activity}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="space-y-4">
        <h2 className="font-heading text-2xl">Experience</h2>
        <div className="space-y-4">
          {experiences.map((exp: Experience) => (
            <div key={exp._id} className="rounded-2xl bg-white p-5 shadow-soft">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-heading text-lg">{exp.position}</h3>
                  <p className="text-accent-600">
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {exp.company}
                      </a>
                    ) : (
                      exp.company
                    )}
                    {exp.location && (
                      <span className="text-base-800/60"> · {exp.location}</span>
                    )}
                  </p>
                </div>
                <span className="rounded-full bg-base-100 px-3 py-1 text-sm text-base-800/60">
                  {exp.startDate} – {exp.endDate || "Present"}
                </span>
              </div>
              {exp.overview && (
                <p className="mt-2 text-sm text-base-800/70">{exp.overview}</p>
              )}
              {exp.responsibilities?.length ? (
                <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-base-800/70">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
