/**
 * Migration Data from Hugo (alckminlab) to Sanity (alckminlab-v2)
 * 
 * To import this data into Sanity:
 * 1. Open Sanity Studio at /studio
 * 2. Manually create documents using this data as reference
 * 
 * Or use Sanity CLI:
 * npx sanity dataset import ./scripts/migration-data.ndjson production
 * 
 * This file contains the structured data extracted from the old Hugo site.
 */

export const profileData = {
  _type: "profile",
  name: "Gustavo Togeiro de Alckmin",
  nickname: "Gustavo",
  greeting: "Hi, I am",
  designation: "Postdoc Researcher",
  company: "University of Missouri",
  companyUrl: "https://muforagelivestock.org/",
  bio: "I work with Remote Sensing and Machine Learning for Agriculture.",
  summaryPoints: [
    "I am an Ag-Tech Professional",
    "I strive to make great quality research",
    "I work with R & Python",
    "I work on Remote Sensing",
    "Farming is happiness",
    "I measure grass for a living",
    "M-I-Z-Z-O-U!",
  ],
  email: "gustavo.togeirodealckmin@missouri.edu",
  social: [
    { label: "Email", url: "mailto:gustavo.togeirodealckmin@missouri.edu", icon: "fas fa-envelope" },
    { label: "GitHub", url: "https://www.github.com/gtalckmin", icon: "fab fa-github" },
    { label: "WhatsApp", url: "https://wa.me/message/JHMF5ARIGFTSB1", icon: "fab fa-whatsapp" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/gtalckmin/", icon: "fab fa-linkedin" },
    { label: "Twitter", url: "https://twitter.com/GustavoTA8", icon: "fab fa-twitter" },
  ],
  researchInterests: [
    "Remote Sensing",
    "Machine Learning",
    "Precision Agriculture",
    "Spectroscopy",
    "Pasture Management",
  ],
};

export const skillsData = [
  {
    _type: "skill",
    name: "R Programming",
    summary: "Programming in R for the past 10+ years. A cosmos in itself.",
    url: "https://www.r-project.org/",
    percentage: 95,
    order: 1,
  },
  {
    _type: "skill",
    name: "LaTeX",
    summary: "Using LaTeX for scientific and technical writing. PhD Thesis written in Rmarkdown/LaTeX.",
    url: "https://latex-project.org/",
    percentage: 90,
    order: 2,
  },
  {
    _type: "skill",
    name: "Agriculture",
    summary: "Worked in distinct areas of agriculture, from soil fertility to plant protection and grazing management.",
    percentage: 100,
    order: 3,
  },
  {
    _type: "skill",
    name: "Machine Learning",
    summary: "Employed distinct machine learning algorithms for regression and classification tasks.",
    percentage: 85,
    order: 4,
  },
  {
    _type: "skill",
    name: "Remote Sensing",
    summary: "Using light interactions to learn the properties of objects.",
    percentage: 100,
    order: 5,
  },
  {
    _type: "skill",
    name: "Spectroscopy",
    summary: "Using light interactions to learn the properties of objects.",
    percentage: 90,
    order: 6,
  },
  {
    _type: "skill",
    name: "Python",
    summary: "Python programming for data science and automation.",
    percentage: 80,
    order: 7,
  },
  {
    _type: "skill",
    name: "Git",
    summary: "Experienced with git-based development. Mostly use GitLab (WUR). Also have experience in working with GitHub.",
    url: "https://git-scm.com/",
    percentage: 85,
    order: 8,
  },
  {
    _type: "skill",
    name: "UAV Pilot",
    summary: "UAV (RPAS) Pilot. Australian (CASA) License.",
    percentage: 80,
    order: 9,
  },
];

export const educationData = [
  {
    _type: "education",
    degree: "Ph.D in Remote Sensing",
    institution: "University of Tasmania (AUS) and Wageningen University (NL)",
    institutionUrl: "https://www.wur.nl/en/Persons/Gustavo-G-Gustavo-Togeiro-de-Alckmin.htm",
    timeframe: "2016-2021",
    description: "Joint PhD Program between UTAS and WUR. Dairy Australia Scholarship Recipient.",
    publications: [
      {
        title: "Comparing methods to estimate perennial ryegrass biomass",
        url: "https://doi.org/10.1007/s11119-020-09737-z",
      },
      {
        title: "Retrieval of Crude Protein in Perennial Ryegrass Using Spectral Data",
        url: "https://doi.org/10.3390/rs12182958",
      },
      {
        title: "Retrieval of Hyperspectral Information from Multispectral Data",
        url: "https://doi.org/10.3390/s20247192",
      },
    ],
    order: 1,
  },
  {
    _type: "education",
    degree: "M.Sc. in Sustainable Agriculture (AgrisMundus)",
    institution: "Montpellier SupAgro (FR) and Universidad Politécnica de Madrid (ES)",
    timeframe: "2012-2014",
    description: "Erasmus Mundus Scholarship Recipient.",
    publications: [
      {
        title: "Use of Remote Sensing Techniques to Enhance Forage Management: Unmanned Aerial Vehicles",
        url: "https://doi.org/10.13140/RG.2.1.3821.0724",
      },
    ],
    activities: [
      "AgrisMundus Student Representative",
      "Short-term Scholar at Kansas State University",
      "Market Consultant for RoboFlight (UAV startup)",
    ],
    order: 2,
  },
  {
    _type: "education",
    degree: "Agronomic Engineering",
    institution: "University of São Paulo - Luiz de Queiroz College of Agriculture",
    institutionUrl: "http://www.en.esalq.usp.br/",
    timeframe: "2005-2010",
    activities: [
      "Equine-assisted therapy",
      "GIS Teaching Assistant",
      "Several Agricultural and Research Internships",
      "Exchange BSc. and MSc. levels at Texas Tech and Wageningen University",
    ],
    order: 3,
  },
];

export const experiencesData = [
  {
    _type: "experience",
    company: "University of Missouri",
    companyUrl: "https://cafnr.missouri.edu/",
    location: "Columbia (MO), United States",
    overview: "Mizzou offers innovative solutions for precision pasture management.",
    position: "Post Doctoral Researcher",
    startDate: "August 2021",
    endDate: null, // Current position
    responsibilities: [
      "Development of Remote Sensing Techniques, particularly satellite-based time-series, for biomass estimation.",
      "Development of canopy-height sensor and web-based applications.",
      "Scientific Writing and Publication.",
    ],
    order: 1,
  },
  {
    _type: "experience",
    company: "AB Ag Imagery",
    location: "São Paulo State, Brazil",
    overview: "AB Ag Imagery was a startup project.",
    position: "Founder",
    startDate: "April 2014",
    endDate: "August 2015",
    responsibilities: [
      "Development of UAV and sensing business plan.",
      "Seed Funding.",
      "Development of Proposal for R&D of multispectral cameras for agriculture.",
    ],
    order: 2,
  },
  {
    _type: "experience",
    company: "Czarnikow",
    companyUrl: "https://www.czarnikow.com",
    location: "São Paulo - SP",
    overview: "Sugar trading company founded in 1861.",
    position: "Sugar Trader (Commercial Executive)",
    startDate: "Oct 2010",
    endDate: "August 2011",
    responsibilities: [
      "Sugar Trading Assistance to Brazil's Raw Sugar Market.",
      "Development of exotic structures for molasses hedging.",
      "Business Intelligence for sugar industrial consumers.",
    ],
    order: 3,
  },
];

export const projectsData = [
  {
    _type: "project",
    name: "Google Earth Engine (GEE)",
    role: "Developer",
    timeline: "March 2018 - Present",
    summary: "Working with GEE for remote sensing analysis and satellite imagery processing.",
    tags: ["professional", "academic", "remote-sensing"],
    order: 1,
  },
  {
    _type: "project",
    name: "Coursera Data Science Specialization",
    role: "Student",
    timeline: "Jun 2017 - Present",
    url: "https://www.coursera.org/specializations/jhu-data-science",
    summary: "Coursera Data Science Specialization offered by Johns Hopkins University.",
    tags: ["professional", "machine-learning"],
    order: 2,
  },
  {
    _type: "project",
    name: "PhD Thesis",
    role: "Candidate",
    timeline: "May 2016 - May 2021",
    url: "https://doi.org/10.18174/544521",
    summary: "From field to airborne spectroscopy – advancing spectral data analytics for accurate retrieval of perennial ryegrass biomass and feed quality.",
    tags: ["academic", "research"],
    order: 3,
  },
];

export const publicationsData = [
  {
    _type: "publication",
    title: "Comparing methods to estimate perennial ryegrass biomass",
    authors: ["Gustavo Togeiro de Alckmin", "et al."],
    venue: "Precision Agriculture",
    year: 2020,
    doi: "https://doi.org/10.1007/s11119-020-09737-z",
    abstract: "Comparison of different methods for estimating perennial ryegrass biomass using remote sensing techniques.",
  },
  {
    _type: "publication",
    title: "Retrieval of Crude Protein in Perennial Ryegrass Using Spectral Data",
    authors: ["Gustavo Togeiro de Alckmin", "et al."],
    venue: "Remote Sensing",
    year: 2020,
    doi: "https://doi.org/10.3390/rs12182958",
    abstract: "Using spectral data to retrieve crude protein content in perennial ryegrass.",
  },
  {
    _type: "publication",
    title: "Retrieval of Hyperspectral Information from Multispectral Data",
    authors: ["Gustavo Togeiro de Alckmin", "et al."],
    venue: "Sensors",
    year: 2020,
    doi: "https://doi.org/10.3390/s20247192",
    abstract: "Methods for retrieving hyperspectral information from multispectral satellite data.",
  },
  {
    _type: "publication",
    title: "Use of Remote Sensing Techniques to Enhance Forage Management: Unmanned Aerial Vehicles",
    authors: ["Gustavo Togeiro de Alckmin"],
    venue: "MSc Thesis",
    year: 2014,
    doi: "https://doi.org/10.13140/RG.2.1.3821.0724",
    abstract: "MSc thesis on using UAVs for forage management.",
  },
];

// NDJSON format for Sanity CLI import
export function generateNDJSON() {
  const documents = [
    { ...profileData, _id: "profile-gustavo" },
    ...skillsData.map((s, i) => ({ ...s, _id: `skill-${i + 1}` })),
    ...educationData.map((e, i) => ({ ...e, _id: `education-${i + 1}` })),
    ...experiencesData.map((e, i) => ({ ...e, _id: `experience-${i + 1}` })),
    ...projectsData.map((p, i) => ({ ...p, _id: `project-${i + 1}` })),
    ...publicationsData.map((p, i) => ({ ...p, _id: `publication-${i + 1}`, slug: { _type: "slug", current: `pub-${i + 1}` } })),
  ];

  return documents.map((doc) => JSON.stringify(doc)).join("\n");
}

// Run this to output NDJSON:
// console.log(generateNDJSON());
