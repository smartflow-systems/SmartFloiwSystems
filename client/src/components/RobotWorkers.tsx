import React, { useState, useEffect } from 'react'

export function RobotWorkers() {
  const [robots, setRobots] = useState<Array<{
    id: number
    x: number
    y: number
    action: 'pointing' | 'reading' | 'celebrating'
    vx: number
    vy: number
    rotation: number
  }>>([])

  useEffect(() => {
    setRobots(
      Array.from({ length: 5 }, (_, i) => ({
        id: i,
        x: Math.random() * (window.innerWidth - 80),
        y: Math.random() * (window.innerHeight - 100) + 100,
        action: ['pointing', 'reading', 'celebrating'][Math.floor(Math.random() * 3)] as 'pointing' | 'reading' | 'celebrating',
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        rotation: Math.random() * 360,
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

          if (newX < 0 || newX > window.innerWidth - 80) {
            vx = -vx
            newX = Math.max(0, Math.min(newX, window.innerWidth - 80))
          }
          if (newY < 120 || newY > window.innerHeight - 100) {
            vy = -vy
            newY = Math.max(120, Math.min(newY, window.innerHeight - 100))
          }

          const action =
            Math.random() > 0.95
              ? (['pointing', 'reading', 'celebrating'][Math.floor(Math.random() * 3)] as 'pointing' | 'reading' | 'celebrating')
              : robot.action

          return {
            ...robot,
            x: newX,
            y: newY,
            vx,
            vy,
            action,
            rotation: robot.rotation + (vx * 2),
          }
        })
      )
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-5" style={{ perspective: '1200px' }}>
      {robots.map((robot) => (
        <div
          key={robot.id}
          className="robot-character"
          style={{
            left: `${robot.x}px`,
            top: `${robot.y}px`,
            transform: `perspective(1200px) rotateY(${robot.rotation * 0.5}deg) rotateZ(${robot.action === 'celebrating' ? Math.sin(Date.now() / 200) * 10 : 0}deg)`,
          }}
        >
          {/* Main body container */}
          <div className={`robot-body 3d robot-${robot.action}`}>
            {/* Head with visor */}
            <div className="robot-head-3d">
              <div className="head-main">
                <div className="head-visor-outer">
                  <div className="head-visor-inner">
                    <div className="eye eye-left" />
                    <div className="eye eye-right" />
                  </div>
                </div>
              </div>
              <div className="head-chin" />
            </div>

            {/* Neck connector */}
            <div className="neck-connector" />

            {/* Torso */}
            <div className="torso-main">
              <div className="torso-front">
                <div className="panel-light" />
                <div className="panel-dark" />
                <div className="panel-light" />
              </div>
              <div className="torso-left-side" />
              <div className="torso-right-side" />
            </div>

            {/* Shoulders and arms */}
            <div className="shoulders">
              <div className="shoulder-left">
                <div className={`arm-upper left ${robot.action === 'celebrating' ? 'raised' : robot.action === 'pointing' ? 'extended' : 'neutral'}`}>
                  <div className={`arm-lower left ${robot.action === 'celebrating' ? 'raised' : robot.action === 'pointing' ? 'extended' : 'neutral'}`}>
                    <div className="hand left" />
                  </div>
                </div>
              </div>
              <div className="shoulder-right">
                <div className={`arm-upper right ${robot.action === 'celebrating' ? 'raised' : 'neutral'}`}>
                  <div className={`arm-lower right ${robot.action === 'celebrating' ? 'raised' : 'neutral'}`}>
                    <div className="hand right" />
                  </div>
                </div>
              </div>
            </div>

            {/* Hips */}
            <div className="hips">
              <div className="hip-left">
                <div className="leg-upper left">
                  <div className="leg-lower left">
                    <div className="foot left" />
                  </div>
                </div>
              </div>
              <div className="hip-right">
                <div className="leg-upper right">
                  <div className="leg-lower right">
                    <div className="foot right" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
