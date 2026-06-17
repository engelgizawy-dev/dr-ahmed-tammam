import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-gray-100 font-sans selection:bg-purple-500/30 selection:text-purple-200 overflow-x-hidden relative">
      
      {/* شبكة نيون خلفية خافتة جداً لشكل سايبربانك ملكي */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2e_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      {/* 1. الهيدر العلوي الزجاجي */}
      <header className="sticky top-0 w-full z-50 border-b border-white/5 bg-[#0A0A0F]/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-3xl animate-pulse">👑</span>
            <div className="flex flex-col text-right">
              <span className="text-lg font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                منصة الدكتور التعليمية
              </span>
              <span className="text-[10px] text-gray-500 font-mono tracking-widest">DR. AHMED TAMMAM</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Link 
              href="/login" 
              className="px-6 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-sm font-medium transition-all duration-300 backdrop-blur-sm"
            >
              تسجيل الدخول
            </Link>
          </div>
        </div>
      </header>

      {/* 2. الـ Hero Section الرئيسي */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20">
        
        {/* الكلام والترحيب الفخم (يمين) */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-right order-2 lg:order-1">
          <div className="inline-flex self-start gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20 backdrop-blur-sm">
            <span>🚀</span> طريقك المضمون لقفل الـ 100% في الأحياء
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black leading-tight text-white">
            الطبيب والمعلم <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_2px_20px_rgba(168,85,247,0.2)]">
              د. أحمد تمَّام
            </span>
          </h1>
          
          <p className="text-lg md:text-xl font-bold text-purple-300 font-mono tracking-wide">
            Dr. Ahmed Tammam — Biology Tutor
          </p>
          
          <p className="text-base md:text-lg text-gray-400 max-w-2xl leading-relaxed">
            دكتور في كلية طب بشري جامعة عين شمس، وصاحب أفضل سبورة في مصر علميًا وتنظيميًا وفنيًا بشهادة طلابنا. بنظامنا الذكي، الأحياء مش هتبقى مجرد مادة، هتبقى رحلة ممتعة وتفوق مضمون.
          </p>

          {/* أزرار السي تي إيه المضيئة */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
            <Link 
              href="/register" 
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-black text-center shadow-[0_0_30px_rgba(147,51,234,0.3)] hover:shadow-[0_0_40px_rgba(147,51,234,0.5)] transition-all duration-300 transform hover:-translate-y-1"
            >
              أنشئ حسابك الرباعي المؤمن مجاناً
            </Link>
            
            <Link 
              href="/login" 
              className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold text-center backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1"
            >
              دخول المنصة (طلاب السنتر / الأونلاين)
            </Link>
          </div>
        </div>

        {/* صورة الدكتور مع توهج نيون خلفي (يسار) */}
        <div className="lg:col-span-5 flex justify-center items-center relative order-1 lg:order-2">
          {/* هالة نيون بنفسجية مشعة خلف كارت الصورة */}
          <div className="absolute w-72 h-72 md:w-[400px] md:h-[400px] bg-purple-600/20 rounded-full blur-[120px] -z-10 animate-pulse" />
          
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl p-4 border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-2xl overflow-hidden group hover:border-purple-500/30 transition-all duration-500">
            {/* استخدام كود الصورة القياسي المباشر لتخطي قيود الـ Build والـ Optimization على فرسيل */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-purple-900/20 to-black">
              <img 
                src="https://drive.google.com/thumbnail?id=1iv-TSscvu2HfAyzHvmjJVch1WGMevwQd&sz=w1000"
                alt="دكتور أحمد تمام"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              {/* تدرج سفلي مظلم لدمج الصورة مع الكارت والـ Dark UI */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 right-6 text-right">
                <span className="text-xs font-mono tracking-widest text-purple-400 font-bold block mb-1">BIOLOGY MASTERPIECE</span>
                <h3 className="text-xl font-black text-white">صاحب أفضل سبورة في مصر 🎨</h3>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* 3. سيكشن المحاور الأربعة الملكية (The 4 Pillars) */}
      <section className="max-w-7xl mx-auto px-6 py-20 relative z-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            رحلتنا للتفوق مبنية على <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">4 محاور أساسية</span>
          </h2>
          <p className="text-gray-400">نظام برمجى وتعليمي صارم ومتقن صُمم خصيصاً للارتقاء بعقلك وفهمك لأعلى المستويات.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* المحور الأول */}
          <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] backdrop-blur-md hover:border-purple-500/20 transition-all duration-300 text-right group">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex justify-center items-center text-2xl text-purple-400 mb-6 group-hover:bg-purple-500/20 transition-colors">🧠</div>
            <h3 className="text-xl font-bold text-white mb-3">1. الفهم العميق</h3>
            <p className="text-sm text-gray-400 leading-relaxed">شرح منظم بالخرائط الذهنية يتعمق في المعلومة ويرتقي بالأفكار لمستويات عليا لضمان الفهم الكامل.</p>
          </div>

          {/* المحور الثاني */}
          <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] backdrop-blur-md hover:border-pink-500/20 transition-all duration-300 text-right group">
            <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex justify-center items-center text-2xl text-pink-400 mb-6 group-hover:bg-pink-500/20 transition-colors">🔒</div>
            <h3 className="text-xl font-bold text-white mb-3">2. الحفظ المتقن</h3>
            <p className="text-sm text-gray-400 leading-relaxed">مراجعة دورية على كل معلومة مرة واثنين وثلاثة لتثبيت الحفظ، مع استخدام صور وفيديوهات عملية لتسهيل التخيل.</p>
          </div>

          {/* المحور الثالث */}
          <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] backdrop-blur-md hover:border-blue-500/20 transition-all duration-300 text-right group">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex justify-center items-center text-2xl text-blue-400 mb-6 group-hover:bg-blue-500/20 transition-colors">🔄</div>
            <h3 className="text-xl font-bold text-white mb-3">3. المراجعة الدورية</h3>
            <p className="text-sm text-gray-400 leading-relaxed">تكرار ذكي ومستمر يمنع نسيان الدروس القديمة، ومتابعة لحظية من المستر وتيم المساعدين.</p>
          </div>

          {/* المحور الرابع */}
          <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] backdrop-blur-md hover:border-green-500/20 transition-all duration-300 text-right group">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex justify-center items-center text-2xl text-green-400 mb-6 group-hover:bg-green-500/20 transition-colors">📝</div>
            <h3 className="text-xl font-bold text-white mb-3">4. الحل المكثف</h3>
            <p className="text-sm text-gray-400 leading-relaxed">حل كم ضخم جداً من الأسئلة الاختيارية والمقالية من كتاب المايسترو الشامل، مع اختبارات بعد كل حصة وشوامل دورية.</p>
          </div>

        </div>
      </section>

      {/* 4. رسالة الطبيب والتعريف (The Vision Section) */}
      <section className="max-w-5xl mx-auto px-6 py-16 mb-24 rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent backdrop-blur-xl relative z-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] -z-10" />
        
        <div className="text-right space-y-6 p-4 md:p-8">
          <h2 className="text-2xl md:text-3xl font-black text-white border-r-4 border-purple-500 pr-4">
            كلمتين مهمين جداً من أخوكم الكبير 🩺
          </h2>
          
          <div className="text-gray-300 space-y-4 leading-relaxed text-base md:text-lg">
            <p className="font-semibold text-purple-300">
              للي مش عارفني أنا طبيب بشري (Doctor) وفي نفس الوقت مدرس أحياء خاص (Biology tutor).
            </p>
            <p>
              ومفيش أي تعارض بين الاتنين لأنهم في نفس المجال، وبحكم دراستي فأنا عندي مادة علمية قوية جداً بقدمها لطلاب العلم الراغبين فيها، وده شيء سليم وقانوني وشائع في العالم كله.
            </p>
            <blockquote className="bg-white/[0.02] p-6 rounded-2xl border-l-2 border-r-2 border-purple-500/30 text-gray-200 italic font-medium my-6">
              "اعتبروني أخاكم الكبير لا أكثر، نتدارس العلم سوياً ونستفيد جميعاً. لا أطلب منكم إلا النية بالاستعداد للتفوق، وأنا بعون الله سأجعل منكم متفوقين ولن أدخر علماً ولا مجهوداً."
            </blockquote>
            <p className="text-sm text-gray-400">
              تيقنوا أن التعمق وعلو مستوى الشرح وصعوبة الاختبارات ليس إلا لإفادتكم والارتقاء بعلمكم، فخذوا الكتاب بقوة ولنستمتع معاً بالرحلة لنحتفل جميعاً بالوصول... فمرحباً بمن يناسبه نظامي!
            </p>
          </div>
        </div>
      </section>

      {/* 5. الفوتر السفلي الملكي */}
      <footer className="w-full text-center text-xs text-gray-500 z-20 py-8 border-t border-white/5 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-4">
        <div>جميع الحقوق محفوظة © {new Date().getFullYear()} — منصة الدكتور التعليمية الذكية</div>
        <div className="font-mono text-[10px] tracking-wider text-purple-400/60">ARCHITECTED BY ELGIZAWY 👑</div>
      </footer>

    </div>
  );
}
