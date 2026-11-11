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
    "Computer Science student at Northeastern University, concentrating in AI, building AI products and intelligent systems, from agentic multi-agent RAG to deep learning pipelines.",
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
    "I'm a Computer Science student at Northeastern University's Khoury College with a concentration in Artificial Intelligence, graduating December 2026. I work at the intersection of applied machine learning and full-stack engineering, shipping AI products that real people actually use.",
    "Most recently I built an agentic, multi-agent RAG coaching tool for a national learning platform serving 200,000+ public-sector professionals, from the React frontend and Node.js REST APIs to the serverless AWS architecture behind it. Before that, I engineered diffusion-based computer-vision workflows and built retrieval systems over tens of thousands of documents.",
  ],
  facts: [
    { label: "Based in", value: "Boston, MA" },
    { label: "Education", value: "B.S. Computer Science (AI), Northeastern" },
    { label: "Graduating", value: "December 2026" },
    { label: "Focus", value: "AI / ML · Full-Stack" },
  ],
  leadership: [
    "Co-President, Turkish Student Association (TSA), Northeastern University",
    "Member, Delta Kappa Epsilon Fraternity",
    "Dean's List, Spring 2023",
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
    role: "Generative AI Product Development Fellow",
    location: "Boston, MA",
    period: "Jan 2026 – Jun 2026",
    bullets: [
      "Built an agentic, multi-agent RAG coaching tool powered by OpenAI LLMs for InnovateUS, a national learning platform serving 200,000+ public-sector professionals; an orchestrator routes each user turn to one of 5 specialized prompt agents over a cited Weaviate knowledge base.",
      "Developed full-stack features across a React/TypeScript frontend (Tailwind, Cognito sign-in, accessibility and mobile fixes) and a Node.js backend of REST APIs on AWS Lambda, streaming chat responses over WebSockets.",
      "Designed the serverless AWS architecture in CDK (API Gateway, Lambda, Step Functions, DynamoDB, S3), including Python ingestion scripts that load documents into Weaviate, interview ingestion pipelines with failure handling, PII redaction via AWS Comprehend, and CloudWatch alarms on error rate and latency.",
      "Shipped through a GitHub Actions CI/CD pipeline running Vitest tests on every push to main; wrote the LLM output-quality and evaluation criteria and refined prompts based on errors we found.",
      "Conducted qualitative and quantitative user research with product managers to define requirements, managed the product lifecycle from problem statement to deployment, and communicated outcomes to technical and non-technical audiences.",
    ],
    tags: ["React", "TypeScript", "Node.js", "OpenAI", "Weaviate", "AWS Lambda", "AWS CDK", "Step Functions", "Python", "RAG"],
  },
  {
    company: "OBSS Technology",
    role: "Deep Learning Intern",
    location: "Istanbul, Turkey",
    period: "Jun 2025 – Aug 2025",
    bullets: [
      "Engineered diffusion-based inpainting workflows in ComfyUI that automatically remove objects from images and regenerate realistic backgrounds.",
      "Built an image-realism evaluation algorithm in FiftyOne using LPIPS and SSIM, enabling objective benchmarking of generative model outputs against real images.",
    ],
    tags: ["ComfyUI", "Diffusion Models", "FiftyOne", "LPIPS", "SSIM", "Python"],
  },
  {
    company: "Northeastern University",
    role: "Skillstack Administrator Support Co-op",
    location: "Boston, MA",
    period: "Jul 2024 – Dec 2024",
    bullets: [
      "Audited and optimized a B2B Canvas LMS for Northeastern's non-credit certification programs, maintaining user reporting and sub-account structure.",
      "Ran office hours for professors, resolving Canvas issues live, and refined the support process and documentation for Canvas and Canvas Credentials.",
      "Built a Salesforce workflow automation prototype with Flow Builder and Einstein Copilot at a hackathon after completing 56 hours of admin training.",
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
    title: "Public Engagement Coach",
    date: "Jan 2026 – Jun 2026",
    blurb:
      "An agentic, multi-agent RAG coach that helps public servants turn what they learned in a course into a plan for their own project, built at the Burnes Center for InnovateUS, a platform serving 200,000+ public-sector professionals.",
    highlights: [
      "Coaches users conversationally through a nine-question public engagement framework.",
      "Routes each turn to one of 5 specialized agents over a cited Weaviate knowledge base of case studies, research, and anonymized expert interviews.",
      "Runs on a serverless AWS stack (Lambda, API Gateway, Step Functions, DynamoDB, Cognito) deployed through GitHub Actions.",
    ],
    stack: ["React", "TypeScript", "Node.js", "OpenAI", "Weaviate", "AWS", "Python"],
    link: {
      href: "https://coach.innovate-us.org/",
      label: "Visit live site",
    },
  },
  {
    title: "Quantifying Happiness",
    date: "Dec 2025",
    blurb:
      "A personalized iOS AI system that models the relationship between health metrics and daily satisfaction to generate data-driven lifestyle recommendations.",
    highlights: [
      "Modeled how 9 HealthKit health metrics relate to user satisfaction to recommend daily changes.",
      "Applied simulated annealing over KNN regression, raising predicted satisfaction from 5.0 to 8.98 over 1,000 iterations with convergence toward the global optimum.",
      "Validated end to end on a 100-record synthetic dataset and delivered as a SwiftUI app integrated with HealthKit.",
    ],
    stack: ["Swift", "SwiftUI", "HealthKit", "Python", "KNN", "Simulated Annealing"],
    link: {
      href: "https://github.com/batuhanisik751/Quantifying-Happiness",
      label: "View on GitHub",
    },
  },
  {
    title: "Yelp Restaurant Retrieval System",
    date: "Apr 2025",
    blurb:
      "A location-aware semantic search engine over 50,000+ Yelp reviews and business metadata, ranking results by relevance and proximity.",
    highlights: [
      "Built dense retrieval with SBERT embeddings and FAISS over 50,000+ reviews.",
      "Re-ranked results by rating and user proximity.",
      "Evaluated ranking quality against ground-truth labels with custom relevance tiers using MAP@100.",
    ],
    stack: ["Python", "SBERT", "FAISS", "NLP", "Information Retrieval"],
    link: {
      href: "https://github.com/batuhanisik751/Review-Powered-Relevance-Ranking",
      label: "View on GitHub",
    },
  },
  {
    title: "Hexagonal Reversi",
    date: "Dec 2023 · extended Mar 2026",
    blurb:
      "A complete Java implementation of Reversi on a custom hexagonal board, later extended with a JavaFX interface, AI opponents, and LAN multiplayer.",
    highlights: [
      "Built the game on an MVC architecture and migrated the GUI from Swing to JavaFX with keyboard navigation and move highlighting.",
      "Added AI opponents using minimax with alpha-beta pruning.",
      "Added save/load and LAN multiplayer, backed by JUnit tests.",
    ],
    stack: ["Java", "JavaFX", "JUnit", "MVC", "Minimax"],
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
    items: ["Python", "TypeScript", "JavaScript", "Java", "Swift", "C", "SQL", "R", "HTML/CSS"],
  },
  {
    label: "Frameworks",
    items: ["React", "Next.js", "Node.js", "Express", "FastAPI", "Tailwind CSS", "SwiftUI", "JavaFX"],
  },
  {
    label: "LLMs & Agents",
    items: [
      "LLMs",
      "OpenAI API",
      "RAG",
      "Agentic & Multi-Agent Systems",
      "LangChain",
      "LlamaIndex",
      "Prompt Engineering",
      "LLM Fine-Tuning",
    ],
  },
  {
    label: "Machine Learning",
    items: ["PyTorch", "TensorFlow", "scikit-learn", "NumPy", "Pandas", "SBERT", "FAISS"],
  },
  {
    label: "Cloud & DevOps",
    items: [
      "AWS (Lambda, API Gateway, Step Functions, DynamoDB, S3, EC2, Cognito, CloudWatch, Comprehend)",
      "CDK",
      "Terraform",
      "Docker",
      "GitHub Actions",
    ],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "Supabase", "DynamoDB", "MongoDB", "Redis", "Weaviate"],
  },
  {
    label: "APIs & Concepts",
    items: [
      "REST APIs",
      "GraphQL",
      "WebSockets",
      "Data Structures & Algorithms",
      "OOP",
      "Design Patterns",
      "MVC",
      "CI/CD",
    ],
  },
  {
    label: "Testing & Tools",
    items: [
      "Linux",
      "Git",
      "Vitest",
      "React Testing Library",
      "JUnit",
      "Postman",
      "Jupyter",
      "Claude Code",
      "Cursor",
      "GitHub Copilot",
      "Figma",
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
