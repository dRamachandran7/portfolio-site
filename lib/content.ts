/**
 * Single source of truth for everything the site renders.
 * Sourced from DR_Resume.pdf — edit here, not in the page components.
 */

export const profile = {
  name: "Dhruva Ramachandran",
  shortName: "Dhruva",
  role: "Software Engineer",
  tagline: "I build systems that do the boring parts.",
  intro:
    "Computer Science at Purdue, building projects I think are cool, proud sceince-based lifter, and music enthusiast.",
  location: "West Lafayette, IN and Cupertino, CA",
  email: "dhruva.ramachandran@gmail.com",
  phone: "669-256-6290",
  links: {
    github: "https://github.com/dRamachandran7",
    linkedin: "https://www.linkedin.com/in/dhruva-ramachandran",
  },
  resumePath: "/dhruva-ramachandran-resume.pdf",
} as const

export type Project = {
  slug: string
  title: string
  blurb: string
  period: string
  year: string
  stack: readonly string[]
  repoUrl: string
  accent: "neon" | "cyan" | "violet"
  highlights: readonly string[]
  detail: readonly { heading: string; body: string }[]
}

export const projects: readonly Project[] = [
  {
    slug: "agentic-web-automation",
    title: "Agentic Web Automation Tool",
    blurb:
      "An autonomous multi-service pipeline that discovers internships, evaluates them against a candidate profile, and submits tailored applications end to end.",
    period: "June 2026",
    year: "2026",
    stack: ["Playwright", "FastAPI", "Groq / Llama 3.3 70B", "SQLite", "REST"],
    repoUrl:
      "https://github.com/dRamachandran7/agentic-web-instenship-application-automation-tool",
    accent: "neon",
    highlights: [
      "Architected an autonomous multi-service agentic pipeline of FastAPI microservices that automates end-to-end internship discovery, evaluation, and application submission.",
      "Engineered a Playwright scraping service with persistent session auth to extract Handshake listings, integrated with an LLM analysis engine (Groq / Llama 3.3 70B) to parse key skills and employer values.",
      "Designed a database-backed architecture (SQLite, REST APIs) to dynamically personalize resumes and automate submission flows tailored to extracted listing criteria.",
    ],
    detail: [
      {
        heading: "The problem",
        body: "Applying to internships is a loop of the same four steps — find the listing, read what the employer actually wants, rewrite the resume to match, submit. Every step is mechanical, and none of it is hard. It just takes hours.",
      },
      {
        heading: "How it works",
        body: "Each stage runs as its own FastAPI service so a failure in scraping never takes down evaluation. A Playwright worker holds a persistent authenticated session against Handshake and pulls listings; an LLM analysis engine on Groq's Llama 3.3 70B reads each posting for required skills and stated employer values; a resume service rewrites content against those extracted criteria; a submission service drives the final flow.",
      },
      {
        heading: "What it taught me",
        body: "Agentic systems fail in the seams, not the models. Most of the engineering went into persistent session handling, retry semantics, and keeping a SQLite-backed record of what had already been seen so the pipeline could resume cleanly instead of starting over.",
      },
    ],
  },
  {
    slug: "pubmed-rag-chatbot",
    title: "PubMed RAG Chatbot",
    blurb:
      "A full-stack retrieval-augmented chatbot that answers natural-language questions against live PubMed literature, deployed as containerized services.",
    period: "March 2026 – May 2026",
    year: "2026",
    stack: [
      "React",
      "Express / TypeScript",
      "Python FastAPI",
      "Vector Search",
      "Docker Compose",
    ],
    repoUrl: "https://github.com/dRamachandran7/pubmedchatbot",
    accent: "cyan",
    highlights: [
      "Engineered a full-stack agentic RAG application to query PubMed literature, connecting a React frontend, Express/TypeScript backend, and Python FastAPI retrieval service.",
      "Architected a hybrid retrieval-augmented generation pipeline combining real-time PubMed API retrieval, vector semantic search, and LLMs for natural language queries.",
      "Containerized and deployed the multi-service architecture using Docker Compose across Railway and Vercel with environment-based configuration management.",
    ],
    detail: [
      {
        heading: "The problem",
        body: "PubMed holds the literature but not the answers. Finding what a body of research actually says means reading dozens of abstracts and holding them all in your head at once.",
      },
      {
        heading: "How it works",
        body: "Retrieval is hybrid on purpose. A live call to the PubMed API keeps results current, while vector semantic search surfaces papers that keyword matching would miss. Both feed a single ranked context window before generation, so answers stay grounded in real citations rather than model recall.",
      },
      {
        heading: "How it ships",
        body: "Three services — React client, Express/TypeScript API layer, Python FastAPI retrieval engine — wired together with Docker Compose and split across Railway and Vercel. Environment-based configuration means the same images run locally and in production without edits.",
      },
    ],
  },
  {
    slug: "invert",
    title: "Invert",
    blurb:
      "A native iOS focus timer that knows when you pick your phone up — shipped to the App Store and scaled to 60+ downloads in its first week.",
    period: "January 2024 – April 2024",
    year: "2024",
    stack: ["Swift", "SwiftUI", "MVVM", "Core Motion", "App Store"],
    repoUrl: "https://github.com/dRamachandran7/invert",
    accent: "violet",
    highlights: [
      "Built a native iOS productivity app in Swift/SwiftUI with a modular MVVM architecture separating data models, business logic, and UI components.",
      "Implemented a multi-state timer system (start / resume / stop) with real-time audio feedback and device motion sensor integration to detect device pick-ups.",
      "Applied and got the app added to the App Store, promoted it via Instagram, and scaled to 60+ downloads in the first week of release.",
    ],
    detail: [
      {
        heading: "The idea",
        body: "A focus timer you cannot quietly cheat. Invert runs face-down; your phone's proximity sensor watches for the moment you reach for the phone, and the session responds immediately with audio feedback.",
      },
      {
        heading: "How it's built",
        body: "SwiftUI throughout, structured as modular MVVM so the timer state machine, motion handling, and views stay independently testable. The multi-state timer handles start, resume, and stop cleanly across backgrounding — the case that breaks most first-attempt timer apps.",
      },
      {
        heading: "Shipping it",
        body: "Submitted, reviewed, and accepted to the App Store, then promoted through Instagram. Sixty-plus downloads in week one — my first real lesson in how much of shipping happens after the code is finished.",
      },
    ],
  },
] as const

export const experience = [
  {
    role: "Software Developer",
    org: "Hack the Future",
    location: "West Lafayette, IN",
    period: "September 2025 – May 2026",
    bullets: [
      "Built a full-stack volunteer tracking platform for an agricultural non-profit using MongoDB, Next.js, and React, supporting 300+ users.",
      "Architected and implemented real-time event sign-ups and email notifications via Nodemailer, increasing communication efficiency.",
      "Worked with teammates to build an inventory tracking service, reducing manual workload for admins.",
    ],
  },
] as const

export const education = [
  {
    school: "Purdue University",
    location: "West Lafayette, IN",
    credential: "B.S. Computer Science",
    detail: "GPA 3.1 / 4.0",
    period: "August 2025 – May 2028",
    courses: [
      "CS 25100 — Data Structures & Algorithms",
      "CS 25000 — Computer Architecture",
      "CS 24000 — C Programming",
      "CS 18200 — Foundations of Computer Science",
      "MA 26500 — Linear Algebra",
      "MA 26600 — Differential Equations",
    ],
  },
  {
    school: "Monta Vista High School",
    location: "Cupertino, CA",
    credential: "High School Diploma",
    detail: null,
    period: "August 2021 – June 2025",
    courses: [],
  },
] as const

export const skills = [
  { group: "Languages", items: ["Java", "Python", "Swift", "C"] },
  {
    group: "Frameworks",
    items: [
      "React",
      "Next.js",
      "FastAPI",
      "Node.js",
      "Flask",
      "MongoDB",
      "Playwright",
    ],
  },
  {
    group: "Tools & Platforms",
    items: ["Git", "Claude Code", "Docker", "Vercel", "Xcode"],
  },
] as const

export const certifications = [
  {
    title: "Retrieval Augmented Generation (RAG)",
    issuer: "DeepLearning.AI",
    date: "March 2026",
  },
  {
    title:
      "Certificate of Achievement — Research, Design and Development for Global Good",
    issuer: "Foothill College",
    date: "June 2024",
  },
] as const

/** Flat list for the marquee ticker. */
export const marqueeItems = skills.flatMap((group) => group.items)
