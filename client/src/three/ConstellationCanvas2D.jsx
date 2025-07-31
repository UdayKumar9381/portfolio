import React, { useEffect, useRef } from 'react'

const ConstellationCanvas2D = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
  const canvas = canvasRef.current
  const ctx = canvas.getContext('2d')
  const points = []
  const count = 100
  const maxDist = 120

  let mouse = { x: null, y: null }

  function init() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    points.length = 0
    for (let i = 0; i < count; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2
      })
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    points.forEach(p => {
      // Float away from mouse if nearby
      const dx = p.x - mouse.x
      const dy = p.y - mouse.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 80) {
        p.x += dx / dist * 0.2
        p.y += dy / dist * 0.2
      }

      p.x += p.vx
      p.y += p.vy

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1
    })

    // Draw connections
    points.forEach((p, idx) => {
      for (let j = idx + 1; j < points.length; j++) {
        const p2 = points[j]
        const dx = p.x - p2.x
        const dy = p.y - p2.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < maxDist) {
          const alpha = 1 - dist / maxDist
          ctx.strokeStyle = `rgba(0,255,255,${alpha * 0.5})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.stroke()
        }
      }
    })

    points.forEach(p => {
      ctx.fillStyle = 'rgba(0,255,255,0.8)'
      ctx.beginPath()
      ctx.arc(p.x, p.y, 3, 0, Math.PI * 2)
      ctx.fill()
    })

    requestAnimationFrame(animate)
  }

  init()
  animate()

  canvas.addEventListener('mousemove', e => {
    mouse.x = e.clientX
    mouse.y = e.clientY
  })

  window.addEventListener('resize', init)
  return () => {
    window.removeEventListener('resize', init)
  }
}, [])


  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  )
}

export default ConstellationCanvas2D