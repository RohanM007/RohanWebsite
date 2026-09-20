import { Briefcase, GraduationCap } from 'lucide-react'
import SectionHeading from './SectionHeading'

const milestones = [
  { date: 'AUG 2025 — CURRENT', title: 'Lecturer', company: 'Varsity College PMB', text: 'Teaching Principles of UX/UI and Web Development to Higher Certificate students. Guiding hands-on exercises in HTML, CSS, and JavaScript, and helping students build their problem-solving and design skills.', tags: ['UX/UI', 'HTML', 'CSS', 'JavaScript'], work: true },
  { date: 'JAN — JUL 2025', title: 'Full-Stack Developer', company: 'Drakewoods', text: 'Delivered a complete website and native Android application over seven months. Built a responsive React frontend, a Kotlin mobile app, and backend services with Google Cloud Functions.', tags: ['React', 'Kotlin', 'Google Cloud Functions'], work: true },
  { date: '2022 — 2024', title: 'Bachelor of Computer and Information Sciences', company: 'Varsity College · Application Development', text: 'Graduated cum laude, with a focus on software development. Developed applications with C#, Kotlin, and Firebase, and explored Azure Cloud Functions.', tags: ['Cum laude', 'C#', 'Kotlin', 'Firebase', 'Azure'], work: false },
  { date: '2021 — 2022', title: 'Higher Certificate in Information Technology', company: 'Varsity College', text: 'Built a foundation in Java, object-oriented programming, and software development principles using NetBeans.', tags: ['Java', 'NetBeans', 'Object-oriented programming'], work: false },
]

export default function Experience() {
  return <section id="experience" className="section section-bordered shell"><SectionHeading number="04" label="THE TRACK RECORD" title="Always building. Always growing."><p>From the classroom to client projects.<br />And back to the classroom, teaching.</p></SectionHeading><div className="timeline">{milestones.map((item, index) => <article className="timeline-item" key={item.title}><div className="timeline-date"><span>{item.date}</span>{index === 0 && <span className="current-label"><span className="status-dot" /> CURRENT ROLE</span>}</div><div className={`timeline-node ${index === 0 ? 'current' : ''}`}>{item.work ? <Briefcase size={16} /> : <GraduationCap size={18} />}</div><div className="timeline-content"><h3>{item.title}</h3><p className="timeline-company">{item.company}</p><p>{item.text}</p><div className="tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}</div></section>
}
