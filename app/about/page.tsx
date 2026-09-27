import { fetchProfile, fetchSkills, fetchEducation, fetchExperiences } from "@/lib/sanity";
import { Profile, Skill, Education, Experience } from "@/lib/types";

const fallbackProfile: Profile = {
  _id: "fallback",
  name: "Gustavo Togeiro de Alckmin",
  nickname: "Gustavo",
  greeting: "Hi, I am",
  designation: "University Lecturer",
  company: "The University of Western Australia",
  companyUrl: "https://www.uwa.edu.au/",
  bio: "I am a University Lecturer at The University of Western Australia, coordinating Crops and Cropping Systems and Precision Agriculture. My research experience spans remote sensing, machine learning, and pasture monitoring.",
  summaryPoints: [
    "Unit coordinator for SCIE3314 Crops and Cropping Systems",
    "Unit coordinator for AGRI4401 Precision Agriculture",
    "Remote sensing and machine learning for pasture systems",
    "Proximal sensing and satellite time-series analysis",
  ],
  email: "gustavo.togeirodealckmin@uwa.edu.au",
  social: [
    { label: "GitHub", url: "https://www.github.com/gtalckmin" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/gtalckmin/" },
    { label: "Twitter", url: "https://twitter.com/GustavoTA8" },
  ],
  researchInterests: ["Remote Sensing", "Machine Learning", "Precision Agriculture"],
};

const fallbackSkills: Skill[] = [
  { _id: "1", name: "Remote Sensing", summary: "Remote sensing applications for crop and pasture monitoring.", order: 1 },
  { _id: "2", name: "Sensors & UAVs", summary: "Proximal sensors, unmanned aerial vehicles, and multispectral imaging.", order: 2 },
  { _id: "3", name: "Machine Learning", summary: "Machine learning and time-series analysis for satellite data.", order: 3 },
  { _id: "4", name: "Precision Agriculture", summary: "Teaching and applied research in precision agriculture and crop monitoring.", order: 4 },
  { _id: "5", name: "Python & R", summary: "Geospatial data, statistical analysis, and data science.", order: 5 },
  { _id: "6", name: "AI, LLMs & MLOps", summary: "Recent training in AI agents, large language models, and production ML.", order: 6 },
  { _id: "7", name: "Commodity Risk Management", summary: "Commercial experience with physical and derivative commodity markets.", order: 7 },
];

const fallbackEducation: Education[] = [
  {
    _id: "1",
    degree: "Doctor of Philosophy - PhD, Remote Sensing",
    institution: "Wageningen University & Research",
    timeframe: "2016–2021",
    description: "Double-degree doctoral research with the University of Tasmania. Thesis: From field to airborne spectroscopy – advancing spectral data analytics for accurate retrieval of perennial ryegrass biomass and feed quality. Research areas: remote sensing and machine learning for pastures.",
    order: 1,
  },
  {
    _id: "2",
    degree: "Doctor of Philosophy (PhD), Remote Sensing and Forage Management",
    institution: "University of Tasmania",
    timeframe: "May 2016–May 2021",
    description: "Double-degree doctoral research with Wageningen University & Research. Thesis: From field to airborne spectroscopy – advancing spectral data analytics for accurate retrieval of perennial ryegrass biomass and feed quality.",
    order: 2,
  },
  {
    _id: "3",
    degree: "Master's degree, Development Economics and International Development",
    institution: "Universidad Politécnica de Madrid",
    timeframe: "2013–2014",
    description: "AgrisMundus consortium program in rural development planning and sustainable territorial management. Awarded a competitive European Union scholarship.",
    activities: ["Global Student Representative"],
    order: 3,
  },
  {
    _id: "4",
    degree: "Master's degree, Agricultural Development and Sustainable Agricultural Production",
    institution: "L'Institut Agro Montpellier",
    timeframe: "2012–2013",
    description: "Studied animal production systems in tropical areas and assessed livestock index-based insurance for arid regions.",
    order: 4,
  },
  {
    _id: "5",
    degree: "Commodities and Futures - Derivatives and Hedging Strategies",
    institution: "BMF&Bovespa",
    timeframe: "2011",
    description: "Professional education in commodities, futures, options, derivatives, and hedging strategies.",
    order: 5,
  },
  {
    _id: "6",
    degree: "Bachelor's degree, Agronomic Engineering",
    institution: "University of São Paulo (ESALQ)",
    timeframe: "Feb 2005–Aug 2010",
    description: "Five-year undergraduate program with emphasis on agricultural economics, business and management, animal sciences, and forage production.",
    order: 6,
  },
  {
    _id: "7",
    degree: "Bachelor's degree, Animal Sciences and Forage Management",
    institution: "Texas Tech University",
    timeframe: "Jan 2010–Aug 2010",
    description: "Exchange studies in beef production, forage crop production, and soil physics. Awarded a CAPES/FIPSE scholarship.",
    activities: ["Texas Tech Agronomy Club"],
    order: 7,
  },
  {
    _id: "8",
    degree: "Exchange studies, Agricultural Economics",
    institution: "Wageningen University & Research",
    timeframe: "2009",
    description: "Exchange periods in agricultural economics, finance, risk management, decision science, and international business.",
    order: 8,
  },
];

const fallbackExperiences: Experience[] = [
  {
    _id: "1",
    company: "The University of Western Australia",
    position: "University Lecturer",
    location: "Perth, Western Australia, Australia",
    startDate: "Jan 2024",
    responsibilities: [
      "Unit coordinator for SCIE3314 Crops and Cropping Systems.",
      "Unit coordinator for AGRI4401 Precision Agriculture.",
    ],
    order: 1,
  },
  {
    _id: "2",
    company: "DAS (Digital Agriculture Services)",
    position: "Earth Observation Scientist",
    location: "Melbourne, Victoria, Australia",
    startDate: "Feb 2023",
    endDate: "Apr 2023",
    overview: "Full-time hybrid role in earth observation for digital agriculture.",
    order: 2,
  },
  {
    _id: "3",
    company: "University of Melbourne",
    position: "University Lecturer",
    location: "Melbourne, Victoria, Australia",
    startDate: "May 2022",
    endDate: "Feb 2023",
    responsibilities: [
      "Lectured in Applications in Precision Agriculture (AGRI30045) and Remote Sensing (GEOM90005).",
      "Co-coordinated Advances in Crop Monitoring Methods (AGRI90096).",
    ],
    order: 3,
  },
  {
    _id: "4",
    company: "University of Missouri-Columbia",
    position: "Postdoctoral Researcher",
    location: "Columbia, Missouri, United States",
    startDate: "Aug 2021",
    endDate: "May 2022",
    responsibilities: [
      "Developed proximal sensors for pasture height measurement.",
      "Developed web platforms for data visualization and applied machine learning and time-series analysis to satellite data for pasture biomass assessment.",
    ],
    order: 4,
  },
  {
    _id: "5",
    company: "Wageningen University & Research",
    position: "Researcher / PhD Candidate",
    location: "Wageningen, Netherlands",
    startDate: "Jun 2016",
    endDate: "Feb 2021",
    responsibilities: [
      "Completed a double-degree PhD program with the University of Tasmania under the supervision of Arko Lucieer and Lammert Kooistra.",
      "Produced four peer-reviewed publications and developed research supporting precision pasture management.",
    ],
    order: 5,
  },
  {
    _id: "6",
    company: "University of Tasmania",
    position: "Tutor",
    location: "Hobart, Australia",
    startDate: "Feb 2019",
    endDate: "Mar 2019",
    responsibilities: ["Tutored KGG103 and KGG542: Introduction to Remote Sensing."],
    order: 6,
  },
  {
    _id: "7",
    company: "AB Agro Imagem",
    position: "Founder",
    location: "Piracicaba, São Paulo, Brazil",
    startDate: "Jun 2014",
    endDate: "Aug 2015",
    responsibilities: [
      "Created a startup providing agricultural technologies, solutions, and information using UAVs and satellite imagery.",
      "Developed a technical-research plan for multispectral cameras and pursued research and development funding.",
    ],
    order: 7,
  },
  {
    _id: "8",
    company: "Kansas State University",
    position: "Short Term Scholar",
    location: "Manhattan, Kansas, United States",
    startDate: "Apr 2014",
    endDate: "Sep 2014",
    responsibilities: [
      "Worked with unmanned aerial vehicles and modified false-color infrared cameras for grassland biomass assessment.",
    ],
    order: 8,
  },
  {
    _id: "9",
    company: "Czarnikow Group Ltd",
    position: "Commercial Executive",
    location: "Greater São Paulo Area, Brazil",
    startDate: "Oct 2010",
    endDate: "Aug 2011",
    overview: "Commercial work in sugar trading, commodity risk management, and logistics.",
    responsibilities: [
      "Managed export contracts and trading strategies in physical and derivative markets.",
      "Developed risk management strategies for soft commodities and foreign exchange.",
      "Supported procurement outsourcing and logistics operations.",
    ],
    order: 9,
  },
];

const certifications = [
  ["Deploying AI into Production with FastAPI", "DataCamp", "Dec 2025"],
  ["Graph RAG with LangChain and Neo4j", "DataCamp", "Dec 2025"],
  ["Multi-Agent Systems with LangGraph", "DataCamp", "Dec 2025"],
  ["AI Agents with Hugging Face smolagents", "DataCamp", "Dec 2025"],
  ["Reinforcement Learning from Human Feedback (RLHF)", "DataCamp", "Dec 2025"],
  ["Fine-Tuning with Llama 3", "DataCamp", "Apr 2025"],
  ["Working with Hugging Face", "DataCamp", "Apr 2025"],
  ["Introduction to Deep Learning with PyTorch", "DataCamp", "Apr 2025"],
  ["Machine Learning Engineering for Production (MLOps) Specialization", "DeepLearning.AI", "Nov 2023"],
  ["Machine Learning Engineering for Production (MLOps)", "DeepLearning.AI", "Nov 2023"],
  ["Machine Learning Modeling Pipelines in Production", "DeepLearning.AI", "Nov 2023"],
  ["Machine Learning Data Lifecycle in Production", "Coursera", "Sep 2023"],
  ["Introduction to Machine Learning in Production", "Coursera", "Jun 2023"],
  ["DeepLearning.AI TensorFlow Developer Specialization", "DeepLearning.AI", "Dec 2022"],
  ["Sequences, Time Series and Prediction", "Coursera", "Dec 2022"],
  ["DeepLearning.AI Tensorflow Developer", "DeepLearning.AI", "Dec 2022"],
  ["Natural Language Processing in TensorFlow", "DeepLearning.AI", "Dec 2022"],
  ["Convolutional Neural Networks in TensorFlow", "Coursera", "Nov 2022"],
  ["Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning", "Coursera", "Sep 2022"],
  ["Visualizing Geospatial Data in Python", "DataCamp", "Mar 2022"],
  ["Spatial Data with R Track", "DataCamp", "Mar 2022"],
  ["Spatial Statistics in R", "DataCamp", "Mar 2022"],
  ["Interactive Maps with leaflet in R", "DataCamp", "Mar 2022"],
  ["Writing Efficient R Code", "DataCamp", "Mar 2022"],
  ["Hierarchical and Mixed Effects Models in R", "DataCamp", "Mar 2022"],
  ["Deep Learning in Python Track", "DataCamp", "Feb 2022"],
  ["Introduction to Deep Learning with PyTorch", "DataCamp", "Feb 2022"],
  ["Introduction to TensorFlow in Python", "DataCamp", "Feb 2022"],
  ["Introduction to Deep Learning in Python", "DataCamp", "Feb 2022"],
  ["Python Programming Track", "DataCamp", "Feb 2022"],
  ["Unit Testing for Data Science in Python", "DataCamp", "Feb 2022"],
  ["Software Engineering for Data Scientists in Python", "DataCamp", "Jan 2022"],
  ["Data Manipulation with pandas", "DataCamp", "Jan 2022"],
  ["Parallel Programming with Dask in Python", "DataCamp", "Jan 2022"],
  ["Writing Functions in Python", "DataCamp", "Jan 2022"],
  ["ARIMA Models in R", "DataCamp", "Jan 2022"],
  ["Writing Efficient Code with pandas", "DataCamp", "Jan 2022"],
  ["Introduction to TensorFlow in R", "DataCamp", "Jan 2022"],
  ["Image Processing with Python Track", "DataCamp", "Jan 2022"],
  ["Writing Efficient Python Code", "DataCamp", "Jan 2022"],
  ["Cloud Computing for Everyone", "DataCamp", "Jan 2021"],
  ["Intermediate SQL", "DataCamp", "Oct 2021"],
  ["Joining Data in SQL", "DataCamp", "Oct 2021"],
  ["Advanced Deep Learning with Keras", "DataCamp", "Aug 2021"],
  ["Image Processing with Keras in Python", "DataCamp", null],
  ["Image Processing in Python", "DataCamp", "Jul 2021"],
  ["Python Fundamentals Track", "DataCamp", "Jul 2021"],
  ["Forecasting in R", "DataCamp", "Jul 2021"],
  ["R Programming", "Coursera", "Feb 2019"],
  ["Neural Networks and Deep Learning", "Coursera", null],
  ["Machine Learning: Classification", "Coursera", "Jul 2017"],
  ["Machine Learning: Regression", "Coursera", "Jun 2017"],
  ["Machine Learning Foundations: A Case Study Approach", "Coursera Course Certificates", "Aug 2016"],
  ["Fundamentals of GIS", "Coursera Course Certificates", "Aug 2016"],
  ["The Data Scientist's Toolbox", "Coursera Course Certificates", "Jan 2016"],
  ["Dairy Production and Management", "Coursera Course Certificates", "Jun 2016"],
] as const;

const certificationYears = Array.from(
  new Set(certifications.map(([, , issued]) => issued?.slice(-4) ?? "Undated")),
).sort((a, b) => (a === "Undated" ? 1 : b === "Undated" ? -1 : b.localeCompare(a)));

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
      <section className="about-hero content-card p-7 sm:p-10">
        <div className="space-y-4">
          <p className="eyebrow">
            {profile.greeting || "Hi, I am"}
          </p>
          <h1 className="page-title">{profile.name}</h1>
          <p className="text-lg font-medium text-accent-600">
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
          <p className="max-w-3xl text-base leading-relaxed text-base-800/80">{profile.bio}</p>

          {profile.summaryPoints?.length ? (
            <ul className="grid gap-2 text-sm text-base-800/70 sm:grid-cols-2">
              {profile.summaryPoints.map((point: string, i: number) => (
                <li key={i} className="flex gap-2">
                  <span className="text-accent-600" aria-hidden="true">↗</span>
                  {point}
                </li>
              ))}
            </ul>
          ) : null}

          {profile.researchInterests?.length ? (
            <div className="flex flex-wrap gap-2 pt-2">
              {profile.researchInterests.map((interest: string) => (
                <span
                  key={interest}
                  className="tag"
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
                  className="button-secondary"
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
        <div className="mb-5">
          <p className="eyebrow">Expertise</p>
          <h2 className="section-title mt-3">Skills</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill: Skill) => (
            <div key={skill._id} className="content-card p-5">
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
        <div className="mb-5">
          <p className="eyebrow">Background</p>
          <h2 className="section-title mt-3">Education</h2>
        </div>
        <div className="space-y-4">
          {education.map((edu: Education) => (
            <div key={edu._id} className="content-card p-5 sm:p-6">
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
        <div className="mb-5">
          <p className="eyebrow">In the field</p>
          <h2 className="section-title mt-3">Experience</h2>
        </div>
        <div className="space-y-4">
          {experiences.map((exp: Experience) => (
            <div key={exp._id} className="content-card p-5 sm:p-6">
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

      <section className="space-y-6">
        <div className="mb-5">
          <p className="eyebrow">Professional development</p>
          <h2 className="section-title mt-3">Licenses &amp; certifications</h2>
          <p className="mt-2 text-sm text-base-800/70">{certifications.length} credentials from LinkedIn</p>
        </div>
        {certificationYears.map((year) => (
          <div key={year}>
            <h3 className="mb-3 font-heading text-xl">{year}</h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {certifications
                .map(([name, issuer, issued], index) => ({ name, issuer, issued, index }))
                .filter((credential) => (credential.issued?.slice(-4) ?? "Undated") === year)
                .map(({ name, issuer, issued, index }) => (
                  <li key={`${name}-${index}`} className="content-card p-4">
                    <h4 className="font-medium leading-snug">{name}</h4>
                    <p className="mt-1 text-sm text-base-800/70">
                      {issuer} <span aria-hidden="true">·</span> {issued ?? "Date not listed"}
                    </p>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
  );
}
