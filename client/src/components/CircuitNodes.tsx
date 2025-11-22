import React from 'react'

export function CircuitNodes() {
  const nodes = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    duration: 6 + Math.random() * 2,
    delay: i * 2.5,
    startX: Math.random() * 100,
    startY: Math.random() * 100,
    endX: Math.random() * 100,
    endY: Math.random() * 100,
  }))

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {nodes.map((node) => (
        <div
          key={node.id}
          className="electric-star"
          style={{
            left: `${node.startX}%`,
            top: `${node.startY}%`,
            '--end-x': `${(node.endX - node.startX) * window.innerWidth / 100}px`,
            '--end-y': `${(node.endY - node.startY) * window.innerHeight / 100}px`,
            '--duration': `${node.duration}s`,
            '--delay': `${node.delay}s`,
          } as React.CSSProperties & { [key: string]: string }}
        />
      ))}
    </div>
  )
}
