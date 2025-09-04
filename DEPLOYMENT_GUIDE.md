# 🚀 Deployment Guide for GrowX Website

This guide will help you build and deploy your Next.js website as a static site.

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Access to a static hosting service (Netlify, Vercel, GitHub Pages, etc.)

## 🔨 Building the Site

### 1. Install Dependencies
```bash
npm install
```

### 2. Build for Production
```bash
npm run export
```

This command will:
- Build your Next.js application
- Generate static files in the `out/` folder
- Create a fully static version of your site

### 3. Verify the Build
After building, you should see:
- A new `out/` folder in your project root
- Static HTML, CSS, and JavaScript files
- All your pages as individual HTML files

## 🌐 Deployment Options

### Option 1: Netlify (Recommended)
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run export`
4. Set publish directory: `out`
5. Deploy!

### Option 2: Vercel
1. Push your code to GitHub
2. Import to Vercel
3. Vercel will automatically detect Next.js and deploy

### Option 3: GitHub Pages
1. Build your site: `npm run export`
2. Push the `out/` folder contents to a `gh-pages` branch
3. Enable GitHub Pages in your repository settings

### Option 4: Hostinger (Recommended for Cost-Effectiveness)
1. Build: `npm run export`
2. Upload the contents of the `out/` folder to Hostinger's `public_html` directory
3. Use the provided `.htaccess` file for optimization
4. See `HOSTINGER_DEPLOYMENT.md` for detailed instructions

### Option 5: Any Other Static Hosting
1. Build: `npm run export`
2. Upload the contents of the `out/` folder to your hosting service

## 📁 What's in the `out/` Folder

After building, your `out/` folder will contain:
```
out/
├── _next/          # Static assets and JavaScript
├── images/         # Your image files
├── index.html      # Homepage
├── aboutus/        # About page
├── services/       # Services page
├── products/       # Products page
├── contact/        # Contact page
├── get-started/    # Get Started page
├── blog/           # Blog page
├── faq/            # FAQ page
└── ...             # Other static files
```

## ⚠️ Important Notes

### Static Export Limitations
- **No Server-Side Rendering (SSR)**: All pages are pre-rendered at build time
- **No API Routes**: Server-side API endpoints won't work
- **No Dynamic Routes**: All routes must be known at build time
- **No Middleware**: Next.js middleware won't work

### What Still Works
- ✅ All your React components
- ✅ Client-side navigation
- ✅ Form submissions (to external services like Google Apps Script)
- ✅ Static assets (images, CSS, JS)
- ✅ SEO meta tags
- ✅ Responsive design

### Form Submissions
Your Google Apps Script integration will continue to work because:
- Forms submit to external URLs
- No server-side processing is required
- All logic runs in the browser

## 🚀 Quick Deploy Commands

```bash
# Clean previous builds
npm run clean

# Build for production
npm run export

# Preview locally (optional)
npx serve out

# The 'out' folder is ready for deployment!
```

## 🔧 Troubleshooting

### Build Errors
- Ensure all dependencies are installed: `npm install`
- Check for any server-side code that won't work in static export
- Verify all image paths are correct

### Missing Pages
- Ensure all pages are properly exported
- Check that dynamic routes are handled correctly
- Verify the `trailingSlash: true` setting

### Form Issues
- Test form submissions locally first
- Verify Google Apps Script URL is correct
- Check browser console for any JavaScript errors

## 📞 Support

If you encounter any issues:
1. Check the build output for errors
2. Verify all file paths and imports
3. Test locally before deploying
4. Check browser console for client-side errors

---

**Happy Deploying! 🎉**

Your GrowX website is now ready to be deployed as a static site to any hosting service.
