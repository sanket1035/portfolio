export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  motivation: string;
  challenges: string;
  learnings: string;
  folderStructure: string;
  features: string[];
  techStack: string[];
  architecture?: string;
  futureImprovements?: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  gallery?: { src: string; caption: string }[];
  category: 'web' | 'mobile' | 'ai' | 'data';
}

export interface Contribution {
  programName: string;
  role: string;
  year: string;
  description: string;
  image?: string;
}

export interface Achievement {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image?: string;
  images?: string[];
  detailsUrl?: string;
}

export interface Activity {
  role: string;
  organization: string;
  duration: string;
  description: string;
  image: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  skills: string[];
  verifyUrl: string;
  certificateUrl?: string;
  image?: string;
  summary?: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  resumeUrl: string;
  lastUpdatedResume: string;
  location: string;
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
    youtube?: string;
    leetcode?: string;
    devto?: string;
    medium?: string;
    reddit?: string;
  };
  education: {
    institution: string;
    degree: string;
    specialization: string;
    duration: string;
    gpa?: string;
  }[];
  skills: Record<string, string[]>;
  projects: Project[];
  openSource: {
    programs: Contribution[];
    mergedPRsCount: number;
    prLinks: string[];
    contributionsTimeline: string[];
  };
  achievements: Achievement[];
  activities: Activity[];
  certificates: Certificate[];
}

export const portfolioData: PortfolioData = {
  name: "Sanket Chaudhari",
  title: "Software Developer",
  subtitle: "Artificial Intelligence & Data Science Undergraduate",
  bio: "Building practical software, AI-powered solutions, and active open-source contributions. Focused on writing clean, scalable code and training efficient models.",
  resumeUrl: "/Sanket_Chaudhari_Resume.pdf", // Placed in public folder
  lastUpdatedResume: "November 2026",
  location: "Nashik, Maharashtra, India",
  socials: {
    github: "https://github.com/sanket1035",
    linkedin: "https://linkedin.com/in/sanketchaudhari1035",
    twitter: "https://twitter.com/sanket_codes",
    email: "sanketchaudhari1035@gmail.com",
    youtube: "https://www.youtube.com/channel/UCyhGe7sSB04C-1--wVwPrVQ",
    leetcode: "https://leetcode.com/u/Sanket103/",
    devto: "https://dev.to/sanket1035",
    medium: "https://medium.com/@sanketchaudhari1035",
    reddit: "https://www.reddit.com/user/sanketchaudhari/",
  },
  education: [
    {
      institution: "K. K. Wagh Institute of Engineering Education & Research",
      degree: "B.Tech",
      specialization: "Artificial Intelligence & Data Science",
      duration: "2023 - 2027",
      gpa: "8.52",
    }
  ],
  skills: {
    "Languages": ["Python", "TypeScript", "JavaScript", "SQL", "Java", "HTML", "CSS"],
    "Frontend": ["React", "Next.js", "Tailwind CSS", "Zustand", "Recharts", "Framer Motion", "Responsive Design"],
    "Backend & APIs": ["Node.js", "Express.js", "FastAPI", "REST APIs", "Prisma ORM", "JWT Authentication", "Zod", "Rate Limiting"],
    "AI / ML": ["PyTorch", "Scikit-learn", "XGBoost", "Deep Learning", "Computer Vision", "CNN", "OpenCV", "ONNX", "Time Series Forecasting", "Model Evaluation"],
    "GenAI": ["Generative AI", "LLM APIs (Gemini, Groq, OpenAI)", "Context Engineering", "Multi-Agent Systems", "AI Workflows", "Hallucination Reduction"],
    "Data & Analytics": ["Power BI", "DAX", "Power Query", "Excel", "Pandas", "NumPy", "Data Visualization", "Data Cleaning"],
    "Databases": ["PostgreSQL", "MySQL", "SQLite", "Firebase"],
    "DevOps & Testing": ["Git", "GitHub Actions (CI/CD)", "Docker", "Vercel", "Render", "Postman", "pytest", "Jest", "Vitest"],
  },
  projects: [
    {
      id: "carbonomics-ai",
      title: "Carbonomics AI",
      tagline: "Carbon-Accounting Engine & Leakage-Free Forecasting (Final Year Project & Research)",
      description: "A GHG Protocol carbon-accounting engine built on real 2025 campus data (1,059,147 kWh). It computes 763.84 tCO2e of Scope 1 and 2 emissions traceable to versioned emission factors, forecasts energy use honestly, and lets users simulate what-if scenarios on a React dashboard.",
      problem: "Emission numbers are only useful when every figure traces back to data and a versioned emission factor, and ML forecasts of emissions are easy to get wrong: predicting emissions from activity data scores R2 = 1.000 because the model simply recovers the formula.",
      motivation: "Built as a final year project and research manuscript: an accountable emissions pipeline for a real campus, with forecasting that is evaluated honestly.",
      challenges: "Avoiding target leakage (R2 = 1.000 for a model that recovers the formula vs 0.339 for an honest forecast) and judging models fairly with 24-origin rolling evaluation, under a rule that a model must beat a naive baseline by 5%.",
      learnings: "Leakage-free evaluation, versioned emission factors and factor-effect attribution, and shipping an ML-backed FastAPI and PostgreSQL service with 40 pytest tests.",
      folderStructure: "",
      features: [
        "GHG Protocol engine: 763.84 tCO2e of Scope 1 and 2 emissions from 1,059,147 kWh of real 2025 campus data, traceable to versioned emission factors.",
        "Weekly energy forecasting with Ridge, Random Forest and XGBoost under 24-origin rolling evaluation, with a rule that a model must beat a naive baseline by 5%. The 52-week series is derived from 12 months of real campus data, so forecast scores are a methodology benchmark, not a production claim.",
        "Target-leakage analysis: R2 = 1.000 when predicting emissions from activity vs 0.339 for an honest forecast.",
        "Factor-effect attribution: the grid-factor version alone moved Scope 2 by 55.1 tCO2e (7.3%).",
        "6-page React dashboard with what-if simulation (a 15% electricity cut saves 112.80 tCO2e).",
        "FastAPI and PostgreSQL backend covered by 40 pytest tests.",
        "Research manuscript on leakage-free ML forecasting."
      ],
      techStack: ["Python", "Scikit-learn", "XGBoost", "FastAPI", "PostgreSQL", "React", "Recharts", "pytest"],
      architecture: "A FastAPI and PostgreSQL backend serves the accounting engine and forecasts to a 6-page React dashboard built with Recharts.",
      futureImprovements: [],
      githubUrl: "https://github.com/sanket1035/carbonomics-ai",
      liveUrl: "https://carbonomics.app",
      image: "/placeholders/carbonomics.jpg",
      category: "ai"
    },
    {
      id: "placetrack-ai",
      title: "PlaceTrack AI",
      tagline: "Full-Stack Placement Platform with AI Interview Feedback",
      description: "Student and coordinator portals for running campus placements: a 13-model schema, 23 REST API endpoints and a 6-stage hiring pipeline, with Gemini-powered resume analysis and interview feedback and server-graded timed aptitude tests.",
      problem: "Placement coordinators and students need one place to run the hiring pipeline: applications moving through stages, aptitude tests, and interview practice.",
      motivation: "A production-style full-stack project covering the whole placement flow, from the student portal to the coordinator tools and AI assistance.",
      challenges: "Keeping the AI features dependable: Gemini resume analysis and interview feedback ship with a rule-based fallback, and aptitude tests are graded on the server rather than trusted from the client.",
      learnings: "Designing a 13-model relational schema with Prisma, securing a REST API with JWT, Zod validation and rate limiting, and deploying across Vercel, Render and Neon PostgreSQL.",
      folderStructure: "",
      features: [
        "Student and coordinator portals on a 13-model schema with 23 REST API endpoints.",
        "6-stage hiring pipeline with readiness scoring and an eligibility engine.",
        "Gemini API resume analysis and AI interview feedback with a rule-based fallback.",
        "Server-graded timed aptitude tests.",
        "Real-time updates with Socket.io.",
        "Secured with JWT, Zod validation and rate limiting.",
        "Deployed on Vercel and Render with Neon PostgreSQL."
      ],
      techStack: ["Next.js", "TypeScript", "Express", "Prisma", "PostgreSQL", "Gemini API", "Socket.io", "Docker", "Vitest"],
      futureImprovements: [],
      githubUrl: "https://github.com/sanket1035/placetrack-ai",
      liveUrl: "https://frontend-umber-one-zuhj8ueccq.vercel.app/",
      image: "/placeholders/placetrack.jpg",
      category: "web"
    },
    {
      id: "pramana-ai",
      title: "Pramana AI",
      tagline: "Multi-Agent AI Platform for Research & Claim Verification",
      description: "A multi-agent AI research platform where autonomous specialized agents research topics, verify claims, and reduce LLM hallucinations. Generates citation-backed reports with confidence scoring and PDF export.",
      problem: "Standard LLMs frequently hallucinate facts and lack traceable citations, rendering generated content risky for academic and research workflows.",
      motivation: "Pramana AI was built to create an agentic pipeline where independent AI agents cross-check facts against search indices and generate verified, citation-backed reports.",
      challenges: "Orchestrating agent workflows and streaming consensus results without bottlenecking response latency.",
      learnings: "Gained expertise in multi-agent orchestration, LLM hallucination mitigation strategies, and automated PDF report generation.",
      folderStructure: `src/
├── agents/       # Research, Fact-checker, & Citation agents
├── components/   # Live research visualizer & report renderer
└── api/          # Gemini API handlers & verification routes`,
      features: [
        "Multi-agent autonomous research system engineered to eliminate LLM hallucinations.",
        "Claim verification pipeline generating confidence scores and inline citations.",
        "Citation-backed comprehensive report generator with direct PDF export capability.",
        "Real-time agent reasoning steps display during deep research execution."
      ],
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Gemini API"],
      architecture: "Next.js frontend communicating with agentic API routines. Agents autonomously query web sources, aggregate evidence, score claims, and synthesize citation-backed markdown documents.",
      githubUrl: "https://github.com/sanket1035/pramana-ai",
      liveUrl: "https://pramana-ai-orcin.vercel.app/",
      image: "/placeholders/pramana.png",
      category: "ai"
    },
    {
      id: "atlas-ai",
      title: "Atlas AI",
      tagline: "AI Concept-Dependency Graphs & Personalized Skill Trees",
      description: "An AI platform built with an international engineering team that transforms subjects into interactive concept-dependency graphs and personalized learning paths using Gemma LLM and NetworkX.",
      problem: "Learners struggle to determine optimal study sequences when diving into complex technical domains with multiple interdependent prerequisites.",
      motivation: "Atlas AI visualizes learning as an RPG-style skill tree, using graph theory and LLM intelligence to structure personalized learning paths dynamically.",
      challenges: "Building responsive dynamic graph rendering with React Flow while calculating prerequisite dependencies in NetworkX backend service.",
      learnings: "Mastered graph-based data structures, React Flow node customization, NetworkX algorithms, and Docker containerized API services.",
      folderStructure: `frontend/  # React Flow graph interface & skill-tree components
backend/   # FastAPI server with NetworkX graph processing
models/    # Gemma LLM prompt templates & graph generators`,
      features: [
        "Interactive AI concept dependency graphs rendered via React Flow.",
        "Personalized learning path generation driven by Gemma LLM reasoning.",
        "AI-powered skill-tree interface supporting step-by-step topic progression.",
        "Docker containerized pipeline with FastAPI backend and NetworkX graph processing."
      ],
      techStack: ["Next.js", "TypeScript", "Python", "FastAPI", "React Flow", "Gemma LLM", "NetworkX", "Docker"],
      architecture: "React Flow client displaying node hierarchies, connected to FastAPI backend service using NetworkX for topological sorting and Gemma LLM for generating topic nodes.",
      githubUrl: "https://github.com/Hills081199/AMD-HACKATHON-II",
      liveUrl: "https://lablab.ai/ai-hackathons/amd-developer-hackathon-act-ii/thirstyseek/atlas-ai-powered-learning-path-generator",
      image: "/placeholders/atlas.png",
      category: "ai"
    },
    {
      id: "prodexa-ai",
      title: "Prodexa AI",
      tagline: "AI Product Operating System (InnovaHack Chapter 1 Finalist)",
      description: "A product-readiness platform that connects planning and launch validation in one project-scoped workflow: an AI blueprint, a six-module launch audit, an AI Co-Founder chat and exportable reports, with every project keeping its own isolated context.",
      problem: "AI has made building software faster, but founders still use separate tools for planning, technical validation, UX and performance checks, business review and launch decisions, so the bottleneck is knowing what to fix before launch.",
      motivation: "Built for InnovaHack Chapter 1, a national-level hackathon in Mumbai where it reached the finals, under time pressure with technical trade-offs to defend: one workflow that takes an idea to a blueprint, audits the product and turns the findings into a prioritized action plan.",
      challenges: "Keeping AI output dependable and honest: a multi-provider pipeline with failover to a deterministic offline engine, and fixes for fake audits on invalid websites, hardcoded scores, context contamination across projects and projects disappearing after refresh.",
      learnings: "Designing a layered architecture (presentation, application, business logic, AI pipeline, data), context engineering with isolated per-project memory, provider failover with timeouts and a JSON guard, and regression-testing an AI product.",
      folderStructure: "",
      features: [
        "Blueprint Engine: turns an idea into a structured product blueprint that can be accepted as a project.",
        "Launch Audit Engine with six modules: Product Understanding, Engineering Analysis, UX Review, Performance Snapshot, Business Review and Launch Planner.",
        "AI Co-Founder chat with mentor personas, grounded in the project's own context.",
        "Report Engine with PDF and JSON export of scores, findings and a prioritized roadmap.",
        "Explainable readiness: an overall score with a six-module breakdown, each backed by reasoning and evidence, plus critical gaps and concrete recommendations.",
        "Context Engineering: project-specific memory, compression and dynamic injection, with no cross-project contamination.",
        "Multi-provider AI pipeline (Groq, then Gemini, then OpenAI, then a deterministic offline engine) with 8s timeouts, failover, a JSON guard and telemetry.",
        "Phases 1 and 2 complete: 17/17 regression tests passing, 0 TypeScript errors, live on Vercel at prodexa-ai.app."
      ],
      techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Firebase", "Firestore", "Groq", "Gemini API", "OpenAI API", "Vercel"],
      architecture: "Prodexa treats a product as a connected flow: founder input becomes an AI blueprint, the blueprint becomes a project with its own context, the six audit modules produce evidence and findings, and those become a prioritized decision that the AI Co-Founder can discuss without leaving that project. AI is used for reasoning, while deterministic and empirical checks cover measurable signals. Five layers: a Next.js 14 App Router frontend, an application layer of API routes, server actions and middleware, a business-logic layer of the Blueprint, Launch Audit, AI Co-Founder, Report and Context engines, a multi-provider AI pipeline, and a Firestore data layer.",
      futureImprovements: [],
      githubUrl: "https://github.com/sanket1035/Prodexa",
      liveUrl: "https://prodexa-ai.app/",
      image: "/placeholders/prodexa.webp",
      gallery: [
        { src: "/placeholders/innovahack.webp", caption: "InnovaHack Chapter 1 finalist certificate" },
        { src: "/placeholders/innovahack-team.webp", caption: "Team outside Atlas SkillTech University, Mumbai" },
        { src: "/placeholders/innovahack-team2.webp", caption: "On stage at InnovaHack Chapter 1" },
        { src: "/placeholders/innovahack-build.webp", caption: "Building Prodexa during the hackathon" },
        { src: "/placeholders/innovahack-desk.webp", caption: "The hackathon workspace" }
      ],
      category: "ai"
    },
    {
      id: "simhastha-suraksha",
      title: "Simhastha Suraksha",
      tagline: "AI Crowd Monitoring for Kumbh Mela (Team of 4, Lead Developer)",
      description: "End-to-end crowd monitoring for Kumbh Mela: per-frame head counting, density heatmaps, people per square metre and Low to Critical risk alerts, with staff and public dashboards in English, Hindi and Marathi.",
      problem: "Large religious gatherings need live crowd density and risk levels, not just a head count, so staff can react before an area becomes critical.",
      motivation: "Led a team of four to build a complete monitoring pipeline, from model benchmarking to deployed dashboards.",
      challenges: "Choosing a model that holds up on dense crowds: an MLP, a custom CNN and CSRNet were benchmarked on ShanghaiTech Part A, and the winner was exported to ONNX for serving.",
      learnings: "Benchmarking crowd-counting models, exporting to ONNX, and packaging a vision system with Docker and GitHub Actions CI.",
      folderStructure: "",
      features: [
        "Per-frame head count, density heatmap and people/m2 metric.",
        "Low to Critical risk alerts.",
        "MLP, custom CNN and CSRNet benchmarked on ShanghaiTech Part A: CSRNet cut MAE from 259.4 to 66.7 (74% lower).",
        "Model exported to ONNX.",
        "Staff and public dashboards in English, Hindi and Marathi, fed from RTSP streams.",
        "Containerized with Docker, CI on GitHub Actions."
      ],
      techStack: ["PyTorch", "CSRNet", "OpenCV", "ONNX", "Streamlit", "Docker", "GitHub Actions"],
      futureImprovements: [],
      githubUrl: "https://github.com/sanket1035/simhastha-suraksha",
      liveUrl: "https://simhastha-suraksha.streamlit.app/",
      image: "/placeholders/simhastha.webp",
      category: "ai"
    },
    {
      id: "algonix",
      title: "Algonix",
      tagline: "Inter-College Coding Platform with Sandboxed Execution",
      description: "An inter-college coding platform that runs submitted code in sandboxed Docker containers, detects plagiarism with AST-based comparison and protects the API with rate limiting.",
      problem: "Running coding contests across colleges needs safe execution of untrusted code and a fair way to catch copied solutions.",
      motivation: "Built in June 2026 as a full-stack platform for inter-college coding contests, covering secure code execution, fairness checks and abuse protection.",
      challenges: "Executing untrusted submissions safely inside Docker containers, and comparing solutions structurally with ASTs so renamed variables do not hide plagiarism.",
      learnings: "Container sandboxing, AST-based similarity detection, API rate limiting, and building a MongoDB-backed contest flow end to end.",
      folderStructure: "",
      features: [
        "Sandboxed code execution in Docker containers.", "AST-based plagiarism detection.", "Rate limiting on the API.", "Inter-college contest platform with a React and TypeScript frontend and a Node.js and MongoDB backend."
      ],
      techStack: ["React", "TypeScript", "Node.js", "MongoDB", "Docker"],
      architecture: "A React and TypeScript client talks to a Node.js API backed by MongoDB. Submissions run in isolated Docker containers, and an AST comparison step flags similar solutions.",
      githubUrl: "https://github.com/sanket1035/algonix",
      liveUrl: "https://algonix-frontend.onrender.com/",
      image: "/placeholders/algonix.jpg",
      category: "web"
    },
    {
      id: "sherise-ai",
      title: "SheRise AI",
      tagline: "AI-Powered Career Empowerment & Mentorship Platform",
      description: "An AI-driven career empowerment platform designed to support women in technology through automated resume analysis, skill gap assessment, personalized career roadmaps, and mentorship matching.",
      problem: "Women in STEM often face challenges finding tailored mentorship, identifying targeted skill upgrades, and navigating career growth paths effectively.",
      motivation: "Built to provide accessible, AI-powered career coaching, automated resume feedback, and skill development guidance tailored for women engineering students and professionals.",
      challenges: "Designing intuitive career roadmap visualizations and implementing natural-language resume parsing without losing contextual feedback quality.",
      learnings: "Enhanced skills in building inclusive UX design systems, prompt engineering for career evaluation models, and seamless API integrations.",
      folderStructure: `src/
├── components/   # Resume evaluator, career tree, & mentor matching
├── api/          # LLM guidance handlers & prompt templates
└── pages/        # Dashboard & resource hub`,
      features: [
        "AI automated resume evaluator providing instant actionable feedback.",
        "Personalized career roadmaps and skill gap diagnostic tools.",
        "Mentorship recommendation engine matching learners with tech guides.",
        "Interactive resource hub and AI interview preparation simulator."
      ],
      techStack: ["React", "TypeScript", "Python", "FastAPI", "Tailwind CSS"],
      architecture: "React SPA connected to FastAPI backend utilizing tailored LLM models for resume analysis, skill extraction, and career roadmap generation.",
      githubUrl: "https://github.com/sanket1035/YuktiNexus-v2v",
      liveUrl: "https://yukti-nexus.vercel.app/",
      image: "/placeholders/sherise.png",
      category: "ai"
    },
    {
      id: "gst-billing-app",
      title: "GST Billing Pro",
      tagline: "Android Billing App with GST-Compliant PDF Invoices",
      description: "An Android billing app built with Kotlin and MVVM that generates GST-compliant PDF invoices, with unit tests covering the core logic.",
      problem: "Small businesses need quick, GST-compliant invoices from a phone without a heavy ERP system.",
      motivation: "A mobile-first tool for writing and sharing GST bills, built with a clean MVVM structure.",
      challenges: "Keeping invoice and tax calculations correct and separated from the UI, which MVVM and unit tests made manageable.",
      learnings: "Kotlin, MVVM on Android, PDF invoice generation and unit testing business logic.",
      folderStructure: "",
      features: [
        "GST-compliant PDF invoice generation.", "MVVM architecture in Kotlin.", "Unit tests for the billing logic."
      ],
      techStack: ["Kotlin", "Android", "MVVM"],
      architecture: "MVVM (Model-View-ViewModel) on Android: Kotlin ViewModels hold the billing logic and the UI observes their state.",
      githubUrl: "https://github.com/sanket1035/GSTbillingApp",
      image: "/placeholders/gst.jpg",
      category: "mobile"
    },
    {
      id: "predictive-maintenance-ml",
      title: "Predictive Maintenance ML",
      tagline: "Industrial Bearing Fault Detection via Signal Analysis",
      description: "An industrial Machine Learning model for equipment predictive maintenance. Analyzes machinery vibration signals to achieve an 83% fault catch rate, optimizing decision thresholds to reduce downtime.",
      problem: "Unscheduled industrial equipment failures cause major operational downtime and expensive repair costs. Traditional scheduled maintenance often misses early degradation signals.",
      motivation: "Developed to detect early industrial bearing degradation from sensor telemetry, empowering plant managers to schedule proactive maintenance before catastrophic failure.",
      challenges: "Filtering noisy vibration sensor signals and balancing decision thresholds to minimize false positive alarms while maintaining high fault catch rates.",
      learnings: "Deepened expertise in signal processing (FFT analysis), feature extraction from time-series sensor streams, and threshold optimization in industrial ML.",
      folderStructure: `data/       # Industrial vibration signal datasets
src/        # Signal preprocessors & ML classifier scripts
notebooks/  # Exploratory data analysis & threshold tuning`,
      features: [
        "Vibration signal preprocessing and frequency-domain feature extraction.",
        "ML classification model achieving 83% fault catch rate for industrial bearings.",
        "Decision threshold optimization minimizing false alarms and maintenance costs.",
        "Diagnostic visualization dashboard for vibration frequency spectrums."
      ],
      techStack: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib"],
      architecture: "Signal processing pipeline converting raw sensor time-series into frequency domain features, fed into optimized Scikit-Learn classifiers for fault probability prediction.",
      githubUrl: "https://github.com/sanket1035/Predictive-Maintenance-ML",
      image: "/placeholders/predictive_maintenance.png",
      category: "ai"
    },
    {
      id: "sales-analytics-dashboard",
      title: "Sales Analytics Dashboard",
      tagline: "Interactive Power BI Dashboard for Sales Performance",
      description: "A Power BI report built on a 200-record sales dataset modelled in Power Query, with DAX measures for Sales, Profit, Profit % and Transactions KPI cards, plus drill-down analysis through slicers and cross-filtering.",
      problem: "Sales data in a flat sheet hides which managers, products, countries and months drive profit.",
      motivation: "A hands-on analytics project to practise data modelling, DAX and dashboard design end to end.",
      challenges: "Modelling the dataset in Power Query and writing DAX measures that stay correct under cross-filtering and slicers.",
      learnings: "Power Query transformations, DAX measures, KPI card design and documenting the build in a PDF guide.",
      folderStructure: "",
      features: [
        "200-record sales dataset modelled in Power Query.",
        "DAX measures for Sales, Profit, Profit % and Transactions KPI cards.",
        "Views for sales-manager performance, product-wise profit, country-level sales (map) and monthly trends.",
        "Cross-filtering and slicers for product, manager, date, month and year.",
        "Build steps documented in a PDF guide."
      ],
      techStack: ["Power BI", "DAX", "Power Query", "Excel"],
      futureImprovements: [],
      githubUrl: "https://github.com/sanket1035/interactive-sales-analytics-dashboard",
      image: "/placeholders/sales_dashboard.webp",
      category: "data"
    },
  ],
  openSource: {
    programs: [
      {
        programName: "ELUSOC Summer of Code 2026",
        role: "Open Source Contributor, Rank 6 Globally",
        year: "Jun - Aug 2026",
        description: "Merged 300+ pull requests across 18+ open-source repositories, ranking 6th globally among ~600 active contributors. Collaborated with maintainers and revised work through code reviews.",
        image: "/placeholders/elusoc.png"
      },
      {
        programName: "Open Source Connect Global 2026",
        role: "Active Contributor",
        year: "2026",
        description: "Contributed to developer tools repositories, improving CLI efficiency and fixing TypeScript type definitions in foundational UI libraries.",
        image: "/placeholders/nexfellow.png"
      },
      {
        programName: "ECSOC 2026 (Elite Coders Summer of Code)",
        role: "Contributor (Beginner Tier)",
        year: "2026",
        description: "Contributed code and feature enhancements during Elite Coders Summer of Code 2026, working on real-world projects and open-source software development.",
        image: "/placeholders/essoc.png"
      }
    ],
    mergedPRsCount: 365,
    prLinks: [
      "https://github.com/example-org/repo/pulls/123",
      "https://github.com/example-org/repo/pulls/456",
      "https://github.com/another-org/repo/pulls/78"
    ],
    contributionsTimeline: [
      "Jun - Aug 2026: ELUSOC Summer of Code, 300+ merged PRs across 18+ repos, ranked 6th globally.",
      "46 PRs in Interview-Intelligence: Docker code sandbox, Zustand session store, role-based access control.",
      "26 PRs in Foodie: Jest unit tests, i18n, theme persistence, reusable search component.",
      "8 PRs in Aarini: custom error hierarchy, rate limiting, cycle-prediction endpoint."
    ]
  },
  achievements: [
    {
      title: "Ranked 6th Globally in ELUSOC 2026",
      issuer: "ELUSOC Summer of Code",
      date: "Jun - Aug 2026",
      description: "Merged 300+ pull requests across 18+ repositories and ranked 6th among ~600 active contributors, including 46 PRs in Interview-Intelligence, 26 in Foodie and 8 in Aarini.",
      images: ["/placeholders/elusoc-champions.webp", "/placeholders/elusoc-card.webp", "/placeholders/elusoc-questlog.webp", "/placeholders/elusoc-prs.webp", "/placeholders/elusoc-heatmap.webp"]
    },
    {
      title: "Finalist, InnovaHack Chapter 1",
      issuer: "InnovaHack, Elite Forums (Atlas SkillTech University, Mumbai)",
      date: "Jul 2026",
      description: "Reached the finals with Prodexa, an AI Product Operating System that takes founders from idea to blueprint, launch audit and an actionable roadmap. Built under time pressure and defended in front of the judges.",
      images: ["/placeholders/innovahack.webp", "/placeholders/innovahack-team.webp", "/placeholders/innovahack-team2.webp", "/placeholders/innovahack-build.webp", "/placeholders/innovahack-desk.webp"]
    },
    {
      title: "Research Manuscript: Leakage-Free ML Forecasting",
      issuer: "Carbonomics AI (Final Year Project)",
      date: "2026",
      description: "Authored a research manuscript on leakage-free machine learning forecasting, built on a 52-week series derived from 12 months of real 2025 campus energy data."
    },
    {
      title: "AMD Developer Hackathon (lablab.ai)",
      issuer: "lablab.ai",
      date: "Jul 2026",
      description: "Built Atlas AI, a learning-path generator, with an international team and owned the frontend and deployment. Ranked 13th of 481 projects on the AMD automated scoring leaderboard in the Unicorn (open innovation) track.",
      images: ["/placeholders/amd-leaderboard.webp", "/placeholders/atlas-lablab.webp"]
    },
    {
      title: "StudyBuddy KKW",
      issuer: "K. K. Wagh Institute",
      date: "2023 – Present",
      description: "Built in first year with zero backend experience using AI tools. Now covers 9 first-year subjects with notes, PYQs, and exam resources, drew 350+ visits through QR codes, and is the top Google result for \"study buddy kkw\". Completely self-maintained."
    },
    {
      title: "Gold Medalist — National Football Championship",
      issuer: "5th Open National Football Championship U-19",
      date: "2023",
      description: "Represented Maharashtra in the 5th Open National Football Championship (U-19), where our team secured 1st place. The tournament strengthened my ability to work as part of a team, stay focused under pressure, and perform consistently in competitive environments."
    }
  ],
  activities: [
    {
      role: "Core Committee Member",
      organization: "CSI KKWIEER Students' Chapter",
      duration: "2025 - Present",
      description: "Ran technical workshops and hackathons for 200+ students.",
      image: "/placeholders/csi.jpg"
    },
    {
      role: "Logistics Coordinator",
      organization: "Innov-ERA National Hackathon",
      duration: "Jan 2025 - March 2025",
      description: "Ran on-site operations for 100+ participants at a national hackathon.",
      image: "/placeholders/innov_era.jpg"
    },
    {
      role: "Creative Team Member",
      organization: "Phoenix Club, Department of AI & DS",
      duration: "2024 - 2025",
      description: "Design UI layouts, promotional graphics, and coordinate social media content for club events.",
      image: "/placeholders/phoenix.jpg"
    },
    {
      role: "Organizing Committee Head",
      organization: "Swapnapurti Foundation NGO",
      duration: "Sep 2023 - Jan 2024",
      description: "Led Ganesh Murti Sankalan (9000+ idols) and food donation drives.",
      image: "/placeholders/swapnapurti.jpg"
    }
  ],
  certificates: [
    {
      title: "German Language A2",
      issuer: "HCLA i-Pro Edu",
      date: "May 2026",
      credentialId: "-",
      skills: ["German", "A2 Level"],
      verifyUrl: "#"
    },
    {
      title: "Prepare Data for Analysis with Power BI",
      issuer: "Microsoft Learn",
      date: "Jun 2026",
      credentialId: "9AR3JWRU",
      skills: ["Power BI", "Power Query", "Data Cleaning", "Data Transformation", "Data Modeling", "Business Intelligence"],
      verifyUrl: "https://learn.microsoft.com/api/achievements/share/en-us/SanketChaudhari-7395/9AR3JWRU?sharingId=5DC47173756A7E46",
      certificateUrl: "https://learn.microsoft.com/api/achievements/share/en-us/SanketChaudhari-7395/9AR3JWRU?sharingId=5DC47173756A7E46",
      image: "/placeholders/powerbi_cert.jpg",
      summary: "Learned how to prepare, clean, and transform raw datasets for business intelligence using Microsoft Power BI. Gained practical experience with data profiling, Power Query, data modeling fundamentals, and creating analysis-ready datasets for reporting and visualization."
    },
    {
      title: "Introduction to Generative AI Studio",
      issuer: "Google Cloud × Simplilearn",
      date: "Jun 2025",
      credentialId: "8504350",
      skills: ["Generative AI", "Large Language Models", "Prompt Engineering", "Google Cloud AI", "AI Applications"],
      verifyUrl: "https://simpli.app.link/WUnLO9Euh4b",
      certificateUrl: "https://simpli.app.link/WUnLO9Euh4b",
      image: "/placeholders/simplilearn_genai.png",
      summary: "Completed an introductory course on Google's Generative AI ecosystem, covering the fundamentals of large language models, prompt engineering, and Generative AI Studio. Learned how generative AI can be applied to real-world software development and business workflows."
    },
    {
      title: "AI for Beginners",
      issuer: "HP LIFE Foundation",
      date: "Jul 2025",
      credentialId: "2c8cc9d5-a767-4988-8ca7-9359fa990278",
      skills: ["Artificial Intelligence", "AI Fundamentals", "Data Literacy", "Business Applications of AI", "AI Ethics"],
      verifyUrl: "https://www.life-global.org/certificate/2c8cc9d5-a767-4988-8ca7-9359fa990278",
      certificateUrl: "https://www.life-global.org/certificate/2c8cc9d5-a767-4988-8ca7-9359fa990278",
      image: "/placeholders/hplife_ai.jpg",
      summary: "Developed a strong foundation in Artificial Intelligence by learning core AI concepts, the importance of data, business use cases, and ethical considerations. Explored how AI is transforming industries and solving practical problems."
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte",
      date: "Jul 2025",
      credentialId: "YNYjQodt3Rd8CjMWJ",
      skills: ["Data Analysis", "Data Visualization", "Dashboard Design", "Python"],
      verifyUrl: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_YNyiQodt3Rd8cJmWJ_1751653947494_completion_certificate.pdf",
      certificateUrl: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_YNyiQodt3Rd8cJmWJ_1751653947494_completion_certificate.pdf",
      image: "/placeholders/deloitte.jpg",
      summary: "Completed a simulated data analytics project for Deloitte. Handled data cleaning, visualization design, and drafted dashboard layouts to present key business insights."
    },
    {
      title: "SQL for Developers",
      issuer: "Udemy",
      date: "Apr 2025",
      credentialId: "UC-21ecd423-fcd5-429b-a3ef-d2ba50f4c747",
      skills: ["SQL", "Database Design", "Query Optimization", "PostgreSQL"],
      verifyUrl: "https://www.udemy.com/certificate/UC-21ecd423-fcd5-429b-a3ef-d2ba50f4c747/",
      certificateUrl: "https://www.udemy.com/certificate/UC-21ecd423-fcd5-429b-a3ef-d2ba50f4c747/",
      image: "/placeholders/sql.jpg",
      summary: "Gained deep knowledge of relational databases, schema design, index tuning, complex queries, and transaction management using PostgreSQL."
    },
    {
      title: "Python One Roadmap",
      issuer: "Python Institute / Community",
      date: "Jun 2025",
      credentialId: "CERT-37E358BB",
      skills: ["Python Programming", "Automation", "Algorithms"],
      verifyUrl: "https://www.oneroadmap.io/skills/python/certificate/CERT-37E358BB",
      certificateUrl: "https://www.oneroadmap.io/skills/python/certificate/CERT-37E358BB",
      image: "/placeholders/python.jpg",
      summary: "Mastered core Python language constructs, algorithms, and script automation techniques. Developed reusable helper utilities and solved software problems."
    },
    {
      title: "Cyber Security Professional",
      issuer: "The Tech Unique Academy",
      date: "Jan 2025",
      credentialId: "EP-12003467",
      skills: ["Network Security", "Penetration Testing", "Risk Assessment"],
      verifyUrl: "https://thetechunique.com/student_certificate/ep-12003467/",
      certificateUrl: "https://thetechunique.com/student_certificate/ep-12003467/",
      image: "/placeholders/cybersecurity.jpg",
      summary: "Covered network protocols, security audits, threat assessment models, vulnerability scanning tools, and defense implementation strategies."
    }
  ]
};
