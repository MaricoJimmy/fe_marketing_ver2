# Udata - Industrial AIoT Platform (Next.js Version)

![Udata AIoT Platform](public/product/logo_2_backup.png)

> **Udata** là nền tảng hệ thống phân tích dữ liệu và tự động hóa vận hành công nghiệp tiên tiến. Phiên bản này là quá trình nâng cấp và chuyển đổi (migration) toàn diện từ React/Vite sang **Next.js 15 (App Router)** để đạt được hiệu suất tối đa, chuẩn hóa SEO và tối ưu hóa tốc độ tải trang.

---

## 🚀 Tính Năng Nổi Bật (Key Features)

- **Chuẩn hóa SEO 100%:** Áp dụng Server-Side Rendering (SSR) giúp Google Bot đọc toàn bộ nội dung tĩnh, khắc phục nhược điểm trắng trang của React thuần.
- **Hiệu suất cực cao:** Áp dụng hệ thống routing tiên tiến của Next.js, tự động phân mảnh mã (Code Splitting) và bộ đệm (Caching).
- **Thiết kế thân thiện Mobile:** Nâng cấp cấu hình Tailwind CSS quét toàn bộ hệ thống (`app/`, `components/`) đi kèm thẻ Viewport cố định chống vỡ giao diện trên điện thoại.
- **Hệ thống đa ngôn ngữ (i18n):** Tích hợp Context chuyển đổi tiếng Việt (VI) và tiếng Anh (EN) mượt mà mà không cần tải lại trang.
- **Tối ưu hình ảnh & Video:** Background sinh động, hiệu ứng mượt mà với Framer Motion.
- **Kết nối Firebase:** Form đăng ký dùng thử gửi trực tiếp dữ liệu (NoSQL) lên Firebase Cloud Firestore.

---

## 🛠️ Công Nghệ Sử Dụng (Tech Stack)

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **UI & Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Database / Backend:** [Firebase SDK](https://firebase.google.com/) (Firestore)
- **Icons & Fonts:** Material Symbols Outlined, Google Fonts (Geist, Inter, JetBrains Mono)
- **Deployment:** Docker (Standalone Mode)

---

## 📂 Cấu Trúc Thư Mục (Project Structure)

```text
udata_next/
├── app/                  # Chứa toàn bộ các trang (Pages) và Layout theo chuẩn App Router
│   ├── (routes)          # Các thư mục như /careers, /dung-thu, /product...
│   ├── globals.css       # Cấu hình Tailwind gốc
│   └── layout.jsx        # Root Layout chứa Meta tags, Fonts, và Providers
├── components/           # Các component tái sử dụng (Header, Footer, HeroSection...)
├── contexts/             # React Contexts (LanguageContext...)
├── lib/                  # Tiện ích và cấu hình kết nối (Firebase, Utilities...)
├── public/               # Chứa các file tĩnh: Hình ảnh, Video, Fonts, PDF, Favicon
├── .env                  # Lưu trữ biến môi trường (Firebase Keys)
├── Dockerfile            # Cấu hình đóng gói Docker tối ưu cho Next.js
├── tailwind.config.js    # Cấu hình hệ thống thiết kế CSS
└── next.config.mjs       # Cấu hình Next.js (bật chế độ standalone, SVGR...)
```

---

## ⚙️ Yêu Cầu Cài Đặt (Prerequisites)

- Node.js bản **18.x** trở lên
- npm, yarn, hoặc pnpm
- Docker & Docker Compose (Nếu triển khai bằng Container)

---

## 💻 Hướng Dẫn Chạy Môi Trường Phát Triển (Local Development)

**1. Clone dự án và cài đặt thư viện:**
```bash
git clone <repository_url>
cd udata_next
npm install
```

**2. Thiết lập Biến môi trường (.env):**
Tạo file `.env` (hoặc `.env.local`) ở thư mục gốc của dự án và khai báo cấu hình Firebase của Udata:
```env
NEXT_PUBLIC_FIREBASE_API_KEY="AIzaSyA7CLDzd..."
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="udata-tuyen-dung.firebaseapp.com"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="udata-tuyen-dung"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="udata-tuyen-dung.firebasestorage.app"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="854493699104"
NEXT_PUBLIC_FIREBASE_APP_ID="1:854493699104:web:ed743f..."
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID="G-SYPLWSGPEL"
```

**3. Khởi chạy Server dev:**
```bash
npm run dev
# Mở trình duyệt và truy cập http://localhost:3000
```
> **Mẹo:** Nếu muốn kiểm tra giao diện trên điện thoại cùng mạng WiFi, hãy chạy lệnh `npm run dev` và tắt Windows Firewall cho Port 3000, sau đó truy cập bằng địa chỉ IP LAN của máy tính.

---

## 🐳 Hướng Dẫn Triển Khai Docker (Production Deployment)

Dự án đã được cấu hình bật chế độ **`output: "standalone"`** trong `next.config.mjs`. Chế độ này giúp Docker bỏ qua các module không cần thiết và chỉ đóng gói những file Node.js tinh gọn nhất, giảm dung lượng Image từ ~1.5GB xuống chỉ còn **~150MB**.

**1. Build Docker Image:**
```bash
docker build -t udata-next-frontend:latest .
```

**2. Chạy Container:**
```bash
docker run -d \
  --name udata-app \
  -p 3000:3000 \
  --restart unless-stopped \
  udata-next-frontend:latest
```

**3. Kiểm tra Logs (nếu cần):**
```bash
docker logs -f udata-app
```

---

## 🐛 Xử Lý Các Lỗi Thường Gặp (Troubleshooting)

1. **Lỗi Hydration Mismatch (Server vs Client):**
   - Đã được khắc phục bằng thuộc tính `suppressHydrationWarning` trong thẻ `<body>` ở file `layout.jsx`. Nếu vẫn bị, hãy đảm bảo không có Browser Extension nào chỉnh sửa thẻ HTML trước khi React tải xong.

2. **Giao diện Tailwind bị vỡ trên Mobile:**
   - Nếu xảy ra, hãy đảm bảo bạn đã khởi động lại `npm run dev`. File `tailwind.config.js` đã được fix để trỏ đúng mảng `content` vào thư mục `app` và `components`.

3. **Gửi form Firebase không thành công:**
   - Đảm bảo bạn đã điền đúng `NEXT_PUBLIC_FIREBASE_API_KEY` trong file `.env`. Biến của Next.js bắt buộc phải có tiền tố `NEXT_PUBLIC_` mới lộ diện được cho trình duyệt sử dụng.
