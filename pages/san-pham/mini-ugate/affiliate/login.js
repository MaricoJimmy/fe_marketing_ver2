import { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/header/Header';
import Footer from '@/components/common/Footer';
import { AffiliateProvider, useAffiliate } from '@/components/san-pham/mini-ugate/affiliate/AffiliateContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { ArrowLeft } from 'lucide-react';

function LoginContent() {
  const router = useRouter();
  const { login, isMounted } = useAffiliate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Prevent hydration mismatch
  if (!isMounted) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) {
      if (email === 'admin@udata.ai') {
        router.push('/san-pham/mini-ugate/affiliate/admin');
      } else {
        router.push('/san-pham/mini-ugate/affiliate/portal');
      }
      toast.success('Đăng nhập thành công!');
    } else {
      toast.error('Email hoặc mật khẩu không đúng, hoặc tài khoản chưa được duyệt.');
    }
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md">
        <Button variant="ghost" className="mb-6" onClick={() => router.push('/san-pham/mini-ugate/affiliate')}>
          <ArrowLeft className="w-4 h-4 mr-2" /> Về trang Affiliate
        </Button>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
          <div className="p-6 text-center border-b border-gray-100">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">MiniUgate Affiliate</div>
            <h1 className="text-xl font-semibold">Đăng nhập</h1>
            <p className="text-sm text-gray-500 mt-1">Nhập email và mật khẩu để vào portal</p>
          </div>
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div><Label>Email</Label><Input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email@example.com" /></div>
              <div><Label>Mật khẩu</Label><Input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Nhập mật khẩu" /></div>
              <Button type="submit" className="w-full" size="lg">Đăng nhập</Button>
            </form>
            <div className="mt-6 p-4 bg-gray-50 rounded-lg text-xs text-gray-500 space-y-1">
              <p className="font-medium text-gray-900">Demo accounts:</p>
              <p>Affiliate: an.nguyen@email.com / demo123</p>
              <p>Admin: admin@udata.ai / admin123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AffiliateLoginPage() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Header />
      <AffiliateProvider>
        <LoginContent />
      </AffiliateProvider>
      <Footer />
    </div>
  );
}

AffiliateLoginPage.getLayout = function getLayout(page) { return page; };
export async function getServerSideProps() { return { props: {} }; }
