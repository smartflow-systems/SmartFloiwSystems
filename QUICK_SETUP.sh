#!/bin/bash
set -euo pipefail

# ============================================================================
# QUICK SETUP - Local SFS Generator Setup
# ============================================================================
# This script helps you set up the SFS app generator locally
# 
# Usage: bash QUICK_SETUP.sh
# ============================================================================

GOLD='\033[1;33m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║${NC}  ${GOLD}SFS Genesis Template - Local Setup${NC}                        ${BLUE}║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════╝${NC}"
echo ""

# Detect OS
if [[ "$OSTYPE" == "darwin"* ]]; then
    SFS_BASE="$HOME/SFS"
    echo -e "${GREEN}✓ Detected macOS${NC}"
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    SFS_BASE="$HOME/SFS"
    echo -e "${GREEN}✓ Detected Linux${NC}"
else
    SFS_BASE="$HOME/SFS"
    echo -e "${GOLD}⚠ Unknown OS - using default path: $SFS_BASE${NC}"
fi

echo -e "${GOLD}📁 SFS Base Directory:${NC} $SFS_BASE"
echo ""

# Create directories
echo -e "${GOLD}📦 Setting up directories...${NC}"
mkdir -p "$SFS_BASE"
cd "$SFS_BASE"

# Copy current template
echo -e "${GOLD}📋 Copying genesis template...${NC}"
TEMPLATE_SRC=$(cd "$(dirname "$BASH_SOURCE")"; pwd)
cp -r "$TEMPLATE_SRC" "$SFS_BASE/sfs-genesis-template"
echo -e "${GREEN}✓ Template copied to: $SFS_BASE/sfs-genesis-template${NC}"
echo ""

# Extract and save generator script
echo -e "${GOLD}⚙️  Setting up generator script...${NC}"
cp "$TEMPLATE_SRC/client/public/create-sfs-app.sh" "$SFS_BASE/create-sfs-app.sh"
chmod +x "$SFS_BASE/create-sfs-app.sh"
echo -e "${GREEN}✓ Generator script ready: $SFS_BASE/create-sfs-app.sh${NC}"
echo ""

# Show directory structure
echo -e "${GOLD}📁 Workspace structure:${NC}"
echo "   $SFS_BASE/"
echo "   ├── sfs-genesis-template/    (The base template)"
echo "   ├── create-sfs-app.sh         (Generator script)"
echo "   └── (your generated apps)     (Will appear here)"
echo ""

# Next steps
echo -e "${GREEN}✅ Setup complete!${NC}"
echo ""
echo -e "${GOLD}🚀 Try it now:${NC}"
echo "   cd $SFS_BASE"
echo "   ./create-sfs-app.sh test-app 'My first generated SFS app'"
echo ""
echo -e "${GOLD}📖 More examples:${NC}"
echo "   ./create-sfs-app.sh analytics 'Advanced analytics dashboard'"
echo "   ./create-sfs-app.sh booking 'Salon booking platform'"
echo "   ./create-sfs-app.sh scheduler 'AI content scheduler'"
echo ""
echo -e "${BLUE}For full guide, see: GENERATOR_GUIDE.md${NC}"
echo ""
