import React, { useState, useEffect } from 'react'

export function RobotWorkers() {
  const [robots, setRobots] = useState<Array<{
    id: number
    x: number
    y: number
    action: 'pointing' | 'reading' | 'celebrating'
    vx: number
    vy: number
  }>>([])

  useEffect(() => {
    // Initialize robots with random positions
    setRobots(
      Array.from({ length: 5 }, (_, i) => ({
        id: i,
        x: Math.random() * (window.innerWidth - 50),
        y: Math.random() * (window.innerHeight - 50),
        action: ['pointing', 'reading', 'celebrating'][Math.floor(Math.random() * 3)] as 'pointing' | 'reading' | 'celebrating',
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
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

          // Bounce off walls
          if (newX < 0 || newX > window.innerWidth - 50) {
            vx = -vx
            newX = Math.max(0, Math.min(newX, window.innerWidth - 50))
          }
          if (newY < 100 || newY > window.innerHeight - 50) {
            vy = -vy
            newY = Math.max(100, Math.min(newY, window.innerHeight - 50))
          }

          // Random action changes
          const action =
            Math.random() > 0.95
              ? (['pointing', 'reading', 'celebrating'][Math.floor(Math.random() * 3)] as 'pointing' | 'reading' | 'celebrating')
              : robot.action

          return { ...robot, x: newX, y: newY, vx, vy, action }
        })
      )
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-5">
      {robots.map((robot) => (
        <div
          key={robot.id}
          className={`robot-worker robot-${robot.action}`}
          style={{
            left: `${robot.x}px`,
            top: `${robot.y}px`,
          }}
        >
          {/* Head */}
          <div className="robot-head">
            <div className="robot-eyes">
              <div className="robot-eye left" />
              <div className="robot-eye right" />
            </div>
            {robot.action === 'celebrating' && <div className="robot-mouth excited" />}
            {robot.action === 'pointing' && <div className="robot-mouth neutral" />}
            {robot.action === 'reading' && <div className="robot-mouth focused" />}
          </div>

          {/* Torso */}
          <div className="robot-torso">
            <div className="robot-panel" />
          </div>

          {/* Arms */}
          <div className="robot-arms">
            {robot.action === 'pointing' && (
              <>
                <div className="robot-arm left pointing-arm" />
                <div className="robot-arm right" />
              </>
            )}
            {robot.action === 'reading' && (
              <>
                <div className="robot-arm left" />
                <div className="robot-arm right" />
              </>
            )}
            {robot.action === 'celebrating' && (
              <>
                <div className="robot-arm left celebrating-arm" />
                <div className="robot-arm right celebrating-arm" />
              </>
            )}
          </div>

          {/* Legs */}
          <div className="robot-legs">
            <div className="robot-leg left" />
            <div className="robot-leg right" />
          </div>
        </div>
      ))}
    </div>
  )
}
