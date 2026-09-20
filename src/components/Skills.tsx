import { Braces, PanelsTopLeft, Database, Wrench } from 'lucide-react'
import SectionHeading from './SectionHeading'

const categories = [
  { title: 'Languages', subtitle: 'THE BUILDING BLOCKS', icon: Braces, skills: ['C#', 'Java', 'Kotlin', 'JavaScript', 'TypeScript', 'Dart'], note: 'Exploring Dart & Flutter' },
  { title: 'Web & interfaces', subtitle: 'THE USER EXPERIENCE', icon: PanelsTopLeft, skills: ['React', 'HTML5', 'CSS3', 'Node.js', 'REST APIs'], note: 'Responsive by design' },
  { title: 'Cloud & backend', subtitle: 'BEHIND THE SCENES', icon: Database, skills: ['Firebase', 'Google Cloud', 'Cloud Functions', 'Azure'], note: 'Connected applications' },
  { title: 'Tools & workflow', subtitle: 'THE DEVELOPER TOOLKIT', icon: Wrench, skills: ['Visual Studio', 'Android Studio', 'Git', 'GitHub', 'Flutter', 'Vite'], note: 'From idea to delivery' },
]

export default function Skills() {
  return <section id="skills" className="section section-bordered shell">
    <SectionHeading number="02" label="CAPABILITIES & RUNTIMES" title="The stack behind the solutions."><p>A practical toolkit.<br />An always-learning mindset.</p></SectionHeading>
    <div className="stack-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {categories.map(({ title, subtitle, icon: Icon, skills, note }, index) => <article className="stack-card" key={title}><div className="stack-top"><Icon size={23} strokeWidth={1.5} /><span>0{index + 1}</span></div><h3>{title}</h3><p className="stack-subtitle">{subtitle}</p><div className="stack-list">{skills.map(skill => <span key={skill}><i />{skill}{skill === 'React' && <span className="skill-tag">CORE</span>}</span>)}</div><div className="stack-note"><span>↳</span> {note}</div></article>)}
    </div>
  </section>
}
