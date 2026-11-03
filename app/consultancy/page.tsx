import Link from "next/link";

const services = [
  {
    title: "Remote sensing & Earth observation",
    summary:
      "Satellite, airborne, and UAV imagery analysis for crop and pasture monitoring, from sensor selection to processed, decision-ready maps.",
    tags: ["satellite", "uav", "spectroscopy"],
  },
  {
    title: "Precision agriculture strategy",
    summary:
      "Advice on adopting sensors, variable-rate approaches, and on-farm data collection that fit your production system and budget.",
    tags: ["precision-agriculture", "agronomy"],
  },
  {
    title: "Pasture & crop analytics",
    summary:
      "Biomass and feed quality estimation, time-series analysis, and machine learning models built and validated against field data.",
    tags: ["machine-learning", "pasture-management", "data-science"],
  },
  {
    title: "Crop growth modelling (APSIM)",
    summary:
      "APSIM simulations for yield forecasting, scenario and climate analysis, and management decisions, calibrated with field and remote sensing data.",
    tags: ["apsim", "crop-modelling", "agronomy"],
  },
  {
    title: "Radiative transfer modelling",
    summary:
      "Physically based models such as PROSAIL to link canopy reflectance with plant traits, supporting robust trait retrieval and sensor design.",
    tags: ["radiative-transfer", "prosail", "spectroscopy"],
  },
  {
    title: "Plant phenotyping",
    summary:
      "High-throughput field phenotyping with UAV and proximal sensors, from experiment design to trait extraction pipelines for breeding programs.",
    tags: ["phenotyping", "uav", "sensors"],
  },
  {
    title: "LLMs & generative AI",
    summary:
      "Practical generative AI for agriculture and research: LLM-powered assistants, document and data workflows, and responsible adoption strategies.",
    tags: ["llm", "generative-ai", "automation"],
  },
  {
    title: "Training & capability building",
    summary:
      "Workshops and short courses on remote sensing, crop monitoring, and agricultural data workflows for industry and research teams.",
    tags: ["education", "workshops"],
  },
];

export default function ConsultancyPage() {
  return (
    <main>
      <header className="page-heading">
        <p className="eyebrow">Consultancy</p>
        <h1 className="page-title">Expertise for digital agriculture.</h1>
        <p className="page-lede">
          Independent advice and technical support for agribusinesses, growers, government, and research groups working with
          remote sensing, precision agriculture, crop modelling, phenotyping, and AI for agricultural data.
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.title} className="content-card flex flex-col p-6">
            <h2 className="font-heading text-2xl tracking-tight">{service.title}</h2>
            <p className="mt-3 flex-1 text-sm text-base-800/70">{service.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <p className="mt-8 text-sm text-base-800/70">
        Backed by a PhD in remote sensing and{" "}
        <Link href="/certifications" className="font-medium text-accent-600 hover:underline">
          ongoing training in generative AI, MLOps, and deep learning
        </Link>
        .
      </p>

      <section className="content-card mt-8 max-w-2xl p-7 sm:p-10">
        <p className="feature-card__label">Work together</p>
        <p className="mt-3 text-base-800/70">
          Tell me about your project, timeline, and the decisions you need to support, and I will get back to you to discuss scope.
        </p>
        <Link href="/contact" className="button-primary mt-6 inline-block">
          Get in touch
        </Link>
      </section>
    </main>
  );
}
