import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 glass"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" legacyBehavior>
            <a className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">M</span>
              </div>
              <span className="font-bold text-lg text-foreground">MiniUgate</span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Tính năng
            </a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cách hoạt động
            </a>
            <a href="#use-cases" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Ứng dụng
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="noBg" size="sm" className="hover:bg-accent hover:text-accent-foreground">
              Đăng nhập
            </Button>
            <Button size="sm" className="bg-primary text-primary-foreground" asChild>
              <a href="https://mini.ugate.ai/" target="_blank" rel="noopener noreferrer">
                Dùng thử miễn phí
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden py-4 border-t border-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Tính năng
              </a>
              <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Cách hoạt động
              </a>
              <a href="#use-cases" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Ứng dụng
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button
                  variant="noBg"
                  size="sm"
                  className="justify-start hover:bg-accent hover:text-accent-foreground"
                >
                  Đăng nhập
                </Button>
                <Button size="sm" className="bg-primary text-primary-foreground" asChild>
                  <a href="https://mini.ugate.ai/" target="_blank" rel="noopener noreferrer">
                    Dùng thử miễn phí
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
