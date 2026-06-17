// 1. استدعي الـ Provider اللي عملناه في أول الملف
import { AuthProvider } from "@/context/AuthContext";

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        {/* 2. لف الـ {children} بالـ <AuthProvider> بالشكل ده */}
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
