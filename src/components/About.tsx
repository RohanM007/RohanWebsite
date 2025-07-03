import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, GraduationCap, Heart, Zap } from 'lucide-react'
import './About.css'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const journeySteps = [
    {
      year: "2019",
      title: "The Gap Year",
      description: "After matriculating, I took time to discover my path, not knowing where life would lead me.",
      icon: <GraduationCap size={24} />
    },
    {
      year: "2020",
      title: "The Spark",
      description: "While learning forex, I stumbled upon someone coding a forex bot on YouTube. That moment of curiosity changed everything.",
      icon: <Zap size={24} />
    },
    {
      year: "2021-2024",
      title: "The Journey",
      description: "Enrolled at Varsity College, starting with a Higher Certificate and progressing to a Bachelor of Computer and Information Sciences in Application Development.",
      icon: <Code size={24} />
    },
    {
      year: "2024",
      title: "The Achievement",
      description: "Graduated cum laude with distinction from Varsity College, discovering my burning passion for technology and development.",
      icon: <Heart size={24} />
    }
  ]

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about-container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A journey from uncertainty to passion
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-story"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>My Story</h3>
            <p>
              I never thought I'd get into a career involving technology since I had no interest in it initially. 
              But being able to code and develop websites, apps, and explore new technology, I have gained such a 
              burning passion for it.
            </p>
            <p>
              To the point where if I have a vision in my head to design something, I won't stop until I have 
              succeeded and brought that vision to life. It's because of that relentless work ethic that I have 
              made it as far as I have come.
            </p>
            <p>
              From a curious moment watching someone code a forex bot to graduating with distinction and now
              building professional solutions like the Drakewoods project, my journey has been one of discovery,
              dedication, and an unwavering commitment to turning ideas into reality.
            </p>
          </motion.div>

          <motion.div
            className="journey-timeline"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3>My Journey</h3>
            <div className="timeline">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={step.year}
                  className="timeline-item"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                >
                  <div className="timeline-icon">
                    {step.icon}
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-year">{step.year}</div>
                    <h4 className="timeline-title">{step.title}</h4>
                    <p className="timeline-description">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about-values"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3>What Drives Me</h3>
          <div className="values-grid">
            <div className="value-item">
              <h4>Relentless Dedication</h4>
              <p>I don't stop until I've brought my vision to life</p>
            </div>
            <div className="value-item">
              <h4>Continuous Learning</h4>
              <p>Always exploring new technologies and pushing boundaries</p>
            </div>
            <div className="value-item">
              <h4>Innovation</h4>
              <p>Turning creative ideas into functional, impactful solutions</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
