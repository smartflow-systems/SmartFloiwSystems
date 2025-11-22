import React from 'react'
import { Logo } from './components/Logo'
import { HealthCheck } from './components/HealthCheck'

function App() {
  return (
    <div className="min-h-screen sfs-gradient">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <Logo />
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-sfs-gold to-sfs-beige bg-clip-text text-transparent">
            SFS Genesis Template
          </h1>
          <p className="text-xl text-sfs-beige/80">
            The Perfect Starting Point for SmartFlow Systems Apps
          </p>
        </header>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="sfs-card">
            <h3 className="text-xl font-semibold text-sfs-gold mb-2">⚡ React 19</h3>
            <p className="text-sfs-beige/70">Latest React with TypeScript 5</p>
          </div>
          <div className="sfs-card">
            <h3 className="text-xl font-semibold text-sfs-gold mb-2">🎨 SFS Theme</h3>
            <p className="text-sfs-beige/70">Brown/Black/Gold baked in</p>
          </div>
          <div className="sfs-card">
            <h3 className="text-xl font-semibold text-sfs-gold mb-2">🚀 Replit Ready</h3>
            <p className="text-sfs-beige/70">One-click deployment</p>
          </div>
        </div>

        {/* Health Check */}
        <HealthCheck />

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="sfs-button">
            Start Building Your SFS App
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
