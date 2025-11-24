# Agent Notes for SmartFlow Systems Genesis Template

**Repository:** SmartFloiwSystems
**Purpose:** Master template for generating new SFS applications with consistent brown/black/gold theme
**Stack:** React 19, TypeScript 5, Vite 7, Tailwind CSS 4, Express

---

## 🎯 Project Overview

This is the **genesis template** that powers the entire SmartFlow Systems app ecosystem. When generating new SFS apps, this template provides:

- Pre-configured SFS brown/black/gold theme
- React 19 + TypeScript 5 frontend
- Express backend with health checks
- Shadcn/UI component library
- Electric circuit animation effects
- Glass-card UI components
- Replit-ready deployment

---

## 📁 Key File Locations

### Frontend
- **Main App:** `[client/src/App.tsx]` - Main application component with routing
- **Theme Styles:** `[client/src/index.css]` - SFS color palette and component styles
- **Tailwind Config:** `[tailwind.config.js]` - SFS color definitions
- **Components:** `[client/src/components/]` - Reusable UI components
  - `[Logo.tsx]` - SFS branded logo
  - `[CircuitNodes.tsx]` - Electric shooting star animation
  - `[HealthCheck.tsx]` - Health status display
  - `[Hamburger.tsx]` - Navigation menu toggle
  - `[Sidebar.tsx]` - Slide-out navigation

### Backend
- **Routes:** `[server/routes.ts]` - API routes and health check endpoint
- **App Setup:** `[server/app.ts]` - Express configuration
- **Dev Server:** `[server/index-dev.ts]` - Development mode
- **Prod Server:** `[server/index-prod.ts]` - Production build

### Configuration
- **Package:** `[package.json]` - Dependencies and scripts
- **TypeScript:** `[tsconfig.json]` - TypeScript compiler settings
- **Vite:** `[vite.config.ts]` - Build and dev server config

### Generator Scripts
- **Quick Setup:** `[QUICK_SETUP.sh]` - Repository initialization
- **App Generator:** `[create-sfs-app.sh]` - Creates new SFS apps from this template
- **Generator Guide:** `[GENERATOR_GUIDE.md]` - Full documentation for app generation

---

## 🎨 SFS Theme System

### Color Palette
```typescript
{
  'sfs-black': '#0D0D0D',    // Primary dark
  'sfs-brown': '#3B2F2F',    // Secondary dark
  'sfs-gold': '#FFD700',     // Primary accent
  'sfs-gold-hover': '#E6C200', // Gold hover state
  'sfs-beige': '#F5F5DC',    // Light text
}
```

### CSS Classes
- `.sfs-button` - Gold gradient button with hover effects
- `.sfs-button-outline` - Gold outline button
- `.glass-card` - Glassmorphism card with backdrop blur
- `.glass-card-hover` - Interactive glass card with hover state
- `.text-glow` - Gold text shadow effect
- `.electric-star` - Animated circuit node

### Component Usage
```tsx
// Gold button
<button className="sfs-button">Click me</button>

// Glass card
<div className="glass-card-hover p-8">
  <h3 className="text-sfs-gold">Title</h3>
  <p className="text-sfs-beige/80">Description</p>
</div>
```

---

## 🔧 Common Operations

### Development
```bash
npm install              # Install dependencies
npm run dev:client       # Start Vite dev server (port 5000)
npm run dev             # Start backend dev server
npm run check           # TypeScript type checking
```

### Building
```bash
npm run build           # Build for production
npm run start           # Run production build
```

### Health Check
```bash
curl http://localhost:5000/health
# Returns: {"ok":true,"service":"SmartFlow Systems Genesis Template","timestamp":"..."}
```

### Generate New App
```bash
./create-sfs-app.sh my-new-app "Description of app"
```

---

## ⚠️ Important Rules

### VERIFY Before Changes
1. **ALWAYS read files first** before modifying
2. **Test locally** before committing changes
3. **Preserve the theme** - maintain brown/black/gold colors
4. **Don't break the generator** - this template creates other apps

### UNDO If Needed
```bash
git checkout -- [file]        # Revert single file
git reset --hard HEAD         # Revert all changes
```

### Theme Consistency
- Use `text-sfs-gold` for headings and accents
- Use `text-sfs-beige` for body text
- Use `glass-card` or `glass-card-hover` for containers
- Maintain electric circuit background effects

---

## 🚀 CI/CD Pipeline

**Workflow:** `[.github/workflows/sfs-ci-deploy.yml]`

### Pipeline Steps:
1. ✅ Type checking (`npm run check`)
2. ✅ Build verification (`npm run build`)
3. ✅ Health check validation
4. 🚀 Deploy to Replit (on main branch push)

### Status Badges
Add to README.md:
```markdown
![CI/CD](https://github.com/boweazy/SmartFloiwSystems/workflows/SFS%20CI/CD%20Pipeline/badge.svg)
```

---

## 📦 Generator Workflow

When someone runs `./create-sfs-app.sh new-project "Description"`:

1. **Clones** this template to `new-project/`
2. **Updates** `package.json` name and description
3. **Generates** custom README.md
4. **Customizes** HTML meta tags
5. **Creates** fresh git repository
6. **Makes** initial commit

**Result:** A fully-themed, ready-to-code SFS application

---

## 🔍 Debugging

### Port Issues
- Dev server runs on port 5000 (configured in scripts)
- Production uses `${PORT:-5000}`
- Replit requires port from `process.env.PORT`

### Build Failures
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Theme Not Applying
1. Check `[tailwind.config.js]` has SFS colors
2. Verify `[client/src/index.css]` is imported
3. Ensure `@import "tailwindcss"` is at top of CSS

---

## 🎯 What NOT to Change

❌ **Do not modify:**
- Core theme colors (unless updating across all SFS apps)
- Generator scripts without testing
- Health check endpoint structure
- Port configuration (breaks Replit deployment)

✅ **Safe to modify:**
- App.tsx content and routing
- Adding new components
- Backend API routes
- Database schemas
- UI content and copy

---

## 📚 Related Documentation

- **Generator Guide:** See `[GENERATOR_GUIDE.md]`
- **Setup Instructions:** See `[SETUP_GUIDE.md]`
- **Quick Start:** See `[QUICK_SETUP.sh]`
- **Main README:** See `[README.md]`

---

## 🤝 Contributing

This is a **template repository**. Changes here affect all new apps generated:

1. Test changes thoroughly in a generated app first
2. Ensure theme consistency across ecosystem
3. Update GENERATOR_GUIDE.md if adding features
4. Document new components in README.md

---

## 🔗 SmartFlow Systems Ecosystem

**GitHub Org:** `smartflow-systems`
**Main Site Repo:** SmartFlowSite
**Related Apps:**
- SocialScaleBoosterAIbot (AI social bot platform)
- SFSDataQueryEngine (Natural language SQL)
- sfs-marketing-and-growth (Booking + marketing)
- Barber-booker-tempate-v1 (Service booking)

All share this theme foundation.

---

**Built with 💛 by SmartFlow Systems**

*Genesis Template - The foundation of all SFS applications*
