// ---------------------------------------------------------------------------
// Single source of truth for all résumé-derived content on the site.
// Edit here to update any section — components read straight from this file.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Cevdet Batuhan Isik",
  firstName: "Cevdet Batuhan",
  lastName: "Isik",
  role: "AI/ML Software Engineer",
  tagline:
    "Computer Science student at Northeastern University building AI products and intelligent systems — from multi-agent RAG to deep learning pipelines.",
  location: "Boston, MA",
  email: "isik.c@northeastern.edu",
  phone: "(617) 595-2314",
  github: "https://github.com/batuhanisik751",
  linkedin: "https://www.linkedin.com/in/batuhan-isik32",
  resumeUrl: "/resume.pdf",
  // Photo lives in /public. Leave undefined to render the initials placeholder.
  photo: "/profile.jpg" as string | undefined,
} as const;

export const about = {
  blurb: [
    "I'm a Computer Science student at Northeastern University's Khoury College, graduating December 2026. I work at the intersection of applied machine learning and full-stack engineering — shipping AI products that real people actually use.",
    "Most recently I've architected generative-AI tools for a national public-sector learning platform, engineered diffusion-based computer-vision workflows, and built retrieval systems over tens of thousands of documents. I care about turning research-grade ideas into reliable, well-designed software.",
  ],
  facts: [
    { label: "Based in", value: "Boston, MA" },
    { label: "Education", value: "B.S. Computer Science, Northeastern" },
    { label: "Graduating", value: "December 2026" },
    { label: "Focus", value: "AI / ML · Full-Stack" },
  ],
  leadership: [
    "Co-President — Turkish Student Association (TSA), Northeastern University",
    "Member — Delta Kappa Epsilon Fraternity",
  ],
} as const;

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  bullets: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    company: "Burnes Center for Social Change (InnovateUS)",
    role: "AI for Impact Fellow",
    location: "Boston, MA",
    period: "Jan 2026 – Jun 2026",
    current: true,
    bullets: [
      "Architected generative-AI products for InnovateUS, a national learning platform serving 200,000+ public-sector professionals across U.S. government agencies.",
      "Built a multi-agent RAG coaching tool (React, Express, Weaviate, OpenAI, AWS Lambda/CDK) that routes user turns across five specialized prompt agents over a cited public-engagement knowledge base.",
      "Conducted qualitative and quantitative research to define problems, evaluate impact, and guide evidence-based solution design.",
      "Managed the AI product lifecycle from concept to deployment, collaborating with product managers and communicating outcomes to technical and non-technical audiences.",
    ],
    tags: ["React", "Express", "Weaviate", "OpenAI", "AWS Lambda", "AWS CDK", "RAG"],
  },
  {
    company: "OBSS Technology",
    role: "Deep Learning Intern",
    location: "Istanbul, Turkey",
    period: "Jun 2025 – Aug 2025",
    bullets: [
      "Engineered advanced inpainting workflows in ComfyUI to automatically remove objects from images and regenerate realistic background regions using diffusion-based models.",
      "Formulated an AI realism evaluation algorithm in FiftyOne, leveraging LPIPS and SSIM to quantitatively assess visual fidelity between AI-generated and real images, enabling objective benchmarking of generative-model outputs.",
    ],
    tags: ["ComfyUI", "Diffusion Models", "FiftyOne", "LPIPS", "SSIM", "Python"],
  },
  {
    company: "Northeastern University",
    role: "Skillstack Administrator Support Co-op",
    location: "Boston, MA",
    period: "Jul 2024 – Dec 2024",
    bullets: [
      "Audited and optimized a B2B Canvas LMS, ensuring correct user reporting and sub-account structure within the platform.",
      "Refined the support process and improved documentation clarity for the B2B Canvas platform and Canvas Credentials.",
      "Prototyped a Salesforce solution using Salesforce Flow Builder and Einstein Copilot with AI-driven automation.",
    ],
    tags: ["Canvas LMS", "Salesforce", "Flow Builder", "Einstein Copilot"],
  },
];

export type Project = {
  title: string;
  blurb: string;
  date: string;
  stack: string[];
  highlights: string[];
  link?: { href: string; label: string };
};

export const projects: Project[] = [
  {
    title: "Quantifying Happiness",
    date: "Dec 2025",
    blurb:
      "A personalized iOS AI system that models the relationship between health metrics and daily satisfaction to generate data-driven lifestyle recommendations.",
    highlights: [
      "Modeled relationships between 9 health metrics and user satisfaction.",
      "Applied Simulated Annealing with KNN regression — improved predicted satisfaction from 5.0 to 8.98 over 1,000 iterations.",
      "Shipped a SwiftUI app integrated with HealthKit for trends, input, and recommendations.",
    ],
    stack: ["Swift", "SwiftUI", "HealthKit", "Python", "KNN", "Simulated Annealing"],
    link: {
      href: "https://github.com/batuhanisik751/Quantifying-Happiness",
      label: "View on GitHub",
    },
  },
  {
    title: "Yelp-Based Restaurant Retrieval",
    date: "Apr 2025",
    blurb:
      "A location-aware semantic search engine over 50,000+ Yelp reviews and business metadata, ranking results by relevance and proximity.",
    highlights: [
      "Implemented dense retrieval with SBERT + FAISS over 50,000+ reviews.",
      "Ranked results by review relevance and user proximity.",
      "Evaluated with MAP@100 and custom relevance tiers against ground-truth labels.",
    ],
    stack: ["Python", "SBERT", "FAISS", "NLP", "Information Retrieval"],
    link: {
      href: "https://github.com/batuhanisik751/Review-Powered-Relevance-Ranking",
      label: "View on GitHub",
    },
  },
  {
    title: "Salesforce Hackathon",
    date: "Nov 2024",
    blurb:
      "A customized Salesforce solution automating business workflows, built after 56 hours of Salesforce Admin training.",
    highlights: [
      "Completed 56 hours of Salesforce Admin training.",
      "Automated business workflows with Salesforce Flow Builder.",
      "Integrated Einstein Copilot actions to streamline guest check-in.",
    ],
    stack: ["Salesforce", "Flow Builder", "Einstein Copilot", "Automation"],
  },
  {
    title: "Reversi",
    date: "Dec 2023",
    blurb:
      "A complete Java implementation of Reversi with full game logic, state management, and a custom interactive hexagonal board.",
    highlights: [
      "Programmed complete game logic and state management in Java.",
      "Designed an interactive GUI with a custom hexagonal board.",
      "Added real-time visual updates and mouse/keyboard controls.",
    ],
    stack: ["Java", "OOP", "GUI", "Game Logic"],
    link: {
      href: "https://github.com/batuhanisik751/JavaHexagonalReversi",
      label: "View on GitHub",
    },
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Swift", "Java", "C", "SQL", "R", "HTML/CSS"],
  },
  {
    label: "ML / AI & Backend",
    items: [
      "PyTorch",
      "NumPy",
      "Pandas",
      "scikit-learn",
      "SBERT",
      "FAISS",
      "KNN",
      "Simulated Annealing",
      "LPIPS",
      "Node.js",
      "Express",
    ],
  },
  {
    label: "Tools",
    items: [
      "Git",
      "VS Code",
      "Figma",
      "ComfyUI",
      "FiftyOne",
      "Salesforce Flow Builder",
      "Einstein Copilot",
      "HealthKit",
      "SwiftUI",
      "RStudio",
    ],
  },
  {
    label: "Cloud / DB / LLMs",
    items: [
      "AWS (EC2, S3, Lambda, IAM, EBS, ECS, RDS)",
      "Supabase",
      "ChatGPT",
      "Claude",
      "Google Gemini",
    ],
  },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;
