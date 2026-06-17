"use client";

import React from "react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div 
      dir="rtl" 
      className="min-h-screen bg-[#070B14] text-gray-100 font-sans relative overflow-x-hidden antialiased selection:bg-[#C8D749]/30 selection:text-white"
    >
      
      {/* 🧬 Navbar (Top Bar) 🧬 */}
      <nav className="w-full bg-[#070B14] border-b border-white/5 sticky top-0 z-50 px-6 py-4">
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
          
          {/* تم إزالة الأيقونات (البروفايل والإشعارات والوضع الليلي) بناءً على طلبك */}
          <div></div> 
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 pt-10 overflow-hidden">
        
        {/* Floating Particles Background */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-[20%] left-[10%] w-2 h-2 rounded-full border border-[#C8D749]"></div>
          <div className="absolute top-[30%] right-[15%] w-1 h-1 rounded-full bg-[#C8D749]"></div>
          <div className="absolute bottom-[20%] left-[20%] w-3 h-3 rounded-full border border-gray-500"></div>
          <div className="absolute top-[50%] right-[30%] w-2 h-2 rounded-full bg-gray-500"></div>
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

          {/* تعديل أزرار الدخول والتسجيل */}
          <div className="flex flex-col sm:flex-row gap-6 mt-10">
            <Link 
              href="/auth/login" 
              className="px-12 py-4 rounded-xl text-xl font-black bg-[#C8D749] text-[#070B14] hover:bg-[#b5c43d] hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(200,215,73,0.3)]"
            >
              تسجيل الدخول
            </Link>
            <Link 
              href="/auth/register" 
              className="px-12 py-4 rounded-xl text-xl font-bold bg-transparent border border-[#0E5159] text-white hover:bg-[#0E5159]/20 transition-all duration-300"
            >
              إنشاء حساب جديد
            </Link>
          </div>
          
          <div className="mt-16 animate-bounce text-[#0E5159] opacity-50">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </div>
        </div>
      </section>

      {/* ================= WHY DOCTOR SECTION ================= */}
      <section className="relative bg-[#0D3B3F] pt-20 pb-0 px-6 border-t-[6px] border-[#0E5159] overflow-hidden">
        
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
              href="/auth/register" 
              className="inline-block mt-4 px-10 py-3 rounded-xl text-xl font-black bg-[#C8D749] text-[#070B14] hover:bg-[#b5c43d] hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
            >
              ابدأ رحلتك الآن
            </Link>
          </div>

          {/* الجانب الأيسر - بديل الصورة المضمون 100% */}
          <div className="relative h-full min-h-[400px] flex items-end justify-center z-10 pb-10">
            
            {/* Box زجاجي بديل للصورة عشان التصميم ميضربش */}
            <div className="relative w-[300px] h-[400px] md:w-[380px] md:h-[480px] rounded-t-[3rem] rounded-b-xl border-2 border-[#C8D749]/30 bg-gradient-to-t from-[#C8D749]/10 to-transparent flex flex-col items-center justify-center overflow-hidden shadow-[0_0_40px_rgba(200,215,73,0.1)] group">
              <div className="absolute inset-0 bg-[#0D3B3F]/50 backdrop-blur-sm z-0"></div>
              
              {/* أيقونة تعبيرية */}
              <div className="relative z-10 w-24 h-24 rounded-full border-2 border-[#C8D749]/50 flex items-center justify-center bg-[#070B14]/50 mb-4 group-hover:scale-110 transition-transform duration-500">
                <span className="text-4xl">👨‍⚕️</span>
              </div>
              
              {/* نص توضيحي */}
              <div className="relative z-10 text-center px-4">
                <h3 className="text-[#C8D749] font-bold text-xl mb-2">صورة المستر</h3>
                <p className="text-gray-300 text-sm opacity-70">
                  سيتم إضافة الصورة هنا لاحقاً<br/>
                  (لتعديلها ابحث عن تعليق "بديل الصورة" في الكود)
                </p>
              </div>

              {/* تأثير إضاءة من تحت */}
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#C8D749]/20 to-transparent z-0"></div>
            </div>
            
            {/* رسومات وأيقونات أحياء طايرة حوالين الـ Box */}
            <div className="absolute top-[20%] right-[5%] text-white/30 text-4xl animate-pulse">🧬</div>
            <div className="absolute top-[40%] left-[0%] text-white/30 text-5xl">🔬</div>
            <div className="absolute bottom-[20%] right-[-5%] text-white/20 text-6xl">🦠</div>
          </div>

        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
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

      {/* ================= FOOTER SECTION (Clean & Dark) ================= */}
      {/* تم تغيير اللون لأسود عميق بناءً على طلبك وإزالة السوشيال والرسائل */}
      <footer className="bg-[#030508] pt-16 pb-12 px-6 border-t border-white/5 text-center relative z-10">
        
        {/* Logo in Footer */}
        <div className="flex flex-col items-center justify-center mb-12" dir="ltr">
          <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
            <svg className="w-10 h-10 text-[#C8D749]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-3xl font-black text-white leading-none tracking-wide">Tammam</span>
              <span className="text-[12px] text-[#C8D749] font-bold tracking-widest uppercase">Biology Society</span>
            </div>
          </div>
        </div>

        {/* Developer Credits - Giza-Tech / Elgizawy */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-500 font-mono mb-4" dir="ltr">
          <span>&lt; Architected By &gt;</span>
          <span className="bg-white/5 px-3 py-1 rounded-md text-[#C8D749] border border-[#C8D749]/20 font-bold">Elgizawy 👑</span>
          <span>&lt; All Copy Rights Reserved @{new Date().getFullYear()} &gt;</span>
        </div>

        {/* Powered By Giza-Tech */}
        <div className="text-gray-600 text-sm mt-6 flex flex-col items-center">
          <p className="tracking-widest uppercase text-xs mb-1">Powered By</p>
          <p className="font-black text-white tracking-widest text-lg">GIZA-TECH</p>
        </div>

      </footer>

    </div>
  );
}
