# Complete Installation Guide for Astrex AI

This guide walks you through setting up the Astrex AI website from scratch.

---

## 📋 Table of Contents
1. [Prerequisites](#prerequisites)
2. [Quick Start](#quick-start)
3. [Detailed Installation](#detailed-installation)
4. [Project Configuration](#project-configuration)
5. [Running the Project](#running-the-project)
6. [Troubleshooting](#troubleshooting)

---

## 🎯 Prerequisites

### Required Software

1. **Node.js (v18 or higher)**
   - Download: https://nodejs.org/
   - Verify: `node --version`
   - Should output: `v18.0.0` or higher

2. **npm (comes with Node.js)**
   - Verify: `npm --version`
   - Should output: `9.0.0` or higher

3. **Git (optional, for version control)**
   - Download: https://git-scm.com/
   - Verify: `git --version`

### System Requirements
- **Operating System**: macOS, Windows, or Linux
- **RAM**: 4GB minimum (8GB recommended)
- **Disk Space**: 500MB for project + dependencies

---

## ⚡ Quick Start

If you just want to get the site running immediately:

```bash
# 1. Navigate to project directory
cd /Users/ved/Projects/astrexai

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open browser to http://localhost:3000
```

That's it! The site should be running.

---

## 📦 Detailed Installation

### Step 1: Navigate to Project Directory

```bash
cd /Users/ved/Projects/astrexai
```

### Step 2: Install Dependencies

This will install all required packages listed in `package.json`:

```bash
npm install
```

**What gets installed:**
- Next.js 14 (React framework)
- React 18 (UI library)
- TypeScript (type safety)
- Tailwind CSS (styling)
- shadcn/ui components (UI primitives)
- Spline (3D scenes)
- Framer Motion (animations)
- Lucide React (icons)
- Various utility libraries

**Expected output:**
```
added 387 packages, and audited 388 packages in 45s
```

**Installation time:** 30-60 seconds (depending on internet speed)

### Step 3: Verify Installation

Check that `node_modules` directory was created:

```bash
ls -la | grep node_modules
```

You should see:
```
drwxr-xr-x  387 user  staff  12384 Nov  4 10:30 node_modules
```

---

## ⚙️ Project Configuration

### Files Already Configured

The following configuration files are already set up:

✅ **package.json** - Dependencies and scripts  
✅ **tsconfig.json** - TypeScript configuration  
✅ **tailwind.config.ts** - Tailwind CSS settings  
✅ **next.config.js** - Next.js configuration  
✅ **postcss.config.js** - PostCSS for Tailwind  
✅ **.eslintrc.json** - ESLint rules  
✅ **app/globals.css** - Global styles and theme  
✅ **lib/utils.ts** - Utility functions  

### Environment Variables (Optional)

If you need to add environment variables:

```bash
# Copy example file
cp .env.example .env.local

# Edit with your values
nano .env.local
```

**Note**: No environment variables are required for basic functionality.

---

## 🚀 Running the Project

### Development Mode

Start the development server with hot-reload:

```bash
npm run dev
```

**Output:**
```
▲ Next.js 14.2.5
- Local:        http://localhost:3000
- Network:      http://192.168.1.100:3000

✓ Ready in 2.5s
```

**Features:**
- Hot reload on file changes
- Fast refresh
- Error overlay
- TypeScript checking

**Access the site:**
- Local: http://localhost:3000
- Network: http://[your-ip]:3000 (for testing on other devices)

### Production Build

Build an optimized production bundle:

```bash
npm run build
```

**What happens:**
1. TypeScript compilation
2. Code optimization
3. Asset generation
4. Static page generation

**Output:**
```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Creating an optimized production build
✓ Generating static pages (2/2)

Route (app)                Size     First Load JS
┌ ○ /                      1.2 kB         85.3 kB
└ ○ /about                 1.5 kB         85.6 kB
```

### Run Production Server

After building, start the production server:

```bash
npm start
```

**Output:**
```
▲ Next.js 14.2.5
- Local:        http://localhost:3000

✓ Ready in 500ms
```

---

## 📁 Project Structure

Understanding the file organization:

```
astrexai/
├── 📁 app/                          # Next.js App Router
│   ├── 📁 about/
│   │   └── page.tsx                # About page (/about)
│   ├── layout.tsx                  # Root layout (wraps all pages)
│   ├── page.tsx                    # Home page (/)
│   └── globals.css                 # Global styles
│
├── 📁 components/                   # React components
│   ├── 📁 ui/                      # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── demo.tsx                # Spline demo component
│   │   ├── input.tsx
│   │   ├── sheet.tsx               # Mobile menu
│   │   ├── splite.tsx              # Spline wrapper
│   │   ├── spotlight-aceternity.tsx
│   │   ├── spotlight-ibelick.tsx
│   │   └── textarea.tsx
│   └── navigation.tsx              # Nav bar component
│
├── 📁 lib/
│   └── utils.ts                    # Utility functions (cn)
│
├── 📁 public/                       # Static assets (empty initially)
│
├── 📄 next.config.js                # Next.js config
├── 📄 tailwind.config.ts            # Tailwind config
├── 📄 tsconfig.json                 # TypeScript config
├── 📄 package.json                  # Dependencies
├── 📄 README.md                     # Project overview
├── 📄 SETUP.md                      # Setup guide
└── 📄 INSTALLATION.md              # This file
```

---

## 🎨 Understanding the Tech Stack

### Next.js 14 (App Router)
- **File-based routing**: `app/page.tsx` = `/`, `app/about/page.tsx` = `/about`
- **Server components**: Components render on server by default
- **Client components**: Use `'use client'` directive for interactivity

### TypeScript
- **Type safety**: Catch errors at compile time
- **IntelliSense**: Better autocomplete in editors
- **Interfaces**: Define component prop types

### Tailwind CSS
- **Utility-first**: Style with utility classes
- **Dark mode**: Configured with dark theme
- **Responsive**: Mobile-first responsive design
- **Custom config**: Extended colors and animations

### shadcn/ui
- **Component library**: Pre-built, accessible components
- **Customizable**: Full control over styling
- **Location**: All components in `/components/ui`
- **Radix UI**: Built on Radix primitives

### Spline
- **3D scenes**: Interactive 3D graphics
- **Lazy loading**: Uses React Suspense
- **Cloud hosted**: Scenes load from Spline CDN

### Framer Motion
- **Animations**: Smooth transitions
- **Spring physics**: Natural motion
- **Gestures**: Interactive animations

---

## 🔧 Common Tasks

### Adding a New Page

1. Create file: `app/newpage/page.tsx`
2. Add component:
```typescript
export default function NewPage() {
  return <div>New Page</div>
}
```
3. Access at: `http://localhost:3000/newpage`

### Adding a New Component

1. Create file: `components/MyComponent.tsx`
2. Write component:
```typescript
export function MyComponent() {
  return <div>My Component</div>
}
```
3. Import and use:
```typescript
import { MyComponent } from '@/components/MyComponent'
```

### Adding shadcn Component

```bash
npx shadcn-ui@latest add [component-name]
```

Examples:
```bash
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add toast
```

### Modifying Styles

Edit `app/globals.css` for global styles:
```css
@layer base {
  body {
    @apply bg-black text-white;
  }
}
```

Or use Tailwind classes directly:
```tsx
<div className="bg-black text-white p-4">
  Content
</div>
```

---

## 🐛 Troubleshooting

### Issue: "command not found: npm"

**Solution**: Install Node.js from https://nodejs.org/

### Issue: "Port 3000 already in use"

**Solution**: Kill existing process or use different port
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Issue: Dependencies won't install

**Solution**: Clear cache and reinstall
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Issue: TypeScript errors

**Solution**: Check for type errors
```bash
npm run build
```

Fix errors shown in output.

### Issue: Spline scene not loading

**Possible causes:**
- No internet connection (Spline loads from CDN)
- Browser blocking scripts
- Firewall issues

**Solution**: Check browser console for errors

### Issue: Styles not applying

**Solution**: Restart dev server
```bash
# Press Ctrl+C to stop
# Then restart
npm run dev
```

### Issue: "Module not found"

**Solution**: Check import paths use `@/` prefix
```typescript
// ✅ Correct
import { Button } from '@/components/ui/button'

// ❌ Wrong
import { Button } from '../components/ui/button'
```

---

## 📱 Mobile Testing

### Test on Same Network

1. Find your computer's IP:
```bash
# macOS/Linux
ifconfig | grep "inet "

# Windows
ipconfig
```

2. Access from mobile device:
```
http://[your-ip]:3000
```

Example: `http://192.168.1.100:3000`

### Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Test by resizing browser window or using browser dev tools.

---

## 🚀 Deployment Options

### Vercel (Recommended)

1. Push to GitHub
2. Import on vercel.com
3. Deploy automatically

### Manual Deployment

Any platform supporting Node.js:
- **Build command**: `npm run build`
- **Start command**: `npm start`
- **Node version**: 18+
- **Port**: 3000 (or set PORT env var)

---

## 📊 Performance Tips

1. **Images**: Use Next.js `<Image>` component for optimization
2. **Fonts**: Use Next.js font optimization
3. **Code splitting**: Automatic with Next.js
4. **Lazy loading**: Spline already uses Suspense
5. **Caching**: Configured in `next.config.js`

---

## 🔐 Security Best Practices

1. **Never commit** `.env.local` (already in `.gitignore`)
2. **Update dependencies** regularly: `npm update`
3. **Audit packages**: `npm audit`
4. **Use environment variables** for sensitive data
5. **Enable HTTPS** in production

---

## 📚 Additional Resources

- **Next.js Docs**: https://nextjs.org/docs
- **React Docs**: https://react.dev
- **Tailwind Docs**: https://tailwindcss.com/docs
- **shadcn/ui Docs**: https://ui.shadcn.com
- **TypeScript Docs**: https://www.typescriptlang.org/docs

---

## ✅ Verification Checklist

After installation, verify everything works:

- [ ] `npm install` completed without errors
- [ ] `npm run dev` starts successfully
- [ ] Home page loads at http://localhost:3000
- [ ] About page loads at http://localhost:3000/about
- [ ] Navigation between pages works
- [ ] Mobile menu works (resize browser)
- [ ] 3D Spline scene loads on home page
- [ ] Images load correctly
- [ ] Contact form appears on about page
- [ ] No console errors in browser
- [ ] TypeScript compiles: `npm run build`
- [ ] Responsive design works (resize browser)

---

## 🆘 Getting Help

If you encounter issues:

1. Check this troubleshooting section
2. Review error messages carefully
3. Check browser console (F12)
4. Clear cache and restart dev server
5. Search error messages online
6. Check GitHub issues for similar problems

---

**Project Version**: 1.0.0  
**Last Updated**: November 4, 2025  
**Maintainer**: Astrex AI  

---

## 🎉 You're All Set!

The Astrex AI website should now be running successfully. Happy coding! 🚀

