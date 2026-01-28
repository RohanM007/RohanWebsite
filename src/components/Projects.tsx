import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, Smartphone, Globe, Facebook } from 'lucide-react'
import './Projects.css'

interface Project {
  title: string
  description: string
  longDescription: string
  technologies: string[]
  type: string
  duration: string
  highlights: string[]
  icon: React.ReactElement
  category: string
  githubLink?: string
  facebookLink?: string
}

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects: Project[] = [
    {
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
      icon: <Globe size={32} />,
      category: "Professional"
    },
    {
      title: "Mend Mental Health App",
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
      icon: <Smartphone size={32} />,
      category: "Academic",
      githubLink: "https://github.com/RohanM007/Mend",
      facebookLink: "https://www.facebook.com/share/p/1ASLtP12AL/"
    },
    {
      title: "💖 Valentine's Day Special Website",
      description: "A heartfelt, interactive web project designed to express love and appreciation in a creative and fun way. This project showcases my HTML, CSS, and JavaScript skills through romantic animations and interactive elements.",
      longDescription: "Created as a personalized digital gift, this project features animated hearts, delayed text reveals, interactive buttons, and personal love notes. Built while practicing front-end fundamentals with a creative twist.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Animations", "Interactive Design"],
      type: "Web Development",
      duration: "Personal Practice Project",
      highlights: [
        "Romantic landing page with floating hearts",
        "Interactive Yes/No buttons with animations",
        "Timed text reveal effects",
        "Multiple themed pages (reasons, story, playful)",
        "Creative use of CSS animations and JavaScript"
      ],
      icon: <Globe size={32} />,
      category: "Personal",
      githubLink: "https://github.com/RohanM007/ValentinesDay"
    },
    {
      title: "Portfolio Website",
      description: "This very portfolio you're viewing! Built with React, TypeScript, and Framer Motion to showcase my journey and skills in an interactive and engaging way.",
      longDescription: "A modern, responsive portfolio website featuring a matrix loading screen, smooth animations, and professional design. Built to tell my story and showcase my technical capabilities.",
      technologies: ["React", "TypeScript", "Framer Motion", "CSS3", "Responsive Design", "Vite"],
      type: "Web Development",
      duration: "2024",
      highlights: [
        "Matrix-style loading animation",
        "Smooth scroll animations",
        "Responsive design",
        "Professional storytelling",
         "Mobile Responsiveness",
        "Modern tech stack"
      ],
      icon: <Globe size={32} />,
      category: "Personal"
    }
  ]

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="projects-container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Showcasing my journey through code and creativity
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`project-card ${project.category.toLowerCase()}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
            >
              <div className="project-icon">
                {project.icon}
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-meta">
                    <span className="project-type">{project.type}</span>
                    <span className="project-duration">{project.duration}</span>
                  </div>
                </div>

                <p className="project-description">{project.description}</p>
                <p className="project-long-description">{project.longDescription}</p>

                <div className="project-technologies">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-highlights">
                  <h4>Key Highlights:</h4>
                  <ul>
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                {(project.githubLink || project.facebookLink) && (
                  <div className="project-links">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link github-link"
                      >
                        <Github size={20} />
                        View on GitHub
                      </a>
                    )}
                    {project.facebookLink && (
                      <a
                        href={project.facebookLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link facebook-link"
                      >
                        <Facebook size={20} />
                        School Feature
                      </a>
                    )}
                  </div>
                )}

                {!project.githubLink && !project.facebookLink && project.category === "Professional" && (
                  <div className="project-links">
                    <div className="private-repo">
                      <span className="private-badge">🔒 Private Repository</span>
                      <p className="private-note">Code samples available upon request</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
