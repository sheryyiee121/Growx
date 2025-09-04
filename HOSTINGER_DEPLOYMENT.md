# 🌐 Hostinger Deployment Guide for GrowX Website

This guide will help you deploy your Next.js static website to Hostinger hosting.

## 📋 Prerequisites

- Hostinger hosting account (Shared Hosting, VPS, or Cloud Hosting)
- Access to Hostinger File Manager or FTP credentials
- Your website built and ready (out folder)

## 🔨 Step 1: Build Your Website

### Build the Site
```bash
# On Windows
build.bat

# On Mac/Linux
chmod +x build.sh
./build.sh

# Or manually
npm install
npm run export
```

After building, you'll have an `out/` folder with all your static files.

## 🚀 Step 2: Deploy to Hostinger

### Option 1: Using Hostinger File Manager (Recommended)

1. **Login to Hostinger Control Panel**
   - Go to [hpanel.hostinger.com](https://hpanel.hostinger.com)
   - Login with your credentials

2. **Access File Manager**
   - Click on "File Manager" from the left sidebar
   - Navigate to your domain's root directory (usually `public_html`)

3. **Upload Your Files**
   - **IMPORTANT**: Upload the **contents** of the `out/` folder, not the folder itself
   - Select all files from your `out/` folder
   - Upload them to the root of `public_html`
   - This should include: `index.html`, `_next/` folder, `images/` folder, etc.

4. **Verify Upload**
   - You should see files like:
     - `index.html` (homepage)
     - `aboutus/` folder
     - `services/` folder
     - `products/` folder
     - `contact/` folder
     - `blog/` folder
     - `_next/` folder (JavaScript and CSS)
     - `images/` folder

### Option 2: Using FTP (Alternative)

1. **Get FTP Credentials**
   - In Hostinger Control Panel, go to "Files" → "FTP Accounts"
   - Note your FTP hostname, username, and password

2. **Use FTP Client**
   - Download FileZilla or any FTP client
   - Connect using your FTP credentials
   - Navigate to `public_html` directory
   - Upload all contents from your `out/` folder

## ⚙️ Step 3: Configure Hostinger Settings

### 1. Set Default Document
- In Hostinger Control Panel, go to "Advanced" → "Default Document"
- Ensure `index.html` is at the top of the list

### 2. Enable Gzip Compression (Optional)
- Go to "Advanced" → "Gzip Compression"
- Enable for better performance

### 3. Set Cache Headers (Optional)
- Go to "Advanced" → "Cache Control"
- Set appropriate cache headers for static assets

## 🔍 Step 4: Test Your Website

1. **Visit Your Domain**
   - Go to your domain (e.g., `yourdomain.com`)
   - Test all pages and functionality

2. **Check Forms**
   - Test contact form submissions
   - Verify Google Apps Script integration works

3. **Test Responsiveness**
   - Check mobile and desktop views
   - Test navigation between pages

## 🚨 Common Issues & Solutions

### Issue: 404 Errors on Pages
**Solution**: Ensure you uploaded the **contents** of the `out/` folder, not the folder itself.

### Issue: CSS/JS Not Loading
**Solution**: Check that the `_next/` folder was uploaded correctly.

### Issue: Images Not Showing
**Solution**: Verify the `images/` folder was uploaded to the root.

### Issue: Forms Not Working
**Solution**: 
- Check browser console for errors
- Verify Google Apps Script URL is correct
- Ensure no CORS issues

### Issue: Slow Loading
**Solution**:
- Enable Gzip compression in Hostinger
- Check image file sizes
- Enable browser caching

## 📱 Mobile Optimization

Hostinger automatically provides:
- ✅ Mobile-friendly hosting
- ✅ Fast loading times
- ✅ SSL certificates
- ✅ CDN integration (on higher plans)

## 💰 Cost-Effective Hosting

Hostinger offers excellent value:
- **Shared Hosting**: Starting at ~$2.99/month
- **VPS Hosting**: Starting at ~$3.95/month
- **Cloud Hosting**: Starting at ~$9.99/month

## 🎯 Your Site is Live!

After following these steps, your GrowX website will be:
- ✅ Hosted on reliable Hostinger servers
- ✅ Accessible worldwide
- ✅ Fast and responsive
- ✅ SEO-optimized
- ✅ Form-functional (Google Apps Script)

## 📞 Hostinger Support

If you need help:
- **24/7 Live Chat**: Available in Hostinger Control Panel
- **Knowledge Base**: [hostinger.com/help](https://hostinger.com/help)
- **Community Forum**: [community.hostinger.com](https://community.hostinger.com)

---

**🎉 Congratulations! Your GrowX website is now live on Hostinger!**
