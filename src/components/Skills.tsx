import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Skills.css'

// Import Flaticon images
import reactIcon from '../assets/react.png'
import javaIcon from '../assets/java.png'
import cssIcon from '../assets/css.png'
import nodejsIcon from '../assets/nodejs.png'
import githubIcon from '../assets/github.png'
import htmlIcon from '../assets/html-5.png'
import javascriptIcon from '../assets/java-script.png'
import csharpIcon from '../assets/c-sharp.png'
import gitIcon from '../assets/git.png'
import typescriptIcon from '../assets/typescript.png'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C#", icon: csharpIcon, iconType: "image", color: "#239120", description: "Advanced proficiency with Visual Studio" },
        { name: "Java", icon: javaIcon, iconType: "image", color: "#ED8B00", description: "Strong foundation with NetBeans" },
        { name: "Kotlin", icon: "🅺", iconType: "text", color: "#7F52FF", description: "Mobile development with Android Studio" },
        { name: "JavaScript", icon: javascriptIcon, iconType: "image", color: "#F7DF1E", description: "Modern web development" },
        { name: "TypeScript", icon: typescriptIcon, iconType: "image", color: "#3178C6", description: "Type-safe development" },
        { name: "Dart", icon: "🎯", iconType: "text", color: "#0175C2", description: "Learning Flutter development" }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "React", icon: reactIcon, iconType: "image", color: "#61DAFB", description: "Component-based UI development" },
        { name: "HTML5", icon: htmlIcon, iconType: "image", color: "#E34F26", description: "Semantic markup & structure" },
        { name: "CSS3", icon: cssIcon, iconType: "image", color: "#1572B6", description: "Responsive design & modern CSS" },
        { name: "Node.js", icon: nodejsIcon, iconType: "image", color: "#339933", description: "Backend development" },
        { name: "REST APIs", icon: "🔗", iconType: "text", color: "#00ff00", description: "API design and integration" }
      ]
    },
    {
      title: "Cloud & Backend",
      skills: [
        { name: "Firebase", icon: "🔥", iconType: "text", color: "#FFCA28", description: "Real-time database & authentication" },
        { name: "Google Cloud", icon: "☁️", iconType: "text", color: "#4285F4", description: "Cloud functions and deployment" }
      ]
    },
    {
      title: "Tools & Frameworks",
      skills: [
        { name: "Visual Studio", icon: "🔧", iconType: "text", color: "#5C2D91", description: "Primary C# development environment" },
        { name: "Android Studio", icon: "🤖", iconType: "text", color: "#3DDC84", description: "Mobile app development" },
        { name: "Git", icon: gitIcon, iconType: "image", color: "#F05032", description: "Version control" },
        { name: "GitHub", icon: githubIcon, iconType: "image", color: "#181717", description: "Code collaboration" },
        { name: "Flutter", icon: "🦋", iconType: "text", color: "#02569B", description: "Cross-platform mobile development" },
        { name: "Vite", icon: "⚡", iconType: "text", color: "#646CFF", description: "Fast build tool" }
      ]
    }
  ]

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="skills-container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Technologies I've explored throughout my journey
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + categoryIndex * 0.1 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.1
                    }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="skill-icon-container">
                      <motion.div
                        className="skill-icon"
                        style={{
                          backgroundColor: skill.iconType === 'image' ? '#fff' : skill.color,
                          boxShadow: `0 0 20px ${skill.color}40`
                        }}
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 2,
                          delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeInOut"
                        }}
                      >
                        {skill.iconType === 'image' ? (
                          <img
                            src={skill.icon as string}
                            alt={`${skill.name} icon`}
                            className="skill-icon-image"
                          />
                        ) : (
                          <span className="icon-text" style={{ color: skill.color === '#F7DF1E' || skill.color === '#FFCA28' ? '#000' : '#fff' }}>
                            {skill.icon}
                          </span>
                        )}
                      </motion.div>
                    </div>
                    <div className="skill-content">
                      <h4 className="skill-name">{skill.name}</h4>
                      <p className="skill-description">{skill.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-attribution"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="attribution-title">Icon Credits:</p>
          <div className="attribution-links">
            <a href="https://www.flaticon.com/free-icons/react" title="react icons" target="_blank" rel="noopener noreferrer">
              React icons created by Freepik - Flaticon
            </a>
            <a href="https://www.flaticon.com/free-icons/java" title="java icons" target="_blank" rel="noopener noreferrer">
              Java icons created by Freepik - Flaticon
            </a>
            <a href="https://www.flaticon.com/free-icons/css" title="css icons" target="_blank" rel="noopener noreferrer">
              CSS icons created by Freepik - Flaticon
            </a>
            <a href="https://www.flaticon.com/free-icons/nodejs" title="nodejs icons" target="_blank" rel="noopener noreferrer">
              Node.js icons created by Freepik - Flaticon
            </a>
            <a href="https://www.flaticon.com/free-icons/github" title="github icons" target="_blank" rel="noopener noreferrer">
              GitHub icons created by Ruslan Babkin - Flaticon
            </a>
            <a href="https://www.flaticon.com/free-icons/html" title="html icons" target="_blank" rel="noopener noreferrer">
              HTML icons created by Pixel perfect - Flaticon
            </a>
            <a href="https://www.flaticon.com/free-icons/javascript" title="javascript icons" target="_blank" rel="noopener noreferrer">
              JavaScript icons created by UIUX Mall - Flaticon
            </a>
            <a href="https://www.flaticon.com/free-icons/c-sharp" title="c sharp icons" target="_blank" rel="noopener noreferrer">
              C# icons created by Freepik - Flaticon
            </a>
            <a href="https://www.flaticon.com/free-icons/commit-git" title="commit git icons" target="_blank" rel="noopener noreferrer">
              Git icons created by See Icons - Flaticon
            </a>
            <a href="https://www.flaticon.com/free-icons/typescript" title="typescript icons" target="_blank" rel="noopener noreferrer">
              TypeScript icons created by Freepik - Flaticon
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
