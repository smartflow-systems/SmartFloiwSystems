import React, { useState, useEffect } from 'react'

export function RobotWorkers() {
  const [robots, setRobots] = useState<Array<{
    id: number
    x: number
    y: number
    action: 'pointing' | 'reading' | 'celebrating'
    vx: number
    vy: number
    rotationX: number
    rotationY: number
    rotationZ: number
  }>>([])

  useEffect(() => {
    setRobots(
      Array.from({ length: 5 }, (_, i) => ({
        id: i,
        x: Math.random() * (window.innerWidth - 100),
        y: Math.random() * (window.innerHeight - 120) + 120,
        action: ['pointing', 'reading', 'celebrating'][Math.floor(Math.random() * 3)] as 'pointing' | 'reading' | 'celebrating',
        vx: (Math.random() - 0.5) * 2.5,
        vy: (Math.random() - 0.5) * 2.5,
        rotationX: -25 - Math.random() * 25,
        rotationY: -35 + Math.random() * 70,
        rotationZ: -12 + Math.random() * 24,
      }))
    )
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setRobots((prev) =>
        prev.map((robot) => {
          let newX = robot.x + robot.vx
          let newY = robot.y + robot.vy
          let vx = robot.vx
          let vy = robot.vy

          if (newX < 0 || newX > window.innerWidth - 100) {
            vx = -vx
            newX = Math.max(0, Math.min(newX, window.innerWidth - 100))
          }
          if (newY < 140 || newY > window.innerHeight - 120) {
            vy = -vy
            newY = Math.max(140, Math.min(newY, window.innerHeight - 120))
          }

          const action =
            Math.random() > 0.93
              ? (['pointing', 'reading', 'celebrating'][Math.floor(Math.random() * 3)] as 'pointing' | 'reading' | 'celebrating')
              : robot.action

          return {
            ...robot,
            x: newX,
            y: newY,
            vx,
            vy,
            action,
            rotationX: robot.rotationX + (vy * 0.8),
            rotationY: robot.rotationY + (vx * 2.2),
            rotationZ: robot.rotationZ + (Math.random() - 0.5) * 3,
          }
        })
      )
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-5" style={{ perspective: '1600px' }}>
      {robots.map((robot) => (
        <div
          key={robot.id}
          className="cartoon-robot"
          style={{
            left: `${robot.x}px`,
            top: `${robot.y}px`,
            transform: `perspective(1600px) rotateX(${robot.rotationX}deg) rotateY(${robot.rotationY}deg) rotateZ(${robot.rotationZ}deg)`,
          }}
        >
          {/* Big Cartoony Head */}
          <div className="cartoon-head">
            <div className="big-smile" />
            <div className="eye-left-cartoon" />
            <div className="eye-right-cartoon" />
          </div>

          {/* Round Body */}
          <div className={`cartoon-body robot-${robot.action}`}>
            <div className="belly-panel" />
          </div>

          {/* Left arm */}
          <div className={`cartoon-arm left ${robot.action === 'celebrating' ? 'raised' : robot.action === 'pointing' ? 'extended' : 'neutral'}`}>
            <div className="arm-joint" />
            <div className="cartoon-hand" />
          </div>

          {/* Right arm */}
          <div className={`cartoon-arm right ${robot.action === 'celebrating' ? 'raised' : 'neutral'}`}>
            <div className="arm-joint" />
            <div className="cartoon-hand" />
          </div>

          {/* Legs */}
          <div className="cartoon-legs">
            <div className="leg-left">
              <div className="foot-cartoon" />
            </div>
            <div className="leg-right">
              <div className="foot-cartoon" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
