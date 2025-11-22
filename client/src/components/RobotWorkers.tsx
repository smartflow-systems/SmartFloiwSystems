import React, { useEffect, useState } from 'react'

interface RobotPosition {
  id: number
  elementIndex: number
  offsetX: number
  offsetY: number
  duration: number
  delay: number
  action: 'pointing' | 'reading' | 'celebrating'
}

export function RobotWorkers() {
  const [robots, setRobots] = useState<RobotPosition[]>([])

  useEffect(() => {
    // Get all interactive card elements
    const cards = document.querySelectorAll('[data-testid*="card"], [data-testid*="project"], [data-testid*="pricing"]')
    const totalCards = cards.length

    if (totalCards === 0) return

    // Create robots that will interact with cards
    const robotPositions: RobotPosition[] = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      elementIndex: i % totalCards,
      offsetX: -30 + Math.random() * 60,
      offsetY: -80 + Math.random() * 40,
      duration: 5 + Math.random() * 3,
      delay: Math.random() * 2,
      action: ['pointing', 'reading', 'celebrating'][Math.floor(Math.random() * 3)] as 'pointing' | 'reading' | 'celebrating',
    }))

    setRobots(robotPositions)
  }, [])

  return (
    <div className="pointer-events-none">
      {robots.map((robot) => (
        <RobotAtElement
          key={robot.id}
          robot={robot}
        />
      ))}
    </div>
  )
}

function RobotAtElement({ robot }: { robot: RobotPosition }) {
  const [position, setPosition] = useState<{ x: number; y: number; visible: boolean }>({
    x: 0,
    y: 0,
    visible: false,
  })

  useEffect(() => {
    const updatePosition = () => {
      const cards = document.querySelectorAll('[data-testid*="card"], [data-testid*="project"], [data-testid*="pricing"]')
      if (cards.length === 0) return

      const targetCard = cards[robot.elementIndex] as HTMLElement
      if (!targetCard) return

      const rect = targetCard.getBoundingClientRect()
      const scrollY = window.scrollY

      setPosition({
        x: rect.left + rect.width / 2 + robot.offsetX,
        y: rect.top + scrollY + robot.offsetY,
        visible: rect.top < window.innerHeight && rect.bottom > 0,
      })
    }

    updatePosition()
    window.addEventListener('scroll', updatePosition)
    window.addEventListener('resize', updatePosition)

    return () => {
      window.removeEventListener('scroll', updatePosition)
      window.removeEventListener('resize', updatePosition)
    }
  }, [robot.elementIndex, robot.offsetX, robot.offsetY])

  if (!position.visible) return null

  return (
    <div
      className={`robot-worker robot-${robot.action}`}
      style={{
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y}px`,
        '--duration': `${robot.duration}s`,
        '--delay': `${robot.delay}s`,
      } as React.CSSProperties & { [key: string]: string }}
    >
      {/* Robot body */}
      <div className="robot-body">
        {/* Head */}
        <div className="robot-head">
          {/* Eyes looking at content */}
          <div className="robot-eyes">
            <div className={`robot-eye left ${robot.action === 'reading' ? 'looking-focused' : ''}`} />
            <div className={`robot-eye right ${robot.action === 'reading' ? 'looking-focused' : ''}`} />
          </div>
          {/* Expression based on action */}
          {robot.action === 'celebrating' && <div className="robot-mouth excited" />}
          {robot.action === 'pointing' && <div className="robot-mouth neutral" />}
          {robot.action === 'reading' && <div className="robot-mouth focused" />}
        </div>

        {/* Body box */}
        <div className="robot-torso">
          {/* Chest panel */}
          <div className="robot-panel" />
        </div>

        {/* Arms - positioned for interaction */}
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
    </div>
  )
}
