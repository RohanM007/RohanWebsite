import { Braces, PanelsTopLeft, Database, Wrench, Github } from 'lucide-react'
import SectionHeading from './SectionHeading'

import skillIcon0 from '../assets/csharp.svg'
import skillIcon1 from '../assets/java.svg'
import skillIcon2 from '../assets/kotlin.svg'
import skillIcon3 from '../assets/javascript.svg'
import skillIcon4 from '../assets/typescript.svg'
import skillIcon5 from '../assets/dart.svg'
import skillIcon6 from '../assets/react.svg'
import skillIcon7 from '../assets/html5.svg'
import skillIcon8 from '../assets/css3.svg'
import skillIcon9 from '../assets/nodejs.svg'
import skillIcon10 from '../assets/gcp-api.svg'
import skillIcon11 from '../assets/firebase.svg'
import skillIcon12 from '../assets/google-cloud.svg'
import skillIcon13 from '../assets/gcp-cloud-functions.svg'
import skillIcon14 from '../assets/azure-badge.svg'
import skillIcon15 from '../assets/visual-studio.svg'
import skillIcon16 from '../assets/visual-studio-code.svg'
import skillIcon17 from '../assets/android-studio.svg'
import skillIcon18 from '../assets/git.svg'
import skillIcon19 from '../assets/flutter.svg'
import skillIcon20 from '../assets/vitejs.svg'

const skillIcons: Record<string, string> = {
  'C#': skillIcon0,
  'Java': skillIcon1,
  'Kotlin': skillIcon2,
  'JavaScript': skillIcon3,
  'TypeScript': skillIcon4,
  'Dart': skillIcon5,
  'React': skillIcon6,
  'HTML5': skillIcon7,
  'CSS3': skillIcon8,
  'Node.js': skillIcon9,
  'REST APIs': skillIcon10,
  'Firebase': skillIcon11,
  'Google Cloud': skillIcon12,
  'Cloud Functions': skillIcon13,
  'Azure': skillIcon14,
  'Visual Studio': skillIcon15,
  'VS Code': skillIcon16,
  'Android Studio': skillIcon17,
  'Git': skillIcon18,
  'Flutter': skillIcon19,
  'Vite': skillIcon20,
}

const categories = [
  { title: 'Languages', subtitle: 'THE BUILDING BLOCKS', icon: Braces, skills: ['C#', 'Java', 'Kotlin', 'JavaScript', 'TypeScript', 'Dart'], note: 'Exploring Dart & Flutter' },
  { title: 'Web & interfaces', subtitle: 'THE USER EXPERIENCE', icon: PanelsTopLeft, skills: ['React', 'HTML5', 'CSS3', 'Node.js', 'REST APIs'], note: 'Responsive by design' },
  { title: 'Cloud & backend', subtitle: 'BEHIND THE SCENES', icon: Database, skills: ['Firebase', 'Google Cloud', 'Cloud Functions', 'Azure'], note: 'Connected applications' },
  { title: 'Tools & workflow', subtitle: 'THE DEVELOPER TOOLKIT', icon: Wrench, skills: ['Visual Studio', 'VS Code', 'Android Studio', 'Git', 'GitHub', 'Flutter', 'Vite'], note: 'From idea to delivery' },
]

export default function Skills() {
  return <section id="skills" className="section section-bordered shell">
    <SectionHeading number="02" label="CAPABILITIES & RUNTIMES" title="The stack behind the solutions."><p>A practical toolkit.<br />An always-learning mindset.</p></SectionHeading>
    <div className="stack-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {categories.map(({ title, subtitle, icon: Icon, skills, note }, index) => <article className="stack-card" key={title}><div className="stack-top"><Icon size={23} strokeWidth={1.5} /><span>0{index + 1}</span></div><h3>{title}</h3><p className="stack-subtitle">{subtitle}</p><div className="stack-list">{skills.map(skill => <span key={skill}>{skillIcons[skill] ? <img className="stack-skill-icon" src={skillIcons[skill]} alt="" width={20} height={20} loading="lazy" /> : <Github className="stack-skill-icon" size={20} aria-hidden="true" />}{skill}{skill === 'React' && <span className="skill-tag">CORE</span>}</span>)}</div><div className="stack-note"><span>↳</span> {note}</div></article>)}
    </div>
  </section>
}
