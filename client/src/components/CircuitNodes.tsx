import React from 'react'

export function CircuitNodes() {
  const nodes = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    duration: 4 + Math.random() * 6,
    delay: Math.random() * 2,
    startX: Math.random() * 100,
    startY: Math.random() * 100,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {nodes.map((node) => (
        <div
          key={node.id}
          className="circuit-node"
          style={{
            '--duration': `${node.duration}s`,
            '--delay': `${node.delay}s`,
            '--start-x': `${node.startX}%`,
            '--start-y': `${node.startY}%`,
          } as React.CSSProperties & { [key: string]: string }}
        />
      ))}
    </div>
  )
}
