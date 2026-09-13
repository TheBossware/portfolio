// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to update your site. Everything the page shows
//  comes from here — links, projects, services, experience.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Ahmet Tarık Bostan",
  role: "Software Engineer",
  location: "Istanbul, Turkey",
  email: "atbostan.business@gmail.com",
  website: "https://www.atbostan.com",
  // TODO: add your real links
  github: "https://github.com/", // ← replace with your GitHub
  linkedin: "https://www.linkedin.com/", // ← replace with your LinkedIn
  cv: "/Ahmet_Tarik_Bostan_CV.pdf", // put the PDF in /public
  tagline:
    "I build mission-critical software for regulated industries — and automate the workflows around them.",
  intro:
    "Six years shipping end-to-end systems in banking and aviation safety, across Java (Spring Boot), .NET Core, and React/Next.js. I go from legacy mainframe code to modern microservices, integrate regulatory and central-bank APIs, and own products from architecture through deployment.",
};

export const stats = [
  { value: "6+", label: "Years experience" },
  { value: "2", label: "Regulated domains" },
  { value: "10+", label: "Production systems" },
];

// The one specialty highlighted in the hero + its own Services section
export const automation = {
  headline: "Workflow automation with n8n",
  blurb:
    "I design and build automation pipelines that connect the tools a business already uses — turning manual, repetitive work into reliable, monitored flows.",
  services: [
    {
      title: "Data collection & monitoring",
      body: "Scheduled pipelines that fetch, filter, and route data from APIs, RSS, and web sources into the places your team actually works.",
    },
    {
      title: "AI-assisted workflows",
      body: "n8n flows wired to LLMs for summarizing, classifying, and drafting — with a human approval step where it matters.",
    },
    {
      title: "System integrations",
      body: "Connecting CRMs, databases, messaging, and internal tools so events in one system trigger the right action in another.",
    },
    {
      title: "Notifications & alerting",
      body: "Real-time alerts to Slack, Telegram, or email so the right person hears about the right event immediately.",
    },
  ],
};

// AI-augmented engineering: how I use Claude as part of a professional workflow
export const aiEngineering = {
  headline: "I build with Claude — deliberately, not as a gimmick",
  blurb:
    "I use Claude as a senior pair-programmer, not a shortcut: every AI-assisted change is reviewed, tested, and verified before it ships. That discipline is what lets me move at a pace traditional workflows can't touch — without ever handing over ownership of the outcome.",
  services: [
    {
      title: "Rapid, reviewed delivery",
      body: "Every AI-assisted change is read, tested, and checked against real requirements before it ships — speed without sacrificing correctness or security.",
    },
    {
      title: "Multi-file refactors & migrations",
      body: "Claude handles the mechanical grind of large refactors and legacy migrations while I direct architecture and catch the edge cases that matter.",
    },
    {
      title: "Faster debugging & root-cause analysis",
      body: "AI-assisted code search and log tracing cut diagnosis time on unfamiliar codebases from days to hours.",
    },
    {
      title: "Documentation & handover",
      body: "Clear docs, PR descriptions, and onboarding notes produced alongside the code — not bolted on afterward.",
    },
  ],
};

// Fast-turnaround freelance offerings enabled by that AI-augmented workflow
export const quickServices = {
  headline: "Quick turnarounds, done right",
  blurb:
    "AI-augmented workflows let me take on the jobs that usually sit in a backlog — and actually finish them fast. If it fits in an email, it fits in a day. No project too small, no deadline too tight.",
  services: [
    {
      title: "Static websites",
      body: "Landing pages, portfolios, and small business sites — designed, built, and deployed in days, not weeks.",
    },
    {
      title: "Data entry & cleanup",
      body: "Messy spreadsheets, scraped data, or manual records — turned into clean, structured, ready-to-use datasets, fast.",
    },
    {
      title: "Bug fixing",
      body: "Send the repo and the symptom. I find the root cause and ship a tested fix — often the same day.",
    },
    {
      title: "Small jobs, fast",
      body: "Quick fixes and one-off tasks that a bigger agency won't touch — handled directly, without the overhead.",
    },
  ],
};

export type Project = {
  slug: string;
  name: string;
  kind: string; // eyebrow label
  year: string;
  role: string;
  summary: string;
  details: string[];
  stack: string[];
  link?: { href: string; label: string };
  confidential?: boolean; // shows a "client work — no internal details" note
};

export const projects: Project[] = [
  {
    slug: "aviation-safety-explorer",
    name: "Aviation Safety Intelligence Platform",
    kind: "Personal platform",
    year: "2025–present",
    role: "Software Engineer",
    summary:
      "A full-stack platform that aggregates aviation safety data from ~100 authoritative sources and applies an AI pipeline to summarize, classify, and translate incident and regulatory information.",
    details: [
      "Architected a multi-source collector supporting RSS, HTTP scraping, headless-browser extraction, and direct APIs, with a separate historical backfill pipeline.",
      "Curated and validated ~99 real-world sources across international regulators, accident investigation boards, incident databases, and manufacturers."
    ],
    stack: ["Next.js", "React", "TypeScript", "Python", "MongoDB"],
    link: { href: "#", label: "Demo coming soon" }, // ← add live demo / repo when ready
  },
  {
    slug: "integrated-safety-database",
    name: "Integrated Safety Database — Safety-Critical Platform",
    kind: "Airline Industry",
    year: "2025–present",
    role: "Software Engineer, Safety & Quality Assurance",
    summary:
      "Internal safety-critical platform (Integrated Safety Database) for an airline's Safety & Quality Assurance division, plus reporting on the Aviation Quality Database (AQD).",
    details: [
      "Developed frontend features and components in React, and backend services and REST APIs in .NET Core.",
      "Designed system integrations that improved safety workflow efficiency and operational traceability.",
      "Built structured data views and interactive Qlik Sense dashboards for safety monitoring and compliance reporting.",
      "Worked directly with operational stakeholders to translate safety requirements into technical solutions.",
    ],
    stack: ["React", ".NET Core", "Qlik Sense", "AQD"],
    confidential: true,
  },
  {
    slug: "core-banking",
    name: "Core Banking & Technology Transformation",
    kind: "Softtech · İş Bankası Group",
    year: "2021–2025",
    role: "Software Engineer",
    summary:
      "Led legacy-to-modern transformation and delivered critical banking features across mobile, internet, and branch channels for one of Turkey's largest banks.",
    details: [
      "Transformed mainframe COBOL screens and workflows into modern .NET architectures; migrated legacy Java services to Spring Boot microservices (Virtual IBAN, account opening/closing).",
      "Contributed to Currency-Protected Deposit implementation integrated with Central Bank (TCMB) APIs.",
      "Rebuilt contract-generation systems across all channels to meet BDDK regulatory directives.",
      "Implemented open-banking features letting users view external-bank accounts inside İşCep and Internet Banking.",
    ],
    stack: ["Java", "Spring Boot", ".NET", "COBOL", "Oracle", "Db2", "WebSphere"],
    confidential: true,
  },
  {
    slug: "clinic-scraper",
    name: "Clinic Directory Scraper",
    kind: "Data engineering",
    year: "Python",
    role: "Software Engineer",
    summary:
      "A Python scraping pipeline that discovers and compiles structured listings of clinics from multiple web sources.",
    details: [
      "Built a resilient scraper that collects, normalizes, and de-duplicates clinic records into a clean structured dataset.",
      "Handled pagination, varied page structures, and rate limiting for reliable large-scale collection.",
      "Designed with respect for each source's terms of use and robots directives.",
    ],
    stack: ["Python", "Requests", "BeautifulSoup", "Data pipelines"],
    confidential: true,

  },
  {
    slug: "medipol",
    name: "Medipol University & Hospital",
    kind: "Magiclik · CMS web",
    year: "2021",
    role: "Software Engineer",
    summary:
      "Institutional landing sites for Medipol University and Hospital, built on a CMS-driven architecture where content is fully managed through admin panels.",
    details: [
      "Developed institutional web pages using .NET MVC and a CMS-driven architecture.",
      "Implemented admin-panel-managed content so non-technical staff could update the site.",
      "Also delivered corporate landing pages for OPET on the same platform.",
    ],
    stack: [".NET MVC", ".NET Core", "CMS", "SQL"],
    link: { href: "https://www.medipol.edu.tr", label: "medipol.edu.tr" },
  },
  {
    slug: "commited",
    name: "commited.app",
    kind: "Startup initiative",
    year: "Next.js",
    role: "Software Engineer",
    summary: "A full CMS product built with Next.js as a startup initiative.",
    details: [
      "Designed and built an end-to-end CMS product from scratch.",
      "Owned product, architecture, frontend, and backend.",
    ],
    stack: ["Next.js", "React", "TypeScript"],
    link: { href: "https://commited.app", label: "commited.app" },
  },
];

export const skills = [
  { group: "Languages", items: ["Java", "C#", "TypeScript", "JavaScript", "COBOL", "Python"] },
  { group: "Backend", items: ["Spring Boot", "Spring Security", ".NET Core", ".NET MVC", "Node.js"] },
  { group: "Frontend", items: ["React", "Next.js", "Angular", "Tailwind CSS", "Material UI"] },
  { group: "Data", items: ["PostgreSQL", "Oracle", "Db2", "MS SQL", "MongoDB"] },
  { group: "Automation & Ops", items: ["n8n", "Docker", "BullMQ / Redis", "Qlik Sense"] },
  { group: "Domains", items: ["Banking", "Aviation", "Healthcare", "Education"] },
];
