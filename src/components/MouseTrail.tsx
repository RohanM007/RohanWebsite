import { useEffect, useRef } from 'react'
import './MouseTrail.css'

interface TrailPoint {
  x: number
  y: number
  life: number
  maxLife: number
}

const MouseTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const trailRef = useRef<TrailPoint[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
      
      // Add new trail point
      trailRef.current.push({
        x: e.clientX,
        y: e.clientY,
        life: 0,
        maxLife: 30
      })

      // Limit trail length
      if (trailRef.current.length > 20) {
        trailRef.current.shift()
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw trail
      trailRef.current.forEach((point, index) => {
        point.life++
        
        const opacity = 1 - (point.life / point.maxLife)
        const size = 3 * opacity

        if (opacity > 0) {
          ctx.beginPath()
          ctx.arc(point.x, point.y, size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(0, 255, 0, ${opacity * 0.6})`
          ctx.fill()

          // Draw connecting lines
          if (index > 0) {
            const prevPoint = trailRef.current[index - 1]
            ctx.beginPath()
            ctx.moveTo(prevPoint.x, prevPoint.y)
            ctx.lineTo(point.x, point.y)
            ctx.strokeStyle = `rgba(0, 255, 0, ${opacity * 0.3})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      })

      // Remove dead points
      trailRef.current = trailRef.current.filter(point => point.life < point.maxLife)

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="mouse-trail"
    />
  )
}

export default MouseTrail
