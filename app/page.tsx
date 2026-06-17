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
      <div className="absolute top-[40%] right-[10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* الـ Navbar العلوي الفخم */}
      <nav className="w-full border-b border-white/5 bg-[#0A0A0F]/60 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group">
            <span className="text-3xl transition-transform duration-300 group-hover:scale-110">🧬</span>
            <span className="text-2xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(168,85,247,0.2)]">
              د. أحمد تمام
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/auth/login" className="hidden sm:block px-5 py-2 rounded-xl text-sm font-bold text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300">
              تسجيل الدخول
            </Link>
            <Link href="/auth/register" className="px-6 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] border border-white/10">
              إنشاء حساب
            </Link>
          </div>
        </div>
      </nav>

      {/* قسم الـ Hero */}
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
          <Link href="/auth/register" className="w-full sm:w-auto px-10 py-4 rounded-xl font-black text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white shadow-[0_0_30px_rgba(147,51,234,0.4)] transition-all duration-300 transform hover:-translate-y-1 text-center border border-white/10 flex items-center justify-center gap-3">
            ابدأ رحلة التميز الآن 🚀
          </Link>
          <Link href="#about" className="w-full sm:w-auto px-10 py-4 rounded-xl font-bold text-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all duration-300 backdrop-blur-md text-center">
            تعرف على دكتور أحمد
          </Link>
        </div>
      </header>

      {/* قسم من هو دكتور أحمد تمام؟ (About Instructor) - إبداع معماري */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* الجانب الأيمن: النص والمحتوى */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                طبيب بشري ومعلم.. <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">يجمع بين عُمق الطب وفن التدريس</span>
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                <strong className="text-white">دكتور أحمد تمام</strong>، طبيب بكلية الطب البشري جامعة عين شمس، ومدرس أحياء استثنائي. يمتلك أفضل وأقوى "سبورة" في مصر بشهادة الجميع، ومُعد كتاب <span className="text-purple-400 font-bold">"المايسترو"</span>؛ الخلاصة الأقوى علمياً وفكرياً.
              </p>
              <p className="text-gray-400 leading-relaxed">
                يعتمد في شرحه على الخرائط الذهنية والتعمق الممنهج، ليرتقي بتفكيرك من مجرد الحفظ إلى <strong className="text-pink-300">درجة الفهم الكامل</strong> لكل تفصيلة في المنهج، معتمدًا على الصور، الفيديوهات، والنماذج الملموسة.
              </p>
            </div>

            {/* المحاور الأربعة - كروت تفاعلية */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { title: "الفهم العميق", desc: "ربط المعلومات بأفكار استنتاجية", icon: "🧠", color: "from-blue-500/20 to-blue-500/5", border: "hover:border-blue-500/30" },
                { title: "الحفظ المتقن", desc: "مراجعة المعلومة أكثر من مرة للتثبيت", icon: "🔒", color: "from-purple-500/20 to-purple-500/5", border: "hover:border-purple-500/30" },
                { title: "المراجعة الدورية", desc: "امتحانات شاملة ومتابعة مستمرة", icon: "🔄", color: "from-pink-500/20 to-pink-500/5", border: "hover:border-pink-500/30" },
                { title: "الحل المكثف", desc: "آلاف الأسئلة الاختيارية والمقالية", icon: "📝", color: "from-indigo-500/20 to-indigo-500/5", border: "hover:border-indigo-500/30" },
              ].map((item, index) => (
                <div key={index} className={`p-5 rounded-2xl border border-white/5 bg-gradient-to-br ${item.color} backdrop-blur-sm transition-all duration-300 ${item.border} hover:-translate-y-1 group`}>
                  <div className="text-2xl mb-2 grayscale group-hover:grayscale-0 transition-all">{item.icon}</div>
                  <h4 className="text-white font-bold mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* رسالة المستر - Blockquote */}
            <div className="mt-8 relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 border-r-4 border-r-purple-500 backdrop-blur-md">
              <div className="absolute top-4 right-4 text-4xl text-purple-500/20">"</div>
              <p className="text-gray-300 italic leading-relaxed text-sm relative z-10">
                "رسالة لطلبة العلم عندي: اعتبروني أخاكم الكبير، نتدارس العلم سوياً ونستفيد جميعاً. لا أطلب منكم إلا النية بالاستعداد للتفوق، وأنا بعون الله سأجعل منكم متفوقين ولن أدخر علماً ولا مجهوداً... فخذوا الكتاب بقوة ولنستمتع معاً بالرحلة لنحتفل جميعاً بالوصول."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-[1px] bg-purple-500"></div>
                <span className="text-sm text-purple-300 font-bold">د. أحمد تمام</span>
              </div>
            </div>
          </div>

          {/* الجانب الأيسر: صورة المستر */}
          <div className="lg:col-span-5 relative">
            {/* تأثيرات خلف الصورة */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-blue-600/30 rounded-full blur-[80px] -z-10"></div>
            
            <div className="relative rounded-[2.5rem] border border-white/10 p-2 bg-white/[0.02] backdrop-blur-xl shadow-2xl group overflow-hidden">
              {/* الصورة */}
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-black">
                {/* 
                  ملاحظة هامة للمطور:
                  تم تحويل رابط جوجل درايف ليكون مباشر باستخدام (uc?export=view&id=).
                  الأفضل للـ Production إنك تحمل الصورة وتحطها في مجلد public 
                  وتستخدمها كده: src="/dr-ahmed.jpg"
                */}
                <img 
                  src="https://drive.google.com/uc?export=view&id=1iv-TSscvu2HfAyzHvmjJVch1WGMevwQd" 
                  alt="د. أحمد تمام" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/600x800/1a1a1a/a855f7?text=Doctor+Ahmed'; }}
                />
                
                {/* Overlay متدرج من تحت عشان يدمج الصورة مع الخلفية */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-transparent to-transparent opacity-80"></div>
              </div>

              {/* بادج (Badge) طاير على الصورة */}
              <div className="absolute bottom-8 right-8 left-8 p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-xl shadow-inner">
                    🩺
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">طبيب بشري</h3>
                    <p className="text-purple-300 text-sm">جامعة عين شمس</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* عناصر زينة طايرة */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4yKSIvPjwvc3ZnPg==')] opacity-50 z-[-1]"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4yKSIvPjwvc3ZnPg==')] opacity-50 z-[-1]"></div>
          </div>

        </div>
      </section>

      {/* الـ Footer */}
      <footer className="w-full border-t border-white/10 bg-[#0A0A0F]/80 backdrop-blur-lg py-10 relative z-10">
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
