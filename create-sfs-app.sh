#!/bin/bash
set -euo pipefail

# ============================================================================
# SFS PORTABLE APP GENERATOR
# Works in any directory - just set TEMPLATE_DIR and OUTPUT_DIR
# ============================================================================

# Configuration - adjust these paths as needed
TEMPLATE_DIR="${SFS_TEMPLATE_DIR:-./sfs-genesis-template}"
OUTPUT_DIR="${SFS_OUTPUT_DIR:-.}"

# Colors
GOLD='\033[1;33m'
GREEN='\033[0;32m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${GOLD}🚀 SmartFlow Systems - App Generator${NC}"
echo ""

# Check template
if [ ! -d "$TEMPLATE_DIR" ]; then
    echo -e "${RED}❌ Template not found at: $TEMPLATE_DIR${NC}"
    echo ""
    echo "Set template location:"
    echo "  export SFS_TEMPLATE_DIR=/path/to/sfs-genesis-template"
    echo "  ./create-sfs-app.sh my-app 'Description'"
    exit 1
fi

# Get project details
if [ -z "${1:-}" ]; then
    echo "Usage: ./create-sfs-app.sh <project-name> [description]"
    echo ""
    echo "Examples:"
    echo "  ./create-sfs-app.sh sfs-analytics-pro 'AI analytics dashboard'"
    echo "  ./create-sfs-app.sh booking-v2 'Modern booking platform'"
    echo ""
    echo "Environment variables:"
    echo "  SFS_TEMPLATE_DIR   - Path to genesis template (default: ./sfs-genesis-template)"
    echo "  SFS_OUTPUT_DIR     - Output directory (default: current directory)"
    exit 1
fi

PROJECT_NAME="$1"
PROJECT_DESC="${2:-A SmartFlow Systems application}"
PROJECT_DIR="$OUTPUT_DIR/$PROJECT_NAME"

# Validation
if [[ ! "$PROJECT_NAME" =~ ^[a-z0-9-]+$ ]]; then
    echo -e "${RED}❌ Invalid name. Use: lowercase, numbers, hyphens${NC}"
    exit 1
fi

if [ -d "$PROJECT_DIR" ]; then
    echo -e "${RED}❌ Project exists: $PROJECT_DIR${NC}"
    exit 1
fi

echo -e "${GREEN}📦 Creating: ${BLUE}$PROJECT_NAME${NC}"
echo -e "${GOLD}📝 $PROJECT_DESC${NC}"
echo ""

# Clone template
echo "📋 Cloning template..."
cp -r "$TEMPLATE_DIR" "$PROJECT_DIR"
cd "$PROJECT_DIR"

# Clean up backup files if any
rm -rf *.backup.* 2>/dev/null || true

# Update package.json
echo "⚙️  Configuring package.json..."
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
echo "📄 Generating README..."
TITLE_CAPS=$(echo "$PROJECT_NAME" | sed 's/-/ /g' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) tolower(substr($i,2));}1')

cat > README.md << EOF
# 🚀 $TITLE_CAPS

$PROJECT_DESC

**Part of the SmartFlow Systems ecosystem**

## 🎯 Overview

Built from SFS Genesis Template:
- ⚡ React 19 + TypeScript 5 + Vite 5
- 🎨 SFS Brown/Black/Gold theme
- 🔧 Tailwind CSS custom utilities
- ✅ Health check endpoint
- 🚀 Production ready

## 🚀 Quick Start

\`\`\`bash
npm install    # Install dependencies
npm run dev    # Start dev server
npm run build  # Build for production
\`\`\`

## 🎨 SFS Theme

\`\`\`css
Black:  #0D0D0D  bg-sfs-black
Brown:  #3B2F2F  bg-sfs-brown
Gold:   #FFD700  bg-sfs-gold
Beige:  #F5F5DC  bg-sfs-beige
\`\`\`

**Custom Classes:**
- \`.sfs-gradient\` - Brown to black gradient
- \`.sfs-button\` - Gold button with hover
- \`.sfs-card\` - Brown card with backdrop blur

## 📁 Structure

\`\`\`
$PROJECT_NAME/
├── src/
│   ├── components/  # React components
│   ├── styles/      # CSS & Tailwind
│   ├── App.tsx      # Main app
│   └── main.tsx     # Entry point
├── scripts/
│   └── health.js    # Health check
├── server.js        # Express server
└── vite.config.ts   # Vite config
\`\`\`

## ✅ Health Check

\`GET /api/health\` → \`{"ok":true,"timestamp":"..."}\`

## 🌐 Deployment

### GitHub
\`\`\`bash
git remote add origin https://github.com/smartflow-systems/$PROJECT_NAME.git
git push -u origin main
\`\`\`

### Replit
1. Import repository
2. Run automatically starts
3. Optional: Set PORT env var

## 🤝 SFS Ecosystem

- **Organization**: [SmartFlow Systems](https://github.com/smartflow-systems)
- **Developer**: boweazy
- **Created**: $(date +%Y-%m-%d)

---

**Built with 💛 by SmartFlow Systems**
EOF

# Update HTML title
echo "🏷️  Updating HTML..."
sed -i "s/<title>.*<\/title>/<title>$TITLE_CAPS | SmartFlow Systems<\/title>/" index.html 2>/dev/null || true

# Update App.tsx
echo "🎨 Customizing app..."
if [ -f "src/App.tsx" ]; then
    sed -i "s/SFS Genesis Template/$TITLE_CAPS/g" src/App.tsx 2>/dev/null || true
    sed -i "s/The Perfect Starting Point for SmartFlow Systems Apps/$PROJECT_DESC/g" src/App.tsx 2>/dev/null || true
fi

# Clean git history
echo "🗑️  Cleaning template git..."
rm -rf .git .gitignore 2>/dev/null || true

# Create fresh git repo
echo "📦 Initializing git..."
cat > .gitignore << 'GITEOF'
node_modules/
dist/
build/
.env
.env.local
.DS_Store
*.log
GITEOF

git init > /dev/null 2>&1 || true
git add . > /dev/null 2>&1 || true
git commit -m "🎉 Initial commit: $TITLE_CAPS

$PROJECT_DESC

Generated from SFS Genesis Template
$(date +%Y-%m-%d)

Stack:
- React 19 + TypeScript 5
- Vite 5 + Tailwind CSS
- SFS Brown/Black/Gold theme
- Express health checks" > /dev/null 2>&1 || true

echo ""
echo -e "${GREEN}✅ SUCCESS! Project created${NC}"
echo ""
echo -e "${GOLD}📁 Location:${NC} $PROJECT_DIR"
echo ""
echo -e "${BLUE}📋 Next Steps:${NC}"
echo "   cd $PROJECT_NAME"
echo "   npm install"
echo "   npm run dev"
echo ""
echo -e "${GREEN}Happy coding! 🚀${NC}"
