import { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/header/Header';
import Footer from '@/components/common/Footer';
import { AffiliateProvider, useAffiliate } from '@/components/san-pham/mini-ugate/affiliate/AffiliateContext';
import { formatVND, DEFAULT_COMMISSION } from '@/components/san-pham/mini-ugate/affiliate/affiliateData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import {
  Users, FileText, DollarSign, Clock, CheckCircle, Copy, LogOut,
  Plus, Send, BookOpen, ExternalLink, TrendingUp,
} from 'lucide-react';

const PIPELINE_STATUSES = ['Mới', 'Đã liên hệ', 'Đã demo', 'Đang đàm phán', 'Đã ký HĐ', 'Đã thanh toán', 'Hủy'];

const statusColor = (s) => {
  const map = {
    'Mới': 'bg-gray-100 text-gray-600', 'Đã liên hệ': 'bg-blue-50 text-blue-600',
    'Đã demo': 'bg-yellow-50 text-yellow-600', 'Đang đàm phán': 'bg-indigo-50 text-indigo-600',
    'Đã ký HĐ': 'bg-green-50 text-green-600', 'Đã thanh toán': 'bg-green-500 text-white',
    'Hủy': 'bg-red-50 text-red-600', 'Chưa có': 'bg-gray-100 text-gray-400',
    'Chờ duyệt': 'bg-yellow-50 text-yellow-600', 'Đã xác thực': 'bg-green-50 text-green-600',
    'Pending': 'bg-yellow-50 text-yellow-600', 'Approved': 'bg-green-50 text-green-600',
    'Paid': 'bg-green-500 text-white', 'Unpaid': 'bg-red-50 text-red-600',
  };
  return map[s] || 'bg-gray-100 text-gray-600';
};

function PortalContent() {
  const router = useRouter();
  const { user, state, isMounted, logout, addCustomer, updateCustomerStatus, submitOrder } = useAffiliate();
  const [tab, setTab] = useState('overview');
  const [newCusOpen, setNewCusOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const [newCus, setNewCus] = useState({ company: '', contactName: '', email: '', phone: '', pipelineStatus: 'Mới' });
  const [newOrder, setNewOrder] = useState({ customerId: '', invoiceCode: '', amount: '', paymentMethod: 'Bank', transactionId: '', note: '' });

  // Prevent hydration mismatch
  if (!isMounted) return null;

  if (!user || user.type !== 'affiliate') {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="bg-white rounded-2xl border p-6 text-center max-w-sm">
          <p className="mb-4">Bạn cần đăng nhập để truy cập portal.</p>
          <Button onClick={() => router.push('/san-pham/mini-ugate/affiliate/login')}>Đăng nhập</Button>
        </div>
      </div>
    );
  }

  const aff = user.affiliate;
  const myCustomers = state.customers.filter(c => c.affiliateId === aff.id);
  const myCustomerIds = myCustomers.map(c => c.id);
  const myOrders = state.orders.filter(o => myCustomerIds.includes(o.customerId));
  const myCommissions = state.commissions.filter(c => c.affiliateId === aff.id);
  const myPayouts = state.payouts.filter(p => p.affiliateId === aff.id);

  const stats = {
    total: myCustomers.length,
    processing: myCustomers.filter(c => !['Đã ký HĐ', 'Đã thanh toán', 'Hủy'].includes(c.pipelineStatus)).length,
    signed: myCustomers.filter(c => c.pipelineStatus === 'Đã ký HĐ').length,
    paid: myCustomers.filter(c => c.pipelineStatus === 'Đã thanh toán').length,
    commPending: myCommissions.filter(c => c.status === 'Pending').reduce((s, c) => s + c.amount, 0),
    commApproved: myCommissions.filter(c => c.status === 'Approved').reduce((s, c) => s + c.amount, 0),
    commPaid: myCommissions.filter(c => c.status === 'Paid').reduce((s, c) => s + c.amount, 0),
  };

  const referralLink = `https://udata.ai/ref/${aff.affiliateCode}`;

  const handleAddCustomer = () => {
    if (!newCus.company || !newCus.contactName) { toast.error('Điền đầy đủ thông tin'); return; }
    addCustomer(newCus);
    setNewCus({ company: '', contactName: '', email: '', phone: '', pipelineStatus: 'Mới' });
    setNewCusOpen(false);
    toast.success('Thêm khách hàng thành công!');
  };

  const handleSubmitOrder = () => {
    if (!newOrder.customerId || !newOrder.invoiceCode || !newOrder.amount) { toast.error('Điền đầy đủ thông tin'); return; }
    submitOrder({
      customerId: newOrder.customerId, invoiceCode: newOrder.invoiceCode,
      amount: parseFloat(newOrder.amount), paymentMethod: newOrder.paymentMethod,
      contractSigned: true,
      paymentStatus: ['ZaloPay', 'PayPal'].includes(newOrder.paymentMethod) ? 'Paid' : 'Unpaid',
      transactionId: newOrder.transactionId || undefined, note: newOrder.note || undefined,
    });
    setNewOrder({ customerId: '', invoiceCode: '', amount: '', paymentMethod: 'Bank', transactionId: '', note: '' });
    setOrderOpen(false);
    toast.success('Gửi yêu cầu duyệt thành công!');
  };

  const leaderboard = state.affiliates.filter(a => a.status === 'Đã duyệt').map(a => {
    const paidCount = state.customers.filter(c => c.affiliateId === a.id && c.pipelineStatus === 'Đã thanh toán').length;
    const totalComm = state.commissions.filter(c => c.affiliateId === a.id && c.status !== 'Pending').reduce((s, c) => s + c.amount, 0);
    return { name: a.name, paidCount, totalComm, isMe: a.id === aff.id };
  }).sort((a, b) => b.paidCount - a.paidCount);

  const handleLogout = () => { logout(); router.push('/san-pham/mini-ugate/affiliate/login'); };

  const tabs = [
    { id: 'overview', label: 'Tổng quan' },
    { id: 'customers', label: 'Khách hàng' },
    { id: 'commission', label: 'Hoa hồng' },
    { id: 'leaderboard', label: 'Bảng xếp hạng' },
    { id: 'resources', label: 'Tài liệu' },
  ];

  return (
    <div className="bg-gray-50 min-h-[60vh]">
      {/* Sub header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <div className="font-bold text-lg bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Affiliate Portal</div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500 hidden sm:inline">Xin chào, {aff.name}</span>
            <span className="inline-block px-2 py-1 bg-gray-100 rounded text-xs font-mono">{aff.affiliateCode}</span>
            <Button variant="ghost" size="sm" onClick={handleLogout}><LogOut className="w-4 h-4" /></Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Tab bar */}
        <div className="flex flex-wrap gap-1 mb-6 bg-gray-100 p-1 rounded-lg">
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${tab === t.id ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
              {t.label}
            </button>
          ))}
        </div>

        {/* Overview */}
        {tab === 'overview' && (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {[
                { label: 'Tổng khách', value: stats.total, icon: Users, color: 'text-blue-600' },
                { label: 'Đang xử lý', value: stats.processing, icon: Clock, color: 'text-yellow-600' },
                { label: 'Đã ký HĐ', value: stats.signed, icon: FileText, color: 'text-indigo-600' },
                { label: 'Đã thanh toán', value: stats.paid, icon: CheckCircle, color: 'text-green-600' },
              ].map((s, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 p-5 flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center ${s.color}`}><s.icon className="w-6 h-6" /></div>
                  <div><p className="text-sm text-gray-500">{s.label}</p><p className="text-2xl font-bold">{s.value}</p></div>
                </div>
              ))}
            </div>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {[
                { label: 'Pending', value: formatVND(stats.commPending), status: 'Pending' },
                { label: 'Approved', value: formatVND(stats.commApproved), status: 'Approved' },
                { label: 'Paid', value: formatVND(stats.commPaid), status: 'Paid' },
              ].map((s, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 p-5 text-center">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs ${statusColor(s.status)}`}>{s.label}</span>
                  <p className="text-xl font-bold mt-2">{s.value}</p>
                  <p className="text-xs text-gray-400">Hoa hồng tháng này</p>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <p className="text-sm font-medium mb-2">Link giới thiệu (tracking)</p>
              <div className="flex gap-2">
                <Input readOnly value={referralLink} className="font-mono text-sm" />
                <Button variant="outline" size="icon" onClick={() => { navigator.clipboard.writeText(referralLink); toast.success('Đã copy!'); }}><Copy className="w-4 h-4" /></Button>
              </div>
              <p className="text-xs text-gray-400 mt-2">* Hoa hồng vẫn yêu cầu xác thực hóa đơn/thanh toán</p>
            </div>
          </>
        )}

        {/* Customers */}
        {tab === 'customers' && (
          <>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Khách hàng & Đơn hàng</h2>
              <div className="flex gap-2">
                <Dialog open={newCusOpen} onOpenChange={setNewCusOpen}>
                  <DialogTrigger asChild><Button size="sm"><Plus className="w-4 h-4 mr-1" /> Thêm khách</Button></DialogTrigger>
                  <DialogContent><DialogHeader><DialogTitle>Thêm khách hàng mới</DialogTitle></DialogHeader>
                    <div className="space-y-3">
                      <div><Label>Công ty *</Label><Input value={newCus.company} onChange={e => setNewCus(p => ({ ...p, company: e.target.value }))} /></div>
                      <div><Label>Người liên hệ *</Label><Input value={newCus.contactName} onChange={e => setNewCus(p => ({ ...p, contactName: e.target.value }))} /></div>
                      <div><Label>Email</Label><Input value={newCus.email} onChange={e => setNewCus(p => ({ ...p, email: e.target.value }))} /></div>
                      <div><Label>SĐT</Label><Input value={newCus.phone} onChange={e => setNewCus(p => ({ ...p, phone: e.target.value }))} /></div>
                      <Button className="w-full" onClick={handleAddCustomer}>Thêm khách hàng</Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <Dialog open={orderOpen} onOpenChange={setOrderOpen}>
                  <DialogTrigger asChild><Button size="sm" variant="outline"><Send className="w-4 h-4 mr-1" /> Gửi yêu cầu duyệt</Button></DialogTrigger>
                  <DialogContent><DialogHeader><DialogTitle>Nhập Invoice & Yêu cầu xác thực</DialogTitle></DialogHeader>
                    <div className="space-y-3">
                      <div>
                        <Label>Khách hàng *</Label>
                        <Select value={newOrder.customerId} onValueChange={v => setNewOrder(p => ({ ...p, customerId: v }))}>
                          <SelectTrigger><SelectValue placeholder="Chọn khách" /></SelectTrigger>
                          <SelectContent className="bg-white">{myCustomers.map(c => <SelectItem key={c.id} value={c.id}>{c.company} - {c.contactName}</SelectItem>)}</SelectContent>
                        </Select>
                      </div>
                      <div><Label>Invoice Code *</Label><Input value={newOrder.invoiceCode} onChange={e => setNewOrder(p => ({ ...p, invoiceCode: e.target.value }))} placeholder="INV-2026-XXX" /></div>
                      <div><Label>Giá trị (VND) *</Label><Input type="number" value={newOrder.amount} onChange={e => setNewOrder(p => ({ ...p, amount: e.target.value }))} /></div>
                      <div>
                        <Label>Phương thức thanh toán</Label>
                        <Select value={newOrder.paymentMethod} onValueChange={v => setNewOrder(p => ({ ...p, paymentMethod: v }))}>
                          <SelectTrigger><SelectValue /></SelectTrigger>
                          <SelectContent className="bg-white">
                            <SelectItem value="Bank">Bank Transfer</SelectItem>
                            <SelectItem value="ZaloPay">ZaloPay</SelectItem>
                            <SelectItem value="PayPal">PayPal</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      {['ZaloPay', 'PayPal'].includes(newOrder.paymentMethod) && (
                        <div><Label>Transaction ID</Label><Input value={newOrder.transactionId} onChange={e => setNewOrder(p => ({ ...p, transactionId: e.target.value }))} /></div>
                      )}
                      <div><Label>Ghi chú</Label><Textarea value={newOrder.note} onChange={e => setNewOrder(p => ({ ...p, note: e.target.value }))} /></div>
                      <Button className="w-full" onClick={handleSubmitOrder}>Gửi yêu cầu</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b"><tr>
                  <th className="px-4 py-3 text-left font-medium text-gray-500">Công ty</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-500">Người LH</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-500 hidden md:table-cell">Email/SĐT</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-500">Trạng thái</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-500 hidden lg:table-cell">Invoice</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-500 hidden lg:table-cell">Xác thực</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-500">Hành động</th>
                </tr></thead>
                <tbody className="divide-y divide-gray-100">
                  {myCustomers.map(cus => {
                    const order = myOrders.find(o => o.customerId === cus.id);
                    return (
                      <tr key={cus.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium">{cus.company}</td>
                        <td className="px-4 py-3">{cus.contactName}</td>
                        <td className="px-4 py-3 hidden md:table-cell text-gray-400">{cus.email}<br />{cus.phone}</td>
                        <td className="px-4 py-3"><span className={`px-2 py-1 rounded-full text-xs ${statusColor(cus.pipelineStatus)}`}>{cus.pipelineStatus}</span></td>
                        <td className="px-4 py-3 hidden lg:table-cell font-mono text-xs">{order?.invoiceCode || '—'}</td>
                        <td className="px-4 py-3 hidden lg:table-cell">{order ? <span className={`px-2 py-1 rounded-full text-xs ${statusColor(order.verificationStatus)}`}>{order.verificationStatus}</span> : '—'}</td>
                        <td className="px-4 py-3">
                          <Select onValueChange={v => updateCustomerStatus(cus.id, v)}>
                            <SelectTrigger className="w-[130px] h-8 text-xs"><SelectValue placeholder="Cập nhật" /></SelectTrigger>
                            <SelectContent className="bg-white">{PIPELINE_STATUSES.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                          </Select>
                        </td>
                      </tr>
                    );
                  })}
                  {myCustomers.length === 0 && <tr><td colSpan={7} className="px-4 py-8 text-center text-gray-400">Chưa có khách hàng nào</td></tr>}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* Commission */}
        {tab === 'commission' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Chi tiết hoa hồng</h3>
              <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 border-b"><tr>
                    <th className="px-4 py-3 text-left font-medium text-gray-500">Đơn hàng</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-500">Tháng</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-500">Số tiền</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-500">Trạng thái</th>
                  </tr></thead>
                  <tbody className="divide-y divide-gray-100">
                    {myCommissions.map(c => (
                      <tr key={c.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-mono text-xs">{c.orderId}</td>
                        <td className="px-4 py-3">{c.month}</td>
                        <td className="px-4 py-3 font-semibold">{formatVND(c.amount)}</td>
                        <td className="px-4 py-3"><span className={`px-2 py-1 rounded-full text-xs ${statusColor(c.status)}`}>{c.status}</span></td>
                      </tr>
                    ))}
                    {myCommissions.length === 0 && <tr><td colSpan={4} className="px-4 py-8 text-center text-gray-400">Chưa có hoa hồng</td></tr>}
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Lịch sử chi trả</h3>
              <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 border-b"><tr>
                    <th className="px-4 py-3 text-left font-medium text-gray-500">Tháng</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-500">Tổng hoa hồng</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-500">Trạng thái</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-500">Ngày chi trả</th>
                  </tr></thead>
                  <tbody className="divide-y divide-gray-100">
                    {myPayouts.map(p => (
                      <tr key={p.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">{p.month}</td>
                        <td className="px-4 py-3 font-semibold">{formatVND(p.totalAmount)}</td>
                        <td className="px-4 py-3"><span className={`px-2 py-1 rounded-full text-xs ${statusColor(p.status)}`}>{p.status}</span></td>
                        <td className="px-4 py-3">{p.paidAt || '—'}</td>
                      </tr>
                    ))}
                    {myPayouts.length === 0 && <tr><td colSpan={4} className="px-4 py-8 text-center text-gray-400">Chưa có lịch sử chi trả</td></tr>}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Leaderboard */}
        {tab === 'leaderboard' && (
          <>
            <h3 className="text-lg font-semibold mb-3">Bảng xếp hạng Affiliate</h3>
            <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b"><tr>
                  <th className="px-4 py-3 text-left font-medium text-gray-500 w-16">Hạng</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-500">Affiliate</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-500"># Paid</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-500">Tổng hoa hồng</th>
                </tr></thead>
                <tbody className="divide-y divide-gray-100">
                  {leaderboard.map((l, i) => (
                    <tr key={i} className={l.isMe ? 'bg-blue-50/50' : 'hover:bg-gray-50'}>
                      <td className="px-4 py-3">{i < 3 ? ['🥇', '🥈', '🥉'][i] : <span className="text-gray-400">{i + 1}</span>}</td>
                      <td className="px-4 py-3 font-medium">{l.name} {l.isMe && <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-600 rounded text-xs">Bạn</span>}</td>
                      <td className="px-4 py-3">{l.paidCount}</td>
                      <td className="px-4 py-3 font-semibold">{formatVND(l.totalComm)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* Resources */}
        {tab === 'resources' && (
          <>
            <h3 className="text-lg font-semibold mb-4">Tài liệu hỗ trợ</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: BookOpen, title: 'Script bán hàng', desc: 'Kịch bản tư vấn & chốt đơn MiniUgate cho các tình huống phổ biến.' },
                { icon: CheckCircle, title: 'Checklist demo', desc: 'Danh sách các bước demo sản phẩm chi tiết, đảm bảo không bỏ sót.' },
                { icon: ExternalLink, title: 'Link sản phẩm', desc: 'Trang sản phẩm MiniUgate chính thức trên Udata.', link: '/san-pham/mini-ugate' },
              ].map((r, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                    <r.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h4 className="font-semibold mb-1">{r.title}</h4>
                  <p className="text-sm text-gray-500">{r.desc}</p>
                  {r.link && <a href={r.link} className="text-sm text-blue-600 mt-2 inline-flex items-center gap-1">Xem trang <ExternalLink className="w-3 h-3" /></a>}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function AffiliatePortalPage() {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <AffiliateProvider>
        <PortalContent />
      </AffiliateProvider>
      <Footer />
    </div>
  );
}

AffiliatePortalPage.getLayout = function getLayout(page) { return page; };
export async function getServerSideProps() { return { props: {} }; }
