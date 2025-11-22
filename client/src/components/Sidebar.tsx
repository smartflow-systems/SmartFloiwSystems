import React from 'react'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const navItems = [
  { icon: '🏠', label: 'Dashboard', href: '#dashboard' },
  { icon: '📊', label: 'Analytics', href: '#analytics' },
  { icon: '🚀', label: 'Projects', href: '#projects' },
  { icon: '⚙️', label: 'Settings', href: '#settings' },
  { icon: '📖', label: 'Documentation', href: '#docs' },
  { icon: '💬', label: 'Support', href: '#support' },
]

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
          onClick={onClose}
          data-testid="button-sidebar-overlay"
        />
      )}
      
      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`} data-testid="sidebar-menu">
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-sfs-gold to-sfs-brown rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold text-sfs-black">SFS</span>
            </div>
            <span className="text-xl font-bold text-sfs-gold">SmartFlow</span>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`nav-item ${index === 0 ? 'nav-item-active' : ''}`}
                onClick={() => onClose()}
                data-testid={`link-nav-${item.label.toLowerCase()}`}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Footer */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="glass-card p-4 text-center">
              <p className="text-xs text-sfs-beige/60">Built with 💛</p>
              <p className="text-sm font-semibold text-sfs-gold">SmartFlow Systems</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
