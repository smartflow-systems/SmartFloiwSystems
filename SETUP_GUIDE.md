# 🚀 SFS Genesis - Portable Setup Guide

## Quick Start (Any Machine)

### 1. Clone the Repository
```bash
git clone <your-repo-url> sfs-system
cd sfs-system
```

### 2. Generate Your First App
```bash
# Make generator executable
chmod +x create-sfs-app.sh

# Create a new app
./create-sfs-app.sh my-awesome-app "My first SFS application"

# Navigate and run
cd my-awesome-app
npm install
npm run dev
```

## 🎯 Environment Variables

For custom paths:
```bash
# Set template location
export SFS_TEMPLATE_DIR=/path/to/sfs-genesis-template

# Set output directory
export SFS_OUTPUT_DIR=/path/to/projects

# Then run
./create-sfs-app.sh new-app "Description"
```

## 📦 What Gets Generated

Each new project includes:
- ✅ React 19 + TypeScript 5 + Vite 5
- ✅ SFS Brown/Black/Gold theme
- ✅ Tailwind CSS with custom utilities
- ✅ Health check endpoint
- ✅ GitHub Actions CI/CD ready
- ✅ Custom README with project details
- ✅ Fresh git repository

## 🎨 Project Templates

Generate projects for different use cases:

```bash
# Analytics Platform
./create-sfs-app.sh sfs-analytics-pro "AI-powered data analytics"

# Booking System
./create-sfs-app.sh booking-platform-v2 "Modern service booking"

# Marketing Tool
./create-sfs-app.sh content-scheduler "AI content automation"

# Social Media Manager
./create-sfs-app.sh social-manager "Multi-platform social automation"

# CRM System
./create-sfs-app.sh client-crm "Customer relationship management"

# Task Manager
./create-sfs-app.sh task-runner "Collaborative task management"

# Dashboard
./create-sfs-app.sh admin-dashboard "Business intelligence dashboard"
```

## 🔧 Customizing the Template

To change defaults for all generated projects, edit `sfs-genesis-template/`:

```
sfs-genesis-template/
├── client/src/index.css       # Theme colors
├── tailwind.config.js         # Tailwind settings
├── client/src/App.tsx         # Default layout
└── client/src/components/     # Reusable components
```

All new projects will inherit your changes!

## 🌐 Publishing to GitHub

```bash
cd your-new-project

# Create repo on GitHub first, then:
git remote add origin https://github.com/smartflow-systems/your-project.git
git push -u origin main
```

## 📋 Common Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (localhost:5000) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run health` | Check app health endpoint |
| `npm run check` | TypeScript type check |

## 🎨 SFS Theme Reference

### Colors
```css
bg-sfs-black      /* #0D0D0D - Primary dark */
bg-sfs-brown      /* #3B2F2F - Secondary dark */
bg-sfs-gold       /* #FFD700 - Primary accent */
bg-sfs-beige      /* #F5F5DC - Light accent */
```

### Utility Classes
```css
.sfs-gradient     /* Brown → Black gradient background */
.sfs-button       /* Gold button with hover effects */
.sfs-card         /* Brown card with backdrop blur */
```

## 🆘 Troubleshooting

### Template not found?
```bash
export SFS_TEMPLATE_DIR=/full/path/to/sfs-genesis-template
```

### Permission denied on create-sfs-app.sh?
```bash
chmod +x create-sfs-app.sh
```

### Port already in use?
```bash
PORT=3000 npm run dev
```

### Git command not found?
Make sure git is installed:
```bash
# macOS
brew install git

# Ubuntu/Debian
sudo apt-get install git

# Windows (use Git Bash)
```

## 🚀 Deployment Options

### Replit (Fastest)
1. Import the generated project repo to Replit
2. Click "Run" 
3. App deployed automatically to `https://your-repl.replit.dev`

### Vercel
```bash
npm run build
# Deploy the dist/ folder to Vercel
```

### GitHub Pages (Static)
```bash
npm run build
# Deploy dist/ to GitHub Pages
```

### Docker (Any Cloud)
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
CMD ["npm", "start"]
```

## 📖 Project Structure

```
your-new-project/
├── client/
│   ├── src/
│   │   ├── components/        # React components
│   │   │   └── ui/            # shadcn/ui library
│   │   ├── pages/             # Page components
│   │   ├── lib/               # Utilities
│   │   ├── App.tsx            # Main app
│   │   ├── main.tsx           # React entry
│   │   └── index.css          # Styles + Tailwind
│   ├── index.html
│   └── public/
├── server/                     # Backend (optional)
├── scripts/
│   └── health.js             # Health check
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🤝 SFS Ecosystem

- **Organization**: [SmartFlow Systems](https://github.com/smartflow-systems)
- **Template Creator**: boweazy (Gareth)
- **License**: Proprietary

---

**Happy Building! 🚀 - Built with 💛 by SmartFlow Systems**
