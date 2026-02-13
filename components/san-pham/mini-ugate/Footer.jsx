export const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-primary-foreground">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">M</span>
            </div>
            <span className="font-bold text-lg">MiniUgate</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/70">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Tính năng
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Bảng giá
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Blog
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Liên hệ
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-primary-foreground/50">
            © 2024 MiniUgate. Thuộc hệ sinh thái Ugate – Udata.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

