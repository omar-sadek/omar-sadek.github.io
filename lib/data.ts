export type SocialLinks = {
  linkedin: string;
  github: string;
};

export type Profile = {
  name: string;
  role: string;
  tagline: string;
  shortBio: string;
  longBio: string;
  location: string;
  email: string;
  phone: string;
  discord: string;
  resumeUrl: string;
  socials: SocialLinks;
  roles: string[];
  heroSubtitle: string;
  heroChips: string[];
  heroSkillsLabel: string;
  heroSkills: string[];
  avatar: string;
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  url?: string;
  summary: string;
  highlights: string[];
  tech: string[];
};

export type Project = {
  title: string;
  image: string;
  description: string;
  tech: string[];
  href?: string;
};

export type Repository = {
  title: string;
  image: string;
  description: string;
  href: string;
  tech: string[];
  byline?: string;
};

export type Article = {
  title: string;
  image: string;
  description: string;
  href: string;
};

export type Skill = {
  name: string;
  level: number;
};

export const profile: Profile = {
  name: "Omar Sadek",
  role: "Gameplay Programmer",
  tagline: "Crafting gameplay systems, graphics, and immersive experiences.",
  shortBio:
    "Gameplay programmer with a deep love for engine internals, graphics, and the systems that make virtual worlds feel alive — from arcade titles to industrial-grade VR.",
  longBio:
    "I'm Omar — a gameplay programmer who enjoys living between game design and low-level tech. My day-to-day moves between gameplay systems, build tools, and graphics, and I take every chance I get to push deeper into engine internals, rendering APIs like OpenGL and Vulkan, and the kind of architecture that keeps a project shipping smoothly. Lately I've been bringing that same curiosity to immersive experiences across medical, industrial, training, and digital-twin domains, but my heart still sits in games and the tech that powers them.",
  location: "Nasr City, Cairo, Egypt",
  email: "omar.sadek11b@gmail.com",
  phone: "+20 106 555 9317",
  discord: "omarsadek",
  resumeUrl:
    "https://drive.google.com/file/d/1ES2fT9EFX0sL23K7NphHAeXc_MtH5orm/view?usp=drive_link",
  socials: {
    linkedin: "https://www.linkedin.com/in/omar-sadek-serag/",
    github: "https://github.com/omar-sadek",
  },
  avatar: "/avatar.jpg",
  roles: [
    "Omar Sadek",
    "a Gameplay Programmer",
    "a Unity Developer",
    "an Immersive Engineer",
    "a Graphics Tinkerer",
  ],
  heroSubtitle: "Let's craft something great together",
  heroChips: ["5+ Years Experience", "Gameplay Programmer", "Immersive Tech"],
  heroSkillsLabel: "Building gameplay, graphics, and immersive experiences",
  heroSkills: [
    "Unity",
    "C#",
    "C++",
    "OpenGL",
    "Vulkan",
    "VR",
    "Digital Twin",
  ],
};

export const experience: Experience[] = [
  {
    company: "Genesis Creations",
    role: "Senior Unity Developer",
    location: "Remote",
    period: "FEB 2026 — PRESENT",
    summary:
      "Designing and shipping immersive experiences across a wide range of domains, including medical, industrial, general training, and digital twins.",
    highlights: [
      "Building VR and immersive applications for medical, industrial, and training scenarios where the experience itself is the deliverable",
      "Developing interactive digital-twin environments that mirror real-world systems for visualization, simulation, and operator training",
      "Architecting Unity systems that hold up across very different project types, while keeping the codebase portable and reusable",
      "Collaborating cross-domain with subject-matter experts to translate real workflows into believable, interactive experiences",
    ],
    tech: ["Unity", "C#", "VR"],
  },
  {
    company: "Largelabs",
    role: "Gameplay Engineer",
    location: "Remote",
    period: "2021 — FEB 2026",
    url: "http://largelabs.fr",
    summary:
      "Crafted intricate gameplay mechanics and optimized development processes through the implementation of complex game systems, build tools, and AI systems.",
    highlights: [
      "Co-developed a proprietary 2D physics engine that elevated in-game physics interactions and boosted performance by ~20% on an undisclosed project",
      "Built reusable gameplay systems, build tools, and AI used across multiple titles",
      "Owned end-to-end gameplay features from prototype to production polish",
    ],
    tech: ["Unity", "C#", "Game AI", "Build Tools", "2D Physics"],
  },
  {
    company: "412labs",
    role: "VR / AR Developer",
    location: "Remote",
    period: "2020 — 2021",
    url: "https://412labs.com/",
    summary:
      "Mentored and supervised VR students as a lab instructor while delivering adaptive 360/VR projects during the pandemic.",
    highlights: [
      "Pushed technological boundaries for immersive content creation",
      "Mentored students through complete VR project lifecycles",
      "Adapted in-person workflows to fully remote VR delivery",
    ],
    tech: ["Unity", "VR", "AR", "360 Video"],
  },
  {
    company: "ExcelCodes",
    role: "Front-end Intern",
    location: "On-site",
    period: "2018",
    url: "https://excelcodes.com/en/",
    summary:
      "Collaborated with design and senior software engineers to develop customized software using JavaScript and React Native.",
    highlights: [
      "Engaged in frequent code reviews to enhance coding skills and adhere to best practices",
    ],
    tech: ["JavaScript", "React Native"],
  },
];

export const projects: Project[] = [
  {
    title: "Safety Quest",
    image: "/safetyquest.jpg",
    description:
      "An arcade game designed for modern arcade machines, seamlessly blending platformer gameplay with a diverse range of mini-games.",
    tech: ["Unity", "C#", "Arcade", "Gameplay"],
  },
  {
    title: "Bubonic",
    image: "/bubonic.jpg",
    description:
      "A pixel-art platformer that challenges players with complex environmental puzzles.",
    tech: ["Unity", "C#", "Pixel Art", "Puzzle"],
  },
  {
    title: "SkyQuest",
    image: "/skyquest.jpg",
    description:
      "An RPG prototype showcasing the integration of popular RPG systems in a comprehensive gaming concept.",
    tech: ["Unity", "C#", "RPG Systems"],
  },
];

export const repositories: Repository[] = [
  {
    title: "Lexus2D Game Engine",
    image: "/lexus2d.gif",
    description:
      "A 2D game engine created as a personal project to practice data-oriented design (DOD) and sharpen my C++ programming skills. The engine includes a demo to showcase its capabilities — it's a work-in-progress used primarily for learning and experimentation.",
    href: "https://github.com/omar-sadek/Lexus2D-Engine",
    tech: ["C++", "DOD", "Engine"],
  },
  {
    title: "State Machine",
    image: "/state-flowchart.png",
    description:
      "A straightforward state machine designed for easy Unity integration, simplifying complex logic and enhancing project workflows. Built with flexibility in mind for future feature enhancements and customization.",
    href: "#",
    tech: ["Unity", "C#", "Architecture"],
  },
  {
    title: "Nutrition Arcade Game",
    image: "/nutrition.png",
    description:
      "An engaging prototype for a kids' game built to foster healthy snacking habits. Designed for arcade machines, it combines fun and education to make choosing nutritious snacks an appealing adventure for children.",
    href: "https://github.com/largelabs/com.largelabs.nutrition",
    byline: "By: Largelabs",
    tech: ["Unity", "C#", "Arcade", "Edutainment"],
  },
];

export const articles: Article[] = [
  {
    title: "WebGL VideoPlayer Support",
    image:
      "https://miro.medium.com/v2/resize:fit:1200/1*jfdwtvU6V6g99q3G7gq7dQ.png",
    description:
      "An automated workaround to support local video clips in Unity WebGL builds.",
    href: "https://medium.com/@omar.sadek11b/unity-webgl-an-automated-workaround-for-videoplayer-support-7df44eafcf94",
  },
];

export const skills: Skill[] = [
  { name: "C#", level: 85 },
  { name: "C++", level: 65 },
  { name: "JavaScript", level: 40 },
  { name: "Unity", level: 90 },
  { name: "Plastic SCM", level: 90 },
  { name: "Git", level: 90 },
  { name: "Jira", level: 90 },
];

export const languages: Skill[] = [
  { name: "English", level: 80 },
  { name: "Arabic", level: 100 },
];

export const education = [
  {
    period: "2017 — 2021",
    title: "BS in Computer Science",
    institution: "El-Shrouk Academy",
    description:
      "Earned a Bachelor of Science in Computer Science, solidifying a strong foundation in computer science principles and practices.",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work-experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
