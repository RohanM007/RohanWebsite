import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { INTRO_DURATION, INTRO_FADE_DURATION, shouldAnimateIntro } from '../lib/intro'
import './MatrixLoader.css'

const characters = '01アイウエオカキクケコサシスセソタチツテト'

export default function MatrixLoader({ onComplete }: { onComplete: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const skipRef = useRef<HTMLButtonElement>(null)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    let fadeTimer: number | undefined
    let timer: number | undefined
    let paintedFrame = 0
    // Start the five seconds after the splash has had a chance to paint.
    const firstFrame = requestAnimationFrame(() => {
      paintedFrame = requestAnimationFrame(() => {
        fadeTimer = window.setTimeout(() => setLeaving(true), INTRO_DURATION - INTRO_FADE_DURATION)
        timer = window.setTimeout(onComplete, INTRO_DURATION)
      })
    })
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    skipRef.current?.focus({ preventScroll: true })
    const skip = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onComplete()
      if (event.key === 'Tab') {
        event.preventDefault()
        skipRef.current?.focus({ preventScroll: true })
      }
    }
    window.addEventListener('keydown', skip)
    return () => {
      cancelAnimationFrame(firstFrame)
      cancelAnimationFrame(paintedFrame)
      window.clearTimeout(fadeTimer)
      window.clearTimeout(timer)
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', skip)
    }
  }, [onComplete])

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return

    let frame = 0
    let previousTime = 0
    let width = 0
    let height = 0
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let animate = shouldAnimateIntro()
    let streams: { x: number; y: number; speed: number; alpha: number }[] = []
    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = Math.round(width * ratio)
      canvas.height = Math.round(height * ratio)
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      streams = Array.from({ length: Math.ceil(width / 22) }, (_, index) => ({
        x: index * 22,
        y: Math.random() * height,
        speed: 80 + Math.random() * 140,
        alpha: 0.35 + Math.random() * 0.5,
      }))
    }
    const draw = (time: number) => {
      if (animate) frame = requestAnimationFrame(draw)
      if (animate && time - previousTime < 33) return
      const delta = previousTime ? Math.min((time - previousTime) / 1000, 0.1) : 0
      previousTime = time
      context.clearRect(0, 0, width, height)
      context.font = '13px monospace'
      for (const stream of streams) {
        stream.y = (stream.y + stream.speed * delta) % (height + 160)
        for (let tail = 0; tail < 16; tail++) {
          context.fillStyle = `rgba(0, 255, 102, ${stream.alpha * (1 - tail / 16)})`
          const index = (Math.floor(time / 160) + Math.floor(stream.x) + tail) % characters.length
          context.fillText(characters[index], stream.x, stream.y - tail * 19)
        }
      }
    }
    const redraw = () => {
      cancelAnimationFrame(frame)
      previousTime = 0
      draw(performance.now())
    }
    const handleResize = () => { resize(); redraw() }
    const motionChanged = () => {
      animate = !motion.matches
      redraw()
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    motion.addEventListener('change', motionChanged)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', handleResize)
      motion.removeEventListener('change', motionChanged)
    }
  }, [])

  return (
    <div className={`matrix-loader${leaving ? ' matrix-loader--leaving' : ''}`} style={{ '--intro-fade': `${INTRO_FADE_DURATION}ms`, '--intro-progress': `${INTRO_DURATION - INTRO_FADE_DURATION}ms` } as CSSProperties} role="dialog" aria-modal="true" aria-label="Welcome to Rohan's portfolio">
      <canvas ref={canvasRef} className="matrix-canvas" aria-hidden="true" />
      <div className="matrix-vignette" aria-hidden="true" />
      <div className="matrix-signature">
        <p className="matrix-prelude">A LITTLE CURIOSITY. INFINITE POSSIBILITIES.</p>
        <div className="matrix-wordmark" aria-label="Rohan dot dev">
          <span>[</span><strong>ROHAN<span className="matrix-domain">.DEV</span></strong><span>]</span>
          <i aria-hidden="true" />
        </div>
        <div className="matrix-signal" aria-hidden="true"><span /></div>
        <div className="matrix-status" aria-hidden="true">
          <span className="matrix-connecting">ESTABLISHING CONNECTION</span>
          <span className="matrix-granted"><i /> ACCESS GRANTED</span>
        </div>
      </div>
      <div className="matrix-bottom">
        <span>ROHAN MAHARAJ / DIGITAL PORTFOLIO</span>
        <button ref={skipRef} type="button" onClick={onComplete}>Skip intro <span aria-hidden="true">↗</span><kbd>ESC</kbd></button>
      </div>
    </div>
  )
}
