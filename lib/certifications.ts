export type CertificationTopic = {
  slug: string;
  title: string;
  summary: string;
};

export type Certification = {
  name: string;
  issuer: string;
  issued: string | null;
  topic: string;
};

export const certificationTopics: CertificationTopic[] = [
  {
    slug: "generative-ai",
    title: "Generative AI & LLMs",
    summary: "Agents, retrieval-augmented generation, fine-tuning, and deploying LLM applications.",
  },
  {
    slug: "mlops",
    title: "ML engineering & MLOps",
    summary: "Taking machine learning models from experiments to reliable production systems.",
  },
  {
    slug: "deep-learning",
    title: "Deep learning",
    summary: "Neural networks for vision, sequences, time series, and language with TensorFlow, Keras, and PyTorch.",
  },
  {
    slug: "machine-learning",
    title: "Machine learning & statistics",
    summary: "Regression, classification, mixed-effects models, and time-series forecasting.",
  },
  {
    slug: "geospatial",
    title: "Geospatial & image analysis",
    summary: "GIS, spatial statistics, interactive mapping, and image processing.",
  },
  {
    slug: "programming",
    title: "Programming & data engineering",
    summary: "Efficient, tested Python, R, and SQL code for data science workflows.",
  },
  {
    slug: "agriculture",
    title: "Agriculture",
    summary: "Animal production and farm systems.",
  },
];

// Sourced from LinkedIn "Licenses & certifications" (Sep 2026).
export const certifications: Certification[] = [
  { name: "Deploying AI into Production with FastAPI", issuer: "DataCamp", issued: "Dec 2025", topic: "generative-ai" },
  { name: "Graph RAG with LangChain and Neo4j", issuer: "DataCamp", issued: "Dec 2025", topic: "generative-ai" },
  { name: "Multi-Agent Systems with LangGraph", issuer: "DataCamp", issued: "Dec 2025", topic: "generative-ai" },
  { name: "AI Agents with Hugging Face smolagents", issuer: "DataCamp", issued: "Dec 2025", topic: "generative-ai" },
  { name: "Reinforcement Learning from Human Feedback (RLHF)", issuer: "DataCamp", issued: "Dec 2025", topic: "generative-ai" },
  { name: "Fine-Tuning with Llama 3", issuer: "DataCamp", issued: "Apr 2025", topic: "generative-ai" },
  { name: "Working with Hugging Face", issuer: "DataCamp", issued: "Apr 2025", topic: "generative-ai" },
  { name: "Introduction to Deep Learning with PyTorch", issuer: "DataCamp", issued: "Apr 2025", topic: "deep-learning" },
  { name: "Machine Learning Engineering for Production (MLOps) Specialization", issuer: "DeepLearning.AI", issued: "Nov 2023", topic: "mlops" },
  { name: "Machine Learning Engineering for Production (MLOps)", issuer: "DeepLearning.AI", issued: "Nov 2023", topic: "mlops" },
  { name: "Machine Learning Modeling Pipelines in Production", issuer: "DeepLearning.AI", issued: "Nov 2023", topic: "mlops" },
  { name: "Machine Learning Data Lifecycle in Production", issuer: "Coursera", issued: "Sep 2023", topic: "mlops" },
  { name: "Introduction to Machine Learning in Production", issuer: "Coursera", issued: "Jun 2023", topic: "mlops" },
  { name: "DeepLearning.AI TensorFlow Developer Specialization", issuer: "DeepLearning.AI", issued: "Dec 2022", topic: "deep-learning" },
  { name: "Sequences, Time Series and Prediction", issuer: "Coursera", issued: "Dec 2022", topic: "deep-learning" },
  { name: "DeepLearning.AI Tensorflow Developer", issuer: "DeepLearning.AI", issued: "Dec 2022", topic: "deep-learning" },
  { name: "Natural Language Processing in TensorFlow", issuer: "DeepLearning.AI", issued: "Dec 2022", topic: "deep-learning" },
  { name: "Convolutional Neural Networks in TensorFlow", issuer: "Coursera", issued: "Nov 2022", topic: "deep-learning" },
  { name: "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning", issuer: "Coursera", issued: "Sep 2022", topic: "deep-learning" },
  { name: "Visualizing Geospatial Data in Python", issuer: "DataCamp", issued: "Mar 2022", topic: "geospatial" },
  { name: "Spatial Data with R Track", issuer: "DataCamp", issued: "Mar 2022", topic: "geospatial" },
  { name: "Spatial Statistics in R", issuer: "DataCamp", issued: "Mar 2022", topic: "geospatial" },
  { name: "Interactive Maps with leaflet in R", issuer: "DataCamp", issued: "Mar 2022", topic: "geospatial" },
  { name: "Writing Efficient R Code", issuer: "DataCamp", issued: "Mar 2022", topic: "programming" },
  { name: "Hierarchical and Mixed Effects Models in R", issuer: "DataCamp", issued: "Mar 2022", topic: "machine-learning" },
  { name: "Deep Learning in Python Track", issuer: "DataCamp", issued: "Feb 2022", topic: "deep-learning" },
  { name: "Introduction to Deep Learning with PyTorch", issuer: "DataCamp", issued: "Feb 2022", topic: "deep-learning" },
  { name: "Introduction to TensorFlow in Python", issuer: "DataCamp", issued: "Feb 2022", topic: "deep-learning" },
  { name: "Introduction to Deep Learning in Python", issuer: "DataCamp", issued: "Feb 2022", topic: "deep-learning" },
  { name: "Python Programming Track", issuer: "DataCamp", issued: "Feb 2022", topic: "programming" },
  { name: "Unit Testing for Data Science in Python", issuer: "DataCamp", issued: "Feb 2022", topic: "programming" },
  { name: "Software Engineering for Data Scientists in Python", issuer: "DataCamp", issued: "Jan 2022", topic: "programming" },
  { name: "Data Manipulation with pandas", issuer: "DataCamp", issued: "Jan 2022", topic: "programming" },
  { name: "Parallel Programming with Dask in Python", issuer: "DataCamp", issued: "Jan 2022", topic: "programming" },
  { name: "Writing Functions in Python", issuer: "DataCamp", issued: "Jan 2022", topic: "programming" },
  { name: "ARIMA Models in R", issuer: "DataCamp", issued: "Jan 2022", topic: "machine-learning" },
  { name: "Writing Efficient Code with pandas", issuer: "DataCamp", issued: "Jan 2022", topic: "programming" },
  { name: "Introduction to TensorFlow in R", issuer: "DataCamp", issued: "Jan 2022", topic: "deep-learning" },
  { name: "Image Processing with Python Track", issuer: "DataCamp", issued: "Jan 2022", topic: "geospatial" },
  { name: "Writing Efficient Python Code", issuer: "DataCamp", issued: "Jan 2022", topic: "programming" },
  { name: "Intermediate SQL", issuer: "DataCamp", issued: "Oct 2021", topic: "programming" },
  { name: "Joining Data in SQL", issuer: "DataCamp", issued: "Oct 2021", topic: "programming" },
  { name: "Advanced Deep Learning with Keras", issuer: "DataCamp", issued: "Aug 2021", topic: "deep-learning" },
  { name: "Image Processing with Keras in Python", issuer: "DataCamp", issued: null, topic: "deep-learning" },
  { name: "Image Processing in Python", issuer: "DataCamp", issued: "Jul 2021", topic: "geospatial" },
  { name: "Python Fundamentals Track", issuer: "DataCamp", issued: "Jul 2021", topic: "programming" },
  { name: "Forecasting in R", issuer: "DataCamp", issued: "Jul 2021", topic: "machine-learning" },
  { name: "Cloud Computing for Everyone", issuer: "DataCamp", issued: "Jan 2021", topic: "mlops" },
  { name: "R Programming", issuer: "Coursera", issued: "Feb 2019", topic: "programming" },
  { name: "Neural Networks and Deep Learning", issuer: "Coursera", issued: null, topic: "deep-learning" },
  { name: "Machine Learning: Classification", issuer: "Coursera", issued: "Jul 2017", topic: "machine-learning" },
  { name: "Machine Learning: Regression", issuer: "Coursera", issued: "Jun 2017", topic: "machine-learning" },
  { name: "Machine Learning Foundations: A Case Study Approach", issuer: "Coursera", issued: "Aug 2016", topic: "machine-learning" },
  { name: "Fundamentals of GIS", issuer: "Coursera", issued: "Aug 2016", topic: "geospatial" },
  { name: "Dairy Production and Management", issuer: "Coursera", issued: "Jun 2016", topic: "agriculture" },
  { name: "The Data Scientist's Toolbox", issuer: "Coursera", issued: "Jan 2016", topic: "programming" },
];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function issuedValue(issued: string | null) {
  if (!issued) return -1;
  const [month, year] = issued.split(" ");
  return Number(year) * 12 + months.indexOf(month);
}

export function certificationsByTopic() {
  return certificationTopics
    .map((topic) => ({
      ...topic,
      items: certifications
        .filter((cert) => cert.topic === topic.slug)
        .sort((a, b) => issuedValue(b.issued) - issuedValue(a.issued)),
    }))
    .filter((group) => group.items.length > 0);
}
