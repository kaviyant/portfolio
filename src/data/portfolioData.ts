import { PROJECT_LINKS } from "./projectLinks";
export { PROJECT_LINKS };

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  challenge: string;
  approach: string;
  technologies: string[];
  category: "Cybersecurity" | "AI & Machine Learning" | "Mobile & Security" | "Mobile & Safety";
  visualTheme: {
    accentColor: string;
    badgeBg: string;
    borderGlow: string;
    mockupType: "forensic" | "ai-leak" | "qr-phish" | "sleepstop";
  };
  metrics?: { label: string; value: string }[];
  keyFeatures: string[];
  githubUrl: string;
  demoUrl?: string;
  screenshotsUrl?: string;
  imageUrl?: string;
  isFeatured: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    icon?: string;
    highlight?: boolean;
    level?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface AchievementItem {
  id: string;
  number: string;
  title: string;
  organizer: string;
  standing: string;
  project: string;
  description: string;
  badge: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  category: "AI & ML" | "Cloud & DB" | "Cybersecurity & Networking" | "Data Science";
  code?: string;
  year: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Kaviyan T.",
    role: "Full-Stack Developer, Android Developer & Cybersecurity Enthusiast",
    headline: "BUILDING WHAT'S NEXT.",
    subheadline:
      "I'm Kaviyan — an Information Technology student and developer building full-stack applications, Android experiences, and security-focused tools.",
    introTag: "INDEPENDENTLY BUILDING · CONSTANTLY LEARNING",
    status: "Open to Software Engineering Opportunities",
    location: "Chennai, India",
    degree: "B.Tech Information Technology",
    institution: "Chennai Institute of Technology",
    graduation: "Class of 2028",
    cgpa: "8.12 / 10",
    email: "kaviyanthennarasu@gmail.com",
    phone: "+91 86681 15816",
    phoneRaw: "+918668115816",
    github: "https://github.com/kaviyant",
    leetcode: "https://leetcode.com/u/kaviyant7/",
    codechef: "https://www.codechef.com/users/kaviyant",
    linkedin: "https://www.linkedin.com/in/kaviyant/",
    resumeFilename: "/Kaviyan_T_Resume.pdf",
    aboutBio:
      "I'm Kaviyan T., an Information Technology student at Chennai Institute of Technology. I enjoy building useful software across web, mobile, and cybersecurity domains. From full-stack applications to security-focused tools, I like turning challenging problems into practical products.",
    coreInterests: [
      "Software Engineering",
      "Full-Stack Web Development",
      "Android Application Engineering",
      "Cybersecurity & Forensic Triage",
      "Systems & Data Structures",
    ],
  },

  competitiveProgramming: {
    title: "Logic. Consistency. Improvement.",
    subtitle:
      "Active problem solver with verified competitive programming records across international platforms.",
    leetcode: {
      username: "kaviyant7",
      profileUrl: "https://leetcode.com/u/kaviyant7/",
      solvedProblems: "550+",
      globalRankTop: "Top 11.96%",
      maxRating: 1749,
      badge: "Knight Contender",
      breakdown: {
        easy: "190+",
        medium: "310+",
        hard: "50+",
      },
    },
    codechef: {
      username: "kaviyant",
      profileUrl: "https://www.codechef.com/users/kaviyant",
      division: "Division 2",
      stars: "★ (1-Star)",
      maxRating: 1022,
      contestRank: "944",
      activeCompetitions: "Rated Contest Participant",
    },
  },

  skills: [
    {
      title: "PROGRAMMING",
      description: "Foundational languages for systems, algorithms, and application logic",
      iconName: "Terminal",
      skills: [
        { name: "C++", highlight: true, level: "Advanced DSA" },
        { name: "C", highlight: false, level: "Systems" },
        { name: "Java", highlight: true, level: "OOP & Android" },
        { name: "JavaScript", highlight: true, level: "ESNext / Modern" },
        { name: "SQL", highlight: false, level: "Relational Queries" },
      ],
    },
    {
      title: "FRONTEND",
      description: "Modern, responsive, and performance-tuned web interfaces",
      iconName: "Layout",
      skills: [
        { name: "React.js", highlight: true, level: "Components & Hooks" },
        { name: "Next.js", highlight: true, level: "App Router / SSR" },
        { name: "HTML5", highlight: false, level: "Semantic Markup" },
        { name: "CSS3", highlight: false, level: "Flex/Grid/Animations" },
        { name: "Tailwind CSS", highlight: true, level: "Utility Architecture" },
        { name: "Figma", highlight: false, level: "UI/UX Prototyping" },
        { name: "Canva", highlight: false, level: "Visual Assets" },
      ],
    },
    {
      title: "BACKEND & DATABASES",
      description: "Scalable server architectures, APIs, and data modeling",
      iconName: "Server",
      skills: [
        { name: "Node.js", highlight: true, level: "Runtime" },
        { name: "Express.js", highlight: true, level: "REST Microservices" },
        { name: "MongoDB", highlight: true, level: "Document Store" },
        { name: "MongoDB Atlas", highlight: false, level: "Cloud Cluster" },
        { name: "Firebase", highlight: false, level: "Auth & Realtime" },
        { name: "MySQL", highlight: false, level: "RDBMS" },
        { name: "REST APIs", highlight: true, level: "Contract Design" },
      ],
    },
    {
      title: "MOBILE DEVELOPMENT",
      description: "Native and cross-platform mobile application development",
      iconName: "Smartphone",
      skills: [
        { name: "Flutter", highlight: true, level: "Cross-Platform" },
        { name: "Dart", highlight: true, level: "Async / Reactive" },
        { name: "Kotlin", highlight: true, level: "Modern Android" },
        { name: "Android Studio", highlight: false, level: "Profiling & SDKs" },
      ],
    },
    {
      title: "DEVOPS & TOOLS",
      description: "Version control, containerized deployments, and tooling",
      iconName: "Wrench",
      skills: [
        { name: "Git", highlight: true, level: "Version Control" },
        { name: "GitHub", highlight: true, level: "Workflows & CI" },
        { name: "Linux", highlight: true, level: "Bash & Environment" },
        { name: "Postman", highlight: false, level: "API Testing" },
        { name: "Vercel", highlight: false, level: "Edge Hosting" },
        { name: "Render", highlight: false, level: "Cloud Services" },
      ],
    },
    {
      title: "COMPUTER SCIENCE",
      description: "Theoretical grounding and computational problem solving",
      iconName: "Cpu",
      skills: [
        { name: "Data Structures", highlight: true, level: "Trees, Graphs, DP" },
        { name: "Algorithms", highlight: true, level: "Time/Space Complexity" },
        { name: "Operating Systems", highlight: true, level: "Concurrency, Memory" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "fortrix",
      number: "01",
      title: "FORTRIX",
      subtitle: "Cyber Forensic Triage Software",
      tagline: "Rapid Digital Forensic Evidence Prioritization",
      description:
        "A digital forensic triage tool designed to scan storage devices, analyze metadata, identify suspicious files and system artifacts, and help prioritize potential evidence.",
      challenge:
        "Digital forensic investigators frequently encounter storage drives with hundreds of thousands of files. Traditional deep forensic acquisitions take tens of hours per disk, delaying urgent incident response windows.",
      approach:
        "Engineered an ultra-fast triage pipeline using Rust and Tauri for native hardware performance and minimal memory footprint, coupled with a reactive frontend and MongoDB indexing to classify file signatures, hash mismatches, and anomalous timestamp drift in seconds.",
      technologies: ["Rust", "Tauri", "HTML", "CSS", "JavaScript", "MongoDB"],
      category: "Cybersecurity",
      visualTheme: {
        accentColor: "#C6FF4D",
        badgeBg: "rgba(198, 255, 77, 0.12)",
        borderGlow: "rgba(198, 255, 77, 0.4)",
        mockupType: "forensic",
      },
      keyFeatures: [
        "High-throughput sector & filesystem metadata scanner",
        "Known-bad hash verification against security databases",
        "Automated forensic timeline & anomaly detection",
        "Local, privacy-preserving triage report generation",
      ],
      githubUrl: PROJECT_LINKS.fortrix.githubUrl,
      demoUrl: PROJECT_LINKS.fortrix.demoUrl || undefined,
      imageUrl: PROJECT_LINKS.fortrix.imageUrl || undefined,
      isFeatured: true,
    },
    {
      id: "secureprompt-ai",
      number: "02",
      title: "SecurePrompt AI",
      subtitle: "AI-Powered Prompt Security",
      tagline: "Preventing Sensitive Data Leakage in LLMs",
      description:
        "A security-focused platform designed to identify sensitive-data leakage in LLM prompts using prompt classification, real-time risk scoring, and a monitoring dashboard.",
      challenge:
        "As organizations integrate Large Language Models into workflows, team members accidentally paste API tokens, PII, passwords, and intellectual property directly into chat interfaces, violating compliance and security boundaries.",
      approach:
        "Built a low-latency proxy engine using Python and FastAPI featuring NLP/regex pattern recognizers and machine learning classification to evaluate risk scores before prompts reach upstream AI providers.",
      technologies: ["Python", "FastAPI", "MongoDB", "Machine Learning"],
      category: "AI & Machine Learning",
      visualTheme: {
        accentColor: "#55D6D0",
        badgeBg: "rgba(85, 214, 208, 0.12)",
        borderGlow: "rgba(85, 214, 208, 0.4)",
        mockupType: "ai-leak",
      },
      keyFeatures: [
        "Real-time token and secret redaction pipeline",
        "Contextual ML sensitivity scoring (0–100 risk rating)",
        "Security audit logging and policy violation alerts",
        "Centralized administrative monitoring dashboard",
      ],
      githubUrl: PROJECT_LINKS.securePromptAI.githubUrl,
      demoUrl: PROJECT_LINKS.securePromptAI.demoUrl || undefined,
      imageUrl: PROJECT_LINKS.securePromptAI.imageUrl || undefined,
      isFeatured: true,
    },
    {
      id: "qr-phishing-detector",
      number: "03",
      title: "QR Phishing Detector",
      subtitle: "Scan Smart. Browse Safely.",
      tagline: "Heuristic and Cloud Threat Verification for QR Codes",
      description:
        "A Flutter application that scans QR codes and analyzes URLs to help identify phishing or malicious destinations before the user's browser opens them.",
      challenge:
        "Physical 'quishing' (QR code phishing) attacks trick users by replacing legitimate QR codes with malicious redirects that steal credentials or trigger rogue APK downloads.",
      approach:
        "Developed a cross-platform mobile application in Flutter that intercepts decoded QR URLs, strips tracking redirects, and queries Google Safe Browsing API and VirusTotal API asynchronously to render an unambiguous threat verdict.",
      technologies: ["Flutter", "Dart", "Google Safe Browsing API", "VirusTotal API"],
      category: "Mobile & Security",
      visualTheme: {
        accentColor: "#F59E0B",
        badgeBg: "rgba(245, 158, 11, 0.12)",
        borderGlow: "rgba(245, 158, 11, 0.4)",
        mockupType: "qr-phish",
      },
      keyFeatures: [
        "Immediate QR frame interception without automated browser opening",
        "Multi-threat intelligence checks (Safe Browsing + VirusTotal)",
        "Heuristic domain spoofing and homograph attack detection",
        "Clear safety verdict UI with detailed risk taxonomy",
      ],
      githubUrl: PROJECT_LINKS.qrPhishingDetector.githubUrl,
      demoUrl: PROJECT_LINKS.qrPhishingDetector.demoUrl || undefined,
      imageUrl: PROJECT_LINKS.qrPhishingDetector.imageUrl || undefined,
      isFeatured: true,
    },
    {
      id: "sleepstop",
      number: "04",
      title: "SleepStop",
      subtitle: "Smart Travel Alarm & Family Safety App",
      tagline: "GPS Transit Alarms, Multi-Stage Wakeup & SOS Family Guardian",
      description:
        "A Flutter-based travel safety app that helps commuters avoid missing their stops through GPS-based journey tracking, multi-stage alarms, and automatic family SOS alerts.",
      challenge:
        "Daily public transit commuters often fall asleep during long journeys and miss their destination stops, resulting in stranded travel or delays. Standard time-based alarms fail when buses or trains face unpredictable route delays or detours.",
      approach:
        "Engineered a resilient background location tracking engine using Flutter, Dart, Riverpod, and Geolocator that monitors proximity to intermediate and final stops. Designed a 4-level escalating alarm matrix (vibration -> audio -> flashlight -> emergency siren) paired with automated family SOS alerts upon missed stops or low battery.",
      technologies: [
        "Flutter",
        "Dart",
        "Riverpod",
        "Hive",
        "Google Maps",
        "Geolocator",
        "Background Services",
        "Notifications",
      ],
      category: "Mobile & Safety",
      visualTheme: {
        accentColor: "#C6FF4D",
        badgeBg: "rgba(198, 255, 77, 0.12)",
        borderGlow: "rgba(198, 255, 77, 0.4)",
        mockupType: "sleepstop",
      },
      keyFeatures: [
        "Real-time GPS tracking with route and intermediate-stop support",
        "Four-level alarms with vibration, sound, flashlight, and emergency alerts",
        "Family safety with live-location SOS, missed-stop alerts, and low-battery warnings",
        "Multi-language voice announcements in Tamil, English, and Hindi",
      ],
      githubUrl: PROJECT_LINKS.sleepStop.githubUrl,
      demoUrl: PROJECT_LINKS.sleepStop.demoUrl || undefined,
      screenshotsUrl: PROJECT_LINKS.sleepStop.screenshotsUrl,
      imageUrl: PROJECT_LINKS.sleepStop.imageUrl || undefined,
      isFeatured: true,
    },
  ] as ProjectItem[],

  experience: [
    {
      id: "dnyx",
      role: "Full-Stack Developer Intern",
      company: "DNYX",
      period: "November 2025 – January 2026",
      location: "Chennai, India",
      type: "Internship",
      description:
        "Built and tested full-stack web application features with responsive UI and backend logic. Used Git, APIs, and database integration to develop and debug web applications.",
      highlights: [
        "Engineered end-to-end features bridging frontend component trees with RESTful API controllers.",
        "Integrated dynamic database queries and schema validation for production stability.",
        "Collaborated with senior engineers using Git branching models and code reviews.",
      ],
      technologies: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "Git"],
    },
    {
      id: "eduskills-google",
      role: "Google Android Developer Internship",
      company: "Eduskills",
      period: "May 2025 – June 2025",
      location: "Remote / India",
      type: "Virtual Internship",
      description:
        "Developed Android applications with an emphasis on optimized UI and improved performance. Worked with authentication, real-time data synchronization, and push notifications, as documented in the resume.",
      highlights: [
        "Built native Android activities and fragments following modern material design guidelines.",
        "Implemented secure authentication flows and asynchronous background workers.",
        "Engineered real-time data synchronization and push notification listeners.",
      ],
      technologies: ["Kotlin", "Android Studio", "Firebase", "REST APIs", "Jetpack"],
    },
  ] as ExperienceItem[],

  achievements: [
    {
      id: "ach-1",
      number: "01",
      title: "Cyber Security Innovation Challenge 1.0",
      organizer: "Data Security Council of India (DSCI)",
      standing: "Top 50 Nationwide",
      project: "Ransomware Early Warning System for Android Devices",
      description:
        "Recognized among the Top 50 innovators nationwide for conceptualizing and prototyping a real-time behavioral heuristic monitor that flags ransomware-like file encryption surges on Android.",
      badge: "National Finalist",
    },
    {
      id: "ach-2",
      number: "02",
      title: "Tamilan Skill Ideathon",
      organizer: "Tamilan Skills Foundation",
      standing: "Top 10 Finalist",
      project: "Dual-Mode Smart Billing & UPI Payment System for Retail Shops",
      description:
        "Selected in the Top 10 for presenting a resilient, offline-capable smart billing architecture that seamlessly synchronizes inventory and executes instant UPI verification.",
      badge: "Top 10 Finalist",
    },
    {
      id: "ach-3",
      number: "03",
      title: "CyberHackathon 4.0",
      organizer: "Greater Chennai Police & SRM University",
      standing: "Hackathon Finalist",
      project: "Cyber Forensic Triage Software",
      description:
        "Finalist in law-enforcement cyber hackathon for presenting FORTRIX, an evidence-prioritization platform designed to assist cybercrime triage officers.",
      badge: "Police Hackathon Finalist",
    },
    {
      id: "ach-4",
      number: "04",
      title: "World Computer Hacker League 2025",
      organizer: "WCHL & ICP India",
      standing: "Competitive Participant",
      project: "International Algorithmic & Security Contests",
      description:
        "Participated in high-stakes algorithmic problem-solving and cyber defense challenges competing alongside international student developers.",
      badge: "International Competitor",
    },
  ] as AchievementItem[],

  certifications: [
    {
      id: "cert-1",
      name: "AI Fundamentals",
      issuer: "IBM SkillsBuild",
      category: "AI & ML",
      year: "2024",
    },
    {
      id: "cert-2",
      name: "Introduction to Modern AI",
      issuer: "Cisco",
      category: "AI & ML",
      year: "2024",
    },
    {
      id: "cert-3",
      name: "MongoDB for Students",
      issuer: "MongoDB University",
      category: "Cloud & DB",
      year: "2024",
    },
    {
      id: "cert-4",
      name: "Data Analytics with Python",
      issuer: "NPTEL",
      category: "Data Science",
      year: "2024",
    },
    {
      id: "cert-5",
      name: "Introduction to Data Science",
      issuer: "Cisco",
      category: "Data Science",
      year: "2024",
    },
    {
      id: "cert-6",
      name: "CyberOps Associate",
      issuer: "Cisco",
      category: "Cybersecurity & Networking",
      year: "2024",
    },
    {
      id: "cert-7",
      name: "AWS Educate: Introduction to Cloud 101",
      issuer: "Amazon Web Services (AWS)",
      category: "Cloud & DB",
      year: "2024",
    },
    {
      id: "cert-8",
      name: "CCNA: Introduction to Networks",
      issuer: "Cisco",
      category: "Cybersecurity & Networking",
      year: "2024",
    },
  ] as CertificationItem[],

  competitive: {
    subtitle:
      "Demonstrated algorithmic depth and data structures consistency across 550+ competitive programming challenges and global weekly contests.",
    leetcode: {
      username: "kaviyant7",
      profileUrl: "https://leetcode.com/u/kaviyant7/",
      solvedProblems: "550+",
      globalRankTop: "Top 11.96%",
      maxRating: "1,782",
      badge: "Knight Contender",
      breakdown: {
        easy: "190+",
        medium: "310+",
        hard: "50+",
      },
    },
    codechef: {
      username: "kaviyant",
      profileUrl: "https://www.codechef.com/users/kaviyant",
      division: "Div 3 Contender",
      stars: "2★",
      maxRating: "1,480",
      contestRank: "1,400",
    },
  },

  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Toolkit", href: "#toolkit" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Recognition", href: "#recognition" },
    { label: "Certifications", href: "#certifications" },
    { label: "Problem Solving", href: "#competitive" },
    { label: "Contact", href: "#contact" },
  ],
};
