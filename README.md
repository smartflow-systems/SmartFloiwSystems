# 🚀 SFS Genesis Template

The **perfect starting point** for all SmartFlow Systems applications.

**This is the master template that powers the SFS App Generator.** Use this to create new SFS apps quickly and consistently with the SFS Brown/Black/Gold theme baked in.

---

## 🎯 Quick Start

### Option 1: Use the Generator Script (Recommended)

1. **Setup locally:**
   ```bash
   bash QUICK_SETUP.sh
   ```

2. **Generate a new app:**
   ```bash
   cd ~/SFS
   ./create-sfs-app.sh my-awesome-app "My awesome app description"
   ```

### Option 2: Run Directly (Replit/Web)

Click the link below to run the template:
- 🌐 **Live Demo:** [SFS Genesis Template](http://localhost:5000)
- 📥 **Download Generator:** Available on landing page

### Option 3: Manual Clone

```bash
git clone <this-repo> my-app
cd my-app
npm install
npm run dev:client
```

---

## 🎨 What's Inside

✨ **React 19 + TypeScript 5** - Latest, with all the modern goodness  
🎨 **SFS Theme System** - Brown/Black/Gold color palette  
🔧 **Tailwind CSS** - Utility-first styling with custom SFS components  
📦 **Shadcn/UI** - Beautiful, accessible component library  
✅ **Health Checks** - Built-in system monitoring  
🚀 **Replit Ready** - Deploy with one click  
📱 **Responsive Design** - Mobile-first, works everywhere  
🔄 **Hot Reload** - Vite dev server with instant updates  

---

## 📁 Project Structure

```
sfs-genesis-template/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Logo.tsx              # SFS Logo
│   │   │   ├── HealthCheck.tsx       # Health status
│   │   │   └── ui/                   # shadcn/ui components
│   │   ├── pages/                    # Page components
│   │   ├── lib/                      # Utilities & helpers
│   │   ├── App.tsx                   # Main app component
│   │   ├── main.tsx                  # React entry
│   │   └── index.css                 # SFS theme + Tailwind
│   ├── index.html
│   └── public/
│       └── create-sfs-app.sh         # Generator script
├── server/                            # Backend (optional)
├── shared/                            # Shared types
├── package.json
├── tsconfig.json
├── vite.config.ts
├── GENERATOR_GUIDE.md                # Full guide
├── QUICK_SETUP.sh                    # Setup script
└── README.md
```

---

## 🎨 SFS Theme System

All SFS apps use the consistent color palette and component system:

### Colors

```css
/* Available as Tailwind classes */
text-sfs-black      /* #0D0D0D - Primary dark */
text-sfs-brown      /* #3B2F2F - Secondary dark */
text-sfs-gold       /* #FFD700 - Primary accent */
text-sfs-beige      /* #F5F5DC - Light accent */
```

### Components

```tsx
// Gradient background
<div className="sfs-gradient">

// Gold button with hover effects
<button className="sfs-button">Click me</button>

// Card with backdrop blur
<div className="sfs-card">
  Content here
</div>
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 19, Vite 5, Tailwind CSS 4 |
| **Components** | Shadcn/UI, Lucide Icons |
| **Forms** | React Hook Form + Zod |
| **Language** | TypeScript 5.6 |
| **Platform** | Replit / Linux |
| **Routing** | Wouter (lightweight) |
| **State** | React Query + useState |

---

## 🚀 Development

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server (localhost:5000)
npm run dev:client

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run check
```

### Adding Pages

1. Create component in `client/src/pages/YourPage.tsx`
2. Register in `client/src/App.tsx`:
   ```tsx
   import YourPage from './pages/YourPage'
   
   function Router() {
     return (
       <Switch>
         <Route path="/your-page" component={YourPage} />
         <Route component={NotFound} />
       </Switch>
     )
   }
   ```

### Adding Components

Use existing shadcn/ui components:

```tsx
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

export function MyComponent() {
  return (
    <Card className="sfs-card">
      <Button className="sfs-button">
        Click <ArrowRight className="w-4 h-4" />
      </Button>
    </Card>
  )
}
```

### Styling

Use Tailwind + SFS utilities:

```tsx
<div className="sfs-gradient p-8 rounded-lg">
  <h1 className="text-sfs-gold text-3xl font-bold">
    Heading
  </h1>
  <p className="text-sfs-beige/80">
    Description
  </p>
  <button className="sfs-button mt-4">
    Action
  </button>
</div>
```

---

## 📦 Generate New Apps

### Using the Script

```bash
./create-sfs-app.sh <project-name> [description]
```

**Examples:**

```bash
# Analytics dashboard
./create-sfs-app.sh analytics-pro "Advanced business analytics"

# Booking system
./create-sfs-app.sh salon-booking "Modern salon booking platform"

# Content tool
./create-sfs-app.sh content-ai "AI-powered content scheduler"

# Task manager
./create-sfs-app.sh task-manager "Collaborative task management"
```

### What the Generator Does

✅ Clones the genesis template  
✅ Updates package.json with your project name  
✅ Generates custom README.md  
✅ Updates HTML meta tags  
✅ Customizes app header  
✅ Creates fresh git repository  
✅ Makes initial commit  

---

## 🌐 Deployment

### Replit (Fastest)

1. Import this repo to Replit
2. Click "Run"
3. App lives at `https://your-repl-name.replit.dev`

### Vercel

```bash
npm run build
# Deploy the dist/ folder
```

### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
CMD ["npm", "start"]
```

---

## 📖 Full Documentation

- **Generator Guide:** See `GENERATOR_GUIDE.md`
- **Setup Script:** See `QUICK_SETUP.sh`
- **Component Library:** Check `client/src/components/ui/`
- **Examples:** Explore the landing page (`client/src/App.tsx`)

---

## 🤝 Contributing

This is a template repository. When you generate new apps:

1. Projects are independent - modify freely
2. Keep the SFS theme consistent across ecosystem
3. Report bugs/improvements back to genesis template

---

## 📋 Available Scripts

```bash
npm run dev:client       # Start Vite dev server
npm run dev             # Start backend dev server (if using)
npm run build           # Build for production
npm run start           # Run production build
npm run check           # TypeScript type check
npm run db:push         # Push database schema (if using)
```

---

## 🎯 Next Steps

1. **Review the landing page** - See design patterns
2. **Check out components** - Explore `client/src/components/`
3. **Read through App.tsx** - Understand routing
4. **Review index.css** - See theme setup
5. **Generate a test app** - Use the generator script
6. **Build your app** - Start coding!

---

## 📄 License

Proprietary - SmartFlow Systems  
Created by: boweazy (Gareth)

---

**Built with 💛 by SmartFlow Systems**

*The SFS Genesis Template - One perfect starting point for all apps.*
