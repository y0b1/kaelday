# Birthday Website for GitHub Pages 🎉

A beautiful, customizable birthday website that you can host on GitHub Pages with your own photos!

## Quick Start

### 1. **Add Your Photos**
   - Place a **background photo** in `images/background.jpg`
   - Place a **foreground/profile photo** in `images/foreground.jpg`
   - Recommended sizes:
     - `background.jpg`: 1920x1080 or larger (will be cropped to fit)
     - `foreground.jpg`: 300x400 pixels or adjust in CSS

### 2. **Customize the Text**
   Edit `index.html` to change:
   - **Title**: Change "Happy Birthday!" on line 27
   - **Subtitle**: Edit the subtitle text on line 28
   - **Message**: Update the main message on line 40

### 3. **Upload to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Birthday website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

### 4. **Enable GitHub Pages**
   - Go to your GitHub repository settings
   - Scroll to "GitHub Pages" section
   - Select "Deploy from a branch"
   - Choose `main` branch and save
   - Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

## Features ✨

- 🎈 **Animated Balloons** - Floating balloons that dance across the screen
- 🎊 **Confetti Effect** - Confetti appears on page load and when clicking the photo
- 📸 **Custom Photos** - Easy to replace background and foreground images
- 📱 **Responsive Design** - Looks great on mobile, tablet, and desktop
- 🎨 **Beautiful Animations** - Smooth fade-ins and pop animations
- ⌨️ **Interactive** - Press spacebar to trigger more confetti

## Customization Tips

### Change the Message
Open `index.html` and modify the text inside the `<h1>`, `<p>` tags

### Adjust Colors
Edit `style.css` to change:
- Balloon colors (search for `--color: #`)
- Text color (modify color properties)
- Background brightness (search for `brightness`)

### Modify Image Positions/Sizes
In `style.css`, adjust:
- `.foreground-image` - Change width to make photo bigger/smaller
- `.background` - Adjust `background-position` and `background-size`

### Add More Text
Simply add more `<p>` tags in the `.text-content` div in `index.html`

## File Structure

```
.
├── index.html       # Main HTML file
├── style.css        # All styling and animations
├── script.js        # Confetti and interactive effects
├── images/          # Folder for your photos
│   ├── background.jpg   # Background photo
│   └── foreground.jpg   # Foreground/profile photo
└── README.md        # This file
```

## Troubleshooting

- **Photos not showing?** Make sure the filenames are exactly `background.jpg` and `foreground.jpg` (case-sensitive)
- **Images pixelated?** Use high-resolution photos (at least 1MB each)
- **Layout looks weird on mobile?** The design is responsive and should adjust automatically

## License

Feel free to use and modify this for personal use! Enjoy celebrating! 🎉
