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
  category: 'web' | 'mobile' | 'ai';
}

export interface Contribution {
  programName: string;
  role: string;
  year: string;
  description: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  resumeUrl: string;
  lastUpdatedResume: string;
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
  education: {
    institution: string;
    degree: string;
    specialization: string;
    duration: string;
    gpa?: string;
  }[];
  skills: {
    languages: string[];
    frameworks: string[];
    databases: string[];
    tools: string[];
    aiMl: string[];
  };
  projects: Project[];
  openSource: {
    programs: Contribution[];
    mergedPRsCount: number;
    prLinks: string[];
    contributionsTimeline: string[];
  };
}

export const portfolioData: PortfolioData = {
  name: "Sanket Chaudhari",
  title: "Software Developer",
  subtitle: "Artificial Intelligence & Data Science Undergraduate",
  bio: "Building practical software, AI-powered solutions, and active open-source contributions. Focused on writing clean, scalable code and training efficient models.",
  resumeUrl: "/Sanket_Chaudhari_Resume.pdf", // Placed in public folder
  lastUpdatedResume: "June 2026",
  socials: {
    github: "https://github.com/sanket1035",
    linkedin: "https://linkedin.com/in/sanketchaudhari1035",
    twitter: "https://twitter.com/sanket_codes",
    email: "sanketchaudhari1035@gmail.com",
  },
  education: [
    {
      institution: "Pune Institute of Computer Technology (PICT)",
      degree: "Bachelor of Engineering (B.E.)",
      specialization: "Artificial Intelligence & Data Science",
      duration: "2023 - 2027",
      gpa: "8.9/10",
    }
  ],
  skills: {
    languages: ["TypeScript", "JavaScript", "Python", "Java", "C++", "HTML/CSS"],
    frameworks: ["React", "Node.js", "Express", "FastAPI", "Tailwind CSS", "Flask", "Jetpack Compose"],
    databases: ["PostgreSQL", "MongoDB", "Firebase", "Redis"],
    tools: ["Docker", "Git", "GitHub Actions", "Vite", "Linux", "Postman", "Vercel"],
    aiMl: ["PyTorch", "TensorFlow", "Scikit-Learn", "OpenCV", "NLP", "LLM Integration"]
  },
  projects: [
    {
      id: "placetrack-ai",
      title: "PlaceTrack AI",
      tagline: "AI-Powered Smart Attendance & Location Tracking System",
      description: "A comprehensive geolocation-based tracking and automated attendance platform. It uses Wi-Fi SSID identification and geo-fencing algorithms to verify presence, eliminating time theft and proxy entries.",
      problem: "Traditional attendance systems are prone to proxies, and manual verification is slow. Companies and institutions need a tamper-proof, location-verified, and automated way to track attendance and active hours.",
      motivation: "Tracking physical presence and verifying attendance accurately has always been a major operations bottleneck. This project was motivated by the need for a non-intrusive, automated, and tamper-proof verification system using nearby Wi-Fi network hardware configurations and geofences.",
      challenges: "Faced difficulties in achieving reliable device background geofencing without causing massive battery drains, as well as handling inconsistent hardware MAC address hashing on client devices.",
      learnings: "Mastered PostgreSQL geofence queries (using spatial indices) and dynamic client-server background tracking synchronization.",
      folderStructure: `src/
├── components/   # User check-in widgets & dashboard stats
├── context/      # Auth and geolocation tracker contexts
└── pages/        # Live attendance records & admin console`,
      features: [
        "Geofencing & Wi-Fi BSSID verification for high-precision indoor tracking.",
        "AI anomaly detection to identify proxy attempts or mock GPS locations.",
        "Interactive dashboard displaying real-time analytics, user heatmaps, and exportable reports.",
        "Automated notifications and scheduling rules for late arrivals and absences."
      ],
      techStack: ["React", "Node.js", "Express", "Firebase Auth", "PostgreSQL", "Tailwind CSS", "Framer Motion"],
      architecture: "Client-Server architecture with a REST API backend and real-time synchronization through web sockets and Firebase triggers. Geofence boundaries are validated server-side using geographic coordinates calculations.",
      futureImprovements: [
        "Incorporate Bluetooth Low Energy (BLE) beacons for precise room-level tracking.",
        "Integrate facial recognition verification as an added layer of authentication."
      ],
      githubUrl: "https://github.com/sanket1035/placetrack-ai",
      liveUrl: "https://placetrack.sanketchaudhari.in",
      image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80",
      category: "web"
    },
    {
      id: "algonix",
      title: "Algonix",
      tagline: "Interactive Algorithm Visualizer & Learning Sandbox",
      description: "An educational web platform designed to help students and developers visualize complex computer science algorithms in real-time. Supports sorting, searching, pathfinding, and tree traversals.",
      problem: "Data structures and algorithms are highly abstract, making them difficult to conceptualize. Dynamic step-by-step visual feedback helps learners understand time/space complexity intuitively.",
      motivation: "Computer Science algorithms are highly conceptual. Static textbook images fall short. Algonix was built to bridge this learning gap by providing real-time, interactive visual sandboxes where learners can toggle custom arrays and trace execution paths step by step.",
      challenges: "Representing step-by-step sorting iterations in React without blocking the main event loops or dropping frames during heavy SVG operations.",
      learnings: "Acquired a deep understanding of asynchronous frame delaying, state snapshots mapping, and responsive canvas element drawing.",
      folderStructure: `src/
├── algorithms/   # Sorting & pathfinding scripts
├── components/   # Speed sliders, trace panels, array bars
└── App.tsx       # Main visual board setup`,
      features: [
        "Visualizations for Bubble/Quick/Merge Sort, Dijkstra/A* pathfinding, and Binary Search.",
        "Interactive speed controls, step-by-step code trace panel, and customized input generator.",
        "Responsive and accessible playground displaying performance comparisons (operations count, memory estimate)."
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
      architecture: "Client-side rendering. Algorithms are written in JavaScript with async/await delays mapped to Framer Motion layouts for smooth transitions.",
      githubUrl: "https://github.com/sanket1035/Algonix",
      liveUrl: "https://algonix-frontend.onrender.com/",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      category: "web"
    },
    {
      id: "gst-billing-app",
      title: "GST Billing App",
      tagline: "Mobile POS Billing and Inventory Management System",
      description: "A fast, offline-first Android application designed for small and medium businesses to generate GST-compliant invoices, track inventory, and calculate monthly tax summaries.",
      problem: "Small businesses lack access to complex ERP systems and need an easy, mobile-first solution to generate immediate receipts, record transactions, and check inventory without constant internet access.",
      motivation: "Small retail shops in regional areas need a mobile-first tool to write and manage GST bills without relying on internet connectivity. The motivation was to build a secure, lightweight billing app that works entirely offline.",
      challenges: "Structuring SQLite relational databases on Android to handle complex products, customers, and invoice linkages while keeping transactions atomic.",
      learnings: "Learned mobile-first database persistence models, PDF canvas generation from XML layouts, and MVVM app structures.",
      folderStructure: `app/
└── src/
    ├── main/java/  # Invoicing controllers & DB schemas
    └── res/layout/ # POS interfaces & receipt templates`,
      features: [
        "Offline database synchronization with localized data storage.",
        "PDF receipt generation and instant sharing via WhatsApp/Email.",
        "Barcode scanner integration using camera for quick product checkout.",
        "Daily, weekly, and monthly sales graphs and tax computation spreadsheets."
      ],
      techStack: ["Java", "Android SDK", "SQLite", "XML Layouts", "PDF Document Generator"],
      architecture: "MVVM (Model-View-ViewModel) design pattern using SQLite for persistence and LiveData for updating the UI during state changes.",
      githubUrl: "https://github.com/sanket1035/GSTbillingApp",
      image: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&w=800&q=80",
      category: "mobile"
    },
    {
      id: "carbonomics-ai",
      title: "Carbonomics AI",
      tagline: "Predictive Carbon Footprint Estimator & Optimization Platform",
      description: "An AI-powered application that estimates industrial carbon emissions and suggests actionable recommendations to achieve net-zero goals. Features predictive modeling based on energy source and consumption data.",
      problem: "Organizations struggle to calculate scope 1, 2, and 3 emissions accurately and lack predictive forecasts to evaluate the environmental impact of changes in their supply chain.",
      motivation: "With industries shifting towards carbon neutrality, measuring scope-based emissions remains highly complex. Carbonomics AI was designed as a research platform to predict industrial CO2 emissions based on fuel, logistics, and resource data points using ML regression models.",
      challenges: "Handling missing/null values and scaling input parameters across varying industrial contexts while training the regressor for robust out-of-distribution performance.",
      learnings: "Deepened my skills in model validation, tuning hyperparameters, and deploying Python web inference routes via FastAPI.",
      folderStructure: `model/  # PyTorch/Scikit-learn model files & data preprocessors
server/ # FastAPI inference route handlers
client/ # Dashboard analytics widgets`,
      features: [
        "Machine Learning model estimating CO2 output based on energy, logistics, and resource data.",
        "Optimization engine proposing green energy alternatives and cost-benefit analysis.",
        "API integration with public climate registries for local emission factors.",
        "Published research summary outlining the ML methodology and data pipeline."
      ],
      techStack: ["Python", "FastAPI", "React", "Tailwind CSS", "Scikit-Learn", "Pandas"],
      architecture: "FastAPI server wraps a trained Random Forest regressor. The React client queries the API to run real-time inference and render charts via Chart.js/Recharts.",
      futureImprovements: [
        "Add automated bill scanning (OCR) to parse electricity and logistics invoices.",
        "Integrate real-time IoT energy meters compatibility."
      ],
      githubUrl: "https://github.com/sanket1035/carbonomics-ai",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      category: "ai"
    }
  ],
  openSource: {
    programs: [
      {
        programName: "Open Source Connect Global 2026",
        role: "Active Contributor",
        year: "2026",
        description: "Contributed to developer tools repositories, improving CLI efficiency and fixing TypeScript type definitions in foundational UI libraries."
      },
      {
        programName: "ELUSOC Summer of Code 2026",
        role: "Open Source Scholar",
        year: "2026",
        description: "Developed and optimized key modules in an open-source data visualization toolkit, adding accessibility support (aria-attributes) and enhancing rendering performance."
      }
    ],
    mergedPRsCount: 14,
    prLinks: [
      "https://github.com/example-org/repo/pulls/123",
      "https://github.com/example-org/repo/pulls/456",
      "https://github.com/another-org/repo/pulls/78"
    ],
    contributionsTimeline: [
      "February 2026: Approved PR in UI toolkit fixing flexbox layout rendering.",
      "April 2026: Contributed performance enhancements to a popular markdown parser.",
      "May 2026: Integrated internationalization (i18n) modules in developer docs."
    ]
  }
};
