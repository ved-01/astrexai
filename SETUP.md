# Astrex AI - Setup Instructions

This document provides complete setup instructions for the Astrex AI website.

## ✅ Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager

Verify installation:
```bash
node --version
npm --version
```

## 📦 Installation Steps

### 1. Install Dependencies

Navigate to the project directory and install all required packages:

```bash
cd /Users/ved/Projects/astrexai
npm install
```

This will install all dependencies listed in `package.json`, including:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui dependencies
- Spline (@splinetool/react-spline, @splinetool/runtime)
- Framer Motion
- Lucide React icons
- And more...

### 2. Verify Installation

After installation completes, verify that `node_modules` directory exists:

```bash
ls -la node_modules
```

## 🚀 Running the Development Server

Start the Next.js development server:

```bash
npm run dev
```

The application will be available at:
- **Local**: http://localhost:3000
- **Network**: http://[your-ip]:3000

You should see:
```
✓ Ready in [time]
○ Compiling / ...
✓ Compiled in [time]
```

## 🏗️ Building for Production

To create an optimized production build:

```bash
npm run build
```

This will:
1. Type-check your TypeScript files
2. Compile and optimize all code
3. Generate static assets
4. Create an optimized production bundle

### Running Production Build Locally

After building, start the production server:

```bash
npm start
```

## 📁 Project Structure Overview

```
astrexai/
├── app/                      # Next.js App Router
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/
│   ├── ui/                  # shadcn/ui components (REQUIRED LOCATION)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── demo.tsx
│   │   ├── input.tsx
│   │   ├── splite.tsx      # Spline wrapper
│   │   ├── spotlight-aceternity.tsx
│   │   ├── spotlight-ibelick.tsx
│   │   └── textarea.tsx
│   └── navigation.tsx
├── lib/
│   └── utils.ts            # cn() utility function
├── public/                  # Static assets
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🎨 shadcn/ui Configuration

### Why `/components/ui`?

This project uses shadcn/ui components which **must** live in `/components/ui` for the following reasons:

1. **CLI Compatibility** - The shadcn CLI expects components in this location
2. **Import Paths** - All components use `@/components/ui/*` imports
3. **Consistency** - Follows the shadcn/ui best practices
4. **Component Updates** - Easy to update components via CLI

### Adding New shadcn Components

To add additional shadcn/ui components:

```bash
npx shadcn-ui@latest add [component-name]
```

Examples:
```bash
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add toast
```

## 🔧 Key Technologies

### 1. **Tailwind CSS**
- Configured in `tailwind.config.ts`
- Custom dark theme variables
- Animation utilities enabled
- Responsive breakpoints

### 2. **TypeScript**
- Strict mode enabled
- Path aliases configured (`@/*`)
- Type-safe throughout

### 3. **Spline 3D Scenes**
- Lazy-loaded for performance
- Suspense boundaries
- Custom loading states

### 4. **Framer Motion**
- Smooth animations
- Spring physics
- Spotlight effects

## 🎭 Design System

### Colors
- **Background**: black, neutral-900
- **Text**: white, neutral-50, neutral-300, neutral-400
- **Accents**: purple-400, blue-400, green-400, yellow-400
- **Borders**: neutral-800, neutral-700

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: 4xl to 7xl with bold weight
- **Body**: lg to xl with neutral colors
- **Gradients**: from-neutral-50 to-neutral-400

### Spacing
- Generous padding (py-24, px-4, lg:px-8)
- Large gaps between sections
- Ample whitespace

### Components
- Backdrop blur effects
- Glassy card overlays
- Hover transitions
- Gradient backgrounds

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub/GitLab/Bitbucket
2. Import project in Vercel
3. Deploy automatically

Or use CLI:
```bash
npm install -g vercel
vercel
```

### Other Platforms

This is a standard Next.js app that can be deployed to:
- Netlify
- Railway
- Render
- AWS
- Digital Ocean
- Any Node.js hosting

Build command: `npm run build`
Start command: `npm start`
Node version: 18+

## 🐛 Troubleshooting

### Issue: Dependencies not installing
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Port 3000 already in use
```bash
# Use different port
npm run dev -- -p 3001
```

### Issue: TypeScript errors
```bash
# Check types
npm run build
```

### Issue: Spline scenes not loading
- Ensure internet connection (Spline loads from CDN)
- Check browser console for errors
- Verify Spline URL is accessible

## 📝 Environment Variables

Currently no environment variables are required. If you need to add any:

1. Create `.env.local` file in root
2. Add variables (e.g., `NEXT_PUBLIC_API_URL=...`)
3. Restart dev server

## 🔒 Security Notes

- Never commit `.env.local` to git (already in .gitignore)
- Keep dependencies updated: `npm update`
- Review security advisories: `npm audit`

## 📧 Support

For questions or issues, refer to:
- Next.js docs: https://nextjs.org/docs
- shadcn/ui docs: https://ui.shadcn.com
- Tailwind docs: https://tailwindcss.com/docs

## ✅ Verification Checklist

After setup, verify:
- [ ] `npm install` completed successfully
- [ ] `npm run dev` starts without errors
- [ ] Home page loads at http://localhost:3000
- [ ] About page accessible at http://localhost:3000/about
- [ ] Navigation works between pages
- [ ] 3D Spline scene loads on home page
- [ ] All images load correctly
- [ ] Contact form is functional
- [ ] Responsive design works on mobile
- [ ] No console errors in browser
- [ ] TypeScript compiles without errors

---

**Last Updated**: November 4, 2025
**Version**: 1.0.0

