import React from 'react'

export function CircuitNodes() {
  const generateShootingStars = () => {
    return Array.from({ length: 15 }, (_, i) => {
      const angle = (Math.random() * 360) * (Math.PI / 180)
      const distance = Math.max(window.innerWidth, window.innerHeight) * 1.5
      const vx = Math.cos(angle) * distance
      const vy = Math.sin(angle) * distance
      
      return {
        id: i,
        startX: Math.random() * window.innerWidth,
        startY: Math.random() * window.innerHeight,
        endX: Math.random() * window.innerWidth,
        endY: Math.random() * window.innerHeight,
        duration: 2 + Math.random() * 1.5,
        delay: Math.random() * 3,
      }
    })
  }

  const stars = generateShootingStars()

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="electric-star"
          style={{
            left: `${star.startX}px`,
            top: `${star.startY}px`,
            '--end-x': `${star.endX - star.startX}px`,
            '--end-y': `${star.endY - star.startY}px`,
            '--duration': `${star.duration}s`,
            '--delay': `${star.delay}s`,
          } as React.CSSProperties & { [key: string]: string }}
        />
      ))}
    </div>
  )
}
