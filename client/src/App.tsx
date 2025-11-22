import React, { useState } from 'react'
import { Logo } from './components/Logo'
import { HealthCheck } from './components/HealthCheck'
import { Hamburger } from './components/Hamburger'
import { Sidebar } from './components/Sidebar'
import { CircuitNodes } from './components/CircuitNodes'
import { RobotWorkers } from './components/RobotWorkers'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const scrollTo = (id: string) => {
    setSidebarOpen(false)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div>
      <CircuitNodes />
      <RobotWorkers />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="content-wrapper">
        {/* Header */}
        <header className="sticky top-0 z-20 glass-card border-b border-sfs-brown/40">
          <div className="container mx-auto px-6 py-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <Hamburger isOpen={sidebarOpen} onClick={() => setSidebarOpen(!sidebarOpen)} />
                <h2 className="text-lg font-bold text-sfs-gold hidden sm:block">SFS Genesis</h2>
              </div>
              <button className="sfs-button px-6 py-2" onClick={() => scrollTo('pricing')} data-testid="button-header-cta">Get Started</button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <section id="hero" className="container mx-auto px-6 py-24">
            <div className="text-center max-w-4xl mx-auto">
              <Logo />
              <h1 className="mt-8 mb-6 text-sfs-gold text-glow">
                Systems that sell while you sleep
              </h1>
              <p className="text-xl text-sfs-beige/90 mb-12 leading-relaxed">
                AI social bots, one-click booking, conversion-ready shops, and slick websites — all prebuilt, branded, and fast.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <button className="sfs-button" onClick={() => scrollTo('projects')} data-testid="button-hero-systems">See the Systems</button>
                <button className="sfs-button-outline" onClick={() => scrollTo('pricing')} data-testid="button-hero-pricing">Pricing</button>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="container mx-auto px-6">
            <h2 className="text-center text-sfs-gold mb-16">Projects</h2>
            <div className="feature-grid">
              <div className="glass-card-hover p-8" data-testid="project-aibot">
                <div className="text-5xl mb-6">🤖</div>
                <h3 className="text-sfs-gold mb-4">AI Social Bot</h3>
                <ul className="text-sfs-beige/80 space-y-3 mb-8 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-sfs-gold mt-0.5">✓</span>
                    <span>Auto captions + niche hashtags</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sfs-gold mt-0.5">✓</span>
                    <span>DM funnels & lead capture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sfs-gold mt-0.5">✓</span>
                    <span>Content calendar presets</span>
                  </li>
                </ul>
                <div className="flex gap-3">
                  <button className="sfs-button flex-1 text-sm py-2">See capabilities</button>
                  <button className="sfs-button-outline flex-1 text-sm py-2">View code</button>
                </div>
              </div>

              <div className="glass-card-hover p-8" data-testid="project-booking">
                <div className="text-5xl mb-6">📅</div>
                <h3 className="text-sfs-gold mb-4">Booking System</h3>
                <ul className="text-sfs-beige/80 space-y-3 mb-8 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-sfs-gold mt-0.5">✓</span>
                    <span>Stripe deposits & no-show protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sfs-gold mt-0.5">✓</span>
                    <span>Google Calendar sync</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sfs-gold mt-0.5">✓</span>
                    <span>Industry presets (barber/salon)</span>
                  </li>
                </ul>
                <div className="flex gap-3">
                  <button className="sfs-button flex-1 text-sm py-2">See capabilities</button>
                  <button className="sfs-button-outline flex-1 text-sm py-2">Demo</button>
                </div>
              </div>

              <div className="glass-card-hover p-8" data-testid="project-ecom">
                <div className="text-5xl mb-6">🛒</div>
                <h3 className="text-sfs-gold mb-4">E-commerce Shops</h3>
                <ul className="text-sfs-beige/80 space-y-3 mb-8 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-sfs-gold mt-0.5">✓</span>
                    <span>One-page checkout</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sfs-gold mt-0.5">✓</span>
                    <span>Upsells & abandoned cart emails</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sfs-gold mt-0.5">✓</span>
                    <span>Speed-first storefronts</span>
                  </li>
                </ul>
                <div className="flex gap-3">
                  <button className="sfs-button flex-1 text-sm py-2">See capabilities</button>
                  <button className="sfs-button-outline flex-1 text-sm py-2">Demo</button>
                </div>
              </div>

              <div className="glass-card-hover p-8" data-testid="project-websites">
                <div className="text-5xl mb-6">🌐</div>
                <h3 className="text-sfs-gold mb-4">Websites</h3>
                <ul className="text-sfs-beige/80 space-y-3 mb-8 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-sfs-gold mt-0.5">✓</span>
                    <span>Premium black/brown + gold</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sfs-gold mt-0.5">✓</span>
                    <span>SEO-ready, lightning fast</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sfs-gold mt-0.5">✓</span>
                    <span>Lead forms & analytics</span>
                  </li>
                </ul>
                <div className="flex gap-3">
                  <button className="sfs-button flex-1 text-sm py-2">See capabilities</button>
                  <button className="sfs-button-outline flex-1 text-sm py-2">View code</button>
                </div>
              </div>

              <div className="glass-card-hover p-8" data-testid="project-analytics">
                <div className="text-5xl mb-6">📊</div>
                <h3 className="text-sfs-gold mb-4">DataLens Analytics</h3>
                <ul className="text-sfs-beige/80 space-y-3 mb-8 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-sfs-gold mt-0.5">✓</span>
                    <span>Natural language to SQL</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sfs-gold mt-0.5">✓</span>
                    <span>Interactive visualizations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sfs-gold mt-0.5">✓</span>
                    <span>Real-time dashboards</span>
                  </li>
                </ul>
                <div className="flex gap-3">
                  <button className="sfs-button flex-1 text-sm py-2">See capabilities</button>
                  <button className="sfs-button-outline flex-1 text-sm py-2">View code</button>
                </div>
              </div>

              <div className="glass-card-hover p-8" data-testid="project-marketing">
                <div className="text-5xl mb-6">📈</div>
                <h3 className="text-sfs-gold mb-4">Marketing & Growth</h3>
                <ul className="text-sfs-beige/80 space-y-3 mb-8 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-sfs-gold mt-0.5">✓</span>
                    <span>UTM builder & campaign tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sfs-gold mt-0.5">✓</span>
                    <span>AI post generator</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sfs-gold mt-0.5">✓</span>
                    <span>Link-in-bio & OG tools</span>
                  </li>
                </ul>
                <div className="flex gap-3">
                  <button className="sfs-button flex-1 text-sm py-2">See capabilities</button>
                  <button className="sfs-button-outline flex-1 text-sm py-2">View code</button>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section id="testimonials" className="container mx-auto px-6 py-24">
            <h2 className="text-center text-sfs-gold mb-16">Social Proof</h2>
            <div className="testimonial-grid">
              <div className="glass-card p-10" data-testid="testimonial-1">
                <p className="text-sfs-beige/90 text-lg mb-6 italic leading-relaxed">
                  "We went from DMs to paid bookings in a day. The bot + booking combo just prints."
                </p>
                <p className="text-sfs-gold font-bold">Jay</p>
                <p className="text-sfs-beige/60 text-sm">Barber Studio Owner</p>
              </div>
              <div className="glass-card p-10" data-testid="testimonial-2">
                <p className="text-sfs-beige/90 text-lg mb-6 italic leading-relaxed">
                  "Shop load time dropped under 1s and AOV went up 18% with the upsell preset."
                </p>
                <p className="text-sfs-gold font-bold">Mo</p>
                <p className="text-sfs-beige/60 text-sm">Streetwear Brand</p>
              </div>
              <div className="glass-card p-10" data-testid="testimonial-3">
                <p className="text-sfs-beige/90 text-lg mb-6 italic leading-relaxed">
                  "He built our site, integrated Stripe, and the calendar sync is flawless."
                </p>
                <p className="text-sfs-gold font-bold">Lina</p>
                <p className="text-sfs-beige/60 text-sm">Aesthetics Clinic</p>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section id="pricing" className="container mx-auto px-6 py-24">
            <h2 className="text-center text-sfs-gold mb-16">Get Started</h2>
            <div className="pricing-grid">
              <div className="glass-card p-8" data-testid="pricing-starter">
                <h3 className="text-sfs-gold text-2xl mb-2">Starter</h3>
                <p className="text-4xl font-bold text-sfs-beige mb-8">£199</p>
                <ul className="text-sfs-beige/80 space-y-4 mb-10">
                  <li className="flex items-start gap-2">
                    <span className="text-sfs-gold">✓</span>
                    <span>1 system setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sfs-gold">✓</span>
                    <span>Brand colours & logo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sfs-gold">✓</span>
                    <span>Email support</span>
                  </li>
                </ul>
                <button className="sfs-button w-full" data-testid="btn-starter">Join Waitlist</button>
              </div>

              <div className="glass-card p-8 border-2 border-sfs-gold" data-testid="pricing-pro">
                <div className="bg-sfs-gold text-sfs-black px-4 py-1 rounded text-xs font-bold w-fit mb-4">
                  POPULAR
                </div>
                <h3 className="text-sfs-gold text-2xl mb-2">Pro</h3>
                <p className="text-4xl font-bold text-sfs-beige mb-8">£499</p>
                <ul className="text-sfs-beige/80 space-y-4 mb-10">
                  <li className="flex items-start gap-2">
                    <span className="text-sfs-gold">✓</span>
                    <span>2 systems + integrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sfs-gold">✓</span>
                    <span>Stripe + Calendar sync</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sfs-gold">✓</span>
                    <span>Priority support</span>
                  </li>
                </ul>
                <button className="sfs-button w-full" data-testid="btn-pro">Book Build</button>
              </div>

              <div className="glass-card p-8" data-testid="pricing-premium">
                <h3 className="text-sfs-gold text-2xl mb-2">Premium</h3>
                <p className="text-4xl font-bold text-sfs-beige mb-8">£999</p>
                <ul className="text-sfs-beige/80 space-y-4 mb-10">
                  <li className="flex items-start gap-2">
                    <span className="text-sfs-gold">✓</span>
                    <span>All systems + presets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sfs-gold">✓</span>
                    <span>Analytics + training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sfs-gold">✓</span>
                    <span>30-day optimisation</span>
                  </li>
                </ul>
                <button className="sfs-button w-full" data-testid="btn-premium">Apply</button>
              </div>
            </div>
          </section>

          {/* Health Check */}
          <section className="container mx-auto px-6 py-12 max-w-md mx-auto">
            <HealthCheck />
          </section>

          {/* Final CTA */}
          <section className="container mx-auto px-6 py-24">
            <div className="glass-card p-16 text-center">
              <h2 className="text-sfs-gold mb-6">Ready to Build Something Amazing?</h2>
              <p className="text-sfs-beige/90 text-lg mb-10 max-w-2xl mx-auto">
                Start with SFS Genesis Template. Everything you need to build, deploy, and scale beautiful applications.
              </p>
              <button className="sfs-button text-lg px-8 py-3" data-testid="button-final-cta">Get Started Now</button>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="glass-card border-t border-sfs-brown/40 mt-12">
          <div className="container mx-auto px-6 py-12 text-center">
            <p className="text-sfs-beige/70">Built with 💛 by SmartFlow Systems</p>
            <p className="text-sfs-beige/50 text-sm mt-2">Premium Black/Brown/Gold • Glassmorphism • 3D Circuit Background</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
