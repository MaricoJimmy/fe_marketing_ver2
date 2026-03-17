# Tài Liệu Quản Lý Tuyển Dụng (HR Admin) - `fe-marketing`

Tài liệu này tổng hợp các tính năng và cấu trúc dữ liệu đang được sử dụng cho hệ thống Admin Tuyển dụng (bao gồm Quản lý CV và Quản lý Test của ứng viên) trong dự án `fe-marketing`.

## 1. Quản Lý Hồ Sơ Ứng Tuyển (CV Management)
**Đường dẫn:** `pages/tuyen-dung/admin/cv.js`

### 1.1 Tính năng chính:
- **Xem danh sách hồ sơ:** Hiển thị toàn bộ hồ sơ ứng viên với các thông tin tóm tắt (Họ tên, Email, Vị trí ứng tuyển, Ngày gửi).
- **Thống kê:** Xem nhanh số lượng tổng hồ sơ và số lượng hồ sơ đang chờ duyệt.
- **Bộ lọc:**
  - Lọc theo vị trí ứng tuyển (Tất cả hoặc từng vị trí cụ thể).
  - Lọc theo trạng thái CV (Tất cả, Chờ duyệt, Đã duyệt, Từ chối).
- **Thêm ứng viên thủ công:** Admin có thể thêm ứng viên (tên, email, sđt, vị trí) lấy từ các nền tảng khác. Hệ thống tự động chuyển trạng thái CV thành `approved` để ứng viên có thể làm bài test ngay.
- **Duyệt / Từ chối CV:** Admin có nút thao tác nhanh để `Duyệt` hoặc `Từ chối` CV đang ở trạng thái chờ.
- **Xem chi tiết ứng viên:** Click vào từng ứng viên để xem popup chi tiết chứa:
  - Thông tin liên hệ cơ bản & Link tải/xem CV.
  - Thao tác Duyệt/Từ chối CV (nếu chưa duyệt).
  - **Kết quả Test (nếu có):** Hiển thị ngay trong chi tiết CV cả kết quả Vòng 1 (MUG Interview) và Vòng 2 (Case Study), bao gồm tổng điểm, điểm chi tiết từng phần, feedback của AI, lý do loại (nếu có) và câu trả lời gốc của ứng viên.

---

## 2. Quản Lý Ứng Viên Test AI (Candidate Test Management)
**Đường dẫn:** `pages/tuyen-dung/admin/candidates.js`

### 2.1 Tính năng chính:
- **Xem danh sách kết quả test:** Hiển thị những ứng viên **đã làm** phần phỏng vấn (có điểm Vòng 1). Thông tin bao gồm Họ tên, Vị trí, Thanh điểm Vòng 1, Thanh điểm Vòng 2, Ngày giờ.
- **Thống kê:** Xem tổng số ứng viên đã test, số lượng Đạt (Pass), số lượng Chờ xét (Pending), và số lượng Bị loại (Reject).
- **Bộ lọc & Tìm kiếm:**
  - Tìm kiếm ứng viên bằng text (theo tên hoặc email).
  - Lọc theo trạng thái Vòng 1 (Tất cả, Đạt, Chờ xét, Loại).
- **Xuất dữ liệu (Export CSV):** Hỗ trợ xuất danh sách kết quả test của ứng viên ra file CSV để báo cáo.
- **Xem chi tiết kết quả test:** Tương tự trang CV, cung cấp cái nhìn chi tiết nhất về các điểm số (Breakdown), nhận xét (Feedback), và câu trả lời gốc (Raw answers) của ứng viên qua từng vòng.
- **Ghi chú nội bộ (Admin Notes):** Admin có thể tự do thêm và lưu ghi chú text (`notes`) cho từng ứng viên để team HR xem xét.

---

## 3. Cấu Trúc Dữ Liệu (Data Structure)

Cả hai trang chức năng đều đang sử dụng chung một Database là **Firebase Firestore**.

- **Collection:** `applications`
- **Các thao tác API:** Sử dụng SDK Firebase Client (Firestore) thao tác trực tiếp (`onSnapshot` lắng nghe realtime, `query` sắp xếp theo `submittedAt` giảm dần, `updateDoc` cập nhật trạng thái duyệt / ghi chú, `addDoc` thêm ứng viên thủ công).

### 3.1 Cấu trúc Document mẫu (`applications/{id}`):

```javascript
{
  "name": "Nguyễn Văn A",
  "email": "nguyenvana@example.com",
  "phone": "0901234567",
  "position": "Frontend Developer",
  "cvUrl": "https://firebase.storage.com/...",
  "submittedAt": "2026-03-15T14:15:20+07:00", // ISO String (UTC+7)
  "source": "admin_added", // (Optional) Nếu admin thêm thủ công
  
  // Trạng thái CV
  "status": "new", // Trạng thái chung khi nộp form
  "cv_status": "pending" | "approved" | "rejected",
  "cv_reviewed_at": "2026-03-15T15:00:00+07:00",
  
  // Ghi chú nội bộ dành cho Admin
  "notes": "Ứng viên có kỹ năng tốt, cần phỏng vấn kỹ hơn phần React.",

  // KẾT QUẢ VÒNG 1 (MUG Interview)
  "round1_status": "Pass" | "Pending" | "Reject",
  "round1_score_total": 85,
  "round1_score_breakdown": {
    "numeric": 20,
    "ambition": 22,
    "reasoning": 20,
    "accountability": 23
  },
  "round1_feedback": [
    "Ứng viên thể hiện tư duy logic tốt.",
    "Khả năng chịu áp lực cao."
  ],
  "round1_hard_reject_reason": "Thiếu kinh nghiệm thực tế.", // (Optional)
  "round1_answers": {
    "question_1": "Câu trả lời của ứng viên cho câu 1...",
    "question_2": "Câu trả lời của ứng viên cho câu 2..."
  },

  // KẾT QUẢ VÒNG 2 (Case Study) - (Có thể null/undefined nếu chưa thi)
  "round2_status": "Pass" | "Pending" | "Reject",
  "round2_score_total": 78,
  "round2_score_breakdown": {
    "strategy": 25,     // max 30
    "numeric": 20,      // max 30
    "decision": 18,     // max 20
    "leadership": 15    // max 20
  },
  "round2_feedback": [
    "Chiến lược triển khai hợp lý.",
    "Bỏ qua một số chỉ số tài chính quan trọng."
  ],
  "round2_answers": {
    "case_1": "Phân tích case 1..."
  }
}
```

### 3.2 Nhận xét kiến trúc lưu trữ
- Toàn bộ thông tin từ lúc Nộp CV -> Duyệt CV -> Thi Vòng 1 -> Thi Vòng 2 -> Ghi chú Admin đều được lưu tại **chung 1 document** trong collection `applications`. 
- Thiết kế này giúp việc truy vấn dữ liệu dễ dàng và có thể hiển thị toàn bộ hành trình (thông tin + bài test) của ứng viên trong 1 popup một cách thống nhất trên các màn hình admin.
/s