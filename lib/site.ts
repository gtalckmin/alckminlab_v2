export const siteUrl = "https://alckminlab.org";

export const personName = "Gustavo Togeiro de Alckmin";

export const siteDescription =
  "Gustavo Togeiro de Alckmin (Gustavo Alckmin) is a University Lecturer at The University of Western Australia working on remote sensing, precision agriculture, crop modelling, and AI for agriculture.";

// schema.org Person data so search engines link the name "Gustavo Alckmin" to this site.
export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: personName,
  alternateName: ["Gustavo Alckmin", "Gustavo T. de Alckmin", "Gustavo Togeiro Alckmin", "G. T. de Alckmin"],
  url: siteUrl,
  jobTitle: "University Lecturer",
  worksFor: {
    "@type": "CollegeOrUniversity",
    name: "The University of Western Australia",
    url: "https://www.uwa.edu.au/",
  },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Wageningen University & Research" },
    { "@type": "CollegeOrUniversity", name: "University of Tasmania" },
    { "@type": "CollegeOrUniversity", name: "Universidade de São Paulo" },
  ],
  nationality: { "@type": "Country", name: "Australia" },
  knowsAbout: [
    "Remote sensing",
    "Precision agriculture",
    "Spectroscopy",
    "Chemometrics",
    "Crop modelling",
    "APSIM",
    "Radiative transfer modelling",
    "Plant phenotyping",
    "Machine learning",
    "Large language models",
    "Generative AI",
  ],
  sameAs: [
    "https://www.linkedin.com/in/gtalckmin/",
    "https://www.github.com/gtalckmin",
    "https://twitter.com/GustavoTA8",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "Alckmin Lab",
  url: siteUrl,
  author: { "@id": `${siteUrl}/#person` },
};
