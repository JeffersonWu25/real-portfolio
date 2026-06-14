import wiiPlaygroundDemo from "../assets/wii-playground-demo.mp4";
import ctecSearchDemo from "../assets/ctec-search-demo.mp4";

export const projects = [
  {
    id: "wiiplayground",
    label: "WiiPlayground",
    description:
      "Wii sports resorts without a console.",
    github: "https://github.com/JeffersonWu25/wii-for-phone",
    demo: "https://wiiplayground.vercel.app/",
    video: {
      src: wiiPlaygroundDemo,
      loopStart: 73,
      loopEnd: 106,
      playbackRate: 1.25,
    },
    tech: ["Node.js", "WebSockets", "Rapier.js"],
  },
  {
    id: "course-evaluation-search",
    label: "Course Evaluation Search",
    description:
      "An easier way for Northwestern students to search through course reviews.",
    github: "https://github.com/JeffersonWu25/nu-ctec-search",
    demo: "https://nu-ctec-search.vercel.app/",
    video: {
      src: ctecSearchDemo,
      loopStart: 0,
      playbackRate: 1.25,
      scale: 1.057,
    },
    tech: ["Flask", "Next.js", "Docker", "GCP"],
  },
];

export const skills = [
  "Python",
  "Go",
  "Java",
  "JavaScript",
  "TypeScript",
  "C/C++",
  "SQL",
  "React",
  "Node.js",
  "Next.js",
  "Docker",
  "Kubernetes",
  "AWS Lambda",
  "Supabase",
  "Git",
];

export const education = {
  school: "Northwestern University",
  period: "Sept 2023 — June 2027",
  degree: "B.A. Computer Science, Economics",
  gpa: "3.86",
  location: "Evanston, IL",
  coursework: [
    "Full Stack Engineering",
    "Scalable Architecture",
    "Agile Software Development",
    "Software Quality Engineering",
    "Machine Learning",
    "Data Structures and Algorithms",
    "Computer Systems",
  ],
  awards: [
    "2x WildHacks Overall Winner",
    "FreshHacks Overall Winner",
    "Northwestern DISC (SWE Org)",
  ],
};

export const experience = [
  {
    title: "Software Engineering Intern",
    period: "June 2026 — Present",
    company: "Verkada · San Mateo, CA",
    bullets: [
      "Building a thermal monitoring system by designing a microservice pipeline with Kafka event queues and Protobufs that instantly processes thermal camera data to flag and persist critical overheating events.",
    ],
    active: true,
  },
  {
    title: "Technical Project Manager",
    period: "Jan 2026 — June 2026",
    company: "C&W Market Foundation · Chicago, IL",
    bullets: [
      "Led a 5-engineer team to build a donor management system by translating client requirements into technical specs, managing GitHub Projects tasks, and reviewing PRs.",
      "Improved release reliability by setting up CI/CD scaffolding with GitHub checks, deployment documentation, and automated EC2 and Vercel deployments.",
      "Reduced donor follow-up time from several minutes per donor to one click by building an admin dashboard with donation analytics, donor activity trends, and personalized thank-you email generation.",
    ],
    active: false,
  },
  {
    title: "Software Engineering and VC Intern",
    period: "June 2025 — Aug 2025",
    company: "Hyde Park Venture Partners · Chicago, IL",
    bullets: [
      "Reduced accelerator list review time from 3 hours to 20 minutes by building a sourcing automation tool that filtered 400-company startup batches into 40 high-fit leads.",
      "Filtered out 90% of low-fit accelerator companies by building an asynchronous FastAPI research pipeline with Redis-backed job queues, caching, and automated data syncing.",
    ],
    active: false,
  },
  {
    title: "Contract Software Engineer",
    period: "Jan 2025 — June 2025",
    company: "North Shore Senior Center · Chicago, IL",
    bullets: [
      "Centralized senior participant records for 100+ residents by building a full-stack admin dashboard to manage health records, payment status, attendance, and activity survey data.",
      "Saved administrative staff 3 hours per week by developing a HIPAA-conscious digital attendance system that automated attendance and activity reporting, replacing paper-based records while improving data accuracy and accessibility.",
    ],
    active: false,
  },
];
