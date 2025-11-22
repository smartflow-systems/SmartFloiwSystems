# 🚀 SFS Genesis Template - Generator Guide

The **SFS Genesis Template** is now ready to use as the foundation for all SmartFlow Systems applications.

## Option 1: Download & Use Locally (Recommended)

### Prerequisites
- Bash shell (macOS, Linux, WSL)
- `cp` and `git` commands available

### Setup

1. **Download the generator script:**
   - Go to the live app and download `create-sfs-app.sh` from the landing page
   - Or copy the script from `client/public/create-sfs-app.sh`

2. **Create a directory for SFS projects:**
   ```bash
   mkdir -p ~/SFS
   cd ~/SFS
   ```

3. **Save this repository as the genesis template:**
   ```bash
   # Option A: Clone from repo
   git clone <your-repo-url> sfs-genesis-template
   
   # Option B: Copy the workspace
   cp -r /path/to/this/project sfs-genesis-template
   ```

4. **Save the generator script:**
   ```bash
   cp client/public/create-sfs-app.sh create-sfs-app.sh
   chmod +x create-sfs-app.sh
   ```

### Usage

```bash
cd ~/SFS

# Create a new SFS app
./create-sfs-app.sh my-app-name "My awesome app description"

# Example 1: Analytics Dashboard
./create-sfs-app.sh analytics-pro "Advanced analytics dashboard for businesses"

# Example 2: Booking System
./create-sfs-app.sh salon-booking "Modern salon booking platform"

# Example 3: Content Scheduler
./create-sfs-app.sh content-ai "AI-powered content scheduling tool"
```

### What the generator does:

✅ Copies the genesis template  
✅ Updates `package.json` with your project name & description  
✅ Generates a customized `README.md`  
✅ Updates HTML title and meta tags  
✅ Customizes the landing page with your app's name  
✅ Initializes a fresh git repository  
✅ Creates an initial commit  

## Option 2: Manual Setup (For Replit or Cloud Environments)

If you don't have local bash access, you can manually set up a new project:

### Steps

1. **Download/Clone this template**

2. **Update `package.json`:**
   ```json
   {
     "name": "your-app-name",
     "description": "Your app description",
     ...
   }
   ```

3. **Update `client/index.html`:**
   ```html
   <title>Your App Name</title>
   <meta property="og:title" content="Your App Name" />
   <meta property="og:description" content="Your description" />
   ```

4. **Update `client/src/App.tsx`:**
   Replace the header text with your app's title and description

5. **Update `README.md`:**
   Add your project-specific information

6. **Initialize git:**
   ```bash
   rm -rf .git
   git init
   git add .
   git commit -m "Initial commit: Your App Name"
   ```

## Project Structure

```
sfs-genesis-template/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Logo.tsx
│   │   │   ├── HealthCheck.tsx
│   │   │   └── ui/              # shadcn/ui components
│   │   ├── pages/
│   │   ├── lib/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── index.html
│   └── public/
│       └── create-sfs-app.sh    # Generator script
├── server/                       # Backend (use only for full-stack apps)
├── shared/
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## SFS Theme System

All apps use the consistent SFS color palette:

```
Black:      #0D0D0D
Brown:      #3B2F2F
Gold:       #FFD700
Beige:      #F5F5DC
```

**Utilities available:**
- `.sfs-gradient` - Brown/Black gradient background
- `.sfs-button` - Gold button with hover states
- `.sfs-card` - Semi-transparent card with backdrop blur
- Color variables: `text-sfs-gold`, `bg-sfs-brown`, etc.

## Quick Start for New Apps

1. Generate a new project using the script
2. `cd` into your new project
3. Run `npm install`
4. Run `npm run dev`
5. Start building with the SFS theme already baked in!

## Adding Features

- **New Pages:** Create in `client/src/pages/` and register in `client/src/App.tsx`
- **New Components:** Create in `client/src/components/` (use shadcn/ui for consistency)
- **Styling:** Use Tailwind with SFS color variables
- **Forms:** Use `react-hook-form` with shadcn Form wrapper

## Deployment

### Replit
1. Import your generated project repo to Replit
2. Click "Run"
3. App runs on `http://localhost:5000`

### Production
```bash
npm run build
npm start
```

## Support

For issues or questions about the SFS Genesis Template:
- Check the README in your generated project
- Review the theme variables in `client/src/index.css`
- Look at example components in `client/src/components/`

---

**Happy building! 🚀 - SmartFlow Systems**
