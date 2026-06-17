"use client";

import React from "react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div 
      dir="rtl" 
      className="min-h-screen bg-[#05050A] text-gray-100 font-sans relative overflow-x-hidden antialiased selection:bg-purple-500/30"
    >
      
      {/* شبكة الخلفية التقنية (Grid Background) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0"></div>

      {/* تأثيرات إضاءة النيون الديناميكية */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-pink-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* الـ Navbar العلوي الفخم */}
      <nav className="w-full border-b border-white/5 bg-[#0A0A0F]/60 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* اللوجو */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <span className="text-3xl transition-transform duration-300 group-hover:scale-110">🧬</span>
            <span className="text-2xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(168,85,247,0.2)]">
              د. أحمد تمام
            </span>
          </div>

          {/* أزرار التسجيل */}
          <div className="flex items-center gap-4">
            <Link 
              href="/auth/login" 
              className="hidden sm:block px-5 py-2 rounded-xl text-sm font-bold text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              تسجيل الدخول
            </Link>
            <Link 
              href="/auth/register" 
              className="px-6 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] border border-white/10"
            >
              إنشاء حساب
            </Link>
          </div>
        </div>
      </nav>

      {/* قسم الـ Hero (الترحيب الرئيسي) */}
      <header className="max-w-5xl mx-auto text-center px-6 pt-24 pb-20 relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium tracking-wide shadow-[0_0_15px_rgba(168,85,247,0.1)] backdrop-blur-md">
          <span className="animate-pulse">✨</span> المنصة التعليمية الأقوى في مادة الأحياء
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight text-white">
          سر التقفيل في الأحياء <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent relative">
            مع الدكتور أحمد تمام
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50 blur-sm"></div>
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
          نظام تعليمي ذكي مبني على الفهم والتحليل العالي، مجهز بأحدث وسائل الشرح والاختبارات التفاعلية ونظام رادار لمتابعة أدائك خطوة بخطوة للوصول للدرجة النهائية.
        </p>
        
        <div className="pt-8 flex flex-col sm:flex-row justify-center items-center gap-5">
          <Link 
            href="/auth/register" 
            className="w-full sm:w-auto px-10 py-4 rounded-xl font-black text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white shadow-[0_0_30px_rgba(147,51,234,0.4)] transition-all duration-300 transform hover:-translate-y-1 text-center border border-white/10 flex items-center justify-center gap-3"
          >
            ابدأ رحلة التميز الآن 🚀
          </Link>
          <Link 
            href="#features" 
            className="w-full sm:w-auto px-10 py-4 rounded-xl font-bold text-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all duration-300 backdrop-blur-md text-center"
          >
            اكتشف مميزاتنا
          </Link>
        </div>
      </header>

      {/* قسم المميزات (Features) */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* الميزة الأولى */}
          <div className="group rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl p-8 transition-all duration-500 hover:border-purple-500/30 hover:bg-white/[0.04] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(168,85,247,0.1)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl transition-all group-hover:bg-purple-500/20"></div>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/20 flex items-center justify-center text-2xl mb-6 shadow-inner">
              🖥️
            </div>
            <h3 className="text-xl font-bold text-white mb-3">محاضرات بجودة فائقة</h3>
            <p className="text-base text-gray-400 leading-relaxed">
              شرح تفصيلي للمنهج مع ربط جزيئات الأحياء بالأسئلة الاستنتاجية الحديثة وأفكار نواتج التعلم المتطورة لضمان الفهم العميق.
            </p>
          </div>

          {/* الميزة الثانية */}
          <div className="group rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl p-8 transition-all duration-500 hover:border-pink-500/30 hover:bg-white/[0.04] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(236,72,153,0.1)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl transition-all group-hover:bg-pink-500/20"></div>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500/20 to-pink-600/10 border border-pink-500/20 flex items-center justify-center text-2xl mb-6 shadow-inner">
              📝
            </div>
            <h3 className="text-xl font-bold text-white mb-3">امتحانات وتدريبات دورية</h3>
            <p className="text-base text-gray-400 leading-relaxed">
              اكتشف نقاط ضعفك فوراً من خلال اختبارات تفاعلية بعد كل محاضرة، مع تصحيح تلقائي وتقارير أداء شاملة وحلول تفصيلية.
            </p>
          </div>

          {/* الميزة الثالثة */}
          <div className="group rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl p-8 transition-all duration-500 hover:border-blue-500/30 hover:bg-white/[0.04] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl transition-all group-hover:bg-blue-500/20"></div>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/20 flex items-center justify-center text-2xl mb-6 shadow-inner">
              🎯
            </div>
            <h3 className="text-xl font-bold text-white mb-3">متابعة دقيقة وصارمة</h3>
            <p className="text-base text-gray-400 leading-relaxed">
              تقارير دورية تُرسل لولي الأمر لمتابعة حضور الطالب، غيابه، ودرجاته في الامتحانات لضمان الالتزام التام وتصحيح المسار.
            </p>
          </div>

        </div>
      </section>

      {/* الـ Footer */}
      <footer className="w-full border-t border-white/10 bg-[#0A0A0F]/80 backdrop-blur-lg py-10 mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center space-y-4">
          <p className="text-sm text-gray-400 font-medium">
            © {new Date().getFullYear()} جميع الحقوق محفوظة | د. أحمد تمام
          </p>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/5">
            <span className="text-[11px] text-gray-400 tracking-wider">ARCHITECTED BY</span>
            <span className="text-[12px] font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">ELGIZAWY 👑</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
