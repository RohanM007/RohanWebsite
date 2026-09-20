import { ArrowDown, ArrowUpRight, Github, TerminalSquare } from 'lucide-react'
import Terminal from './Terminal'

export default function Hero() {
  return <section id="hero" className="hero-section shell">
    <div className="hero-grid">
      <div className="hero-copy">
        <div className="eyebrow hero-status"><span className="status-dot" /> SYSTEM ONLINE <span className="muted">/</span> FULL-STACK DEVELOPER</div>
        <h1>Curiosity to code.<br />Ideas to <span>reality.</span></h1>
        <p className="hero-intro">Hi, I’m <strong>Rohan Maharaj.</strong> I build thoughtful web and mobile experiences, turning a relentless curiosity for technology into software that makes a difference.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore projects <ArrowUpRight size={17} /></a>
          <a className="button" href="#terminal"><TerminalSquare size={16} /> Open terminal</a>
        </div>
        <div className="hero-meta"><a href="https://github.com/RohanM007" target="_blank" rel="noreferrer"><Github size={15} /> rohanm007 <ArrowUpRight size={12} /></a><span className="meta-line" /><span>Developer. Educator. Always learning.</span></div>
      </div>
      <div className="hero-terminal-wrap"><div className="terminal-overline"><span>PROFILE.EXE</span><span>01 / INTRODUCTION</span></div><Terminal preview /><div className="terminal-under"><span className="status-dot" /> HUMAN BEHIND THE CODE <span>100% CURIOSITY</span></div></div>
    </div>
    <div className="hero-bottom">
      <div><span className="metric-value">Cum laude<span> ↗</span></span><span className="metric-label">APPLICATION DEVELOPMENT GRADUATE</span></div>
      <div><span className="metric-value">Web + Mobile</span><span className="metric-label">END-TO-END DEVELOPMENT</span></div>
      <div><span className="metric-value">Code + Teach</span><span className="metric-label">BUILDING & SHARING KNOWLEDGE</span></div>
      <a href="#about" className="scroll-cue" aria-label="Scroll to about"><ArrowDown size={18} /></a>
    </div>
  </section>
}
