import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Github, Mail, Send } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Terminal from './Terminal'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [copyMessage, setCopyMessage] = useState('')
  const [draftOpened, setDraftOpened] = useState(false)
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText('rohanmaharaj708@gmail.com'); setCopied(true); setCopyMessage('Email address copied.') }
    catch { setCopyMessage('Could not copy. Select the email address or use the email link.') }
  }
  return <section id="contact" className="section contact-section shell">
    <SectionHeading number="05" label="LET’S MAKE A CONNECTION" title="Your next idea starts with hello."><p>Have a project in mind, or just want to connect?<br />My inbox is a good place to start.</p></SectionHeading>
    <div className="contact-grid">
      <section id="terminal" className="contact-terminal" aria-label="Interactive terminal"><div className="terminal-overline"><span>DIRECT INTERFACE</span><span>⌘ / CLI</span></div><Terminal /></section>
      <div className="contact-card"><div className="eyebrow"><span className="status-dot" /> DIRECT TRANSMISSION</div><h3>Let’s build something<br /><span>worth putting into the world.</span></h3><p>Projects, collaborations, or a conversation about technology. I’d love to hear from you.</p>
        <div className="contact-address"><Mail size={19} /><div><span>EMAIL ADDRESS</span><a href="mailto:rohanmaharaj708@gmail.com">rohanmaharaj708@gmail.com</a></div><button aria-label="Copy email address" onClick={copyEmail}>{copied ? <Check size={17} /> : <Copy size={17} />}</button></div>
        <a className="contact-address github-address" href="https://github.com/RohanM007" target="_blank" rel="noreferrer"><Github size={19} /><div><span>GITHUB</span><strong>github.com/rohanm007</strong></div><ArrowUpRight size={18} /></a>
        <p className="copy-status" role="status">{copyMessage}</p>
        <details className="message-details"><summary>Prefer to write a message? <Send size={14} /></summary><form onSubmit={event => {
          event.preventDefault()
          const data = new FormData(event.currentTarget)
          const body = `Hi Rohan,\n\n${data.get('message')}\n\nFrom: ${data.get('name')}\nEmail: ${data.get('email')}`
          window.location.href = 'mailto:rohanmaharaj708@gmail.com?subject=' + encodeURIComponent(String(data.get('subject'))) + '&body=' + encodeURIComponent(body)
          setDraftOpened(true)
        }}><div className="form-row"><label>Your name<input required name="name" autoComplete="name" maxLength={100} /></label><label>Your email<input required name="email" type="email" autoComplete="email" maxLength={200} /></label></div><label>Subject<input required name="subject" maxLength={150} /></label><label>Your message<textarea required name="message" rows={4} maxLength={2000} /></label><button className="button button-primary" type="submit">Open email draft <ArrowUpRight size={15} /></button><p className="form-note" role="status">{draftOpened ? 'Your email app has been requested. Send the draft there to complete your message.' : 'Opens your email app so you can review and send.'}</p></form></details>
      </div>
    </div>
    <div className="closing-line"><span className="status-dot" /><span>END OF PAGE. START OF A CONVERSATION.</span><a href="#hero">Back to top ↑</a></div>
  </section>
}
