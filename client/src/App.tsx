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

        {/* Generator Script */}
        <div className="mt-8 text-center">
          <a 
            href="/create-sfs-app.sh" 
            download
            className="inline-flex items-center gap-2 text-sfs-gold hover:text-sfs-gold-hover underline underline-offset-4 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            Download App Generator Script
          </a>
          <p className="text-sm text-sfs-beige/50 mt-2 font-mono">
            ./create-sfs-app.sh &lt;project-name&gt;
          </p>
        </div>

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
