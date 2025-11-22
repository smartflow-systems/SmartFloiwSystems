import React from 'react'

interface HamburgerProps {
  isOpen: boolean
  onClick: () => void
}

export function Hamburger({ isOpen, onClick }: HamburgerProps) {
  return (
    <button 
      onClick={onClick}
      className={`hamburger ${isOpen ? 'hamburger-open' : ''}`}
      aria-label="Toggle menu"
      data-testid="button-hamburger-menu"
    >
      <div className="hamburger-line" />
      <div className="hamburger-line" />
      <div className="hamburger-line" />
    </button>
  )
}
