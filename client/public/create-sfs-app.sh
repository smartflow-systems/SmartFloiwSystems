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
- 🎨 SFS Theme - Brown/Black/Gold baked in
- 🔧 Tailwind CSS with custom SFS utilities
- ✅ Health Checks - /api/health endpoint
- 🚀 Replit Ready - One-click deployment
- 🔄 GitHub Actions - CI/CD pipeline

## 🏗️ Tech Stack

- **Frontend:** React 19, Vite 5, Tailwind CSS
- **Backend:** Express (Health Check)
- **Language:** TypeScript 5
- **Platform:** Replit / Linux

## 🛠️ Quick Start

### Development
\`\`\`bash
npm install
npm run dev
\`\`\`

### Production Build
\`\`\`bash
npm run build
npm start
\`\`\`

## 📜 License

Proprietary - SmartFlow Systems
EOF

# Update HTML Title
echo "🖼️  Updating index.html..."
sed -i "s/SFS Genesis Template/$PROJECT_NAME/g" index.html

# Initialize Git
echo "🔧 Initializing Git..."
git init
git add .
git commit -m "Initial commit from SFS Genesis Template"

echo ""
echo -e "${GREEN}✅ Project created successfully!${NC}"
echo ""
echo "Next steps:"
echo "  cd $PROJECT_DIR"
echo "  npm install"
echo "  npm run dev"
echo ""
echo "🚀 Happy Coding!"
