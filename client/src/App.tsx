import React, { useState } from 'react'
import { Logo } from './components/Logo'
import { HealthCheck } from './components/HealthCheck'
import { Hamburger } from './components/Hamburger'
import { Sidebar } from './components/Sidebar'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen circuit-bg sfs-gradient">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="min-h-screen">
        {/* Top Bar */}
        <header className="sticky top-0 z-20 glass-card border-b border-sfs-brown/40">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Hamburger isOpen={sidebarOpen} onClick={() => setSidebarOpen(!sidebarOpen)} />
                <h1 className="text-xl font-bold text-sfs-gold hidden sm:block">
                  SFS Genesis Template
                </h1>
              </div>
              <div className="flex items-center gap-4">
                <button className="sfs-button-outline px-4 py-2 text-sm" data-testid="button-signin">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <Logo />
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-sfs-gold via-sfs-beige to-sfs-gold bg-clip-text text-transparent text-glow">
              SFS Genesis Template
            </h1>
            <p className="text-xl text-sfs-beige/80 max-w-2xl mx-auto" data-testid="text-hero-description">
              The Perfect Starting Point for SmartFlow Systems Apps
            </p>
          </section>

          {/* Features Grid - Glassmorphism Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="glass-card-hover p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-sfs-gold mb-2">React 19</h3>
              <p className="text-sfs-beige/70">Latest React with TypeScript 5 for maximum performance</p>
            </div>

            <div className="glass-card-hover p-6">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-sfs-gold mb-2">SFS Theme</h3>
              <p className="text-sfs-beige/70">Brown/Black/Gold with glassmorphism design</p>
            </div>

            <div className="glass-card-hover p-6">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-semibold text-sfs-gold mb-2">Glassmorphism</h3>
              <p className="text-sfs-beige/70">Modern glass cards with backdrop blur effects</p>
            </div>

            <div className="glass-card-hover p-6">
              <div className="text-4xl mb-4">🔌</div>
              <h3 className="text-xl font-semibold text-sfs-gold mb-2">Circuit Flow</h3>
              <p className="text-sfs-beige/70">Animated circuit background patterns</p>
            </div>

            <div className="glass-card-hover p-6">
              <div className="text-4xl mb-4">🍔</div>
              <h3 className="text-xl font-semibold text-sfs-gold mb-2">GitHub Layout</h3>
              <p className="text-sfs-beige/70">Hamburger menu with sliding sidebar navigation</p>
            </div>

            <div className="glass-card-hover p-6">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-sfs-gold mb-2">Ready to Deploy</h3>
              <p className="text-sfs-beige/70">Replit & GitHub Actions configured</p>
            </div>
          </div>

          {/* Health Check */}
          <div className="max-w-md mx-auto mb-16">
            <HealthCheck />
          </div>

          {/* CTA Section */}
          <section className="glass-card p-12 text-center">
            <h2 className="text-3xl font-bold text-sfs-gold mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-sfs-beige/80 mb-8 max-w-2xl mx-auto">
              Start with the perfect foundation. Clean code, modern design, and all the tools you need.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="sfs-button" data-testid="button-get-started">
                Get Started
              </button>
              <button className="sfs-button-outline" data-testid="button-docs">
                View Documentation
              </button>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="glass-card border-t border-sfs-brown/40 mt-16">
          <div className="container mx-auto px-4 py-8 text-center text-sfs-beige/60">
            <p>Built with 💛 by SmartFlow Systems</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
