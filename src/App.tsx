import { useCallback, useState } from 'react'
import MatrixLoader from './components/MatrixLoader'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import './App.css'

export default function App() {
  const [loading, setLoading] = useState(true)
  const finishIntro = useCallback(() => {
    setLoading(false)
    requestAnimationFrame(() => document.getElementById('main')?.focus({ preventScroll: true }))
  }, [])
  return <>
    {loading && <MatrixLoader onComplete={finishIntro} />}
    <div inert={loading}>
    <a className="skip-link" href="#main">Skip to content</a>
    <Header />
    <main id="main" tabIndex={-1}><Hero /><About /><Skills /><Projects /><Experience /><Contact /></main>
    <footer className="site-footer shell">
      <a className="brand" href="#hero">[<span>ROHAN.DEV</span>]</a>
      <p>© {new Date().getFullYear()} Rohan Maharaj <span className="footer-divider">/</span> Built with curiosity. Engineered with care.</p>
      <a href="https://github.com/RohanM007" target="_blank" rel="noreferrer">GitHub ↗</a>
      <a href="mailto:rohanmaharaj708@gmail.com">Email ↗</a>
    </footer>
    </div>
  </>
}
