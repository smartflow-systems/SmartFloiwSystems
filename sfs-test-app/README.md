# 🚀 Sfs Test App

Test application to verify generator works

**Part of the SmartFlow Systems ecosystem**

## 🎯 Overview

Built from SFS Genesis Template:
- ⚡ React 19 + TypeScript 5 + Vite 5
- 🎨 SFS Brown/Black/Gold theme
- 🔧 Tailwind CSS custom utilities
- ✅ Health check endpoint
- 🚀 Production ready

## 🚀 Quick Start

```bash
npm install    # Install dependencies
npm run dev    # Start dev server
npm run build  # Build for production
```

## 🎨 SFS Theme

```css
Black:  #0D0D0D  bg-sfs-black
Brown:  #3B2F2F  bg-sfs-brown
Gold:   #FFD700  bg-sfs-gold
Beige:  #F5F5DC  bg-sfs-beige
```

**Custom Classes:**
- `.sfs-gradient` - Brown to black gradient
- `.sfs-button` - Gold button with hover
- `.sfs-card` - Brown card with backdrop blur

## 📁 Structure

```
sfs-test-app/
├── src/
│   ├── components/  # React components
│   ├── styles/      # CSS & Tailwind
│   ├── App.tsx      # Main app
│   └── main.tsx     # Entry point
├── scripts/
│   └── health.js    # Health check
├── server.js        # Express server
└── vite.config.ts   # Vite config
```

## ✅ Health Check

`GET /api/health` → `{"ok":true,"timestamp":"..."}`

## 🌐 Deployment

### GitHub
```bash
git remote add origin https://github.com/smartflow-systems/sfs-test-app.git
git push -u origin main
```

### Replit
1. Import repository
2. Run automatically starts
3. Optional: Set PORT env var

## 🤝 SFS Ecosystem

- **Organization**: [SmartFlow Systems](https://github.com/smartflow-systems)
- **Developer**: boweazy
- **Created**: 2025-11-22

---

**Built with 💛 by SmartFlow Systems**
