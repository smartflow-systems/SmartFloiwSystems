#!/bin/bash
set -euo pipefail

# ============================================================================
# CREATE SFS APP - Project Generator
# ============================================================================

TEMPLATE_DIR="/home/garet/SFS/sfs-genesis-template"
SFS_DIR="/home/garet/SFS"

# Colors for output
GOLD='\033[1;33m'
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GOLD}🚀 SFS App Generator${NC}"
echo ""

# Check if template exists
if [ ! -d "$TEMPLATE_DIR" ]; then
    echo -e "${RED}❌ Template not found at: $TEMPLATE_DIR${NC}"
    echo "Run the genesis template creation script first."
    exit 1
fi

# Get project name
if [ -z "${1:-}" ]; then
    echo "Usage: ./create-sfs-app.sh <project-name> [description]"
    echo ""
    echo "Examples:"
    echo "  ./create-sfs-app.sh sfs-new-tool 'AI-powered analytics dashboard'"
    echo "  ./create-sfs-app.sh client-booking-v2 'Modern booking platform'"
    exit 1
fi

PROJECT_NAME="$1"
PROJECT_DESC="${2:-A SmartFlow Systems application}"
PROJECT_DIR="$SFS_DIR/$PROJECT_NAME"

# Validate project name
if [[ ! "$PROJECT_NAME" =~ ^[a-z0-9-]+$ ]]; then
    echo -e "${RED}❌ Invalid project name. Use lowercase letters, numbers, and hyphens only.${NC}"
    exit 1
fi

# Check if project already exists
if [ -d "$PROJECT_DIR" ]; then
    echo -e "${RED}❌ Project already exists: $PROJECT_DIR${NC}"
    echo "Choose a different name or remove the existing directory."
    exit 1
fi

echo -e "${GREEN}📦 Creating: $PROJECT_NAME${NC}"
echo -e "📝 Description: $PROJECT_DESC"
echo ""

# Clone template
echo "📋 Cloning genesis template..."
cp -r "$TEMPLATE_DIR" "$PROJECT_DIR"

cd "$PROJECT_DIR"

# Update package.json
echo "⚙️  Updating package.json..."
cat > package.json << EOF
{
  "name": "$PROJECT_NAME",
  "version": "1.0.0",
  "description": "$PROJECT_DESC",
  "type": "module",
  "scripts": {
    "dev": "vite --host 0.0.0.0 --port \${PORT:-5000}",
    "build": "tsc && vite build",
    "preview": "vite preview --host 0.0.0.0 --port \${PORT:-5000}",
    "health": "node scripts/health.js"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "express": "^4.18.2"
  },
  "devDependencies": {
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@vitejs/plugin-react": "^4.3.4",
    "typescript": "^5.6.3",
    "vite": "^5.4.11",
    "tailwindcss": "^3.4.17",
    "postcss": "^8.4.49",
    "autoprefixer": "^10.4.20"
  },
  "keywords": ["smartflow-systems", "sfs", "react", "typescript"],
  "author": "boweazy (SmartFlow Systems)",
  "license": "PROPRIETARY"
}
EOF

# Update README
echo "📄 Updating README..."
cat > README.md << EOF
# 🚀 $PROJECT_NAME

$PROJECT_DESC

**Part of the SmartFlow Systems ecosystem**

## 🎯 Overview

Built from the SFS Genesis Template with:
- ⚡ React 19 + TypeScript 5
- 🎨 SFS Brown/Black/Gold theme
- 🔧 Tailwind CSS
- ✅ Health checks
- 🚀 Replit ready

## 🚀 Quick Start

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Check health
npm run health
\`\`\`

## 🌐 Deployment

### Replit
1. Import repo to Replit
2. Set \`PORT\` env var (optional)
3. Click "Run"

### GitHub
\`\`\`bash
git remote add origin https://github.com/smartflow-systems/$PROJECT_NAME.git
git push -u origin main
\`\`\`

## 📁 Project Structure

\`\`\`
$PROJECT_NAME/
├── src/
│   ├── components/     # React components
│   ├── pages/          # Page components
│   ├── lib/            # Utilities
│   ├── styles/         # CSS & Tailwind
│   └── App.tsx         # Main app
├── scripts/
│   └── health.js       # Health check
├── server.js           # Express server
└── package.json
\`\`\`

## 🎨 SFS Theme

\`\`\`css
Black:      #0D0D0D
Brown:      #3B2F2F
Gold:       #FFD700
Beige:      #F5F5DC
\`\`\`

## ✅ Health Check

Endpoint: \`GET /api/health\`

Response:
\`\`\`json
{
  "ok": true,
  "timestamp": "2025-11-22T12:00:00.000Z"
}
\`\`\`

## 📋 Development

| Command | Description |
|---------|-------------|
| \`npm run dev\` | Start dev server |
| \`npm run build\` | Build production |
| \`npm run preview\` | Preview build |
| \`npm run health\` | Health check |

## 🤝 Part of SFS Ecosystem

- **Organization**: [SmartFlow Systems](https://github.com/smartflow-systems)
- **Developer**: boweazy (Gareth)
- **Created**: $(date +%Y-%m-%d)

---

**Built with 💛 by SmartFlow Systems**
EOF

# Update index.html title
echo "🏷️  Updating HTML title..."
sed -i "s/<title>.*<\/title>/<title>$PROJECT_NAME | SmartFlow Systems<\/title>/" index.html

# Update App.tsx header
echo "🎨 Updating app header..."
cat > src/App.tsx << 'EOF'
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
            PROJECT_TITLE
          </h1>
          <p className="text-xl text-sfs-beige/80">
            PROJECT_DESCRIPTION
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
            <h3 className="text-xl font-semibold text-sfs-gold mb-2">🚀 Ready to Deploy</h3>
            <p className="text-sfs-beige/70">Replit & GitHub Actions</p>
          </div>
        </div>

        {/* Health Check */}
        <HealthCheck />

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="sfs-button">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
EOF

# Replace placeholders
TITLE_CAPS=$(echo "$PROJECT_NAME" | sed 's/-/ /g' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) tolower(substr($i,2));}1')
sed -i "s/PROJECT_TITLE/$TITLE_CAPS/g" src/App.tsx
sed -i "s/PROJECT_DESCRIPTION/$PROJECT_DESC/g" src/App.tsx

# Remove template git history
echo "🗑️  Removing template git history..."
rm -rf .git

# Initialize new git repo
echo "📦 Initializing new git repository..."
git init
git add .
git commit -m "🎉 Initial commit: $PROJECT_NAME

$PROJECT_DESC

Generated from SFS Genesis Template
- React 19 + TypeScript 5
- SFS Brown/Black/Gold theme
- Tailwind CSS
- Health checks
- Replit ready"

echo ""
echo -e "${GREEN}✅ Project created successfully!${NC}"
echo ""
echo -e "${GOLD}📁 Location:${NC} $PROJECT_DIR"
echo ""
echo -e "${GOLD}📋 Next steps:${NC}"
echo "   1. cd $PROJECT_DIR"
echo "   2. npm install"
echo "   3. npm run dev"
echo ""
echo -e "${GOLD}🌐 GitHub Setup:${NC}"
echo "   git remote add origin https://github.com/smartflow-systems/$PROJECT_NAME.git"
echo "   git push -u origin main"
echo ""
echo -e "${GREEN}Happy building! 🚀${NC}"
