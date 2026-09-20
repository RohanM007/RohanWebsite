import { useEffect, useRef } from 'react'
import './MatrixLoader.css'

const characters = '01アイウエオカキクケコサシスセソタチツテト'
const INTRO_DURATION = 1200

export default function MatrixLoader({ onComplete }: { onComplete: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const timer = window.setTimeout(onComplete, INTRO_DURATION)
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const skip = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onComplete()
    }
    const motionChanged = () => { if (motion.matches) onComplete() }
    window.addEventListener('keydown', skip)
    motion.addEventListener('change', motionChanged)
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('keydown', skip)
      motion.removeEventListener('change', motionChanged)
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
    let streams: { x: number; y: number; speed: number; alpha: number }[] = []
    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = Math.round(width * ratio)
      canvas.height = Math.round(height * ratio)
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      streams = Array.from({ length: Math.ceil(width / 30) }, (_, index) => ({
        x: index * 30,
        y: Math.random() * height,
        speed: 35 + Math.random() * 75,
        alpha: 0.08 + Math.random() * 0.22,
      }))
    }
    resize()
    const draw = (time: number) => {
      frame = requestAnimationFrame(draw)
      if (time - previousTime < 33) return
      const delta = previousTime ? Math.min((time - previousTime) / 1000, 0.1) : 0
      previousTime = time
      context.clearRect(0, 0, width, height)
      context.font = '13px monospace'
      for (const stream of streams) {
        stream.y = (stream.y + stream.speed * delta) % (height + 160)
        for (let tail = 0; tail < 9; tail++) {
          context.fillStyle = `rgba(0, 255, 102, ${stream.alpha * (1 - tail / 9)})`
          const index = (Math.floor(time / 160) + Math.floor(stream.x) + tail) % characters.length
          context.fillText(characters[index], stream.x, stream.y - tail * 19)
        }
      }
    }
    frame = requestAnimationFrame(draw)
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className="matrix-loader" role="dialog" aria-modal="true" aria-label="Welcome to Rohan's portfolio">
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
        <button type="button" onClick={onComplete}>Skip intro <span aria-hidden="true">↗</span><kbd>ESC</kbd></button>
      </div>
    </div>
  )
}
