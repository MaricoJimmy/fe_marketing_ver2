# Udata New — Marketing Landing Page

## Tổng quan

Website landing page marketing cho **Udata** — nền tảng Observability & Security doanh nghiệp ("The Intelligence Layer for Modern Enterprise"). Trang đơn (single-page), nội dung kết hợp tiếng Anh và tiếng Việt, thiết kế dark glassmorphism với nhiều hiệu ứng animation.

---

## Tech Stack

| Thành phần | Công nghệ | Phiên bản |
|---|---|---|
| UI Framework | React | ^19.2.6 |
| Build Tool | Vite | ^8.0.12 |
| CSS Framework | Tailwind CSS | ^4.3.0 |
| CSS Processing | PostCSS + Autoprefixer | — |
| Linter | ESLint | ^10.3.0 |
| Ngôn ngữ | JavaScript (JSX) | — |
| Module System | ESM | — |

**Không sử dụng:** Router, State Management, HTTP Client, TypeScript, Animation Library, Testing Framework.

---

## Cấu trúc thư mục

```
udata_new/
├── index.html                    # Entry HTML (dark mode mặc định, Google Fonts, Material Icons)
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
│
├── public/
│   ├── favicon.png
│   ├── product/                  # Logo sản phẩm (WebP)
│   │   ├── uboard-logo.webp
│   │   ├── mini-ugate-logo.webp
│   │   ├── ugate-logo.webp
│   │   └── uzero-logo.webp
│   └── videos/                   # Video nền hero section (MP4)
│       ├── contact-video.mp4
│       ├── uboard.mp4
│       ├── ugate.mp4
│       └── uzero.mp4
│
└── src/
    ├── main.jsx                  # React entry point
    ├── App.jsx                   # Root component — bố cục trang
    ├── index.css                 # Global styles, Tailwind, custom animations
    ├── App.css                   # (Unused — Vite scaffold leftover)
    └── components/
        ├── GlobalDataFlow.jsx    # Animation nền — data streams
        ├── Header.jsx            # Navigation bar cố định
        ├── HeroSection.jsx       # Hero — video nền xoay vòng
        ├── ProductDataFlow.jsx   # Sơ đồ luồng dữ liệu sản phẩm
        ├── TrustedBy.jsx         # Marquee — đối tác tin tưởng
        ├── CoreInsight.jsx       # Core insight — orbital animation
        ├── BentoGrid.jsx         # Feature grid — accordion
        ├── Workflow.jsx          # Quy trình — scroll-driven sticky
        ├── CaseStudies.jsx       # Case study cards
        ├── ExperienceCTA.jsx     # CTA section
        └── Footer.jsx            # Footer
```

---

## Components

### Thứ tự render (App.jsx)

```
GlobalDataFlow (fixed background)
│
├── Header
├── HeroSection
├── ProductDataFlow
├── TrustedBy
├── CoreInsight
├── BentoGrid
├── Workflow
├── CaseStudies
├── ExperienceCTA
└── Footer
```

### Chi tiết từng component

| Component | Mô tả | Đặc điểm nổi bật |
|---|---|---|
| **GlobalDataFlow** | Lớp nền animation cố định (z-index 0, pointer-events: none) | 12 animated vertical "data streams" với pulsing nodes màu xanh |
| **Header** | Navigation bar cố định trên cùng | Glass effect (backdrop-blur), logo Udata từ Google CDN, nút "Get A Demo" gradient |
| **HeroSection** | Hero section toàn màn hình | Video nền xoay vòng (4 video MP4), tự động chuyển video khi kết thúc, 2 CTA buttons |
| **ProductDataFlow** | Sơ đồ luồng dữ liệu hệ sinh thái | 3 sản phẩm vệ tinh (Uboard, Mini Ugate, Uzero) kết nối đến UGate Core qua SVG paths animated |
| **TrustedBy** | Marquee ngang vô hạn | 5 tên công ty, CSS keyframe animation, pause-on-hover, hiệu ứng grayscale → color |
| **CoreInsight** | Bố cục 2 cột: tiêu đề + orbital diagram | Hub "Udata Core" trung tâm với icons vệ tinh quay quanh (CSS orbit animation) |
| **BentoGrid** | "The Enterprise Nervous System" | Cột trái: accordion features, cột phải: dashboard screenshot (Google CDN) |
| **Workflow** | Quy trình 4 bước — scroll-driven | Container 400vh, sticky panel, IntersectionObserver + scroll event, accordion mở rộng/thu gọn theo scroll |
| **CaseStudies** | 3 case study cards responsive | Quiri Hotel, Amber Capital, iCanfield Vietnam — hover effects (lift, zoom, opacity), tag fade-in |
| **ExperienceCTA** | Call-to-action section | 2 pulsing concentric circles, heading + 2 buttons (glowing cyan + outlined) |
| **Footer** | Footer 4 cột | Logo + copyright, Platform links, Company links, "Hồ sơ năng lực" download — tất cả placeholder href="#" |

---

## Design System

### Màu sắc

Hệ thống màu theo Material Design 3 với ~60 custom tokens:

- **Surface colors:** `surface`, `on-surface`, `surface-container`, `surface-dim`...
- **Semantic colors:** `primary`, `secondary`, `tertiary`, `error`, `success`...
- **Brand colors:** `electric-cyan`, `deep-navy`, `soft-emerald`, `sustainability-green`, `glow-blue`
- Dark mode duy nhất (`class="dark"` trên `<html>`)

### Typography

| Font | Dùng cho | Nguồn |
|---|---|---|
| **Geist** | Headings / Display | Google Fonts |
| **Inter** | Body text / Titles | Google Fonts |
| **JetBrains Mono** | Labels / Monospace | Google Fonts |

### Icons

- **Material Symbols Outlined** (Google icon font, load trong `index.html`)

### Hiệu ứng đặc biệt

- **Glassmorphism:** `backdrop-blur`, `.glass-card`, semi-transparent backgrounds
- **Gradient text:** `bg-gradient-to-r + bg-clip-text text-transparent`
- **Custom animations** (trong `index.css`):
  - `waving-vertical` — hiệu ứng sóng dọc
  - `pulse-flow` — pulse cho data flow nodes
  - `orbit` — quay vòng cho orbital diagram
  - `drift` — trôi nổi nhẹ
  - `pulse-node` — pulse cho sustainability nodes
- **Scroll-driven UI:** Workflow section sử dụng IntersectionObserver + scroll events

---

## Dependencies

### Runtime (2)

| Package | Version |
|---|---|
| `react` | ^19.2.6 |
| `react-dom` | ^19.2.6 |

### Dev Dependencies (9+)

| Package | Version | Mục đích |
|---|---|---|
| `@vitejs/plugin-react` | ^6.0.1 | Vite React support (Oxc) |
| `tailwindcss` | ^4.3.0 | Utility-first CSS |
| `@tailwindcss/postcss` | ^4.3.0 | Tailwind v4 PostCSS plugin |
| `postcss` | ^8.5.15 | CSS processing |
| `autoprefixer` | ^10.5.0 | Vendor prefixing |
| `eslint` | ^10.3.0 | Linter |
| `@eslint/js` | ^10.0.1 | ESLint JS config |
| `eslint-plugin-react-hooks` | ^7.1.1 | Hooks linting |
| `eslint-plugin-react-refresh` | ^0.5.2 | React Refresh linting |
| `globals` | ^17.6.0 | ESLint globals |
| `@types/react` | ^19.2.14 | Type definitions |
| `@types/react-dom` | ^19.2.3 | Type definitions |

---

## Scripts

```bash
npm run dev       # Chạy dev server (Vite)
npm run build     # Build production
npm run preview   # Preview build production
npm run lint      # Chạy ESLint
```

---

## Ghi chú

- **Hình ảnh ngoài:** Logo Udata, dashboard screenshot, và case study images đều load từ `lh3.googleusercontent.com` — cần kết nối internet
- **`src/assets/`:** Chứa `hero.png`, `react.svg`, `vite.svg` — leftover từ Vite scaffold, không được sử dụng
- **`src/App.css`:** Leftover từ Vite scaffold, gần như không sử dụng
- **Nội dung Việt:** Workflow section (4 bước), CaseStudies heading, Footer ("Hồ sơ năng lực")
- **Links:** Tất cả links trong Footer đều là placeholder `href="#"`
