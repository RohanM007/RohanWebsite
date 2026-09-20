import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const links = [['about', 'About'], ['skills', 'Stack'], ['projects', 'Projects'], ['experience', 'Experience'], ['terminal', 'Terminal'], ['contact', 'Contact']]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id) })
    }, { rootMargin: '-15% 0px -60% 0px' })
    document.querySelectorAll('main section[id]').forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])
  return <header className="site-header">
    <div className="shell header-inner">
      <a href="#hero" className="brand" aria-label="Rohan, home" onClick={() => setOpen(false)}>[<span>ROHAN.DEV</span>]<i className="brand-cursor" /></a>
      <nav id="main-navigation" className={open ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
        {links.map(([id, label]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
      <a className="button button-small resume-link" href="mailto:rohanmaharaj708@gmail.com?subject=Resume%20request">Request résumé <ArrowUpRight size={14} /></a>
      <button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
  </header>
}
