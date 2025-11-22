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
        <div className="mt-12 sfs-card border-sfs-gold/30">
          <h2 className="text-2xl font-bold text-sfs-gold mb-4">⚙️ App Generator</h2>
          <p className="text-sfs-beige/80 mb-6">
            Generate new SFS apps instantly with the portable generator script
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-sfs-black/50 p-4 rounded border border-sfs-brown/50">
              <h3 className="font-mono text-sfs-gold mb-2">Quick Setup</h3>
              <code className="text-sm text-sfs-beige/70 block whitespace-pre-wrap">
{`chmod +x create-sfs-app.sh

./create-sfs-app.sh my-app \
  "My awesome app"`}
              </code>
            </div>
            <div className="bg-sfs-black/50 p-4 rounded border border-sfs-brown/50">
              <h3 className="font-mono text-sfs-gold mb-2">Examples</h3>
              <code className="text-sm text-sfs-beige/70 block whitespace-pre-wrap">
{`# Analytics
./create-sfs-app.sh analytics

# Booking
./create-sfs-app.sh booking-v2`}
              </code>
            </div>
          </div>
          <div className="mt-6 flex gap-4 flex-col sm:flex-row justify-center">
            <a 
              href="/create-sfs-app.sh" 
              download
              className="inline-flex items-center justify-center gap-2 text-sfs-black bg-sfs-gold hover:bg-sfs-gold-hover px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              Download Generator
            </a>
            <a 
              href="SETUP_GUIDE.md"
              className="inline-flex items-center justify-center gap-2 text-sfs-gold hover:text-sfs-gold-hover border border-sfs-gold rounded-lg px-6 py-3 font-semibold transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
              Setup Guide
            </a>
          </div>
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
