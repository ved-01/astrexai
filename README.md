# Astrex AI - Intelligent Automation for Modern Teams

A minimalist, premium, dark-themed website for Astrex AI, an AI automation and agent development agency.

## 🚀 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - High-quality UI components
- **Framer Motion** - Smooth animations
- **Spline** - 3D interactive scenes
- **Lucide React** - Beautiful icons

## 📦 Installation

First, install the dependencies:

```bash
npm install
```

## 🛠️ Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Build

Build the production application:

```bash
npm run build
```

## 🚀 Start Production Server

```bash
npm start
```

## 📁 Project Structure

```
astrexai/
├── app/
│   ├── about/
│   │   └── page.tsx          # About Us page
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
├── components/
│   ├── ui/                   # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── demo.tsx          # Spline demo component
│   │   ├── input.tsx
│   │   ├── splite.tsx        # Spline scene wrapper
│   │   ├── spotlight-aceternity.tsx
│   │   ├── spotlight-ibelick.tsx
│   │   └── textarea.tsx
│   └── navigation.tsx        # Navigation component
├── lib/
│   └── utils.ts              # Utility functions (cn)
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🎨 Features

### Home Page
- **Hero Section** - 3D Spline scene with animated spotlight
- **What We Do** - Service cards with icons
- **Solutions** - Image cards showcasing capabilities
- **CTA Section** - Call-to-action with gradient background

### About Page
- **About Section** - Company vision and approach
- **Why Choose Us** - Three key differentiators
- **Process Timeline** - 5-step process visualization
- **Contact Form** - Simple contact form

## 🎭 Design Philosophy

- **Dark Premium** - Black and neutral-900 backgrounds
- **Generous Spacing** - Ample whitespace and padding
- **Modern Typography** - Clean, semi-futuristic font styles
- **Glassy Cards** - Backdrop blur and transparent overlays
- **Smooth Animations** - Subtle hover effects and transitions
- **Mobile Responsive** - Fully responsive design

## 🔧 shadcn/ui Configuration

This project uses shadcn/ui components located in `/components/ui`. This is the standard location for shadcn components and ensures consistency with the shadcn CLI and component API.

### Adding New Components

To add new shadcn components:

```bash
npx shadcn-ui@latest add [component-name]
```

## 📝 Important Notes

1. **Spline 3D Scenes** - The project includes lazy-loaded Spline scenes for optimal performance
2. **Dark Mode** - The site is configured with dark mode by default
3. **Unsplash Images** - Uses Unsplash CDN for high-quality stock images
4. **Component Structure** - Follows shadcn/ui conventions for maintainability

## 🌐 Deployment

This Next.js application can be deployed to:
- Vercel (recommended)
- Netlify
- Any Node.js hosting platform

## 📄 License

Private - All rights reserved by Astrex AI

