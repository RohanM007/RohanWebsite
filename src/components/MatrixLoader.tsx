import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import './MatrixLoader.css'

interface MatrixColumn {
  chars: string[]
  speed: number
  opacity: number[]
  y: number
}

const MatrixLoader = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [showWelcome, setShowWelcome] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [loadingText, setLoadingText] = useState('INITIALIZING...')

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,.<>?アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = []

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
    }

    let animationId: number

    const draw = () => {
      // Create trailing effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#00ff00'
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = characters[Math.floor(Math.random() * characters.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        // Create gradient effect
        const gradient = ctx.createLinearGradient(x, y - fontSize * 10, x, y)
        gradient.addColorStop(0, 'rgba(0, 255, 0, 0)')
        gradient.addColorStop(0.5, 'rgba(0, 255, 0, 0.5)')
        gradient.addColorStop(1, 'rgba(0, 255, 0, 1)')

        ctx.fillStyle = gradient
        ctx.fillText(char, x, y)

        // Reset drop when it goes off screen
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()

    // Loading sequence
    const loadingSteps = [
      { text: 'INITIALIZING...', progress: 0 },
      { text: 'LOADING NEURAL NETWORKS...', progress: 20 },
      { text: 'COMPILING PORTFOLIO DATA...', progress: 40 },
      { text: 'ESTABLISHING CONNECTION...', progress: 60 },
      { text: 'SYNCHRONIZING MATRIX...', progress: 80 },
      { text: 'WELCOME TO THE MATRIX...', progress: 100 }
    ]

    let stepIndex = 0
    const loadingInterval = setInterval(() => {
      if (stepIndex < loadingSteps.length) {
        setLoadingText(loadingSteps[stepIndex].text)
        setLoadingProgress(loadingSteps[stepIndex].progress)
        stepIndex++
      } else {
        clearInterval(loadingInterval)
        setTimeout(() => setShowWelcome(true), 500)
      }
    }, 400)

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId)
      clearInterval(loadingInterval)
    }
  }, [])

  return (
    <div className="matrix-loader">
      <canvas
        ref={canvasRef}
        className="matrix-canvas"
      />

      <div className="matrix-overlay">
        {!showWelcome ? (
          <motion.div
            className="loading-interface"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="loading-header"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="matrix-logo">
                <span className="bracket">[</span>
                <span className="logo-text">ROHAN.MATRIX</span>
                <span className="bracket">]</span>
              </div>
            </motion.div>

            <motion.div
              className="loading-content"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="loading-text">{loadingText}</div>

              <div className="progress-container">
                <div className="progress-bar">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${loadingProgress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="progress-percentage">{loadingProgress}%</div>
              </div>

              <div className="loading-dots">
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                >
                  ●
                </motion.span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                >
                  ●
                </motion.span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                >
                  ●
                </motion.span>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            className="welcome-interface"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              className="welcome-text"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1>WELCOME TO THE MATRIX</h1>
              <p>Entering Rohan's Digital Realm...</p>
            </motion.div>

            <motion.div
              className="matrix-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              {[...Array(9)].map((_, i) => (
                <motion.div
                  key={i}
                  className="grid-cell"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.3 }}
                />
              ))}
            </motion.div>

            <motion.div
              className="access-granted"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              ACCESS GRANTED
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default MatrixLoader
