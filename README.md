# Salah.Dev — Senior Full-Stack Developer Portfolio 🚀

[![Next.js 16](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

An ultra-modern, high-performance portfolio engineered for **Salah Eddine Arbani**. This project transcends traditional landing pages, offering a high-fidelity digital hub for a Senior Developer profile, complete with interactive features, professional credentials, and a live PDF-optimized resume.

---

## ✨ High-Impact Features

### 📄 Interactive Live Resume (`/resume`)
- **Web-First Design:** A dedicated route serving an interactive CV powered by global data.
- **PDF Optimized:** Custom `@media print` engineering ensures a pixel-perfect A4 export for recruiters.
- **Dynamic Content:** Real-time rendering of experience, skills, and validated certifications.

### 🏅 Professional Certifications Hub
- **Interactive Credentials:** High-impact certification section featuring a custom **Detail Modal/Bottom Sheet**.
- **Verified Skills:** Each credential links specific technologies and verification IDs (AWS, Azure, Meta, etc.).
- **Visual Validation:** Dedicated display for official certificate images.

### 🎨 State-of-the-Art UI/UX
- **Glassmorphic Design:** Sleek, modern aesthetics with backdrop filters and soft layered shadows.
- **Framer Motion Orchestration:** Scroll-triggered animations, smooth entry transitions, and micro-interactions.
- **Intelligent Themes:** Seamless Dark/Light mode synchronization with native system preferences.

### 🌐 Full-Spectrum Development
- **Mobile First:** Responsive architecture that feels like a native app on handheld devices.
- **Desktop/Web Hybrid:** Technical support for projects spanning Web, Mobile (React Native), and Desktop (Electron).

---

## 🛠️ Technical Implementation

### Core Tech Stack
- **Architecture:** Next.js 16 (App Router) + React 19 (Server Components)
- **Styling:** Tailwind CSS 4.0 + CSS Variables + Glassmorphism
- **Animations:** Framer Motion (Orchestration & Variants)
- **Icons:** Lucide React + React Icons (Brand specific logos)
- **Type Safety:** 100% Strict TypeScript implementation

### Project Architecture
```text
├── app/               # Next.js App Router (Pages: Home, Resume, SEO)
├── components/        # Specialized Component Library
│   ├── sections/      # High-level UI sections (Hero, About, Certifications)
│   └── ...            # Shared primitives (Modals, Icons, ThemeToggle)
├── public/            # High-res assets (Brand logos, Certificates, SEO images)
├── lib/               # Centralized Data Store (Shared context across app)
```

---

## 🚀 Getting Started

1. **Clone & Install**
   ```bash
   git clone [repository-url]
   npm install
   ```

2. **Development**
   ```bash
   npm run dev
   ```

3. **Production Build**
   ```bash
   npm run build
   ```

---

## 📄 Production & Deployment

- **SEO Ready:** Optimized metadata, dynamic sitemap generation, and robots.txt configuration.
- **Performance:** 100/100 Lighthouse score potential via image optimization and code splitting.
- **Deployment:** Optimized for Vercel, Netlify, or self-hosted Docker environments.

---

Built with technical excellence by [Salah Eddine Arbani](https://github.com/salaharb12)
