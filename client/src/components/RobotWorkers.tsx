import React from 'react'

export function RobotWorkers() {
  const robots = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    duration: 6 + Math.random() * 4,
    delay: Math.random() * 3,
    startX: Math.random() * 80 + 10,
    startY: Math.random() * 80 + 10,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {robots.map((robot) => (
        <div
          key={robot.id}
          className="robot-worker"
          style={{
            '--duration': `${robot.duration}s`,
            '--delay': `${robot.delay}s`,
            '--start-x': `${robot.startX}%`,
            '--start-y': `${robot.startY}%`,
          } as React.CSSProperties & { [key: string]: string }}
        >
          {/* Robot body */}
          <div className="robot-body">
            {/* Head */}
            <div className="robot-head">
              {/* Eyes */}
              <div className="robot-eyes">
                <div className="robot-eye left" />
                <div className="robot-eye right" />
              </div>
              {/* Smile */}
              <div className="robot-mouth" />
            </div>
            
            {/* Body box */}
            <div className="robot-torso">
              {/* Chest panel */}
              <div className="robot-panel" />
            </div>
            
            {/* Arms */}
            <div className="robot-arms">
              <div className="robot-arm left" />
              <div className="robot-arm right" />
            </div>
            
            {/* Legs */}
            <div className="robot-legs">
              <div className="robot-leg left" />
              <div className="robot-leg right" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
