import { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Header from '@/components/header/Header';
import Footer from '@/components/common/Footer';
import { AffiliateProvider, useAffiliate } from '@/components/san-pham/mini-ugate/affiliate/AffiliateContext';
import { formatVND, DEFAULT_COMMISSION } from '@/components/san-pham/mini-ugate/affiliate/affiliateData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import {
  CheckCircle, ArrowRight, MessageCircle, Users, DollarSign, FileText,
  ChevronDown, ChevronUp, ExternalLink, Sparkles, Laptop, Bot, Zap,
  TrendingUp, ShieldCheck,
} from 'lucide-react';
import PageSeoHead from '@/components/common/PageSeoHead';

/* ─── Floating Icon ─── */
const FloatingIcon = ({ icon: Icon, className, delay = 0 }) => (
  <motion.div
    className={`absolute pointer-events-none opacity-20 text-white ${className}`}
    animate={{ y: [0, -18, 0], opacity: [0.15, 0.3, 0.15] }}
    transition={{ repeat: Infinity, duration: 5 + delay, ease: 'easeInOut', delay }}
  >
    <Icon className="w-8 h-8" />
  </motion.div>
);

/* ─── Chat Illustration ─── */
const ChatIllustration = () => (
  <motion.div className="relative w-full max-w-sm mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-xl p-6 space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
        <span className="text-xs text-gray-400 ml-2">MiniUgate AI Chat</span>
      </div>
      <motion.div className="flex gap-2 items-end" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex-shrink-0" />
        <div className="bg-blue-50 rounded-2xl rounded-bl-sm px-4 py-2.5 text-sm text-gray-900 max-w-[220px]">
          Xin chào! Tôi có thể giúp gì cho bạn hôm nay? 👋
        </div>
      </motion.div>
      <motion.div className="flex gap-2 items-end justify-end" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }}>
        <div className="bg-blue-600 rounded-2xl rounded-br-sm px-4 py-2.5 text-sm text-white max-w-[200px]">
          Tôi muốn tìm hiểu MiniUgate
        </div>
      </motion.div>
      <motion.div className="flex gap-2 items-end" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex-shrink-0" />
        <div className="bg-blue-50 rounded-2xl rounded-bl-sm px-4 py-2.5 text-sm text-gray-900">
          <div className="flex items-center gap-1">
            {[0, 0.3, 0.6].map((d) => (
              <motion.span key={d} animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: d }} className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </motion.div>
);

/* ─── Data ─── */
const benefits = [
  { icon: DollarSign, title: 'Hoa hồng 2.000.000đ', desc: 'Cho mỗi khách hàng thanh toán thành công hoặc ký hợp đồng.' },
  { icon: Zap, title: 'Sản phẩm AI dễ bán', desc: 'MiniUgate giải quyết nhu cầu thực của doanh nghiệp, dễ demo & chốt.' },
  { icon: ShieldCheck, title: 'Không cần kỹ thuật', desc: 'Udata hỗ trợ toàn bộ triển khai. Bạn chỉ cần bán & demo.' },
  { icon: TrendingUp, title: 'Thu nhập không giới hạn', desc: 'Càng bán nhiều, càng kiếm nhiều. Không cap hoa hồng.' },
];

const steps = [
  { icon: FileText, title: 'Đăng ký Affiliate', desc: 'Điền form đăng ký, admin duyệt và cấp tài khoản.' },
  { icon: Users, title: 'Giới thiệu MiniUgate', desc: 'Tìm doanh nghiệp có nhu cầu, giới thiệu sản phẩm.' },
  { icon: MessageCircle, title: 'Demo và chốt hợp đồng', desc: 'Tự demo sản phẩm → chốt đơn → khách ký HĐ hoặc thanh toán.' },
  { icon: DollarSign, title: 'Nhận hoa hồng hàng tháng', desc: 'Admin xác thực → Hoa hồng Approved → Chi trả 1 lần/tháng.' },
];

const faqs = [
  { q: 'Ai có thể tham gia Affiliate?', a: 'Bất kỳ ai có khả năng bán hàng & demo sản phẩm công nghệ. Không giới hạn ngành nghề.' },
  { q: 'Hoa hồng được tính như thế nào?', a: `Mỗi khách thanh toán thành công (đã xác thực), bạn nhận ${formatVND(DEFAULT_COMMISSION)}. Hoa hồng có thể thay đổi theo chính sách.` },
  { q: 'Khi nào tôi nhận được hoa hồng?', a: 'Hoa hồng được chi trả 1 lần/tháng sau khi admin xác thực đơn hàng và duyệt hoa hồng.' },
  { q: 'Tôi cần làm gì khi khách thanh toán offline?', a: 'Nhập mã hóa đơn (Invoice Code) vào portal để admin xác thực. Đơn chỉ được ghi nhận khi admin duyệt.' },
  { q: 'Có hỗ trợ tài liệu bán hàng không?', a: 'Có! Sau khi đăng nhập portal, bạn sẽ có script bán hàng, checklist demo, và link sản phẩm.' },
];

const commissionConditions = [
  { text: 'Khách ký hợp đồng với Udata (trạng thái "Đã ký HĐ") VÀ admin xác thực', icon: '📝' },
  { text: 'Khách thanh toán online qua ZaloPay/PayPal và đã xác thực (trạng thái "Đã thanh toán")', icon: '💳' },
  { text: 'Đơn offline/chuyển khoản: Affiliate nhập Invoice Code → Admin xác thực', icon: '🏦' },
  { text: 'Hoa hồng chi trả 1 lần/tháng (monthly batch)', icon: '📅' },
];

function AffiliateLandingContent() {
  const router = useRouter();
  const { registerAffiliate } = useAffiliate();
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', channel: '', experience: '', socialLink: '', password: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.channel || !form.experience || !form.password) {
      toast.error('Vui lòng điền đầy đủ thông tin bắt buộc');
      return;
    }
    setSubmitting(true);
    try {
      await registerAffiliate({
        name: form.name, email: form.email, phone: form.phone,
        channel: form.channel, experience: form.experience,
        socialLink: form.socialLink || undefined, password: form.password,
      });
      setSubmitted(true);
      toast.success('Đăng ký thành công! Đang chờ admin duyệt.');
    } catch (err) {
      toast.error('Đăng ký thất bại. Vui lòng thử lại.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">MiniUgate Affiliate</div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => router.push('/san-pham/mini-ugate/affiliate/login')}>
              Đăng nhập
            </Button>
            <Button size="sm" onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}>Đăng ký</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 lg:py-28 relative overflow-hidden">
        <FloatingIcon icon={MessageCircle} className="top-12 left-[8%]" delay={0} />
        <FloatingIcon icon={Users} className="top-24 right-[12%]" delay={1.2} />
        <FloatingIcon icon={Sparkles} className="bottom-16 left-[15%]" delay={0.8} />
        <FloatingIcon icon={Laptop} className="bottom-20 right-[8%]" delay={2} />
        <FloatingIcon icon={Bot} className="top-1/2 left-[3%]" delay={1.5} />
        <FloatingIcon icon={Zap} className="top-16 left-[45%]" delay={0.5} />

        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Kiếm tiền cùng<br />MiniUgate Affiliate
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed">
              Bạn tự bán – tự demo – tự chốt. Udata xác thực hợp đồng/thanh toán và trả hoa hồng hàng tháng.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50" onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}>
                Đăng ký Affiliate <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" onClick={() => router.push('/san-pham/mini-ugate/affiliate/login')}>
                Đăng nhập
              </Button>
              <Button size="lg" variant="ghost" className="text-white hover:bg-white/10" onClick={() => router.push('/san-pham/mini-ugate')}>
                Tìm hiểu sản phẩm <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
          <ChatIllustration />
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 className="text-2xl md:text-3xl font-bold text-center mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Tại sao nên tham gia MiniUgate Affiliate?
          </motion.h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">Cơ hội kiếm thu nhập hấp dẫn với sản phẩm AI hàng đầu Việt Nam</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="h-full text-center p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
                  <b.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 className="text-2xl md:text-3xl font-bold text-center mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Cách kiếm tiền với MiniUgate
          </motion.h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">Hoa hồng chỉ được ghi nhận khi hợp đồng đã ký hoặc thanh toán đã xác thực.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="h-full text-center p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <span className="inline-block px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full mb-3">Bước {i + 1}</span>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission conditions */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2 className="text-2xl md:text-3xl font-bold text-center mb-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Điều kiện ghi nhận hoa hồng
          </motion.h2>
          <div className="space-y-4">
            {commissionConditions.map((item, i) => (
              <motion.div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-200" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <span className="text-2xl">{item.icon}</span>
                <p className="text-gray-900">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Earning example */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <motion.h2 className="text-2xl md:text-3xl font-bold mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Ví dụ thu nhập
          </motion.h2>
          <div className="bg-white rounded-2xl border border-blue-100 overflow-hidden p-8">
            <p className="text-gray-500 mb-4">Hoa hồng mặc định</p>
            <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">{formatVND(DEFAULT_COMMISSION)} / khách</p>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-sm text-gray-500 mb-3">Ví dụ: 5 khách thanh toán thành công</p>
              <motion.p className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
                initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 200 }}>
                5 × {formatVND(DEFAULT_COMMISSION)} = {formatVND(DEFAULT_COMMISSION * 5)}
              </motion.p>
              <p className="text-sm text-gray-500 mt-3">Nhận 1 lần/tháng</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.h2 className="text-2xl md:text-3xl font-bold text-center mb-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Câu hỏi thường gặp
          </motion.h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button className="w-full flex items-center justify-between p-4 text-left font-medium hover:bg-gray-50 transition-colors" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {faq.q}
                  {openFaq === i ? <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />}
                </button>
                {openFaq === i && <div className="px-4 pb-4 text-gray-500 text-sm">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <FloatingIcon icon={Sparkles} className="top-8 left-[10%]" delay={0.3} />
        <FloatingIcon icon={DollarSign} className="bottom-8 right-[10%]" delay={1} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2 className="text-2xl md:text-4xl font-bold mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Tham gia MiniUgate Affiliate ngay hôm nay
          </motion.h2>
          <p className="text-lg opacity-90 mb-8 max-w-lg mx-auto">Bắt đầu kiếm thu nhập không giới hạn với sản phẩm AI hàng đầu.</p>
          <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 text-base px-10 py-6 h-auto" onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}>
            Đăng ký Affiliate <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Registration */}
      <section id="register" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-lg">
          <motion.h2 className="text-2xl md:text-3xl font-bold text-center mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Đăng ký Affiliate
          </motion.h2>
          {submitted ? (
            <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Đăng ký thành công!</h3>
              <p className="text-gray-500 mb-4">Trạng thái: <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm">Chờ duyệt</span></p>
              <p className="text-sm text-gray-400">Admin sẽ xem xét và gửi thông tin đăng nhập cho bạn.</p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div><Label>Họ tên *</Label><Input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Nguyễn Văn A" /></div>
                <div><Label>Email *</Label><Input type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="email@example.com" /></div>
                <div><Label>Số điện thoại *</Label><Input value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} placeholder="0901234567" /></div>
                <div><Label>Mật khẩu *</Label><Input type="password" value={form.password} onChange={e => setForm(f => ({ ...f, password: e.target.value }))} placeholder="Tối thiểu 6 ký tự" /></div>
                <div>
                  <Label>Kênh bán *</Label>
                  <Select value={form.channel} onValueChange={v => setForm(f => ({ ...f, channel: v }))}>
                    <SelectTrigger><SelectValue placeholder="Chọn kênh bán" /></SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="Agency">Agency</SelectItem>
                      <SelectItem value="Freelancer">Freelancer</SelectItem>
                      <SelectItem value="Community">Community</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Kinh nghiệm sales *</Label>
                  <Select value={form.experience} onValueChange={v => setForm(f => ({ ...f, experience: v }))}>
                    <SelectTrigger><SelectValue placeholder="Chọn kinh nghiệm" /></SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="Chưa có">Chưa có</SelectItem>
                      <SelectItem value="Dưới 1 năm">Dưới 1 năm</SelectItem>
                      <SelectItem value="1-3 năm">1-3 năm</SelectItem>
                      <SelectItem value="Trên 3 năm">Trên 3 năm</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div><Label>Link social (tùy chọn)</Label><Input value={form.socialLink} onChange={e => setForm(f => ({ ...f, socialLink: e.target.value }))} placeholder="https://facebook.com/..." /></div>
                <Button type="submit" className="w-full" size="lg" disabled={submitting}>
                  {submitting ? 'Đang đăng ký...' : 'Đăng ký Affiliate'}
                </Button>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default function AffiliateLandingPage() {
  const metaTagData = {
    title: 'MiniUgate Affiliate – Kiếm tiền cùng AI Chatbot | Udata.ai',
    desc: 'Tham gia chương trình Affiliate MiniUgate, kiếm 2.000.000đ cho mỗi khách hàng thành công.',
    img: '/image/products/mini-ugate/mini-ugate-logo.webp',
  };

  return (
    <>
      <PageSeoHead data={metaTagData} />
      <div className="w-full min-h-screen">
        <Header />
        <AffiliateProvider>
          <AffiliateLandingContent />
        </AffiliateProvider>
        <Footer />
      </div>
    </>
  );
}

AffiliateLandingPage.getLayout = function getLayout(page) { return page; };
export async function getServerSideProps() { return { props: {} }; }
