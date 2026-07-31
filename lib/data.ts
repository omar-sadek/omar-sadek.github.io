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

export type GalleryItem = {
  src: string;
  caption?: string;
};

export type ProjectVideo = {
  /** Self-hosted mp4 path. Use this or youtubeId, not both. */
  src?: string;
  youtubeId?: string;
  poster?: string;
  caption?: string;
};

export type Credit = {
  role?: string;
  people: string;
};

export type Project = {
  title: string;
  /** Card thumbnail. Also used as the detail-page hero unless heroImage is set. */
  image: string;
  heroImage?: string;
  description: string;
  tech: string[];
  href?: string;
  /** Presence of a slug gives the project its own detail page. */
  slug?: string;
  subtitle?: string;
  year?: string;
  role?: string;
  overview?: string[];
  highlights?: string[];
  /** Width / height of the hero image. Defaults to 2.1 (21:10). */
  heroAspectRatio?: number;
  gallery?: GalleryItem[];
  video?: ProjectVideo;
  credits?: Credit[];
  creditsNote?: string;
  /** Label for the external link when shown as a button on the detail page. */
  externalLabel?: string;
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
  heroChips: ["6+ Years Experience", "Gameplay Programmer", "Immersive Tech"],
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
    location: "Hybrid",
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
    location: "On-site",
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
    location: "Hyprid",
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
    title: "Sterile Environment VR Training",
    slug: "sterile-environment-training",
    image: "/projects/sterile-environment-training/hero.jpg",
    subtitle: "VR training platform for sterile procedure protocols",
    year: "2026",
    role: "Unity / VR Developer",
    description:
      "A VR training platform for sterile-environment protocols, built around hands-on procedural simulation with real-time validation.",
    tech: ["Unity", "C#", "VR", "Hand Tracking", "Training Systems"],
    overview: [
      "An immersive VR training experience where users practice sterile procedures inside realistic virtual scenarios. The platform walks trainees through each protocol step by step and validates their actions as they perform them, so mistakes surface in the moment rather than at the end of a session.",
      "Training is structured as sequential modules with interactive checkpoints, backed by an assessment layer that scores procedural accuracy. The systems underneath are built to be modular, so new procedures can be authored on top of the same interaction and validation framework without reworking the core.",
    ],
    highlights: [
      "Realistic virtual sterile environment with physically simulated objects",
      "Step-by-step procedure guidance with real-time protocol validation",
      "Hand tracking and natural interaction mechanics tuned for VR comfort",
      "Modular training objectives that orchestrate multi-step procedures",
      "Assessment and feedback systems that score procedural compliance",
      "Scalable architecture supporting additional procedure types",
      "Performance optimized for standalone VR headsets",
    ],
    gallery: [
      {
        src: "/projects/sterile-environment-training/cleaning.png",
        caption: "Guided cleaning procedure module",
      },
      {
        src: "/projects/sterile-environment-training/mopping.png",
        caption: "Mopping procedure with step validation",
      },
      {
        src: "/projects/sterile-environment-training/hand-hygiene.jpg",
        caption: "Hand hygiene protocol station",
      },
    ],
    video: {
      src: "/projects/sterile-environment-training/demo.mp4",
      poster: "/projects/sterile-environment-training/hero.jpg",
      caption: "Walkthrough of a training session",
    },
  },
  {
    title: "Safety Quest",
    slug: "safety-quest",
    image: "/safetyquest.jpg",
    subtitle:
      "A pixel-art arcade platformer built entirely in-house — from the physics engine up",
    year: "2021 — 2026",
    role: "Gameplay Engineer",
    description:
      "An arcade game designed for modern arcade machines, seamlessly blending platformer gameplay with a diverse range of mini-games.",
    tech: [
      "Unity",
      "C#",
      "Arcade",
      "Pixel Art",
      "Custom Physics",
      "Gameplay Systems",
    ],
    overview: [
      "Safety Quest is the project I spent the longest stretch of my career on — more than four years, from early production through to the point where it became a product the studio could package and resell to clients. It's a pixel-art arcade game spanning entire worlds of platformer levels alongside a large set of mini-games and modes, with each level and mini-game built around its own distinct mechanic.",
      "Almost nothing in it came off the shelf. The physics engine, animation system, grid systems, and AI were all built in-house, which meant the gameplay layer and the tech underneath it evolved together over the years. It was designed first for arcade cabinets on desktop hardware, then later ported to the web, and it ships with a leaderboard and a scoring system robust enough to hold up under competitive arcade play.",
    ],
    highlights: [
      "Proprietary 2D physics engine built in-house rather than relying on the stock solution",
      "Custom animation system driving pixel-art characters and effects",
      "Grid systems underpinning level construction and mini-game logic",
      "In-house AI systems for enemies and interactive elements",
      "Worlds of platformer levels, each built around its own unique mechanic",
      "A large catalogue of mini-games and modes with distinct rulesets",
      "Leaderboard and a robust scoring system tuned for arcade competition",
      "Originally built for arcade cabinets, later ported to run on the web",
    ],
    video: {
      youtubeId: "06mM31BbO78",
      caption: "Gameplay trailer",
    },
  },
  {
    title: "KickBeat",
    slug: "kickbeat",
    image: "/projects/kickbeat/cover.jpg",
    heroImage: "/projects/kickbeat/banner.png",
    heroAspectRatio: 3,
    subtitle:
      "A rhythm game about football freestyle, built in 3 days for Score Jam 37",
    year: "2026",
    role: "Developer",
    description:
      "A rhythm-based football training game where you follow your coach's gestured instructions and land tricks on the beat.",
    tech: ["Unity", "C#", "Rhythm", "Pixel Art", "WebGL", "Game Jam"],
    href: "https://omarsadek.itch.io/kickbeat",
    externalLabel: "Play in browser",
    overview: [
      "Follow the coach. Feel the rhythm. Master the tricks. KickBeat is a rhythm-based football training game where your coach demonstrates freestyle tricks through hand gestures and you replicate them at exactly the right moment — on the beat. Watch carefully, time your inputs, and chain perfect moves into combos; miss too many beats and the training session ends.",
      "Timing is graded across three tiers — Perfect for landing right on the beat, Good for close enough, and Miss for back to basics — which turns the whole session into a push for a cleaner run. It was built in three days for Score Jam 37 and runs directly in the browser.",
    ],
    highlights: [
      "Beat-matched input scored across Perfect, Good, and Miss timing tiers",
      "Gesture-based instruction that teaches each trick before you perform it",
      "Combo chaining that rewards stringing perfect hits together",
      "Endless high-score structure with a fail state on missed beats",
      "Pixel-art presentation built around readable on-beat feedback",
      "Runs in the browser via WebGL — no download needed",
    ],
    creditsNote:
      "Audio is royalty-free: 5 Chiptunes (Action) by SubspaceAudio and the Ultimate 2017 16-bit Mini SFX pack, both from OpenGameArt. No generative AI was used for the art, music, or sound effects.",
    credits: [
      { role: "Development", people: "Omar Sadek, Hesham Maher" },
      { role: "Art", people: "Emad Maged" },
    ],
    gallery: [
      { src: "/projects/kickbeat/shot-1.png" },
      { src: "/projects/kickbeat/shot-2.png" },
      { src: "/projects/kickbeat/shot-3.png" },
    ],
  },
  {
    title: "Bubonic",
    slug: "bubonic",
    image: "/projects/bubonic/title.png",
    heroAspectRatio: 16 / 9,
    subtitle:
      "A pixel-art puzzle platformer made in 3 days — and the game jam's winner",
    year: "2021",
    role: "Developer & Level Designer",
    description:
      "A pixel-art platformer that challenges players with complex environmental puzzles.",
    tech: ["Unity", "C#", "Pixel Art", "Puzzle", "Game Jam"],
    href: "https://omarsadek.itch.io/bubonic",
    externalLabel: "Play on itch.io",
    overview: [
      "In the early 1300s, doom marches out of lands unknown in the form of rats. An unnamed hero throws his lifelong ambitions behind his back to face what the locals came to call the Black Death. Bubonic is a pixel-art puzzle platformer built around that premise — every level hides a pattern that rewards reading the room over raw reflexes.",
      "We built it in three days for a game jam, and it won. Everything in it was made by the team during the jam: the code, the pixel art, the level design, and the original soundtrack and sound effects. No AI-generated content, no third-party plugins, and no external art assets — the only outside element is a single font, Pixellari.",
    ],
    highlights: [
      "Built from scratch in 3 days and won the game jam",
      "Environmental puzzles with a solvable pattern in every level",
      "Hand-made pixel art and animation, produced during the jam",
      "Original soundtrack and sound effects composed by the team",
      "No third-party plugins, art packs, or AI-generated assets",
      "Level design built to teach its mechanics without tutorials",
    ],
    credits: [
      { role: "Development", people: "Omar Sadek, Youssef Abusamra" },
      { role: "Art", people: "Emad Maged" },
      { role: "OST & SFX", people: "Youssef Abusamra" },
      { role: "Level Design", people: "Omar Sadek" },
    ],
    gallery: [
      { src: "/projects/bubonic/shot-3.jpg" },
      { src: "/projects/bubonic/shot-4.jpg" },
      { src: "/projects/bubonic/shot-5.jpg" },
      { src: "/projects/bubonic/shot-6.jpg" },
    ],
    video: {
      youtubeId: "dMLsKEJRshQ",
      caption: "Gameplay trailer",
    },
  },
  {
    title: "SkyQuest",
    slug: "skyquest",
    image: "/skyquest.jpg",
    subtitle: "My graduation project — a full RPG concept, built from nothing",
    year: "2021",
    role: "Gameplay Programmer",
    description:
      "An RPG prototype showcasing the integration of popular RPG systems in a comprehensive gaming concept.",
    tech: ["Unity", "C#", "RPG Systems", "NavMesh AI", "Dialogue"],
    overview: [
      "SkyQuest was my graduation project — an RPG concept built to prove out how the genre's core systems fit together when you have to write all of them yourself. Rather than assembling a prototype from existing packages, the team built every system in it, so the inventory, AI, dialogue, and combat were all designed to talk to each other from the start.",
      "Everything in the game is original work by the team. No AI-generated content and no third-party asset packs — the 3D models were created by our 3D artist and the soundtrack was composed by our own musician, with all in-game effects made in-house.",
    ],
    highlights: [
      "Inventory system covering items, equipment, and player state",
      "AI behaviour driven by Unity's NavMesh for navigation and pursuit",
      "Dialogue system supporting branching conversations with NPCs",
      "Combat system integrated with the equipment and stat layers",
      "All visual effects created in-house by the team",
      "Original 3D models and an original composed soundtrack",
    ],
    creditsNote:
      "Built with a team who made every model, effect, and track in the game.",
    credits: [
      {
        people:
          "Youssef Abusamra, Emad Maged, Iyad Mohamed, Hadeer Mahmoud, Heba Magdy",
      },
    ],
    video: {
      youtubeId: "9a5_NTdqpmY",
      caption: "Gameplay showcase",
    },
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
    href: "https://github.com/omar-sadek/SimpleStateMachine",
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
  { name: "C#", level: 100 },
  { name: "C++", level: 65 },
  { name: "JavaScript", level: 50 },
  { name: "Unity", level: 90 },
  { name: "Plastic SCM", level: 90 },
  { name: "Git", level: 90 },
  { name: "Jira", level: 90 },
];

export const languages: Skill[] = [
  { name: "English", level: 90 },
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
