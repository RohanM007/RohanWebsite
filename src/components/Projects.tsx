import { ArrowUpRight, Github, LockKeyhole, Code2, Check, Crown } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { projects } from '../data/projects'
import type { Project } from '../data/projects'
import drakewoodsImage from '../assets/Drakewoods.png'
import mendImage from '../assets/mend.jpg'
import reactIcon from '../assets/react.svg'
import kotlinIcon from '../assets/kotlin.svg'
import cloudFunctionsIcon from '../assets/gcp-cloud-functions.svg'

function ProjectVisual({ project }: { project: Project }) {
  switch (project.id) {
    case 'drakewoods':
      return <div className="architecture-visual" aria-label="Drakewoods architecture: React web and Kotlin Android connected to Google Cloud Functions">
        <img className="drakewoods-project-image" src={drakewoodsImage} alt="Drakewoods app logo" width={160} height={160} loading="lazy" />
        <div className="visual-caption"><span className="status-dot" /> FULL-STACK ARCHITECTURE <span>WEB + MOBILE</span></div>
        <div className="architecture-clients">
          <div><img className="architecture-icon" src={reactIcon} alt="" width={32} height={32} loading="lazy" /><span>React</span><small>WEB APPLICATION</small></div>
          <span className="architecture-plus">+</span>
          <div><img className="architecture-icon architecture-icon--kotlin" src={kotlinIcon} alt="" width={32} height={32} loading="lazy" /><span>Kotlin</span><small>NATIVE ANDROID</small></div>
        </div>
        <div className="connector-lines"><i /><i /></div>
        <div className="cloud-block"><img className="architecture-icon" src={cloudFunctionsIcon} alt="" width={32} height={32} loading="lazy" /><div><strong>Google Cloud Functions</strong><small>BACKEND SERVICES / FIREBASE</small></div><span className="status-dot" /></div>
        <div className="architecture-foot"><Check size={12} /> One connected digital experience</div>
      </div>
    case 'mend':
      return <div className="mend-visual"><img className="mend-project-image" src={mendImage} alt="Mend logo with a green heart and leaves" width={1024} height={1024} loading="lazy" /></div>
    case 'kingdom-kids':
      return <div className="kingdom-visual" aria-label="Kingdom Kids Preschool and Daycare website">
        <div className="kingdom-project-mark"><Crown size={34} strokeWidth={1.5} aria-hidden="true" /><strong>Kingdom Kids</strong><span>PRESCHOOL & DAYCARE</span></div>
        <span className="visual-corner">BUILT FOR PARENTS</span><span className="visual-index">LIVE WEBSITE</span>
      </div>
    case 'portfolio':
      return <div className="portfolio-visual" aria-label="Portfolio code illustration"><div className="mini-editor"><div className="mini-editor-bar"><Code2 size={12} /> portfolio.tsx <span>×</span></div><div className="mini-code"><p><i>01</i><span>const</span> developer = {'{'}</p><p><i>02</i>  name: <b>'Rohan'</b>,</p><p><i>03</i>  drivenBy: <b>'curiosity'</b>,</p><p><i>04</i>  alwaysLearning: <span>true</span></p><p><i>05</i>{'};'}</p><p><i>06</i><span>export default</span> developer;</p></div></div><span className="visual-corner">YOU ARE HERE</span><span className="visual-index">PERSONAL PORTFOLIO</span></div>
  }
}

export default function Projects() {
  return <section id="projects" className="section shell">
    <SectionHeading number="03" label="SELECTED WORK" title="Ideas shipped into the real world."><a className="text-link" href="https://github.com/RohanM007" target="_blank" rel="noreferrer"><Github size={16} /> Explore GitHub <ArrowUpRight size={15} /></a></SectionHeading>
    <div className="project-grid">{projects.map(project => {
      const featured = project.id === 'drakewoods'
      return <article className={`project-card${featured ? ' project-featured' : ''}`} key={project.id}>
        <ProjectVisual project={project} />
        <div className="project-content">
          <div className="project-kicker"><span>{featured ? 'FEATURED PROJECT' : `${project.category.toUpperCase()} PROJECT`}</span><span>{project.type.toUpperCase()}</span></div>
          <h3>{project.title}</h3><p>{project.description}</p>
          <div className="tags">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>
          <details className="project-details"><summary>Project details <span>+</span></summary><p>{project.longDescription}</p><ul>{project.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul></details>
          <div className="project-links">
            {project.liveLink && <a className="text-link" href={project.liveLink} target="_blank" rel="noreferrer">Visit live website <ArrowUpRight size={15} /></a>}
            {project.githubLink && <a className="text-link" href={project.githubLink} target="_blank" rel="noreferrer">View source <ArrowUpRight size={15} /></a>}
            {project.facebookLink && <a className="text-link" href={project.facebookLink} target="_blank" rel="noreferrer">School feature <ArrowUpRight size={15} /></a>}
            {featured && <><span className="private-label"><LockKeyhole size={13} /> Private repository</span><a className="text-link" href="mailto:rohanmaharaj708@gmail.com?subject=Drakewoods%20code%20sample%20request">Request a walkthrough <ArrowUpRight size={15} /></a></>}
          </div>
        </div>
      </article>
    })}</div>
  </section>
}
