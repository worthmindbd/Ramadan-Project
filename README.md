# 🌙 রমজান ১৪৪৭ | Ramadan 2026 — Bangladesh Calendar

<div align="center">

![Ramadan Calendar](https://img.shields.io/badge/Ramadan-1447%20AH-gold?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48dGV4dCB5PSIuOWVtIiBmb250LXNpemU9IjkwIj7wn4yZPC90ZXh0Pjwvc3ZnPg==)
![Bangladesh](https://img.shields.io/badge/Bangladesh-UTC%2B6-green?style=for-the-badge)
![Static Site](https://img.shields.io/badge/Static-HTML%20%2F%20CSS%20%2F%20JS-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-purple?style=for-the-badge)

**A beautiful, bilingual Ramadan calendar for Bangladesh with accurate prayer times.**

[🌐 Live Demo](#) • [📅 Calendar](#features) • [🚀 Deploy](#deployment)

</div>

---

## ✨ Features

- 🌙 **Accurate Sehri & Iftar Times** — Official data from Islamic Foundation Bangladesh (ইসলামিক ফাউন্ডেশন বাংলাদেশ)
- 🕌 **5 Daily Prayer Times** — Fajr, Dhuhr, Asr, Maghrib, Isha for all 30 days of Ramadan
- 🤲 **Authentic Duas** — Sehri Niyyah, Iftar Dua, and After-Iftar Dua with Arabic, transliteration & meaning
- ⏱️ **Live Countdown Timer** — Counts down to Ramadan start, next Sehri, or next Iftar
- 🌐 **Bilingual** — Full English & বাংলা (Bangla) support with one-click toggle
- 🇧🇩 **Bangladesh Timezone** — All times in BST (UTC+6)
- 🎨 **Glassmorphism Design** — Modern dark UI with gold & emerald accents
- ✨ **Animated** — Twinkling stars, floating particles, glowing moon
- 📱 **Fully Responsive** — Works on mobile, tablet, and desktop
- ♿ **Accessible** — Semantic HTML, ARIA labels, keyboard navigable

---

## 📅 Ramadan 2026 Data

| Info | Details |
|------|---------|
| **Start** | 1 Ramadan 1447 AH = **February 19, 2026** |
| **End** | 30 Ramadan 1447 AH = **March 20, 2026** |
| **Location** | Dhaka, Bangladesh |
| **Source** | Islamic Foundation Bangladesh |
| **Timezone** | BST — Bangladesh Standard Time (UTC+6) |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Structure | HTML5 (Semantic) |
| Styling | Vanilla CSS (Glassmorphism, Animations) |
| Logic | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts — Noto Sans Bengali, Inter, Amiri |
| Dependencies | **None** — Zero external libraries |

---

## 🚀 Local Development

```bash
# Clone the repo
git clone https://github.com/worthmindbd/Ramadan-Project.git
cd Ramadan-Project

# Serve locally (any static server works)
npx serve .

# Or with Python
python3 -m http.server 3000

# Open in browser
open http://localhost:3000
```

---

## 📦 Deployment

### Option 1 — Dokploy (Recommended)

See the [Dokploy Deployment Guide](#dokploy-deployment-guide) section below.

### Option 2 — GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` / `root`
4. Click **Save** — your site will be live at `https://worthmindbd.github.io/Ramadan-Project`

### Option 3 — Netlify (Drag & Drop)

1. Go to [netlify.com](https://netlify.com) → **Add new site** → **Deploy manually**
2. Drag your project folder onto the Netlify drop zone
3. Done — instant live URL!

### Option 4 — Vercel

```bash
npx vercel --prod
```

---

## 🕌 Dokploy Deployment Guide

Dokploy is a self-hosted PaaS (like Heroku) that runs on your own VPS.

### Prerequisites
- A running Dokploy instance (VPS with Dokploy installed)
- This repo pushed to GitHub

### Steps

**1. Open your Dokploy dashboard**
```
http://YOUR_VPS_IP:3000
```

**2. Create a new Application**
- Click **"Create Application"**
- Name: `ramadan-calendar`
- Type: **Static** (or **Docker** if using Nginx)

**3. Connect GitHub Repository**
- Go to **Source** tab
- Select **GitHub**
- Authorize Dokploy to access your GitHub account
- Choose repo: `worthmindbd/Ramadan-Project`
- Branch: `main`

**4. Configure Build Settings**

| Dokploy Field | Value |
|---------------|-------|
| **Build Type** | `Dockerfile` |
| **Dockerfile Path** | `./Dockerfile` |
| **Docker Context Path** | `.` |
| **Port** | `1447` 🌙 |

**5. Set Domain (Optional)**
- Go to **Domains** tab
- Add your custom domain or use the Dokploy-generated subdomain
- Enable **HTTPS** (Let's Encrypt auto-SSL)

**6. Deploy**
- Click **"Deploy"**
- Watch the build logs — Nginx will serve the site on port `1447`
- Your site is live! 🎉

### Auto-Deploy on Push
- In Dokploy, go to **Settings** → enable **"Auto Deploy"**
- Every `git push` to `main` will automatically redeploy

---

## 🤲 Duas Reference

### Sehri Niyyah (রোজার নিয়ত)
> نَوَيْتُ اَنْ اُصُوْمَ غَدًا مِّنْ شَهْرِ رَمْضَانَ الْمُبَارَكِ فَرْضًا لَكَ يَا اللهُ فَتَقَبَّلْ مِنِّيْ اِنَّكَ اَنْتَ السَّمِيْعُ الْعَلِيْم

### Iftar Dua (ইফতারের দোয়া)
> اَللَّهُمَّ لَكَ صُمْتُ وَعَلَى رِزْقِكَ اَفْطَرْتُ
*(Abu Dawud: 2357)*

### After Iftar (ইফতারের পরের দোয়া)
> ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الأَجْرُ إِنْ شَاءَ اللَّهُ
*(Abu Dawud: 2357)*

---

## 📁 Project Structure

```
Ramadan-Project/
├── index.html      # Main HTML — structure & layout
├── style.css       # All styles — glassmorphism, animations, responsive
├── script.js       # Logic — countdown, calendar, language toggle, prayer times
└── README.md       # This file
```

---

## 🌍 Contributing

Pull requests are welcome! If you find any inaccurate prayer times or want to add support for other cities, feel free to open an issue.

---

## 📜 License

MIT License — free to use, modify, and distribute.

---

<div align="center">

Made with ❤️ for the Muslims of Bangladesh

**রমজান মোবারক 🌙**

</div>
