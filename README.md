# Prime8s on APE - Vercel Deployment

3,333 Pixelated Gorillas on ApeChain

## 🚀 Quick Deploy to Vercel

### Method 1: GitHub (Recommended)

1. **Create a GitHub repository**
   - Go to https://github.com/new
   - Create a new repository (e.g., `prime8s-website`)
   - Don't initialize with README

2. **Upload these files to GitHub**
   - Upload all files from this folder to your new repository
   - Or use Git commands:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git branch -M main
     git remote add origin https://github.com/YOUR-USERNAME/prime8s-website.git
     git push -u origin main
     ```

3. **Deploy on Vercel**
   - Go to https://vercel.com/new
   - Click "Import Git Repository"
   - Select your GitHub repository
   - Click "Deploy"
   - Done! Your site will be live in ~1 minute

### Method 2: Direct Upload (Fastest)

1. **Install Vercel CLI** (if you haven't already)
   ```bash
   npm install -g vercel
   ```

2. **Deploy from this folder**
   ```bash
   cd /path/to/prime8s-vercel
   vercel
   ```

3. **Follow the prompts**
   - Login to Vercel
   - Answer the setup questions
   - Your site will deploy automatically

### Method 3: Drag & Drop

1. Go to https://vercel.com/new
2. Click "Browse" or drag this entire folder
3. Drop all files at once
4. Click "Deploy"

## 🌐 Custom Domain Setup

After deployment, connect your domain `prime8sonape.xyz`:

1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Add your domain: `prime8sonape.xyz`
4. Follow Vercel's DNS instructions:
   - Add A record pointing to Vercel's IP
   - Or add CNAME record pointing to your Vercel URL

## 📁 Project Structure

```
prime8s-vercel/
├── index.html       # Main HTML file
├── styles.css       # All CSS styling
├── script.js        # JavaScript interactions
├── vercel.json      # Vercel configuration
└── README.md        # This file
```

## ✨ Features

- **Retro pixel-art aesthetic** with modern animations
- **Responsive design** works on all devices
- **Smooth scrolling** navigation
- **Interactive hover effects** and parallax
- **CRT scanline effect** for authentic retro feel
- **Optimized for performance** on Vercel's edge network

## 🎨 Customization

### Change Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --jungle-dark: #0a1612;
    --ape-green: #3ddc84;
    --banana-yellow: #ffd700;
    /* ... */
}
```

### Update Content
Edit text directly in `index.html` sections:
- Hero section
- Collection cards
- Story content
- Footer links

### Modify Animations
Adjust timing and effects in `styles.css` under `@keyframes` sections

## 🔧 Tech Stack

- Pure HTML5, CSS3, JavaScript (no frameworks needed)
- Google Fonts: VT323, Orbitron, Bebas Neue
- Vercel for hosting and CDN

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🦍 Ape Together Strong!

Built with 🍌 for the Prime8s community
