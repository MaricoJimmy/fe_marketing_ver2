# Udata FE Marketing

Dự án Frontend Marketing (Trang chủ & giới thiệu sản phẩm) của hệ sinh thái **Udata**, được xây dựng bằng công nghệ hiện đại đảm bảo hiệu năng cao, trải nghiệm người dùng mượt mà và giao diện Dark Mode ấn tượng.

## 🚀 Công nghệ sử dụng
- **Core:** React.js + Vite (Build tool siêu tốc)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Router:** React Router v6

---

## 💻 Hướng dẫn chạy dự án (Môi trường Local)

### 1. Yêu cầu hệ thống
- Môi trường chạy: [Node.js](https://nodejs.org/) (khuyến nghị phiên bản 18+).
- Package Manager: `npm` (hoặc `yarn`).

### 2. Cài đặt thư viện
Mở Terminal / Command Prompt tại thư mục dự án và chạy lệnh:
```bash
npm install
```

### 3. Cấu hình biến môi trường
Dự án cung cấp sẵn file `.env.example`. Hãy copy nội dung file này và tạo thành file mới tên là `.env` ở cùng thư mục:
```bash
cp .env.example .env
```
*(Bạn có thể mở file `.env` để cấu hình lại các thông số nếu cần).*

### 4. Khởi chạy dự án (Môi trường phát triển)
```bash
npm run dev
```
Sau đó truy cập vào link: `http://localhost:5173` trên trình duyệt.

### 5. Build dự án (Môi trường Production)
```bash
npm run build
```
Toàn bộ source code sau khi đóng gói sẽ nằm ở thư mục `dist/`. Bạn có thể dùng thư mục này để đưa lên server chạy thực tế.

---

## 🐳 Hướng dẫn deploy bằng Docker

Dự án đã được cấu hình sẵn `Dockerfile` với Nginx để tối ưu hoá việc phục vụ các file tĩnh (static files) và xử lý routing chuẩn của React (SPA).

### 1. Build Docker image
Chạy lệnh sau tại thư mục gốc chứa `Dockerfile`:
```bash
docker build -t udata-fe-marketing .
```

### 2. Khởi chạy Docker container
```bash
docker run -d -p 8080:80 --name udata-fe udata-fe-marketing
```
Sau khi chạy thành công, truy cập ứng dụng của bạn tại: `http://localhost:8080`
