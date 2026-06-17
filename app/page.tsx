"use client";

import React from "react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div 
      dir="rtl" 
      className="min-h-screen bg-[#05050A] text-gray-100 font-sans relative overflow-x-hidden antialiased selection:bg-purple-500/30"
    >
      
      {/* 🧬 خلفية الأحياء (Cellular Pattern) 🧬 */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%22104%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20stroke%3D%22rgba(168,85,247,0.03)%22%20stroke-width%3D%221%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M30%200l26%2015v30L30%2060%204%2045V15z%22%2F%3E%3Cpath%20d%3D%22M30%20104l26-15V59L30%2044%204%2059v30z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] bg-[size:60px_104px] pointer-events-none z-0"></div>

      {/* 🦠 عناصر أحياء طايرة في الخلفية 🦠 */}
      <div className="fixed top-[15%] right-[8%] text-8xl opacity-[0.03] pointer-events-none animate-[pulse_4s_ease-in-out_infinite] -z-10 grayscale blur-[2px]">🧬</div>
      <div className="fixed bottom-[25%] left-[5%] text-9xl opacity-[0.02] pointer-events-none animate-[bounce_8s_infinite] -z-10 grayscale blur-[3px]">🦠</div>
      <div className="fixed top-[55%] right-[35%] text-7xl opacity-[0.03] pointer-events-none animate-[pulse_6s_ease-in-out_infinite] -z-10 grayscale blur-[2px]">🔬</div>

      {/* إضاءات النيون */}
      <div className="fixed top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Navbar */}
      <nav className="w-full border-b border-white/5 bg-[#0A0A0F]/70 backdrop-blur-xl sticky top-0 z-50">
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

      <main className="relative z-10">
        {/* ================= HERO SECTION ================= */}
        <section className="max-w-5xl mx-auto text-center px-6 pt-24 pb-16 space-y-8">
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
        </section>

        {/* ================= STATS SECTION ================= */}
        <section className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-xl">
            {[
              { num: "+5000", label: "طالب متفوق", color: "text-purple-400" },
              { num: "أوائل", label: "على مستوى الجمهورية", color: "text-pink-400" },
              { num: "+10,000", label: "سؤال متجاوب", color: "text-blue-400" },
              { num: "100%", label: "متابعة مستمرة", color: "text-indigo-400" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-4">
                <h3 className={`text-3xl md:text-5xl font-black mb-2 ${stat.color}`}>{stat.num}</h3>
                <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= ABOUT SECTION ================= */}
        <section id="about" className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* النص والمحتوى */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                  طبيب بشري ومعلم.. <br/> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">يجمع بين عُمق الطب وفن التدريس</span>
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  <strong className="text-white">دكتور أحمد تمام</strong>، طبيب بكلية الطب البشري جامعة عين شمس، ومدرس أحياء استثنائي. يمتلك أفضل وأقوى "سبورة" في مصر بشهادة الجميع.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  يعتمد في شرحه على الخرائط الذهنية والتعمق الممنهج، ليرتقي بتفكيرك من مجرد الحفظ إلى <strong className="text-pink-300">درجة الفهم الكامل</strong> لكل تفصيلة في المنهج، معتمدًا على الصور، الفيديوهات، والنماذج الملموسة.
                </p>
              </div>

              {/* المحاور الأربعة */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { title: "الفهم العميق", desc: "ربط المعلومات بأفكار استنتاجية", icon: "🧠", color: "from-blue-500/20 to-blue-500/5", border: "hover:border-blue-500/30" },
                  { title: "الحفظ المتقن", desc: "مراجعة المعلومة أكثر من مرة", icon: "🔒", color: "from-purple-500/20 to-purple-500/5", border: "hover:border-purple-500/30" },
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

              {/* رسالة المستر */}
              <div className="mt-8 relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 border-r-4 border-r-purple-500 backdrop-blur-md">
                <div className="absolute top-4 right-4 text-4xl text-purple-500/20">"</div>
                <p className="text-gray-300 italic leading-relaxed text-sm relative z-10">
                  "رسالة لطلبة العلم عندي: اعتبروني أخاكم الكبير، نتدارس العلم سوياً ونستفيد جميعاً. لا أطلب منكم إلا النية بالاستعداد للتفوق، وأنا بعون الله سأجعل منكم متفوقين ولن أدخر علماً ولا مجهوداً... فخذوا الكتاب بقوة ولنستمتع معاً بالرحلة."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-purple-500"></div>
                  <span className="text-sm text-purple-300 font-bold">د. أحمد تمام</span>
                </div>
              </div>
            </div>

            {/* الجانب الأيسر: صورة المستر */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-blue-600/30 rounded-full blur-[80px] -z-10"></div>
              <div className="relative rounded-[2.5rem] border border-white/10 p-2 bg-white/[0.02] backdrop-blur-xl shadow-2xl group overflow-hidden">
                <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-[#0A0A0F] flex items-center justify-center">
                  
                  {/* ====== هنا هتحط صورة المستر بعد ما تنزلها في فولدر public ====== */}
                  <img 
                    src="/dr-ahmed.jpg" 
                    alt="د. أحمد تمام" 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => { 
                      // ده هيشتغل لو الصورة لسه مش موجودة عشان متبوظش الشكل
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWExYTFhIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGR5PSIuM2VtIiBmaWxsPSIjYThhMmExIiBmb250LXNpemU9IjI0IiBmb250LWZhbWlseT0iQXJpYWwiIHRleHQtYW5jaG9yPSJtaWRkbGUiPti12YjYsdipINin2YTZhdiv2YPYqtmI2LEg2YfZhtinPC90ZXh0Pjwvc3ZnPg=='; 
                    }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-transparent to-transparent opacity-80"></div>
                </div>

                {/* Badge */}
                <div className="absolute bottom-8 right-8 left-8 p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-xl shadow-inner">🩺</div>
                    <div>
                      <h3 className="text-white font-bold text-lg">طبيب بشري</h3>
                      <p className="text-purple-300 text-sm">جامعة عين شمس</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= BOOK SECTION (كتاب المايسترو) ================= */}
        <section className="max-w-7xl mx-auto px-6 py-20 relative">
          <div className="rounded-[3rem] bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-white/10 p-8 md:p-16 backdrop-blur-md overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px]"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 text-yellow-300 text-xs font-bold mb-4 border border-yellow-500/20">
                  👑 المرجع الأول في الأحياء
                </div>
                <h2 className="text-4xl font-black text-white mb-6">كتاب المايسترو</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  مُعد خصيصاً ليكون رفيقك نحو الدرجة النهائية. كتاب متقن وقوي جداً علمياً وفكرياً على مستوى الشرح والتنظيم والأسئلة. هو عصير كتب حقيقي مبهر، يغنيك عن أي مصادر أخرى، بالإضافة للبوسترات والملازم الممتازة.
                </p>
                <ul className="space-y-3 mb-8">
                  {["شرح تفصيلي بالخرائط الذهنية", "بنك أسئلة متدرج الصعوبة", "إجابات نموذجية بالشرح مفصلة", "أسئلة مقالية مطابقة لمواصفات الوزارة"].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                      <span className="text-green-400">✔️</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center items-center">
                {/* Book Mockup 3D Effect */}
                <div className="w-64 h-80 rounded-r-3xl rounded-l-md bg-gradient-to-br from-purple-600 to-blue-800 shadow-[20px_20px_50px_rgba(0,0,0,0.5),inset_4px_0_10px_rgba(255,255,255,0.2)] border-r border-white/20 p-6 flex flex-col justify-between transform -rotate-12 transition-transform duration-500 hover:rotate-0 hover:scale-105 cursor-pointer">
                  <div className="text-center">
                    <h3 className="text-2xl font-black text-white tracking-widest">المايسترو</h3>
                    <p className="text-[10px] text-purple-200 mt-2">في علم الأحياء - للثانوية العامة</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-white/70 font-bold border-t border-white/20 pt-4">إعداد: د. أحمد تمام</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= TESTIMONIALS SECTION (آراء الطلاب) ================= */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">صناع <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">القمة</span></h2>
            <p className="text-gray-400">دي النتيجة لما تلتزم بالمنهجية بتاعتنا طول السنة</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: "السبورة بتاعة دكتور أحمد لوحدها حكاية، بتلخص الدرس كله في رسمة واحدة مستحيل تنساها في الامتحان.", name: "طالبة ثانوية عامة 2025", score: "60/60 أحياء" },
              { text: "أنا كنت بكره الأحياء وبحسها حفظ بس، مع دكتور أحمد تمام بقيت بفهم كل كلمة جات منين وبستنتج لوحدي.", name: "طالب ثانوية عامة 2024", score: "59/60 أحياء" },
              { text: "الامتحانات الدورية والمتابعة الصارمة هما اللي خلوني مقصرش ولا لحظة، شكراً دكتور أحمد من كل قلبي.", name: "طالبة ثانوية عامة 2025", score: "الدرجة النهائية" },
            ].map((review, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md relative hover:bg-white/[0.04] transition-all">
                <div className="text-4xl text-purple-500/20 absolute top-4 right-4">"</div>
                <p className="text-gray-300 leading-relaxed mb-6 text-sm relative z-10">{review.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-blue-600 flex items-center justify-center font-bold">👤</div>
                  <div>
                    <h4 className="text-white font-bold text-sm">{review.name}</h4>
                    <p className="text-purple-400 text-xs">{review.score}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= FAQ SECTION (الأسئلة الشائعة) ================= */}
        <section className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white">الأسئلة الشائعة</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "هل المنصة تغني عن الدروس الخصوصية؟", a: "بكل تأكيد، المنصة مصممة لتكون نظاماً متكاملاً يشمل الشرح، المراجعة، الحل المكثف، والامتحانات." },
              { q: "كيف يتم متابعة الطالب مع ولي الأمر؟", a: "يوجد نظام رادار وإشعارات دورية تُرسل لولي الأمر بتقرير مفصل عن الحضور ودرجات الامتحانات." },
              { q: "هل هناك تواصل مباشر مع دكتور أحمد؟", a: "نعم، يتم تخصيص جلسات (لايف) بعد الحصص للرد على كافة أسئلة واستفسارات الطلاب." },
              { q: "إزاي أقدر أحصل على كتاب المايسترو؟", a: "بمجرد الاشتراك في المنصة، يتم شحن الكتاب والملازم إلى باب بيتك في أي محافظة في مصر." }
            ].map((faq, i) => (
              <details key={i} className="group rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md overflow-hidden cursor-pointer">
                <summary className="p-6 font-bold text-white flex justify-between items-center group-open:text-purple-400 transition-colors">
                  {faq.q}
                  <span className="text-gray-500 group-open:rotate-45 transition-transform duration-300">➕</span>
                </summary>
                <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ================= BOTTOM CTA ================= */}
        <section className="max-w-5xl mx-auto px-6 py-20 text-center">
          <div className="p-12 rounded-[3rem] bg-gradient-to-t from-purple-900/40 to-transparent border border-white/10 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9InJnYmEoMTY4LDg1LDI0NywwLjEpIi8+PC9zdmc+')] opacity-50"></div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 relative z-10">مستعد تقفل الأحياء؟</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto relative z-10">مكانك محجوز وسط الأوائل، متضيعش وقت وابدأ رحلتك مع دكتور أحمد تمام دلوقتي.</p>
            <Link href="/auth/register" className="inline-block px-12 py-4 rounded-xl font-black text-lg bg-white text-black hover:bg-gray-200 shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 transform hover:-translate-y-1 relative z-10">
              سجل حسابك الآن
            </Link>
          </div>
        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="w-full border-t border-white/10 bg-[#05050A] py-10 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center space-y-6">
          <span className="text-3xl">🧬</span>
          <p className="text-sm text-gray-400 font-medium text-center">
            © {new Date().getFullYear()} جميع الحقوق محفوظة | المنصة التعليمية لدكتور أحمد تمام
          </p>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/5">
            <span className="text-[11px] text-gray-400 tracking-wider">SYSTEM ARCHITECTED BY</span>
            <span className="text-[12px] font-black bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent tracking-widest">ELGIZAWY 👑</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
