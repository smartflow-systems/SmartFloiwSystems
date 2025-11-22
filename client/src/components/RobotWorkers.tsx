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
        x: Math.random() * (window.innerWidth - 80),
        y: Math.random() * (window.innerHeight - 100) + 100,
        action: ['pointing', 'reading', 'celebrating'][Math.floor(Math.random() * 3)] as 'pointing' | 'reading' | 'celebrating',
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        rotationX: -20 - Math.random() * 30,
        rotationY: -30 + Math.random() * 60,
        rotationZ: -10 + Math.random() * 20,
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
            rotationX: robot.rotationX + (vy * 0.5),
            rotationY: robot.rotationY + (vx * 2),
            rotationZ: robot.rotationZ + (Math.random() - 0.5) * 2,
          }
        })
      )
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-5" style={{ perspective: '1800px' }}>
      {robots.map((robot) => (
        <div
          key={robot.id}
          className="robot-character"
          style={{
            left: `${robot.x}px`,
            top: `${robot.y}px`,
            transform: `perspective(1800px) rotateX(${robot.rotationX}deg) rotateY(${robot.rotationY}deg) rotateZ(${robot.rotationZ}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Main body container with full 3D */}
          <div className={`robot-body-3d robot-${robot.action}`} style={{ transformStyle: 'preserve-3d' }}>
            {/* Head */}
            <div className="head-3d" style={{ transformStyle: 'preserve-3d' }}>
              <div className="head-front" />
              <div className="head-back" />
              <div className="head-left" />
              <div className="head-right" />
              <div className="head-top" />
              <div className="visor-frame">
                <div className="eye eye-left" />
                <div className="eye eye-right" />
              </div>
            </div>

            {/* Neck */}
            <div className="neck-3d" style={{ transformStyle: 'preserve-3d' }} />

            {/* Torso - lounging angle */}
            <div className="torso-3d" style={{ transformStyle: 'preserve-3d' }}>
              <div className="torso-front" />
              <div className="torso-back" />
              <div className="torso-left" />
              <div className="torso-right" />
              <div className="torso-top" />
              <div className="torso-bottom" />
              
              {/* Panel details on front */}
              <div className="panel-1" />
              <div className="panel-2" />
            </div>

            {/* Left arm */}
            <div className={`arm-left arm-3d ${robot.action === 'celebrating' ? 'raised' : robot.action === 'pointing' ? 'extended' : 'neutral'}`} style={{ transformStyle: 'preserve-3d' }}>
              <div className="arm-segment-upper" style={{ transformStyle: 'preserve-3d' }}>
                <div className="arm-segment-lower" style={{ transformStyle: 'preserve-3d' }}>
                  <div className="hand-left" />
                </div>
              </div>
            </div>

            {/* Right arm */}
            <div className={`arm-right arm-3d ${robot.action === 'celebrating' ? 'raised' : 'neutral'}`} style={{ transformStyle: 'preserve-3d' }}>
              <div className="arm-segment-upper" style={{ transformStyle: 'preserve-3d' }}>
                <div className="arm-segment-lower" style={{ transformStyle: 'preserve-3d' }}>
                  <div className="hand-right" />
                </div>
              </div>
            </div>

            {/* Left leg - lounging */}
            <div className="leg-left leg-3d" style={{ transformStyle: 'preserve-3d' }}>
              <div className="leg-upper-left" style={{ transformStyle: 'preserve-3d' }}>
                <div className="leg-lower-left" style={{ transformStyle: 'preserve-3d' }}>
                  <div className="foot-left" />
                </div>
              </div>
            </div>

            {/* Right leg - lounging */}
            <div className="leg-right leg-3d" style={{ transformStyle: 'preserve-3d' }}>
              <div className="leg-upper-right" style={{ transformStyle: 'preserve-3d' }}>
                <div className="leg-lower-right" style={{ transformStyle: 'preserve-3d' }}>
                  <div className="foot-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
