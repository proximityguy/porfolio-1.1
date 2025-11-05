# Netlify Deployment Guide

## 📝 Steps to Deploy on Netlify

### Method 1: Deploy via Netlify Dashboard (Recommended)

1. **Login to Netlify**

   - Go to https://www.netlify.com/
   - Sign up or login with your GitHub account

2. **Import Your Project**

   - Click on "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Authorize Netlify to access your GitHub repositories
   - Select your repository: `proximityguy/porfolio-1.1`

3. **Configure Build Settings**

   ```
   Build command: npm run build
   Publish directory: .next
   ```

4. **Environment Variables** (if needed)

   - No environment variables required for basic deployment

5. **Deploy**

   - Click "Deploy site"
   - Wait for the build to complete (usually 2-3 minutes)

6. **Custom Domain** (Optional)
   - Go to "Domain settings"
   - Add your custom domain or use the free Netlify subdomain

### Method 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Navigate to your project
cd d:\Manish-Porfolio\Portfolio-1.1\portfolio-website

# Login to Netlify
netlify login

# Initialize Netlify
netlify init

# Deploy
netlify deploy --prod
```

## ⚙️ Build Configuration

Your `netlify.toml` file (if you want to add it):

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

## 🔧 Common Issues and Solutions

### Issue 1: Build Fails

**Solution:** Make sure all dependencies are in `package.json` and commit `package-lock.json`

### Issue 2: Images Not Loading

**Solution:** Ensure all images are in the `public` folder and paths are correct

### Issue 3: 404 Errors

**Solution:** Next.js should handle routing automatically. Check your Next.js version.

## 📱 After Deployment

1. **Test Your Site**

   - Check all pages and links
   - Test on mobile devices
   - Verify images are loading

2. **Performance Optimization**

   - Netlify automatically provides CDN
   - Enable asset optimization in Netlify settings
   - Consider adding Netlify Edge Functions if needed

3. **Continuous Deployment**
   - Any push to the `main` branch will trigger automatic deployment
   - Create a `develop` branch for testing changes before production

## 🌐 Your Repository

Repository URL: https://github.com/proximityguy/porfolio-1.1

## 📊 Monitoring

After deployment, you can monitor:

- Build logs in Netlify dashboard
- Analytics (requires Netlify Analytics)
- Form submissions (if you add a contact form)
- Site performance

## 🚀 Next Steps

1. Get your Netlify URL (e.g., `portfolio-manish.netlify.app`)
2. Share your portfolio!
3. Consider adding:
   - Google Analytics
   - Contact form with Netlify Forms
   - Blog section
   - Dark/Light theme toggle

---

**Note:** Make sure your local dev server is stopped before deploying to avoid any conflicts.

For more help, visit: https://docs.netlify.com/integrations/frameworks/next-js/
