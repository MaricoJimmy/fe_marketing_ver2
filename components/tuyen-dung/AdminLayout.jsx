import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { auth } from "@/lib/firebase";
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { Button } from "@/components/ui/button";
import { Loader2, LogOut, ShieldX } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import { useRouter } from "next/router";

// Get whitelist from environment
const ADMIN_WHITELIST = (process.env.NEXT_PUBLIC_ADMIN_WHITELIST || "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);

const AdminLayout = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(false);
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

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center gap-4"
                >
                    <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
                    <p className="text-gray-500">Đang tải...</p>
                </motion.div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-lg p-8"
                >
                    <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <ShieldX className="w-8 h-8 text-blue-600" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">
                            Udata Tuyển Dụng Admin
                        </h1>
                        <p className="text-gray-500 mb-8">
                            Đăng nhập bằng tài khoản Google được ủy quyền để truy cập trang quản trị.
                        </p>
                        <Button
                            size="lg"
                            className="w-full gap-3 bg-blue-600 hover:bg-blue-700 text-white"
                            onClick={handleLogin}
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                />
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
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-lg p-8"
                >
                    <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
                        <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <ShieldX className="w-8 h-8 text-red-500" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">
                            Không có quyền truy cập
                        </h1>
                        <p className="text-gray-500 mb-2">
                            Tài khoản <strong>{user.email}</strong> không được phép truy cập trang quản trị.
                        </p>
                        <p className="text-sm text-gray-400 mb-8">
                            Liên hệ HR để được cấp quyền truy cập.
                        </p>
                        <Button
                            variant="outline"
                            className="gap-2"
                            onClick={handleLogout}
                        >
                            <LogOut className="w-4 h-4" />
                            Đăng xuất
                        </Button>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Top Bar */}
            <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between sticky top-0 z-40">
                <div className="flex items-center gap-4">
                    <Link href="/tuyen-dung/admin" className="font-bold text-lg text-gray-900">
                        Udata Admin
                    </Link>
                    <nav className="hidden md:flex items-center gap-1">
                        <Link
                            href="/tuyen-dung/admin"
                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${router.pathname === "/tuyen-dung/admin"
                                    ? "bg-blue-50 text-blue-700"
                                    : "text-gray-600 hover:bg-gray-100"
                                }`}
                        >
                            Quản lý JD
                        </Link>
                        <Link
                            href="/tuyen-dung/admin/cv"
                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${router.pathname === "/tuyen-dung/admin/cv"
                                    ? "bg-blue-50 text-blue-700"
                                    : "text-gray-600 hover:bg-gray-100"
                                }`}
                        >
                            Quản lý CV
                        </Link>
                    </nav>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500 hidden sm:block">{user.email}</span>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="gap-2 text-gray-500"
                        onClick={handleLogout}
                    >
                        <LogOut className="w-4 h-4" />
                        <span className="hidden sm:inline">Đăng xuất</span>
                    </Button>
                </div>
            </div>

            {/* Content */}
            <main className="p-6">{children}</main>
        </div>
    );
};

export default AdminLayout;
