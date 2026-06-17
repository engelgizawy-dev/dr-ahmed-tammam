"use client";

import React from "react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div 
      dir="rtl" 
      className="min-h-screen bg-[#070B14] text-gray-100 font-sans relative overflow-x-hidden antialiased selection:bg-[#C8D749]/30 selection:text-white"
    >
      
      {/* 🧬 Navbar (Top Bar) - مستوحى من الصورة الثانية 🧬 */}
      <nav className="w-full bg-[#070B14] border-b border-white/5 sticky top-0 z-50 px-6 py-4">
        {/* استخدمنا dir="ltr" هنا بس عشان نجيب اللوجو شمال والزراير يمين زي الصورة بالظبط */}
        <div className="max-w-7xl mx-auto flex justify-between items-center" dir="ltr">
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
            </svg>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white leading-none tracking-wide">Tammam</span>
              <span className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">Biology Society</span>
            </div>
          </div>

          {/* User & Actions */}
          <div className="flex items-center gap-4">
            {/* Dark/Light Mode Toggle Placeholder */}
            <div className="flex bg-[#121A2F] rounded-full p-1 border border-white/10">
              <button className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition">☀</button>
              <button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-sm">🌙</button>
            </div>
            
            {/* Notification & Avatar */}
            <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-300 hover:bg-white/5 transition">
              🔔
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-400 to-pink-400 border-2 border-[#C8D749] p-0.5 cursor-pointer">
              <div className="w-full h-full rounded-full bg-white/20"></div>
            </div>
          </div>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 pt-10 overflow-hidden">
        
        {/* Floating Particles Background (Dots) */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-[20%] left-[10%] w-2 h-2 rounded-full border border-[#C8D749]"></div>
          <div className="absolute top-[30%] right-[15%] w-1 h-1 rounded-full bg-[#C8D749]"></div>
          <div className="absolute bottom-[20%] left-[20%] w-3 h-3 rounded-full border border-gray-500"></div>
          <div className="absolute top-[50%] right-[30%] w-2 h-2 rounded-full bg-gray-500"></div>
          {/* خلفية بنمط شبكة نقطية خفيفة جداً */}
          <div className="absolute inset-0 bg-[radial-gradient(#C8D749_1px,transparent_1px)] [background-size:60px_60px] opacity-[0.03]"></div>
        </div>

        <div className="relative z-10 space-y-6 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight" dir="ltr">
            <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">Biology </span>
            <span className="text-[#C8D749] drop-shadow-[0_0_20px_rgba(200,215,73,0.2)]">Society</span>
          </h1>
          
          <div className="w-full max-w-lg flex items-center justify-center gap-4 my-6">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#0E5159]"></div>
            <div className="w-3 h-3 rotate-45 bg-[#0E5159]"></div>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#0E5159]"></div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            منصة هتحببك وتميزك في الأحياء
          </h2>
          <p className="text-xl md:text-2xl font-medium text-[#C8D749] mb-8">
            مع د/ أحمد تمام
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mt-10">
            <Link 
              href="/courses" 
              className="px-12 py-4 rounded-xl text-xl font-black bg-[#C8D749] text-[#070B14] hover:bg-[#b5c43d] hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(200,215,73,0.3)]"
            >
              كورساتي
            </Link>
            <Link 
              href="/book" 
              className="px-12 py-4 rounded-xl text-xl font-bold bg-transparent border border-[#0E5159] text-white hover:bg-[#0E5159]/20 transition-all duration-300"
            >
              اطلب كتابك الآن!
            </Link>
          </div>
          
          {/* Animated Arrow Down */}
          <div className="mt-16 animate-bounce text-[#0E5159] opacity-50">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </div>
        </div>
      </section>

      {/* ================= WHY DOCTOR SECTION ================= */}
      {/* استخدمنا لون خلفية بترولي/أخضر غامق مشابه للصورة */}
      <section className="relative bg-[#0D3B3F] pt-20 pb-0 px-6 border-t-[6px] border-[#0E5159] overflow-hidden">
        
        {/* Background Text Watermark */}
        <div className="absolute bottom-[-5%] left-[5%] text-[10rem] font-black text-black/10 select-none pointer-events-none" dir="ltr">
          Society
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* الجانب الأيمن - النص */}
          <div className="space-y-8 z-10 pb-20">
            <div className="flex items-center gap-4">
              <h2 className="text-5xl md:text-7xl font-black text-[#C8D749]">
                ليه دكتور أحمد تمام
              </h2>
              <span className="text-5xl text-[#C8D749]">؟</span>
              {/* سهم مرسوم */}
              <svg className="w-16 h-16 text-[#C8D749] -ml-6 mt-4" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 50 Q 40 10, 90 40 L 80 50 M 90 40 L 70 30" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium">
              لأن طلبة كتير بتواجه صعوبة في فهم الأحياء وحل المسائل الاستنتاجية،
              وفرتلك في منصة تمام كل اللي نفسك فيه عشان 
              اخليلك المادة <span className="text-[#C8D749] font-bold">بسيطة ومُمتعة</span> 
              وبنظام متابعة صارم يوصلك للتقفيل.
            </p>

            <Link 
              href="/subscribe" 
              className="inline-block mt-4 px-10 py-3 rounded-xl text-xl font-black bg-[#C8D749] text-[#070B14] hover:bg-[#b5c43d] hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
            >
              تابع اشتراكك
            </Link>
          </div>

          {/* الجانب الأيسر - الصورة المستوحاة من أينشتاين */}
          <div className="relative h-full min-h-[400px] flex items-end justify-center z-10">
            {/* هنستخدم صورة المستر هنا بدال أينشتاين 
              هتحط صورة دكتور أحمد مقصوصة بخلفية شفافة (PNG) في الـ public 
            */}
            <img 
              src="/dr-ahmed-cutout.png" 
              alt="د. أحمد تمام" 
              className="w-[85%] max-w-[500px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              onError={(e) => { 
                (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDIyYzIyIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGR5PSIuM2VtIiBmaWxsPSIjQzhENzQ5IiBmb250LXNpemU9IjI0IiBmb250LWZhbWlseT0iQXJpYWwiIHRleHQtYW5jaG9yPSJtaWRkbGUiPti12YjYsdipINin2YTZhdiv2YPYqtmI2LEg2KjNrtmE2YTZiNmH2KcgUE5HPC90ZXh0Pjwvc3ZnPg=='; 
              }}
            />
            
            {/* رسومات وأيقونات أحياء طايرة حوالين الصورة */}
            <div className="absolute top-[20%] right-[10%] text-white/30 text-4xl animate-pulse">🧬</div>
            <div className="absolute top-[40%] left-[5%] text-white/30 text-5xl">🔬</div>
            <div className="absolute bottom-[30%] right-[0%] text-white/20 text-6xl">🦠</div>
          </div>

        </div>
      </section>

      {/* ================= FEATURES SECTION (محاور النظام) ================= */}
      <section className="bg-[#070B14] py-24 px-6 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">ليه تختار <span className="text-[#C8D749]">نظامنا؟</span></h2>
            <div className="w-20 h-1 bg-[#C8D749] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "الفهم العميق", desc: "ربط المعلومات بأفكار استنتاجية لتسهيل الحل." },
              { title: "الحفظ المتقن", desc: "تكرار وربط بالخرائط الذهنية لعدم النسيان." },
              { title: "مراجعة دورية", desc: "امتحانات مستمرة لتحديد نقاط الضعف." },
              { title: "حل مكثف", desc: "حل آلاف الأسئلة من كتاب المايسترو." },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[#0D1524] border border-[#1A263D] hover:border-[#C8D749]/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-[#C8D749]/10 flex items-center justify-center text-[#C8D749] font-bold text-xl mb-6 group-hover:bg-[#C8D749] group-hover:text-black transition-colors">
                  0{i+1}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER SECTION (على نفس تصميم الصورة الأخيرة) ================= */}
      <footer className="bg-[#0D3B3F] pt-16 pb-8 px-6 border-t-[6px] border-[#0E5159] text-center relative z-10">
        
        {/* Logo in Footer */}
        <div className="flex flex-col items-center justify-center mb-8" dir="ltr">
          <div className="flex items-center gap-2">
            <svg className="w-10 h-10 text-black" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-3xl font-black text-black leading-none tracking-wide">Tammam</span>
              <span className="text-[12px] text-black/70 font-bold tracking-widest uppercase">Biology Society</span>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {/* TikTok */}
          <a href="#" className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white hover:scale-110 transition-transform">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
          </a>
          {/* Facebook */}
          <a href="#" className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 transition-transform">
             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          {/* YouTube */}
          <a href="#" className="w-12 h-12 rounded-full bg-[#FF0000] flex items-center justify-center text-white hover:scale-110 transition-transform">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
          {/* Group */}
          <a href="#" className="w-12 h-12 rounded-full bg-[#0E5159] flex items-center justify-center text-white hover:scale-110 transition-transform">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12.75c3.5 0 7.5 1.75 7.5 5.25V21H4.5v-3c0-3.5 4-5.25 7.5-5.25zm0-10.5C14.07 2.25 15.75 3.93 15.75 6S14.07 9.75 12 9.75 8.25 8.07 8.25 6 9.93 2.25 12 2.25z"/></svg>
          </a>
        </div>

        {/* Separator Line */}
        <div className="max-w-xl mx-auto h-[1px] bg-black/20 mb-6"></div>

        {/* Message */}
        <p className="text-white font-medium text-lg mb-8 flex items-center justify-center gap-2">
          <span className="text-red-500 animate-pulse">💖</span>
          تم صنع هذه المنصة بهدف تهيئة الطالب لـ كامل جوانب الثانوية العامة و ما بعدها
          <span className="text-red-500 animate-pulse">💖</span>
        </p>

        {/* Developer Credits - Giza-Tech / Elgizawy */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-[#C8D749] font-bold mb-4" dir="ltr">
          <span>&lt; Architected By &gt;</span>
          <span className="bg-[#C8D749]/20 px-3 py-1 rounded-md text-white border border-[#C8D749]/30">Elgizawy 👑</span>
          <span>&lt; All Copy Rights Reserved @{new Date().getFullYear()} &gt;</span>
        </div>

        {/* Powered By Giza-Tech */}
        <div className="text-white/70 text-sm mt-4 flex flex-col items-center">
          <div className="animate-bounce mb-1">
            <svg className="w-4 h-4 text-[#C8D749]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
          <p>Powered By <span className="font-bold text-white">Giza-Tech</span></p>
          <p className="text-xs mt-1">v.1.0.0</p>
        </div>

      </footer>

    </div>
  );
}
