import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { auth } from "@/lib/firebase";
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { Button } from "@/components/ui/button";
import { Loader2, LogOut, ShieldX, FileText, Users, FolderOpen, Menu, X, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import { useRouter } from "next/router";

// Default admin emails (always allowed) + extras from environment
const DEFAULT_ADMINS = [
    "hr@udata.ai",
    "admin@udata.ai",
    "hidrodat2002@gmail.com",
    "thuuyen.ftu@gmail.com",
    "udata.infor@gmail.com",
    "nguyenqueanh12k@gmail.com"
];
const envAdmins = (process.env.NEXT_PUBLIC_ADMIN_WHITELIST || "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
const ADMIN_WHITELIST = [...new Set([...DEFAULT_ADMINS, ...envAdmins])];

const navItems = [
    { href: "/tuyen-dung/admin", label: "Quản lý JD", icon: FileText, exact: true },
    { href: "/tuyen-dung/admin/cv", label: "Quản lý CV", icon: FolderOpen },
    { href: "/tuyen-dung/admin/candidates", label: "Ứng viên Test", icon: Users },
    { href: "/tuyen-dung/admin/tests", label: "Quản lý Bài Test", icon: FileText },
];

const AdminLayout = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser);
            if (firebaseUser) {
                const email = firebaseUser.email?.toLowerCase() || "";
                setIsAuthorized(ADMIN_WHITELIST.includes(email));
            } else {
                setIsAuthorized(false);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    // Hide chat widget on admin pages by adding body class
    useEffect(() => {
        document.body.classList.add("admin-page");
        return () => document.body.classList.remove("admin-page");
    }, []);

    const handleLogin = async () => {
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            toast.success("Đăng nhập thành công!");
        } catch (error) {
            console.error("Login error:", error);
            toast.error("Đăng nhập thất bại. Vui lòng thử lại.");
        }
    };

    const handleLogout = async () => {
        try {
            await auth.signOut();
            toast.success("Đã đăng xuất");
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    // Early returns for loading/auth states
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-4">
                    <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
                    <p className="text-gray-500">Đang tải...</p>
                </motion.div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md p-6">
                    <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/25">
                            <ShieldX className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">Udata Admin</h1>
                        <p className="text-gray-500 mb-8 text-sm">
                            Đăng nhập bằng tài khoản Google được ủy quyền để truy cập trang quản trị tuyển dụng.
                        </p>
                        <Button size="lg" className="w-full gap-3 bg-slate-900 hover:bg-slate-800 text-white" onClick={handleLogin}>
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            Đăng nhập với Google
                        </Button>
                    </div>
                </motion.div>
            </div>
        );
    }

    if (!isAuthorized) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md p-6">
                    <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
                        <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <ShieldX className="w-8 h-8 text-red-500" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">Không có quyền truy cập</h1>
                        <p className="text-gray-500 mb-2 text-sm">
                            Tài khoản <strong>{user.email}</strong> không được phép truy cập.
                        </p>
                        <p className="text-xs text-gray-400 mb-8">Liên hệ HR để được cấp quyền.</p>
                        <Button variant="outline" className="gap-2" onClick={handleLogout}>
                            <LogOut className="w-4 h-4" />
                            Đăng xuất
                        </Button>
                    </div>
                </motion.div>
            </div>
        );
    }

    const isActive = (item) => {
        if (item.exact) return router.pathname === item.href;
        return router.pathname.startsWith(item.href);
    };

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar - Desktop */}
            <aside className="hidden lg:flex flex-col w-[260px] bg-slate-900 text-white fixed inset-y-0 left-0 z-30">
                {/* Logo */}
                <div className="px-6 pt-6 pb-4">
                    <Link href="/tuyen-dung/admin" legacyBehavior>
                        <a className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                                <span className="text-white font-bold text-sm">U</span>
                            </div>
                            <div>
                                <p className="font-bold text-sm text-white">Udata Admin</p>
                                <p className="text-[10px] text-slate-400">Tuyển Dụng Dashboard</p>
                            </div>
                        </a>
                    </Link>
                </div>

                {/* Nav */}
                <nav className="flex-1 px-3 py-4">
                    <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider px-3 mb-3">Quản lý</p>
                    <div className="space-y-1">
                        {navItems.map((item) => {
                            const active = isActive(item);
                            return (
                                <Link key={item.href} href={item.href} legacyBehavior>
                                    <a className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${active
                                        ? "bg-gradient-to-r from-blue-600/80 to-blue-500/60 text-white shadow-lg shadow-blue-900/30"
                                        : "text-slate-400 hover:text-white hover:bg-slate-800"
                                        }`}>
                                        <item.icon className={`w-[18px] h-[18px] ${active ? "text-white" : ""}`} />
                                        {item.label}
                                        {active ? <ChevronRight className="w-4 h-4 ml-auto opacity-60" /> : null}
                                    </a>
                                </Link>
                            );
                        })}
                    </div>
                </nav>

                {/* User */}
                <div className="px-4 py-4 border-t border-slate-800">
                    <div className="flex items-center gap-3 px-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xs font-bold">
                                {user.email?.charAt(0).toUpperCase()}
                            </span>
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="text-xs text-slate-300 truncate">{user.email}</p>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="p-1.5 rounded-lg text-slate-500 hover:text-red-400 hover:bg-slate-800 transition-colors"
                            title="Đăng xuất"
                        >
                            <LogOut className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </aside>

            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 inset-x-0 z-30 bg-slate-900 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <button onClick={() => setSidebarOpen(true)} className="p-2 rounded-lg text-white hover:bg-slate-800">
                        <Menu className="w-5 h-5" />
                    </button>
                    <span className="font-bold text-white text-sm">Udata Admin</span>
                </div>
                <button
                    onClick={handleLogout}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                >
                    <LogOut className="w-4 h-4" />
                </button>
            </div>

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {sidebarOpen ? (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="lg:hidden fixed inset-0 bg-black/50 z-40"
                            onClick={() => setSidebarOpen(false)}
                        />
                        <motion.aside
                            initial={{ x: -280 }}
                            animate={{ x: 0 }}
                            exit={{ x: -280 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="lg:hidden fixed inset-y-0 left-0 w-[260px] bg-slate-900 text-white z-50 flex flex-col"
                        >
                            <div className="px-6 pt-6 pb-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                                        <span className="text-white font-bold text-sm">U</span>
                                    </div>
                                    <p className="font-bold text-sm">Udata Admin</p>
                                </div>
                                <button onClick={() => setSidebarOpen(false)} className="p-2 rounded-lg hover:bg-slate-800">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <nav className="flex-1 px-3 py-4">
                                <div className="space-y-1">
                                    {navItems.map((item) => {
                                        const active = isActive(item);
                                        return (
                                            <Link key={item.href} href={item.href} legacyBehavior>
                                                <a
                                                    onClick={() => setSidebarOpen(false)}
                                                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${active
                                                        ? "bg-gradient-to-r from-blue-600/80 to-blue-500/60 text-white"
                                                        : "text-slate-400 hover:text-white hover:bg-slate-800"
                                                        }`}>
                                                    <item.icon className="w-[18px] h-[18px]" />
                                                    {item.label}
                                                </a>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </nav>
                            <div className="px-4 py-4 border-t border-slate-800">
                                <p className="text-xs text-slate-400 truncate px-2">{user.email}</p>
                            </div>
                        </motion.aside>
                    </>
                ) : null}
            </AnimatePresence>

            {/* Main Content */}
            <main className="flex-1 lg:ml-[260px] pt-16 lg:pt-0">
                <div className="p-6 lg:p-8">{children}</div>
            </main>
        </div>
    );
};

export default AdminLayout;
