import React, { useState, useEffect } from 'react'

export function HealthCheck() {
  const [health, setHealth] = useState<{ ok: boolean } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // SIMULATED CHECK for Frontend Mockup environment
    // In a real fullstack app, this would fetch '/api/health'
    const checkHealth = async () => {
      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Try to fetch real endpoint if it existed (it won't in mockup mode)
        // const res = await fetch('/api/health');
        // const data = await res.json();
        
        // Mock success response
        const data = { ok: true };
        
        setHealth(data)
        setLoading(false)
      } catch (err) {
        setHealth({ ok: false })
        setLoading(false)
      }
    };

    checkHealth();
  }, [])

  return (
    <div className="sfs-card text-center">
      <h3 className="text-lg font-semibold text-sfs-gold mb-2">System Health</h3>
      {loading ? (
        <p className="text-sfs-beige/70">Checking...</p>
      ) : (
        <div className="flex items-center justify-center gap-2">
          <div className={`w-3 h-3 rounded-full ${health?.ok ? 'bg-green-500' : 'bg-red-500'}`} />
          <span className="text-sfs-beige/90">
            {health?.ok ? 'All Systems Operational' : 'Service Unavailable'}
          </span>
        </div>
      )}
    </div>
  )
}
