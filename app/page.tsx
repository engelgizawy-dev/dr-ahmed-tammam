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

          {/* الجانب الأيسر - صورة دكتور أحمد */}
          <div className="relative h-full min-h-[400px] flex items-end justify-center z-10 pb-10">
            
            {/* الصورة بلينك مباشر */}
            <img 
              src="https://drive.google.com/uc?export=view&id=1iv-TSscvu2HfAyzHvmjJVch1WGMevwQd" 
              alt="د. أحمد تمام" 
              className="w-[85%] max-w-[500px] object-contain drop-shadow-[0_20px_50px_rgba(200,215,73,0.3)] relative z-10 hover:scale-105 transition-transform duration-500"
              onError={(e) => { 
                (e.currentTarget as HTMLImageElement).src = 'https://via.placeholder.com/400x500/0D3B3F/C8D749?text=Doctor+Ahmed'; 
              }}
              crossOrigin="anonymous"
            />
            
            <div className="absolute top-[20%] right-[5%] text-[#C8D749]/20 text-5xl animate-pulse z-0">🧬</div>
            <div className="absolute top-[40%] left-[0%] text-white/10 text-6xl z-0 -rotate-12">🔬</div>
            <div className="absolute bottom-[20%] right-[-5%] text-[#C8D749]/10 text-7xl z-0 animate-[bounce_5s_infinite]">🦠</div>
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

      {/* ================= GLOBAL FOOTER SECTION ================= */}
      <footer className="bg-[#02040A] pt-16 pb-8 px-6 border-t border-white/5 relative z-10 overflow-hidden">
        
        {/* إضاءة علوية خفيفة تفصل الفوتر */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#C8D749]/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          
          {/* الجانب الأيمن: شعار منصة الدكتور */}
          <div className="flex flex-col items-center md:items-start" dir="ltr">
            <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
              <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-3xl font-black text-white leading-none tracking-wide">Tammam</span>
                <span className="text-[12px] text-[#C8D749] font-bold tracking-widest uppercase">Biology Society</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-4 text-center md:text-left max-w-xs">
              المنصة التعليمية الأقوى في مصر لشرح مادة الأحياء للثانوية العامة بنظام حديث ومطور.
            </p>
          </div>

          {/* الجانب الأيسر: هوية الشركة (Giza-Tech) */}
          <div className="flex flex-col items-center md:items-end text-center md:text-left" dir="ltr">
            <p className="text-[10px] text-gray-600 tracking-widest uppercase mb-4">Architected & Powered By</p>
            
            {/* Giza-Tech Logo (شكل هندسي احترافي) */}
            <div className="flex items-center gap-4 group cursor-pointer">
              {/* أيقونة اللوجو */}
              <div className="relative flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#0D1524] to-[#070B14] border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:border-[#C8D749]/50 group-hover:shadow-[0_0_30px_rgba(200,215,73,0.15)]">
                <svg className="w-7 h-7 text-[#C8D749] transition-transform duration-700 group-hover:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
                {/* تأثير إضاءة خلف اللوجو */}
                <div className="absolute inset-0 bg-[#C8D749]/5 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              {/* اسم الشركة */}
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-[0.15em] bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent uppercase">Giza-Tech</span>
                <span className="text-[#C8D749] text-[9px] tracking-[0.3em] font-mono mt-0.5">SOFTWARE SOLUTIONS</span>
              </div>
            </div>

            {/* بادج المهندس المعماري (Elgizawy) */}
            <div className="flex items-center gap-3 mt-5 px-4 py-2 rounded-lg bg-white/[0.02] border border-white/5 backdrop-blur-sm transition-colors hover:bg-white/[0.04]">
              <span className="text-[10px] text-gray-500 font-mono tracking-wider uppercase">Lead Architect</span>
              <div className="w-[2px] h-3 bg-[#C8D749]/50 rounded-full"></div>
              <span className="text-xs font-bold text-white tracking-widest">ELGIZAWY <span className="text-[10px] ml-1">👑</span></span>
            </div>
          </div>

        </div>

        {/* شريط حقوق الملكية السفلي (Copyright Bar) */}
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-mono" dir="ltr">
          <p>© {new Date().getFullYear()} Tammam Biology Society. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-gray-400 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-gray-400 cursor-pointer transition-colors">Terms of Service</span>
            <span className="px-2 py-1 bg-white/5 rounded text-[#C8D749]">v1.0.0-beta</span>
          </div>
        </div>

      </footer>

    </div>
  );
}
