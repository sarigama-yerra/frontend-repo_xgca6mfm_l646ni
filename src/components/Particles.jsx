import { useEffect, useRef } from 'react'

// Very lightweight particle embers with requestAnimationFrame
export default function Particles({ color = 'rgba(212,175,55,0.8)', max = 24, speed = 0.15, size = [1, 3] }) {
  const canvasRef = useRef(null)
  const particles = useRef([])
  const raf = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const resize = () => {
      canvas.width = canvas.clientWidth * dpr
      canvas.height = canvas.clientHeight * dpr
    }
    resize()

    const spawn = () => {
      const w = canvas.width, h = canvas.height
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * (size[1] - size[0]) + size[0],
        v: Math.random() * speed + speed * 0.2,
        a: Math.random() * Math.PI * 2,
        o: Math.random() * 0.5 + 0.2,
      }
    }

    particles.current = new Array(max).fill(0).map(spawn)

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const p of particles.current) {
        p.y -= p.v * dpr
        p.x += Math.sin(p.a) * 0.2 * dpr
        p.o -= 0.0015
        if (p.y < -10 || p.o <= 0) {
          Object.assign(p, spawn(), { y: canvas.height + 10 })
        }
        ctx.beginPath()
        ctx.globalAlpha = Math.max(p.o, 0)
        ctx.fillStyle = color
        ctx.arc(p.x, p.y, p.r * dpr, 0, Math.PI * 2)
        ctx.fill()
      }
      raf.current = requestAnimationFrame(loop)
    }

    raf.current = requestAnimationFrame(loop)
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(raf.current); window.removeEventListener('resize', resize) }
  }, [color, max, speed, size])

  return <canvas ref={canvasRef} className="particle-canvas" />
}
