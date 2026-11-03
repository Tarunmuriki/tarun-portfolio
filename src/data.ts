export type Project = {
  number: string;
  name: string;
  category: string;
  description: string;
  details: string;
  stack: string[];
  href: string;
  label: string;
  accent: string;
};

export const projects: Project[] = [
  {
    number: "01",
    name: "CareerMap",
    category: "AI · Career Tech",
    description: "A career guidance platform that turns career uncertainty into a clear next step.",
    details: "Brings resume analysis, skill-gap detection, personalized learning roadmaps, mock tests, and AI mock interviews together in one experience.",
    stack: ["React.js", "HTML", "CSS", "Django", "MongoDB", "AI / NLP"],
    href: "https://careermap-c2vx.onrender.com/",
    label: "Explore live project",
    accent: "violet",
  },
  {
    number: "02",
    name: "Lexicon",
    category: "AI · EdTech",
    description: "A multilingual academic assistant built to make large document collections easier to explore.",
    details: "Uses retrieval-augmented generation, semantic search, vector embeddings, and Google Gemini to provide context-aware answers from academic material.",
    stack: ["Python", "RAG", "Gemini API", "ChromaDB"],
    href: "https://github.com/Tarunmuriki/Lexicon",
    label: "View on GitHub",
    accent: "cyan",
  },
  {
    number: "03",
    name: "NexusLearn",
    category: "Full Stack · EdTech",
    description: "An AI-powered learning platform designed to make study sessions more interactive and personalized.",
    details: "Project features include AI-generated summaries and quizzes, a personalized learning assistant, progress tracking, and a coding playground.",
    stack: ["MERN", "AI", "Firebase"],
    href: "https://github.com/Tarunmuriki/NexusLearn",
    label: "View on GitHub",
    accent: "orange",
  },
];

export const skillGroups = [
  { title: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive UI"] },
  { title: "Programming", items: ["Python", "Java", "C", "SQL"] },
  { title: "Backend & Data", items: ["Django", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Firebase"] },
  { title: "AI & Tools", items: ["RAG", "NLP", "Generative AI", "Git", "GitHub", "Postman", "Google Lighthouse"] },
];

export const experiences = [
  {
    role: "AI & ML Intern",
    company: "Elevate Labs",
    date: "May 2026 – July 2026",
    points: [
      "Worked on practical data analysis and machine-learning implementations.",
      "Developed and tested AI/ML-based solutions while strengthening problem-solving skills.",
    ],
  },
  {
    role: "Python Developer Intern",
    company: "Elevate Labs",
    date: "September 2025 – November 2025",
    points: [
      "Developed and tested Python programs using programming logic and problem-solving techniques.",
      "Debugged code and improved application functionality through implementation and testing.",
    ],
  },
];
