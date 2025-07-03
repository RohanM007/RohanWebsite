import { useState, useEffect } from 'react'
import MatrixLoader from './components/MatrixLoader'
import MouseTrail from './components/MouseTrail'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000) // Show matrix loader for 3 seconds

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <MatrixLoader />
  }

  return (
    <div className="App">
      <MouseTrail />
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
