export const resume = {
  pdfHref: "/BlakeHeymanResume.pdf",
  email: "blake.heyman@gmail.com",
  linkedinHref: "https://www.linkedin.com/in/blakeheyman/",
  linkedinLabel: "linkedin.com/in/blakeheyman",
  education: {
    school: "Northeastern University",
    location: "Boston, MA",
    college: "Khoury College of Computer Sciences",
    degree: "Bachelor of Science in Computer Science",
    dates: "September 2019 – May 2023",
    highlights: ["Summa Cum Laude", "GPA 3.9"],
  },
  experience: [
    {
      company: "WHOOP",
      location: "Boston, MA",
      title: "Android Engineer II",
      dates: "February 2026 – Present",
      bullets: [
        "Built Kotlin Android features on WHOOP’s Growth team that integrate with backend APIs, collaborating with product and backend to ship features that relate to membership and improve user experience.",
        "Led the migration to a backend-driven bottom navigation bar in the WHOOP Android app, making it faster and easier to ship new features such as the Advanced Labs standalone membership.",
      ],
    },
    {
      company: "Wellframe",
      location: "Boston, MA",
      title: "Software Engineer",
      dates: "March 2024 – February 2026",
      bullets: [
        "Led the technical design and development of Wellframe’s first member-facing web application, collaborating with a cross-functional team over a year to unlock major new sales opportunities.",
        "Authored the frontend architecture and tech stack proposal for the Member Web application, which was later adopted as a standard across the organization.",
      ],
    },
    {
      company: "Wellframe",
      location: "Boston, MA",
      title: "Associate Software Engineer",
      dates: "June 2023 – March 2024",
      bullets: [
        "Developed features for Wellframe’s Android application to support digital care management, building new and migrated interfaces with Jetpack Compose to improve efficiency and maintainability.",
        "Participated in release duty, deploying Android and iOS apps for Wellframe and cobranded customers, and monitoring for issues requiring hotfixes.",
      ],
    },
  ],
  skills: [
    {
      label: "Languages",
      items: [
        "Kotlin",
        "Swift",
        "TypeScript",
        "JavaScript",
        "Objective-C",
        "Java",
        "C/C++",
        "Python",
        "HTML",
      ],
    },
    {
      label: "Frameworks",
      items: ["React", "SwiftUI", "Jetpack Compose", "MUI"],
    },
    {
      label: "Software",
      items: [
        "Xcode",
        "Android Studio",
        "IntelliJ IDEA",
        "Node.js",
        "Git",
        "LaTeX",
        "Photoshop",
        "Excel",
      ],
    },
  ],
  interests: [
    "Travel",
    "crossword puzzles",
    "retro games",
    "Pokémon",
    "chess",
    "French",
    "hockey",
  ],
} as const;
