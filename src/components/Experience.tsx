import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Award, Briefcase } from 'lucide-react'
import './Experience.css'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      type: "work",
      title: "Lecturer",
      company: "Varsity College PMB",
      location: "",
      period: "August 2025 - December 2025",
      description: "Lecturing Higher Certificate students in Principles of UX/UI and Web Development, focusing on foundational front-end technologies.",
      technologies: ["HTML", "CSS", "JavaScript"],
      achievements: [
        "Taught Principles of UX/UI design to Higher Certificate students",
        "Lectured Web Development fundamentals",
        "Guided students through hands-on coding exercises in HTML, CSS, and JavaScript",
        "Contributed to building students’ problem-solving and web design skills"
      ],
      icon: <Briefcase size={24} />
    },
    {
      type: "work",
      title: "Full-Stack Developer",
      company: "Drakewoods",
      location: "",
      period: "January 2025 - July 2025",
      description: "Built a comprehensive website and mobile application for Drakewoods, delivering both web and mobile solutions.",
      technologies: ["React", "Android Studio", "Kotlin", "Google Cloud Functions"],
      achievements: [
        "Developed responsive website using React",
        "Created native Android app with Kotlin",
        "Implemented cloud functions for backend services",
        "Delivered complete solution within 7-month timeline"
      ],
      icon: <Briefcase size={24} />
    },
    {
      type: "education",
      title: "Bachelor of Computer and Information Sciences in Application Development",
      company: "Varsity College",
      location: "",
      period: "2022 - 2024",
      description: "Completed degree with distinction (cum laude), focusing on software development and modern technologies.",
      technologies: ["C#", "Kotlin", "Firebase", "Azure Cloud", "Visual Studio"],
      achievements: [
        "Graduated with distinction (cum laude)",
        "Mastered C# development with Visual Studio",
        "Explored Azure Cloud Functions",
        "Developed mobile apps with Kotlin and Firebase"
      ],
      icon: <Award size={24} />
    },
    {
      type: "education",
      title: "Higher Certificate in Information Technology",
      company: "Varsity College",
      location: "",
      period: "2021 - 2022",
      description: "Foundation year focusing on programming fundamentals and software development principles.",
      technologies: ["Java", "NetBeans", "Object-Oriented Programming"],
      achievements: [
        "Learned Java programming fundamentals",
        "Mastered object-oriented programming concepts",
        "Built foundation for advanced studies",
        "Developed problem-solving skills"
      ],
      icon: <Award size={24} />
    }
  ]

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="experience-container">
        <motion.div
          className="experience-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">
            My professional journey and academic achievements
          </p>
        </motion.div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`experience-item ${exp.type}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
            >
              <div className="experience-icon">
                {exp.icon}
              </div>
              
              <div className="experience-content">
                <div className="experience-header-info">
                  <h3 className="experience-title">{exp.title}</h3>
                  <div className="experience-meta">
                    <div className="experience-company">
                      <MapPin size={16} />
                      <span>{exp.company}</span>
                    </div>
                    <div className="experience-period">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
                
                <p className="experience-description">{exp.description}</p>
                
                <div className="experience-technologies">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="experience-achievements">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
