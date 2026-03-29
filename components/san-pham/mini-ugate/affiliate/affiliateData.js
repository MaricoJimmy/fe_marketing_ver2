// Affiliate mock data & helpers (ported from Affiliate/src/data/mockData.ts)

export const DEFAULT_COMMISSION = 2000000;

export const initialAffiliates = [
  {
    id: 'aff-001', name: 'Nguyễn Văn An', email: 'an.nguyen@email.com', phone: '0901234567',
    password: 'demo123', status: 'Đã duyệt', channel: 'Freelancer', experience: '1-3 năm',
    socialLink: 'https://facebook.com/an.nguyen', createdAt: '2025-12-01', affiliateCode: 'AFF-AN001',
  },
  {
    id: 'aff-002', name: 'Trần Thị Bình', email: 'binh.tran@email.com', phone: '0912345678',
    password: 'demo123', status: 'Đã duyệt', channel: 'Agency', experience: 'Trên 3 năm',
    createdAt: '2025-12-05', affiliateCode: 'AFF-BI002',
  },
  {
    id: 'aff-003', name: 'Lê Hoàng Cường', email: 'cuong.le@email.com', phone: '0923456789',
    password: 'demo123', status: 'Chờ duyệt', channel: 'Community', experience: 'Dưới 1 năm',
    createdAt: '2026-02-28',
  },
];

export const initialCustomers = [
  { id: 'cus-001', affiliateId: 'aff-001', company: 'Công ty ABC', contactName: 'Phạm Minh Đức', email: 'duc@abc.vn', phone: '0934567890', pipelineStatus: 'Đã thanh toán', createdAt: '2026-01-10' },
  { id: 'cus-002', affiliateId: 'aff-001', company: 'Công ty XYZ', contactName: 'Hoàng Thu Hà', email: 'ha@xyz.vn', phone: '0945678901', pipelineStatus: 'Đã ký HĐ', createdAt: '2026-01-15' },
  { id: 'cus-003', affiliateId: 'aff-001', company: 'StartUp 123', contactName: 'Vũ Quang Huy', email: 'huy@startup123.vn', phone: '0956789012', pipelineStatus: 'Đang đàm phán', createdAt: '2026-02-01' },
  { id: 'cus-004', affiliateId: 'aff-002', company: 'Tech Solutions', contactName: 'Đỗ Thanh Lâm', email: 'lam@techsol.vn', phone: '0967890123', pipelineStatus: 'Đã thanh toán', createdAt: '2026-01-20' },
  { id: 'cus-005', affiliateId: 'aff-002', company: 'Digital Media Co', contactName: 'Ngô Hải Nam', email: 'nam@digimedia.vn', phone: '0978901234', pipelineStatus: 'Đã demo', createdAt: '2026-02-10' },
];

export const initialOrders = [
  { id: 'ord-001', customerId: 'cus-001', invoiceCode: 'INV-2026-001', amount: 15000000, paymentMethod: 'ZaloPay', contractSigned: true, paymentStatus: 'Paid', transactionId: 'ZLP-123456', verifiedByAdmin: true, verificationStatus: 'Đã xác thực', verifiedAt: '2026-01-12' },
  { id: 'ord-002', customerId: 'cus-002', invoiceCode: 'INV-2026-002', amount: 20000000, paymentMethod: 'Bank', contractSigned: true, paymentStatus: 'Unpaid', verifiedByAdmin: false, verificationStatus: 'Chờ duyệt' },
  { id: 'ord-003', customerId: 'cus-004', invoiceCode: 'INV-2026-003', amount: 12000000, paymentMethod: 'PayPal', contractSigned: true, paymentStatus: 'Paid', transactionId: 'PP-789012', verifiedByAdmin: true, verificationStatus: 'Đã xác thực', verifiedAt: '2026-01-22' },
];

export const initialCommissions = [
  { id: 'com-001', affiliateId: 'aff-001', orderId: 'ord-001', amount: DEFAULT_COMMISSION, status: 'Approved', month: '2026-01' },
  { id: 'com-002', affiliateId: 'aff-001', orderId: 'ord-002', amount: DEFAULT_COMMISSION, status: 'Pending', month: '2026-01' },
  { id: 'com-003', affiliateId: 'aff-002', orderId: 'ord-003', amount: DEFAULT_COMMISSION, status: 'Paid', month: '2026-01' },
];

export const initialPayouts = [
  { id: 'pay-001', affiliateId: 'aff-002', month: '2026-01', totalAmount: DEFAULT_COMMISSION, status: 'Paid', paidAt: '2026-02-05' },
];

export const ADMIN_EMAIL = 'admin@udata.ai';
export const ADMIN_PASSWORD = 'admin123';

export function formatVND(amount) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

export function generateId(prefix) {
  return `${prefix}-${Date.now().toString(36)}`;
}
