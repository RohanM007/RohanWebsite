export type Project = {
  id: 'drakewoods' | 'mend' | 'portfolio' | 'kingdom-kids'
  title: string
  description: string
  longDescription: string
  technologies: string[]
  type: string
  duration: string
  highlights: string[]
  category: string
  githubLink?: string
  facebookLink?: string
  liveLink?: string
}

export const projects: Project[] = [
    {
      id: 'drakewoods',
      title: "Drakewoods Website & Mobile App",
      description: "A comprehensive digital solution for Drakewoods in Pietermaritzburg, featuring both a responsive website and native Android application. This project showcased my ability to deliver complete end-to-end solutions.",
      longDescription: "Built from January to July 2025, this project involved creating a modern, responsive website using React and a native Android application using Kotlin. The backend was powered by Google Cloud Functions, providing scalable and reliable services.",
      technologies: ["React", "Kotlin", "Android Studio", "Google Cloud Functions", "Firebase", "Responsive Design"],
      type: "Full-Stack Development",
      duration: "7 months (Jan - July 2025)",
      highlights: [
        "Responsive web application with modern UI/UX",
        "Native Android app with smooth performance",
        "Cloud-based backend infrastructure",
        "Real-time data synchronization",
        "Professional client delivery"
      ],
      category: "Professional"
    },
    {
      title: "Mend Mental Health App",
      id: 'mend',
      description: "A mental health support application designed to provide resources and tools for mental wellness. This project demonstrates my commitment to creating technology that makes a positive impact.",
      longDescription: "Developed as part of my academic journey, this application focuses on mental health support with user-friendly interfaces and helpful resources for mental wellness. My cousin won an award at her school for this project!",
      technologies: ["Mobile Development", "UI/UX Design", "Health Tech"],
      type: "Mobile Application",
      duration: "Academic Project",
      highlights: [
        "User-centered design approach",
        "Mental health resource integration",
        "Intuitive user interface",
        "Focusing on users mental health",
        "Giving users information on different Doctors",
        "Allowing users access to different phone numbers for emergency",
        "Focus on accessibility"
      ],
      category: "Academic",
      githubLink: "https://github.com/RohanM007/Mend",
      facebookLink: "https://www.facebook.com/share/p/1ASLtP12AL/"
    },
    
    {
      title: "Portfolio Website",
      id: 'portfolio',
      description: "This very portfolio you're viewing! Built with React, TypeScript, and Framer Motion to showcase my journey and skills in an interactive and engaging way.",
      longDescription: "A responsive, Matrix-inspired portfolio with an interactive terminal, accessible navigation, and a focus on telling my story through real projects.",
      technologies: ["React", "TypeScript", "Framer Motion", "CSS3", "Responsive Design", "Vite"],
      type: "Web Development",
      duration: "2024",
      highlights: [
        "Interactive terminal with keyboard command history",
        "Responsive layouts for desktop, tablet, and mobile",
        "Accessible navigation and reduced-motion support",
        "React, TypeScript, and Tailwind CSS"
      ],
      category: "Personal",
      githubLink: "https://github.com/RohanM007/RohanWebsite"
    },
    {
    title: "Kingdom Kids Website",
    id: 'kingdom-kids',
    description: "A responsive website built for Kingdom Kids Preschool & Daycare, giving the school an online home where parents can find important information and get in touch.",
    longDescription: "Designed, developed, and deployed a complete website for Kingdom Kids Preschool & Daycare. The project focuses on clear navigation, accessible information for parents, and responsive layouts across desktop and mobile devices.",
    technologies: [
      "React",
      "TypeScript",
      "CSS3",
      "Vite",
      "Responsive Design",
      "Web Hosting"
    ],
    type: "Web Development",
    duration: "2026",
    highlights: [
      "Modern responsive website design",
      "Mobile-friendly layout",
      "Clear and accessible navigation",
      "Optimized production build using Vite",
      "Live website deployment and hosting",
      "Search engine files including sitemap and robots.txt"
    ],
    category: "Professional",
    githubLink: "https://github.com/RohanM007/TimWebsite",
    liveLink: "https://www.kingdomkidspreschool.co.za/",

    
  },
  ]
