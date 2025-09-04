# 🚀 Quick Deployment Guide

## Build Your Site

### Option 1: Using the Build Script (Recommended)
```bash
# On Windows
build.bat

# On Mac/Linux
chmod +x build.sh
./build.sh
```

### Option 2: Manual Build
```bash
npm install
npm run export
```

## What Happens Next

1. **Build Process**: Next.js will create an `out/` folder
2. **Static Files**: All your pages become static HTML files
3. **Ready to Deploy**: Upload the `out/` folder contents to any hosting service

## Deploy to Popular Services

### Netlify
1. Push code to GitHub
2. Connect repo to Netlify
3. Build command: `npm run export`
4. Publish directory: `out`

### Vercel
1. Push code to GitHub
2. Import to Vercel
3. Auto-deploys

### GitHub Pages
1. Build: `npm run export`
2. Push `out/` contents to `gh-pages` branch
3. Enable Pages in repo settings

### Any Static Hosting
1. Build: `npm run export`
2. Upload `out/` folder contents

## ⚠️ Important Notes

- **Forms Work**: Google Apps Script integration continues to work
- **No Server Needed**: Site runs entirely in the browser
- **All Features**: Responsive design, navigation, animations all work
- **SEO Ready**: Meta tags and static generation for search engines

## 🎯 Your Site is Ready!

After building, you'll have a professional, fast-loading website that can be hosted anywhere for free or very low cost.

---

**Need Help?** Check `DEPLOYMENT_GUIDE.md` for detailed instructions.
