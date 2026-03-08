import { useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from '@/components/header/Header';
import Footer from '@/components/common/Footer';
import { AffiliateProvider, useAffiliate } from '@/components/san-pham/mini-ugate/affiliate/AffiliateContext';
import { formatVND } from '@/components/san-pham/mini-ugate/affiliate/affiliateData';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import {
  Users, CheckCircle, DollarSign, ShieldAlert, LogOut, UserCheck, UserX,
  FileCheck, CreditCard, Download, AlertTriangle,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const getStatusBadgeClass = (s) => {
  const map = {
    'Chờ duyệt': 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border-transparent',
    'Đã duyệt': 'bg-green-100 text-green-800 hover:bg-green-200 border-transparent',
    'Từ chối': 'bg-red-100 text-red-800 hover:bg-red-200 border-transparent',
    'Vô hiệu hóa': 'bg-gray-100 text-gray-800 hover:bg-gray-200 border-transparent',
    'Chưa có': 'bg-gray-100 text-gray-800 hover:bg-gray-200 border-transparent',
    'Đã xác thực': 'bg-green-100 text-green-800 hover:bg-green-200 border-transparent',
    'Pending': 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border-transparent',
    'Approved': 'bg-green-100 text-green-800 hover:bg-green-200 border-transparent',
    'Paid': 'bg-green-600 text-white hover:bg-green-700 border-transparent',
    'Unpaid': 'bg-red-100 text-red-800 hover:bg-red-200 border-transparent',
  };
  return map[s] || '';
};

function StatusBadge({ status }) {
  return <Badge className={`${getStatusBadgeClass(status)} font-medium`}>{status}</Badge>;
}

function AffiliatesTab({ state, approveAffiliate, rejectAffiliate, deactivateAffiliate }) {
  const affiliates = state.affiliates;
  return (
    <Card className="border-none shadow-md">
      <CardHeader className="border-b bg-gray-50/50">
        <CardTitle className="text-lg">Quản lý tài khoản Affiliate</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50/50 hover:bg-gray-50/50">
              <TableHead className="pl-6 h-12">Tên</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="hidden md:table-cell">SĐT</TableHead>
              <TableHead className="hidden md:table-cell">Kênh</TableHead>
              <TableHead>Trạng thái</TableHead>
              <TableHead className="pr-6 text-right">Hành động</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {affiliates.length > 0 ? (
              affiliates.map(a => (
                <TableRow key={a.id} className="cursor-pointer group">
                  <TableCell className="pl-6 font-medium text-gray-900">{a.name}</TableCell>
                  <TableCell className="text-gray-500">{a.email}</TableCell>
                  <TableCell className="hidden md:table-cell text-gray-500">{a.phone}</TableCell>
                  <TableCell className="hidden md:table-cell text-gray-500">{a.channel}</TableCell>
                  <TableCell><StatusBadge status={a.status} /></TableCell>
                  <TableCell className="pr-6 text-right">
                    <div className="flex justify-end gap-2 shrink-0">
                      {a.status === 'Chờ duyệt' ? (
                        <>
                          <Button size="sm" variant="outline" className="h-8 border-green-200 text-green-700 hover:bg-green-50 hover:text-green-800 transition-colors" onClick={() => { approveAffiliate(a.id); toast.success(`Đã duyệt ${a.name}`); }}><UserCheck className="w-4 h-4 mr-1 md:hidden" /> <span className="hidden md:inline">Phê duyệt</span></Button>
                          <Button size="sm" variant="outline" className="h-8 border-red-200 text-red-700 hover:bg-red-50 hover:text-red-800 transition-colors" onClick={() => { rejectAffiliate(a.id); toast.info(`Đã từ chối ${a.name}`); }}><UserX className="w-4 h-4 mr-1 md:hidden" /> <span className="hidden md:inline">Từ chối</span></Button>
                        </>
                      ) : null}
                      {a.status === 'Đã duyệt' ? (
                        <Button size="sm" variant="outline" className="h-8 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors" onClick={() => { deactivateAffiliate(a.id); toast.info(`Đã vô hiệu hóa ${a.name}`); }}>Vô hiệu hóa</Button>
                      ) : null}
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="h-32 text-center text-muted-foreground">Không có người dùng nào</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

function OrdersTab({ state, verifyOrder }) {
  const { orders, customers } = state;
  return (
    <Card className="border-none shadow-md">
      <CardHeader className="border-b bg-gray-50/50">
        <CardTitle className="text-lg">Xác thực đơn hàng</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50/50 hover:bg-gray-50/50">
              <TableHead className="pl-6 h-12">Invoice Code</TableHead>
              <TableHead>Khách hàng</TableHead>
              <TableHead>Giá trị chuyển đổi</TableHead>
              <TableHead>Cổng thanh toán</TableHead>
              <TableHead>Mã giao dịch (TxID)</TableHead>
              <TableHead>Trạng thái</TableHead>
              <TableHead className="pr-6 text-right">Hành động</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.length > 0 ? (
              orders.map(o => {
                const cus = customers.find(c => c.id === o.customerId);
                return (
                  <TableRow key={o.id}>
                    <TableCell className="pl-6 font-mono text-xs font-semibold text-blue-700">{o.invoiceCode}</TableCell>
                    <TableCell className="font-medium">{cus?.company || '—'}</TableCell>
                    <TableCell className="font-semibold">{formatVND(o.amount)}</TableCell>
                    <TableCell>
                      <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">{o.paymentMethod}</span>
                    </TableCell>
                    <TableCell className="font-mono text-xs text-gray-500">{o.transactionId || '—'}</TableCell>
                    <TableCell><StatusBadge status={o.verificationStatus} /></TableCell>
                    <TableCell className="pr-6 text-right">
                      {o.verificationStatus === 'Chờ duyệt' ? (
                        <Button size="sm" variant="default" className="h-8 shadow-sm tracking-wide bg-blue-600 hover:bg-blue-700" onClick={() => { verifyOrder(o.id); toast.success('Đã xác thực đơn hàng!'); }}>
                          <FileCheck className="w-4 h-4 mr-1.5" /> Xác nhận
                        </Button>
                      ) : o.verificationStatus === 'Đã xác thực' ? (
                        <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">✓ Đã xử lý</span>
                      ) : null}
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="h-32 text-center text-muted-foreground">Trống</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

function CommissionsTab({ state, approveCommission }) {
  const { commissions, affiliates } = state;
  return (
    <Card className="border-none shadow-md">
      <CardHeader className="border-b bg-gray-50/50">
        <CardTitle className="text-lg">Danh sách Hoa hồng chờ duyệt</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50/50 hover:bg-gray-50/50">
              <TableHead className="pl-6 h-12">Affiliate</TableHead>
              <TableHead>Ref ID (Order)</TableHead>
              <TableHead>Kỳ ghi nhận</TableHead>
              <TableHead>Hoa hồng (VNĐ)</TableHead>
              <TableHead>Trạng thái</TableHead>
              <TableHead className="pr-6 text-right">Hành động</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {commissions.length > 0 ? (
              commissions.map(c => {
                const aff = affiliates.find(a => a.id === c.affiliateId);
                return (
                  <TableRow key={c.id}>
                    <TableCell className="pl-6 font-medium text-gray-900">{aff?.name || '—'}</TableCell>
                    <TableCell className="font-mono text-xs text-blue-700">{c.orderId}</TableCell>
                    <TableCell className="text-gray-600 tracking-wider text-sm">{c.month}</TableCell>
                    <TableCell className="font-semibold text-emerald-600">{formatVND(c.amount)}</TableCell>
                    <TableCell><StatusBadge status={c.status} /></TableCell>
                    <TableCell className="pr-6 text-right">
                      {c.status === 'Pending' ? (
                         <Button size="sm" variant="default" className="h-8 bg-blue-600 hover:bg-blue-700 px-4" onClick={() => { approveCommission(c.id); toast.success('Đã duyệt hoa hồng!'); }}>Chuyển Approved</Button>
                      ) : (
                         <span className="text-xs text-gray-400 border border-gray-200 px-2 py-1 rounded inline-block">Đã xử lý</span>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="h-32 text-center text-muted-foreground">Không có hoa hồng nào cần xử lý</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

function PayoutsTab({ state, generatePayout, markPayoutPaid }) {
  const { payouts, affiliates } = state;
  const exportCSV = () => {
    const rows = [['Affiliate', 'Month', 'Amount', 'Status']];
    payouts.forEach(p => {
      const aff = affiliates.find(a => a.id === p.affiliateId);
      rows.push([aff?.name || '', p.month, p.totalAmount.toString(), p.status]);
    });
    const csv = rows.map(r => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'payouts.csv'; a.click();
    toast.success('Xuất file Payouts.csv thành công!');
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-2">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Chi trả hàng tháng</h2>
          <p className="text-sm text-gray-500">Thanh toán hoa hồng đã duyệt theo chu kỳ cho đối tác.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="h-10 border-gray-300 text-gray-700 hover:bg-gray-50 text-sm shadow-sm" onClick={exportCSV}>
            <Download className="w-4 h-4 mr-2" /> Tải về CSV
          </Button>
          <Button className="h-10 bg-gray-900 hover:bg-black text-white text-sm shadow-md" onClick={() => {
            const month = new Date().toISOString().slice(0, 7);
            affiliates.filter(a => a.status === 'Đã duyệt').forEach(a => generatePayout(a.id, month));
            toast.success('Đã chạy lệnh tổng hợp chi trả!');
          }}>
            <CreditCard className="w-4 h-4 mr-2" /> Tổng hợp kỳ hiện tại
          </Button>
        </div>
      </div>
      
      <Card className="border-none shadow-md">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50/50 hover:bg-gray-50/50">
                <TableHead className="pl-6 h-12">Affiliate Đối tác</TableHead>
                <TableHead>Cú pháp CK (Kỳ)</TableHead>
                <TableHead>Tổng phải trả</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Ngày thực chi</TableHead>
                <TableHead className="pr-6 text-right">Lệnh thanh toán</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payouts.length > 0 ? (
                payouts.map(p => {
                  const aff = affiliates.find(a => a.id === p.affiliateId);
                  return (
                    <TableRow key={p.id}>
                      <TableCell className="pl-6 font-medium">{aff?.name || '—'}</TableCell>
                      <TableCell className="font-mono text-sm tracking-wider text-gray-600">{p.month}</TableCell>
                      <TableCell className="font-semibold text-gray-900 text-base">{formatVND(p.totalAmount)}</TableCell>
                      <TableCell><StatusBadge status={p.status} /></TableCell>
                      <TableCell className="text-sm text-gray-500">{p.paidAt || 'Chưa có'}</TableCell>
                      <TableCell className="pr-6 text-right">
                        {p.status === 'Unpaid' ? (
                          <Button size="sm" variant="default" className="h-8 bg-green-600 hover:bg-green-700 shadow-sm" onClick={() => { markPayoutPaid(p.id); toast.success('Đã lưu lịch sử thanh toán!'); }}>
                            Hoàn tất Paid
                          </Button>
                        ) : (
                          <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">✓ Đã chuyển</span>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="h-32 text-center text-muted-foreground">Chưa có bản ghi chi trả khả dụng.</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

function FraudTab({ fraudFlags }) {
  return (
    <Card className="border-none shadow-xl shadow-red-500/5 ring-1 ring-red-100">
      <CardHeader className="border-b border-red-50 bg-red-50/30 pb-4">
        <div className="flex items-center gap-2.5 text-red-600">
          <div className="p-2 bg-red-100 rounded-xl"><AlertTriangle className="w-5 h-5" /></div>
          <div>
            <CardTitle className="text-lg text-red-700 leading-tight">Cảnh báo hệ thống</CardTitle>
            <p className="text-sm text-red-600/80 mt-0.5">Automated Fraud Detection</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        {fraudFlags.length > 0 ? (
          <div className="space-y-4">
            {fraudFlags.map(([code, count]) => (
              <div key={code} className="flex items-start gap-4 p-5 py-4 border border-red-200 rounded-xl bg-gradient-to-r from-red-50 to-white hover:shadow-md transition-shadow">
                <div className="shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="font-bold text-red-600 text-sm">{count}x</span>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-base flex gap-2 items-center">
                    Invoice Code trùng lặp: <span className="font-mono bg-red-100 text-red-700 px-2 py-0.5 rounded text-sm tracking-wide">{code}</span>
                  </p>
                  <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">
                    Hóa đơn này đã được kích hoạt <strong>{count}</strong> lần. Nếu đây không phải là một invoice gộp, vui lòng đình chỉ xử lý các khoản hoa hồng liên quan và liên hệ với đối tác.
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gradient-to-b from-transparent to-green-50/30 rounded-2xl">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5 shadow-sm">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Bảo mật nguyên vẹn</h3>
            <p className="text-gray-500 mt-2 max-w-sm mx-auto">Kiểm tra cross-reference tự động không phát hiện bất kỳ giao dịch bất thường nào trong hệ thống lúc này.</p>
          </div>
        )}
        
        <div className="mt-8 p-6 bg-gray-50 border border-gray-100 rounded-2xl flex flex-col md:flex-row gap-6">
          <div className="shrink-0">
            <div className="w-12 h-12 bg-gray-200/50 rounded-xl flex items-center justify-center">
              <ShieldAlert className="w-6 h-6 text-gray-600" />
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-gray-900 text-base">Tiêu chuẩn Policy</h4>
            <ul className="text-sm text-gray-600 space-y-2.5 leading-relaxed">
              <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0" /> <span className="flex-1">Trường hợp trùng lặp Invoice thường xảy ra do affiliate submit đơn nhiều lần với hy vọng được tăng doanh số. Bạn nên xác nhận thủ công cho invoice này.</span></li>
              <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0" /> <span className="flex-1">Giao dịch gian lận sẽ dẫn đến account blacklist. Các hành đồng vô hiệu hóa affiliate có thể được thực hiện cấp admin ở tab Affiliates.</span></li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function AdminContent() {
  const router = useRouter();
  const { user, state, isMounted, logout, approveAffiliate, rejectAffiliate, deactivateAffiliate, verifyOrder, approveCommission, markPayoutPaid, generatePayout } = useAffiliate();

  // Memoized stats calculation for performance (avoid rerender tax)
  const stats = useMemo(() => {
    return {
      totalAffiliates: state?.affiliates?.length || 0,
      activeAffiliates: state?.affiliates?.filter(a => a.status === 'Đã duyệt').length || 0,
      paidCustomers: state?.customers?.filter(c => c.pipelineStatus === 'Đã thanh toán').length || 0,
      totalCommissions: state?.commissions?.reduce((s, c) => s + c.amount, 0) || 0,
      pendingOrdersCount: state?.orders?.filter(o => o.verificationStatus === 'Chờ duyệt').length || 0
    };
  }, [state?.affiliates, state?.customers, state?.commissions, state?.orders]);

  const fraudFlags = useMemo(() => {
    if (!state?.orders) return [];
    const duplicateInvoices = state?.orders?.reduce((acc, o) => {
      acc[o.invoiceCode] = (acc[o.invoiceCode] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(duplicateInvoices).filter(([, count]) => count > 1);
  }, [state?.orders]);

  // Prevent hydration mismatch
  if (!isMounted) return null;

  if (!user || user.type !== 'admin') {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 p-4">
        <Card className="max-w-md w-full shadow-2xl border-none ring-1 ring-gray-900/5">
          <CardHeader className="pb-4">
            <CardTitle className="text-center text-2xl font-bold tracking-tight text-gray-900 pt-2">Xác thực Quyền Admin</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center px-8 pb-8">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <ShieldAlert className="w-8 h-8 text-red-600" />
            </div>
            <p className="mb-8 text-gray-500 text-center leading-relaxed">Bạn đang cố truy cập vào Control Panel. Yêu cầu đặc quyền quản trị viên cao cấp cho môi trường này.</p>
            <Button asChild size="lg" className="w-full font-semibold shadow-md text-white bg-blue-600 hover:bg-blue-700">
              <Link href="/san-pham/mini-ugate/affiliate/login">
                Liên kết SSO / Đăng nhập
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleLogout = () => { logout(); router.push('/san-pham/mini-ugate/affiliate/login'); };

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-16 font-sans">
      {/* Header Bar */}
      <div className="bg-white border-b border-gray-200/80 sticky top-0 z-40 lg:mb-10 mb-6 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
        <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-1.5 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-lg shadow-sm">
               <ShieldAlert className="w-5 h-5 text-white" />
            </div>
            <div className="font-bold text-xl tracking-tight text-gray-900">Ugate <span className="font-medium text-gray-500">Affiliate Ops</span></div>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-50 text-red-700 rounded-lg text-xs font-semibold ring-1 ring-inset ring-red-600/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Quản trị viên Hệ thống
            </span>
            <span className="h-6 w-px bg-gray-200 hidden sm:block"></span>
            <Button variant="ghost" size="icon" onClick={handleLogout} className="hover:bg-red-50 hover:text-red-600 transition-colors">
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Stats Summary overview rings */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-10">
          {[
            { label: 'Tổng Affiliates', value: stats.totalAffiliates, sub: `${stats.activeAffiliates} hoạt động`, icon: Users, color: 'text-blue-600', bg: 'bg-blue-500/10', gradient: 'from-blue-600 to-blue-400' },
            { label: 'Doanh số GD thành công', value: stats.paidCustomers, sub: 'Khách hàng', icon: CheckCircle, color: 'text-emerald-600', bg: 'bg-emerald-500/10', gradient: 'from-emerald-600 to-emerald-400' },
            { label: 'Tổng Commission', value: formatVND(stats.totalCommissions), sub: 'Gross Profit Affiliate', icon: DollarSign, color: 'text-indigo-600', bg: 'bg-indigo-500/10', gradient: 'from-indigo-600 to-purple-500' },
            { label: 'Cảnh báo Bảo mật', value: fraudFlags.length, sub: fraudFlags.length > 0 ? 'Phát hiện rủi ro' : 'An toàn tuyệt đối', icon: AlertTriangle, color: fraudFlags.length > 0 ? 'text-red-600' : 'text-gray-400', bg: fraudFlags.length > 0 ? 'bg-red-500/10' : 'bg-gray-100', gradient: fraudFlags.length > 0 ? 'from-red-600 to-orange-500' : 'from-gray-400 to-gray-300' },
          ].map((s, i) => (
            <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden relative group bg-white">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${s.gradient} opacity-[0.03] rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-500`} />
              <CardContent className="p-6 relative z-10 flex flex-col justify-between h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${s.bg}`}>
                    <s.icon className={`w-6 h-6 ${s.color}`} />
                  </div>
                </div>
                <div>
                  <p className="text-3xl font-bold tracking-tight text-gray-900 mb-1">{s.value}</p>
                  <p className="text-sm font-medium text-gray-500 flex items-center justify-between">
                    {s.label}
                    <span className="text-xs font-normal text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">{s.sub}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dynamic Shadcn Tabs */}
        <Tabs defaultValue="affiliates" className="w-full">
          <TabsList className="bg-gray-100/80 p-1.5 rounded-xl inline-flex h-auto flex-wrap sm:flex-nowrap items-center w-full lg:w-auto mb-6 gap-y-2">
            <TabsTrigger value="affiliates" className="h-10 px-5 sm:px-6 rounded-lg font-medium text-sm transition-all focus-visible:ring-0">Quản lý Affiliates</TabsTrigger>
            <TabsTrigger value="orders" className="h-10 px-5 sm:px-6 rounded-lg font-medium text-sm transition-all focus-visible:ring-0 gap-2">
              Đơn hàng {stats.pendingOrdersCount > 0 ? <Badge variant="destructive" className="ml-1 h-5 px-1.5 shadow-sm">{stats.pendingOrdersCount}</Badge> : null}
            </TabsTrigger>
            <TabsTrigger value="commissions" className="h-10 px-5 sm:px-6 rounded-lg font-medium text-sm transition-all focus-visible:ring-0">Kiểm duyệt Hoa hồng</TabsTrigger>
            <TabsTrigger value="payouts" className="h-10 px-5 sm:px-6 rounded-lg font-medium text-sm transition-all focus-visible:ring-0">Lịch sử Chi trả</TabsTrigger>
            <TabsTrigger value="fraud" className="h-10 px-5 sm:px-6 rounded-lg font-medium text-sm transition-all focus-visible:ring-0 gap-2">
              Báo cáo Gian lận {fraudFlags.length > 0 ? <Badge variant="destructive" className="ml-1 h-5 px-1.5 shadow-sm">{fraudFlags.length}</Badge> : null}
            </TabsTrigger>
          </TabsList>

          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            <TabsContent value="affiliates" className="focus-visible:outline-none focus-visible:ring-0 m-0">
              <AffiliatesTab state={state} approveAffiliate={approveAffiliate} rejectAffiliate={rejectAffiliate} deactivateAffiliate={deactivateAffiliate} />
            </TabsContent>
            
            <TabsContent value="orders" className="focus-visible:outline-none focus-visible:ring-0 m-0">
              <OrdersTab state={state} verifyOrder={verifyOrder} />
            </TabsContent>
            
            <TabsContent value="commissions" className="focus-visible:outline-none focus-visible:ring-0 m-0">
              <CommissionsTab state={state} approveCommission={approveCommission} />
            </TabsContent>

            <TabsContent value="payouts" className="focus-visible:outline-none focus-visible:ring-0 m-0">
              <PayoutsTab state={state} generatePayout={generatePayout} markPayoutPaid={markPayoutPaid} />
            </TabsContent>

            <TabsContent value="fraud" className="focus-visible:outline-none focus-visible:ring-0 m-0">
              <FraudTab fraudFlags={fraudFlags} />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default function AdminAffiliatePage() {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="flex-1">
        <AffiliateProvider>
          <AdminContent />
        </AffiliateProvider>
      </div>
      <Footer />
    </div>
  );
}

AdminAffiliatePage.getLayout = function getLayout(page) { return page; };
export async function getServerSideProps() { return { props: {} }; }
