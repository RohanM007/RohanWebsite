import { ArrowUpRight } from 'lucide-react'
import portrait from '../assets/me.jpg'
import SectionHeading from './SectionHeading'

export default function About() {
  return <section id="about" className="section shell">
    <SectionHeading number="01" label="THE PERSON BEHIND THE PROMPT" title="A little curiosity changes everything." />
    <div className="about-layout">
      <div className="portrait-card"><img src={portrait} alt="Rohan Maharaj" loading="lazy" /><div className="portrait-caption"><span className="status-dot" /> ROHAN MAHARAJ <ArrowUpRight size={16} /></div></div>
      <div className="about-copy"><p className="large-copy">It started with a forex bot.<br />It became a passion for building.</p><p>After a gap year in 2019, a moment watching someone code a forex bot in 2020 sparked my curiosity. That curiosity took me to Varsity College, from a Higher Certificate to a Bachelor of Computer and Information Sciences in Application Development.</p><p>I graduated cum laude in 2024. Today, I bring ideas to life through web and mobile development, and share that same spark with students as a lecturer at Varsity College PMB.</p><div className="values-row"><span>01 <strong>Stay curious</strong></span><span>02 <strong>Build with purpose</strong></span><span>03 <strong>See it through</strong></span></div></div>
    </div>
  </section>
}
