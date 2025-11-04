# ⚡ Astrex AI - Quick Start Guide

Get the website running in **3 simple steps**!

---

## 🎯 Prerequisites

You need **Node.js** installed on your computer.

**Check if you have it:**
```bash
node --version
```

**Don't have Node.js?** Download it here: https://nodejs.org/

---

## 🚀 3-Step Installation

### Step 1: Navigate to Project

```bash
cd /Users/ved/Projects/astrexai
```

### Step 2: Install Dependencies

```bash
npm install
```

**Wait 30-60 seconds** for installation to complete.

### Step 3: Start Development Server

```bash
npm run dev
```

---

## 🎉 Done!

Open your browser and go to:

**→ http://localhost:3000**

You should see the Astrex AI website running!

---

## 📱 Pages

- **Home**: http://localhost:3000
- **About**: http://localhost:3000/about

---

## 🛑 Stop the Server

Press `Ctrl + C` in the terminal.

---

## 🔄 Restart the Server

```bash
npm run dev
```

---

## 🏗️ Build for Production

When ready to deploy:

```bash
# Build the site
npm run build

# Run production server
npm start
```

---

## ❓ Troubleshooting

### Port 3000 already in use?

Use a different port:
```bash
npm run dev -- -p 3001
```

Then open: http://localhost:3001

### Installation errors?

Clear cache and try again:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Need more help?

Check the detailed guides:
- **INSTALLATION.md** - Complete installation guide
- **SETUP.md** - Detailed setup instructions
- **README.md** - Project overview

---

## 📂 Project Structure

```
astrexai/
├── app/
│   ├── page.tsx        ← Home page
│   └── about/
│       └── page.tsx    ← About page
├── components/
│   ├── navigation.tsx  ← Nav bar
│   └── ui/             ← UI components
└── package.json        ← Dependencies
```

---

## 🎨 What You'll See

### Home Page Features:
- ✨ 3D interactive hero section
- 💼 Service cards (AI Process Audits, Agentic Systems, etc.)
- 🖼️ Solution showcases with images
- 🎯 Call-to-action section

### About Page Features:
- 📖 Company vision and approach
- 🏆 Why choose us (3 pillars)
- 🔄 5-step process timeline
- 📧 Contact form

---

## 🔧 Making Changes

### Edit Homepage

File: `app/page.tsx`

### Edit About Page

File: `app/about/page.tsx`

### Edit Navigation

File: `components/navigation.tsx`

### Edit Styles

File: `app/globals.css`

**Changes auto-reload** in development mode!

---

## 🌐 Deploy to Internet

### Recommended: Vercel

1. Push code to GitHub
2. Go to vercel.com
3. Import your repository
4. Deploy (automatic)

**Or use Vercel CLI:**
```bash
npm install -g vercel
vercel
```

---

## ✅ Quick Checklist

After running `npm run dev`, verify:

- [ ] Server started without errors
- [ ] Can access http://localhost:3000
- [ ] Home page loads with 3D scene
- [ ] About page accessible
- [ ] Navigation works
- [ ] Mobile menu works (resize browser)
- [ ] No errors in terminal or browser console

---

## 🎓 Next Steps

1. **Customize Content**: Edit the copy in `app/page.tsx` and `app/about/page.tsx`
2. **Change Colors**: Modify `tailwind.config.ts` and `app/globals.css`
3. **Add Pages**: Create new files in `app/` directory
4. **Add Components**: Create new components in `components/`
5. **Deploy**: Push to GitHub and deploy on Vercel

---

## 📚 Learn More

- **Next.js**: https://nextjs.org/learn
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs
- **shadcn/ui**: https://ui.shadcn.com

---

## 💡 Pro Tips

1. **Hot Reload**: Save files and see changes instantly
2. **Console**: Check browser console (F12) for errors
3. **Terminal**: Keep terminal open to see build logs
4. **Mobile Test**: Access via `http://[your-ip]:3000` on mobile
5. **Production**: Always test with `npm run build` before deploying

---

**That's it! You're ready to build with Astrex AI.** 🚀

Need more details? Check:
- `INSTALLATION.md` - Full installation guide
- `SETUP.md` - Complete setup documentation
- `README.md` - Project overview
- `PROJECT_SUMMARY.md` - Technical details

**Happy coding!** ✨

