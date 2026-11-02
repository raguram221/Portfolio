export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  imagePlaceholder: string;
  accentColor: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string;
    highlight: string;
    icon?: string;
  }[];
}

export interface AchievementItem {
  year: string;
  title: string;
  team?: string;
  domain: string;
  role: string;
  description: string;
  contributions: string[];
  tags: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  skillsCovered: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "RAGURAM M",
    title: "Developer | Problem Solver | Technology Enthusiast",
    heroIntro: "Building meaningful digital experiences through technology, creativity and problem-solving.",
    heroSubline: "Exploring the intersection of software development, intelligent systems and creative technology.",
    aboutHeading: "Beyond the Code.",
    aboutBio: "I'm a Computer Science and Engineering student passionate about software development, problem-solving and exploring emerging technologies. I enjoy researching technical challenges, building practical applications and transforming ideas into useful digital solutions.",
    location: "Coimbatore, India",
    email: "ragumano2006@gmail.com",
    github: "https://github.com/raguram221",
    linkedin: "https://www.linkedin.com/in/raguram-m-5a7a22414/",
  },

  aboutHighlights: [
    {
      title: "Engineering Mindset",
      description: "Approaching problems from first principles, decomposing complex workflows into reliable, scalable modular systems."
    },
    {
      title: "Practical Impact",
      description: "Dedicated to building tangible digital solutions that solve real community challenges — from accessibility to agri-tech."
    },
    {
      title: "Continuous Exploration",
      description: "Prototyping modern web experiences, exploring cloud architectures, cybersecurity protocols, and intelligent software."
    }
  ],

  skillCategories: [
    {
      category: "Programming",
      description: "Core languages for algorithmic problem-solving and application logic.",
      skills: [
        { name: "Java", level: "Core & OOP", highlight: "Object-oriented architecture, collections, multi-threading, Spring framework base." },
        { name: "Python", level: "Scripting & Data", highlight: "Rapid automation, algorithm prototyping, NumPy, scientific computing." },
        { name: "JavaScript", level: "ES6+ Modern", highlight: "Asynchronous programming, closures, DOM manipulation, modern web runtimes." }
      ]
    },
    {
      category: "Frontend Development",
      description: "Building responsive, accessible, and high-performance interfaces.",
      skills: [
        { name: "React", level: "Hooks & Component Architecture", highlight: "State management, component lifecycles, virtual DOM optimization, modular UI." },
        { name: "HTML5", level: "Semantic Standards", highlight: "Accessible structures, semantic markup, SEO readiness, ARIA standards." },
        { name: "CSS3", level: "Modern Layouts & Styling", highlight: "Flexbox, CSS Grid, custom properties, responsive design, fluid transitions." }
      ]
    },
    {
      category: "Backend Development",
      description: "Designing resilient server-side services and APIs.",
      skills: [
        { name: "Spring Boot", level: "Enterprise Services", highlight: "REST controller patterns, dependency injection, service layers, entity mappings." },
        { name: "REST APIs", level: "Protocol & Design", highlight: "Resource routing, HTTP status conventions, JSON payload schemas, stateless design." }
      ]
    },
    {
      category: "Database",
      description: "Data modeling, relational schemas, and query optimization.",
      skills: [
        { name: "MySQL", level: "Relational Modeling", highlight: "Normalized schema design, index planning, joins, relational integrity constraints." }
      ]
    },
    {
      category: "Tools & Testing",
      description: "Version control, automated verification, and testing frameworks.",
      skills: [
        { name: "Git", level: "Version Control", highlight: "Branching strategies, commit hygiene, rebase workflows, conflict resolution." },
        { name: "GitHub", level: "Collaboration & CI", highlight: "Remote repository management, pull requests, issue tracking, versioning." },
        { name: "Selenium", level: "Web Automation", highlight: "Automated browser interaction, test suite scripting, element locator strategies." },
        { name: "TestNG", level: "Test Framework", highlight: "Annotation-driven testing, test grouping, assertions, automated test reporting." }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "farvision",
      title: "FARVISION – Smart Farmer Procurement Management System",
      subtitle: "Agricultural supply chain & procurement automation platform",
      description: "A smart farmer procurement platform designed to simplify agricultural procurement scheduling and provide transparent queue and procurement status updates. Eliminates chaotic physical queues through automated scheduling, fair FCFS queue logic, and multi-channel notifications.",
      features: [
        "Farmer procurement slot booking & transparent queue tracking",
        "FCFS (First-Come, First-Served) based slot allocation engine",
        "Automated IVR and SMS status notifications via Twilio",
        "Real-time procurement stage updates and payment confirmation tracking",
        "Decoupled React frontend communicating with Spring Boot REST API"
      ],
      tags: ["React", "Spring Boot", "Java", "MySQL", "Twilio", "REST API"],
      githubUrl: "https://github.com/raguram221/SIH2026",
      imagePlaceholder: "linear-gradient(135deg, #092019 0%, #0d3829 50%, #061510 100%)",
      accentColor: "#10b981"
    },
    {
      id: "sign-speech",
      title: "Hand Sign to Speech – Accessibility Project",
      subtitle: "Real-time Indian Sign Language recognition & assistive speech synthesizer",
      description: "An accessibility-focused web application designed to recognize Indian Sign Language hand gestures and convert recognized signs into understandable text and real-time synthesized speech. Built to bridge communication barriers for speech and hearing-impaired individuals.",
      features: [
        "Real-time camera feed capture and hand gesture frame tracking",
        "Indian Sign Language (ISL) gesture translation mapping",
        "Immediate text-to-speech conversion using the Web Speech API",
        "Accessible, high-contrast user interface with responsive controls",
        "Client-side processing pipeline designed for minimal latency"
      ],
      tags: ["React", "Computer Vision", "Web Speech API", "JavaScript", "Tailwind CSS"],
      imagePlaceholder: "linear-gradient(135deg, #131d36 0%, #1e2e5c 50%, #0c1224 100%)",
      accentColor: "#38bdf8"
    }
  ] as ProjectItem[],

  achievements: [
    {
      year: "2025 – 2026",
      title: "Cybersecurity Hackathon Experience",
      team: "SHADOW STORM",
      domain: "Cybersecurity & Data Privacy",
      role: "Technical Research & Solution Planning",
      description: "Participated in an intensive competitive cybersecurity hackathon addressing critical data privacy vulnerabilities.",
      contributions: [
        "Analyzed the core problem statement: Prevention of unintended exposure of Personally Identifiable Information (PII).",
        "Researched regex masking, automated data tokenization, and API payload sanitization strategies.",
        "Collaborated with the team on technical feasibility, solution design, and defensive architecture.",
        "Assisted in architectural presentation and response formulation for evaluation judges."
      ],
      tags: ["Cybersecurity", "PII Protection", "Solution Research", "Team Collaboration"]
    },
    {
      year: "2025 – 2026",
      title: "Smart India Hackathon (SIH 2026 Project Track)",
      team: "SIH Innovators",
      domain: "Agri-Tech & Logistics Systems",
      role: "Full-Stack Development & Architecture",
      description: "Engineered FARVISION to tackle ground-level agricultural procurement bottlenecks across rural markets.",
      contributions: [
        "Designed the database schema for fair queue management and slot reservation.",
        "Integrated Twilio programmable SMS/IVR services for offline farmer accessibility.",
        "Built responsive UI views for desk officers and farmers."
      ],
      tags: ["Full-Stack", "Spring Boot", "Twilio", "Agricultural Tech"]
    }
  ] as AchievementItem[],

  education: {
    degree: "B.E. Computer Science and Engineering",
    institution: "Sri Krishna College of Engineering and Technology",
    batch: "2024 – 2028",
    status: "Undergraduate Student",
    location: "Coimbatore, Tamil Nadu",
    description: "Focusing on software engineering, data structures, algorithms, database systems, object-oriented design, and network fundamentals."
  },

  certifications: [
    {
      title: "Python Programming",
      issuer: "NPTEL",
      skillsCovered: ["Core Python", "Data Structures", "Functional Programming", "File I/O"]
    },
    {
      title: "Software Testing Methodology",
      issuer: "TestMu AI",
      skillsCovered: ["Test Lifecycle", "Automation Strategies", "Defect Management", "Quality Assurance"]
    },
    {
      title: "Cloud Computing",
      issuer: "Infosys Springboard",
      skillsCovered: ["Virtualization", "Cloud Service Models (IaaS, PaaS, SaaS)", "Cloud Storage"]
    },
    {
      title: "MySQL Relational Database",
      issuer: "Infosys Springboard",
      skillsCovered: ["SQL Queries", "Schema Design", "Joins & Subqueries", "Data Integrity"]
    },
    {
      title: "NumPy for Scientific Computing",
      issuer: "Infosys Springboard",
      skillsCovered: ["Multidimensional Arrays", "Vectorized Operations", "Mathematical Computations"]
    }
  ] as CertificationItem[]
};

