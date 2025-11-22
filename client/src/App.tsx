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
                  SFS Genesis
                </h1>
              </div>
              <div className="flex items-center gap-4">
                <button className="sfs-button-outline px-4 py-2 text-sm" data-testid="button-signin">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <section className="text-center mb-24">
            <Logo />
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-sfs-gold via-sfs-beige to-sfs-gold bg-clip-text text-transparent text-glow">
              Systems that sell while you sleep
            </h1>
            <p className="text-xl text-sfs-beige/80 max-w-3xl mx-auto mb-8">
              AI social bots, one-click booking, conversion-ready shops, and slick websites — all prebuilt, branded, and fast.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="sfs-button" data-testid="button-see-systems">See the Systems</button>
              <button className="sfs-button-outline" data-testid="button-pricing">Pricing</button>
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-24">
            <h2 className="text-4xl font-bold text-sfs-gold mb-12 text-center">Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* AI Social Bot */}
              <div className="glass-card-hover p-8" data-testid="card-project-aibot">
                <div className="text-5xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold text-sfs-gold mb-4">AI Social Bot</h3>
                <ul className="text-sfs-beige/70 space-y-2 mb-6">
                  <li>✓ Auto captions + niche hashtags</li>
                  <li>✓ DM funnels & lead capture</li>
                  <li>✓ Content calendar presets</li>
                </ul>
                <div className="flex gap-3">
                  <button className="sfs-button px-4 py-2 text-sm flex-1">See capabilities</button>
                  <button className="sfs-button-outline px-4 py-2 text-sm flex-1">View code</button>
                </div>
              </div>

              {/* Booking System */}
              <div className="glass-card-hover p-8" data-testid="card-project-booking">
                <div className="text-5xl mb-4">📅</div>
                <h3 className="text-2xl font-bold text-sfs-gold mb-4">Booking System</h3>
                <ul className="text-sfs-beige/70 space-y-2 mb-6">
                  <li>✓ Stripe deposits & no-show protection</li>
                  <li>✓ Google Calendar sync</li>
                  <li>✓ Industry presets</li>
                </ul>
                <div className="flex gap-3">
                  <button className="sfs-button px-4 py-2 text-sm flex-1">See capabilities</button>
                  <button className="sfs-button-outline px-4 py-2 text-sm flex-1">Demo</button>
                </div>
              </div>

              {/* E-commerce */}
              <div className="glass-card-hover p-8" data-testid="card-project-ecom">
                <div className="text-5xl mb-4">🛒</div>
                <h3 className="text-2xl font-bold text-sfs-gold mb-4">E-commerce Shops</h3>
                <ul className="text-sfs-beige/70 space-y-2 mb-6">
                  <li>✓ One-page checkout</li>
                  <li>✓ Upsells & abandoned cart emails</li>
                  <li>✓ Speed-first storefronts</li>
                </ul>
                <div className="flex gap-3">
                  <button className="sfs-button px-4 py-2 text-sm flex-1">See capabilities</button>
                  <button className="sfs-button-outline px-4 py-2 text-sm flex-1">Demo</button>
                </div>
              </div>

              {/* Websites */}
              <div className="glass-card-hover p-8" data-testid="card-project-websites">
                <div className="text-5xl mb-4">🌐</div>
                <h3 className="text-2xl font-bold text-sfs-gold mb-4">Websites</h3>
                <ul className="text-sfs-beige/70 space-y-2 mb-6">
                  <li>✓ Premium black/brown + gold</li>
                  <li>✓ SEO-ready, lightning fast</li>
                  <li>✓ Lead forms & analytics</li>
                </ul>
                <div className="flex gap-3">
                  <button className="sfs-button px-4 py-2 text-sm flex-1">See capabilities</button>
                  <button className="sfs-button-outline px-4 py-2 text-sm flex-1">View code</button>
                </div>
              </div>

              {/* Analytics */}
              <div className="glass-card-hover p-8" data-testid="card-project-analytics">
                <div className="text-5xl mb-4">📊</div>
                <h3 className="text-2xl font-bold text-sfs-gold mb-4">DataLens Analytics</h3>
                <ul className="text-sfs-beige/70 space-y-2 mb-6">
                  <li>✓ Natural language to SQL</li>
                  <li>✓ Interactive visualizations</li>
                  <li>✓ Real-time dashboards</li>
                </ul>
                <div className="flex gap-3">
                  <button className="sfs-button px-4 py-2 text-sm flex-1">See capabilities</button>
                  <button className="sfs-button-outline px-4 py-2 text-sm flex-1">View code</button>
                </div>
              </div>

              {/* Marketing Suite */}
              <div className="glass-card-hover p-8" data-testid="card-project-marketing">
                <div className="text-5xl mb-4">📈</div>
                <h3 className="text-2xl font-bold text-sfs-gold mb-4">Marketing & Growth</h3>
                <ul className="text-sfs-beige/70 space-y-2 mb-6">
                  <li>✓ UTM builder & tracking</li>
                  <li>✓ AI post generator</li>
                  <li>✓ Link-in-bio tools</li>
                </ul>
                <div className="flex gap-3">
                  <button className="sfs-button px-4 py-2 text-sm flex-1">See capabilities</button>
                  <button className="sfs-button-outline px-4 py-2 text-sm flex-1">View code</button>
                </div>
              </div>
            </div>
          </section>

          {/* Social Proof Section */}
          <section className="mb-24">
            <h2 className="text-4xl font-bold text-sfs-gold mb-12 text-center">Social Proof</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-card p-8" data-testid="testimonial-1">
                <p className="text-sfs-beige/80 text-lg mb-4 italic">
                  "We went from DMs to paid bookings in a day. The bot + booking combo just prints."
                </p>
                <p className="text-sfs-gold font-semibold">Jay, Barber Studio Owner</p>
              </div>
              <div className="glass-card p-8" data-testid="testimonial-2">
                <p className="text-sfs-beige/80 text-lg mb-4 italic">
                  "Shop load time dropped under 1s and AOV went up 18% with the upsell preset."
                </p>
                <p className="text-sfs-gold font-semibold">Mo, Streetwear Brand</p>
              </div>
              <div className="glass-card p-8" data-testid="testimonial-3">
                <p className="text-sfs-beige/80 text-lg mb-4 italic">
                  "He built our site, integrated Stripe, and the calendar sync is flawless."
                </p>
                <p className="text-sfs-gold font-semibold">Lina, Aesthetics Clinic</p>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-24">
            <h2 className="text-4xl font-bold text-sfs-gold mb-12 text-center">Get Started</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Starter */}
              <div className="glass-card-hover p-8" data-testid="pricing-starter">
                <h3 className="text-2xl font-bold text-sfs-gold mb-2">Starter</h3>
                <p className="text-3xl font-bold text-sfs-beige mb-6">£199</p>
                <ul className="text-sfs-beige/70 space-y-3 mb-8">
                  <li>✓ 1 system setup</li>
                  <li>✓ Brand colours & logo</li>
                  <li>✓ Email support</li>
                </ul>
                <button className="sfs-button w-full" data-testid="button-starter">Join Waitlist</button>
              </div>

              {/* Pro */}
              <div className="glass-card-hover p-8 border-2 border-sfs-gold" data-testid="pricing-pro">
                <div className="bg-sfs-gold text-sfs-black px-4 py-1 rounded text-sm font-bold w-fit mb-4">
                  POPULAR
                </div>
                <h3 className="text-2xl font-bold text-sfs-gold mb-2">Pro</h3>
                <p className="text-3xl font-bold text-sfs-beige mb-6">£499</p>
                <ul className="text-sfs-beige/70 space-y-3 mb-8">
                  <li>✓ 2 systems + integrations</li>
                  <li>✓ Stripe + Calendar</li>
                  <li>✓ Priority support</li>
                </ul>
                <button className="sfs-button w-full" data-testid="button-pro">Book Build</button>
              </div>

              {/* Premium */}
              <div className="glass-card-hover p-8" data-testid="pricing-premium">
                <h3 className="text-2xl font-bold text-sfs-gold mb-2">Premium</h3>
                <p className="text-3xl font-bold text-sfs-beige mb-6">£999</p>
                <ul className="text-sfs-beige/70 space-y-3 mb-8">
                  <li>✓ All systems + presets</li>
                  <li>✓ Analytics + training</li>
                  <li>✓ 30-day optimisation</li>
                </ul>
                <button className="sfs-button w-full" data-testid="button-premium">Apply</button>
              </div>
            </div>
          </section>

          {/* Health Check */}
          <div className="max-w-md mx-auto mb-16">
            <HealthCheck />
          </div>

          {/* Final CTA */}
          <section className="glass-card p-12 text-center">
            <h2 className="text-3xl font-bold text-sfs-gold mb-4">
              Ready to Build?
            </h2>
            <p className="text-sfs-beige/80 mb-8 max-w-2xl mx-auto">
              Start with the SFS Genesis Template. Everything you need to build, deploy, and scale beautiful applications.
            </p>
            <button className="sfs-button" data-testid="button-final-cta">Get Started Now</button>
          </section>
        </main>

        {/* Footer */}
        <footer className="glass-card border-t border-sfs-brown/40 mt-16">
          <div className="container mx-auto px-4 py-8 text-center text-sfs-beige/60">
            <p>Built with 💛 by SmartFlow Systems</p>
            <p className="text-sm mt-2">Premium Black/Brown/Gold Theme with Glassmorphism & Circuit Background</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
