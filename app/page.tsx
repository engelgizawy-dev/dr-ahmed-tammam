"use client";

import React from "react";
import Link from "next/link";

/**
 * نظام الألوان والمسافات الموحّد للمنصة (استخدمه في كل الصفحات التانية)
 * ────────────────────────────────────────────────────────────────────
 * bg أساسي:        #070B14   (خلفية الصفحة)
 * bg سطح/كارت:     #0D1524   (الكروت والعناصر اللي فوق الخلفية)
 * border خفيف:     #1A263D
 * teal غامق:       #0D3B3F   (خلفية القسم الثاني)
 * teal خط/حدود:    #0E5159
 * accent (الأخضر الليموني): #C8D749
 * نص أساسي:        gray-100
 * نص ثانوي:        gray-400
 *
 * المسافات بين الأقسام: py-24 ثابتة لكل section (إلا الـ hero)
 * الـ border بين الأقسام: border-t border-white/5 ثابت في كل مكان
 * ده عشان أي صفحة جديدة في المنصة تتبني بنفس الإحساس وما تحتاجش تفكر في تصميم جديد كل مرة
 */

export default function LandingPage() {
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#070B14] text-gray-100 font-sans relative overflow-x-hidden antialiased selection:bg-[#C8D749]/30 selection:text-white"
    >
      {/* ================= NAVBAR ================= */}
      <nav className="w-full bg-[#070B14]/90 backdrop-blur-sm border-b border-white/5 sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center" dir="ltr">
          <div className="flex items-center gap-2.5">
            <svg className="w-8 h-8 text-[#C8D749]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2L4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4z" />
              <path d="M12 8v8M9 11h6" strokeLinecap="round" />
            </svg>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-black text-white tracking-wide">Tammam</span>
              <span className="text-[10px] text-gray-500 font-bold tracking-[0.2em] uppercase">Biology Society</span>
            </div>
          </div>
          <div className="flex items-center gap-3" dir="rtl">
            <Link
              href="/auth/login"
              className="text-sm font-bold text-gray-300 hover:text-white transition-colors px-4 py-2"
            >
              تسجيل الدخول
            </Link>
            <Link
              href="/auth/register"
              className="text-sm font-black bg-[#C8D749] text-[#070B14] px-5 py-2.5 rounded-lg hover:bg-[#dbeb6a] transition-colors"
            >
              إنشاء حساب
            </Link>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative min-h-[88vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        {/* خلفية هادية: نقط صغيرة بس، بدون حركة زيادة */}
        <div
          className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#C8D749 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0E5159] to-transparent" />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#C8D749]/80 mb-6">
            منصة الأحياء التعليمية
          </span>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight" dir="ltr">
            <span className="text-white">Biology </span>
            <span className="text-[#C8D749]">Society</span>
          </h1>

          <div className="w-16 h-px bg-[#0E5159] my-8" />

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            منصة هتحببك وتميزك في الأحياء
          </h2>
          <p className="text-lg md:text-xl font-medium text-gray-400 mb-10">
            مع د/ أحمد تمام
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/auth/register"
              className="px-10 py-4 rounded-xl text-lg font-black bg-[#C8D749] text-[#070B14] hover:bg-[#dbeb6a] transition-colors"
            >
              ابدأ رحلتك الآن
            </Link>
            <Link
              href="/auth/login"
              className="px-10 py-4 rounded-xl text-lg font-bold bg-transparent border border-white/15 text-white hover:bg-white/5 transition-colors"
            >
              تسجيل الدخول
            </Link>
          </div>
        </div>
      </section>

      {/* ================= عن الدكتور ================= */}
      <section className="bg-[#0D3B3F] py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-7">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              ليه دكتور <span className="text-[#C8D749]">أحمد تمام؟</span>
            </h2>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              لأن طلبة كتير بتواجه صعوبة في فهم الأحياء وحل المسائل الاستنتاجية،
              وفرتلك في منصة تمام كل اللي نفسك فيه عشان اخليلك المادة{" "}
              <span className="text-[#C8D749] font-bold">بسيطة ومُمتعة</span>{" "}
              وبنظام متابعة صارم يوصلك للتقفيل.
            </p>

            <Link
              href="/auth/register"
              className="inline-block mt-2 px-9 py-3.5 rounded-xl text-lg font-black bg-[#C8D749] text-[#070B14] hover:bg-[#dbeb6a] transition-colors"
            >
              ابدأ رحلتك الآن
            </Link>
          </div>

          {/* صورة الدكتور — شايلة fallback نضيف لو الصورة الأساسية مش موجودة */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 m-auto w-[280px] h-[280px] rounded-full bg-[#C8D749]/10 blur-0" />
            <img
              src="/doctor.png"
              alt="د. أحمد تمام"
              width={420}
              height={500}
              className="relative w-full max-w-[380px] object-contain"
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                if (!img.dataset.fallback) {
                  img.dataset.fallback = "1";
                  img.src =
                    "https://placehold.co/420x500/0D3B3F/C8D749?text=Dr.+Ahmed+Tammam";
                }
              }}
            />
          </div>
        </div>
      </section>

      {/* ================= ليه تختار نظامنا ================= */}
      <section className="bg-[#070B14] py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              ليه تختار <span className="text-[#C8D749]">نظامنا؟</span>
            </h2>
            <div className="w-12 h-1 bg-[#C8D749] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "الفهم العميق", desc: "ربط المعلومات بأفكار استنتاجية لتسهيل الحل." },
              { title: "الحفظ المتقن", desc: "تكرار وربط بالخرائط الذهنية لعدم النسيان." },
              { title: "مراجعة دورية", desc: "امتحانات مستمرة لتحديد نقاط الضعف." },
              { title: "حل مكثف", desc: "حل آلاف الأسئلة من كتاب المايسترو." },
            ].map((item, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl bg-[#0D1524] border border-[#1A263D] hover:border-[#C8D749]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#C8D749]/10 flex items-center justify-center text-[#C8D749] font-bold text-sm mb-5">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER — نظام موحّد لكل صفحات المنصة ================= */}
      <footer className="bg-[#070B14] border-t border-white/5 px-6 py-14">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
          <div className="flex items-center gap-2.5 opacity-90">
            <svg className="w-7 h-7 text-[#C8D749]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2L4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4z" />
              <path d="M12 8v8M9 11h6" strokeLinecap="round" />
            </svg>
            <span className="text-lg font-black text-white tracking-wide" dir="ltr">
              Tammam <span className="text-[#C8D749]">Society</span>
            </span>
          </div>

          <div className="w-full h-px bg-white/5" />

          <div className="flex flex-col items-center gap-3 text-xs text-gray-500" dir="ltr">
            <div className="flex items-center gap-2 font-mono">
              <span>Developed by</span>
              <span className="text-gray-300 font-bold">Elgizawy</span>
            </div>
            <span>© {new Date().getFullYear()} All rights reserved</span>
            <span className="tracking-[0.2em] text-gray-600 font-bold uppercase">Powered by Giza-Tech</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
