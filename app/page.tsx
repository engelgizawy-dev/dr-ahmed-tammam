"use client";

import React from "react";
import ReactPlayer from "react-player/lazy"; // إذا كنت ستستخدم فيديو لاحقاً
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-gray-100 font-sans relative overflow-x-hidden antialiased">
      
      {/* تأثيرات إضاءة النيون العميقة في الخلفية */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* الـ Navbar الرايق الفخم - الأزرار فوق على الشمال فقط وبدون فلاحية */}
      <nav className="w-full border-b border-white/5 bg-white/[0.01] backdrop-blur-md sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* الأزرار فوق على الشمال */}
          <div className="flex space-x-3">
            <Link 
              href="/auth/login" 
              className="px-5 py-2.5 rounded-xl text-sm font-bold text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              تسجيل الدخول
            </Link>
            <Link 
              href="/auth/register" 
              className="px-5 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white shadow-[0_0_15px_rgba(147,51,234,0.3)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              إنشاء حساب
            </Link>
          </div>
          
          {/* اليمين فارغ وهادئ تماماً */}
          <div></div>
        </div>
      </nav>

      {/* الرأس الرئيسي للمنصة (Hero Section) */}
      <header className="max-w-5xl mx-auto text-center px-6 pt-16 pb-12 relative z-10 space-y-6" dir="rtl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-300 text-xs font-mono mb-2">
          ✨ المنصة التعليمية الرسمية لمادة الأحياء
        </div>
        <h1 className="text-4xl md:text-6xl font-black leading-tight text-white">
          طبيب والمعلم <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            (د.أحمد تمَّام)
          </span>
        </h1>
        <p className="text-lg md:text-xl font-bold text-purple-400">
          دكتور في كلية طب بشري جامعة عين شمس
        </p>

        {/* مكان مخصص لوضع صورة الدكتور الاحترافية بأبعاد زجاجية متناسقة */}
        <div className="pt-8 max-w-md mx-auto relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
          <div className="relative rounded-2xl border border-white/10 overflow-hidden bg-white/[0.02] aspect-[4/3] flex items-center justify-center">
            {/* يمكنك استبدال هذا الـ تيج بـ <img src="/dr-photo.jpg" /> فور تجهيز صورة الدكتور */}
            <div className="text-center p-6 space-y-2">
              <span className="text-5xl block">👨‍⚕️</span>
              <p className="text-xs text-gray-500 font-mono">[ مكان صورة د. أحمد تمام الاحترافية ]</p>
            </div>
          </div>
        </div>
      </header>

      {/* محتوى المنصة المنسق بالحرف داخل كروت الـ Glassmorphism الفخمة */}
      <main className="max-w-4xl mx-auto px-6 pb-20 space-y-8 relative z-10" dir="rtl">
        
        {/* كارت التعريف والنجاح الأسطوري */}
        <div className="rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-xl p-8 md:p-10 shadow-2xl space-y-6 hover:border-purple-500/10 transition-all duration-300">
          <p className="text-base md:text-lg font-medium leading-relaxed text-gray-300">
            صاحب أفضل سبورة في مصر (علميًا وتنظيميًا وفنيًا) بشهادة كل الطلبة والمدرسين. <br /><br />
            معد كتاب المايسترو في الأحياء كتاب متقن وقوي جدا علميا وفكريا على مستوى الشرح والتنظيم والأسئلة وهو عصير كتب حقيقي مبهر ده غير البوسترات والملازم الممتازة.
          </p>

          <div className="border-t border-white/5 pt-6 space-y-4">
            <h3 className="text-lg font-black text-purple-400">لماذا نظام الدكتور أحمد تمام؟</h3>
            <ul className="space-y-3 text-gray-300 text-sm md:text-base list-none pr-0">
              <li className="flex items-start gap-2"><span className="text-purple-500 mt-1">🔹</span> <span>بيشرح بطريقة منظمة جدا بالخرائط الذهنية وبيتعمق في المعلومات وبيرتقي بالأفكار لمستويات عالية جدا فبيوصلك لدرجة فهم كامل للمادة بتفاصيلها.</span></li>
              <li className="flex items-start gap-2"><span className="text-purple-500 mt-1">🔹</span> <span>بيحل كم ضخم من الأسئلة اختياري ومقالي وبيمتحن طلابه كل حصة وشوامل بشكل دوري.</span></li>
              <li className="flex items-start gap-2"><span className="text-purple-500 mt-1">🔹</span> <span>بيراجع على كل معلومة مرة واتنين وتلاتة لتثبيت الحفظ.</span></li>
              <li className="flex items-start gap-2"><span className="text-purple-500 mt-1">🔹</span> <span>بيستخدم صور وفيديوهات ونماذج عملية ملموسة لتسهيل التخيل والفهم.</span></li>
              <li className="flex items-start gap-2"><span className="text-purple-500 mt-1">🔹</span> <span>دايما بعد كل حصة ليه جلسه مع طلابه يجاوبهم على كل أسئلتهم ويشرحلهم كل اللي محتاجينه.</span></li>
            </ul>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed pt-2">
            ده غير ان دكتور أحمد كمان على المستوى الشخصي قدوة جميلة ليكم كلكم علميا وخلقيا وثقافيا هتحبوه وهتتعلموا منه كتير في حياتكم مش بس مادة علمية. <br /><br />
            دي بعد توفيق ربنا هي الأسباب اللي خلت دكتور أحمد تمام يحقق نجاح كبير في فترة قصيرة ويبقى عنده طلاب وأوائل بأعداد كبيرة جدا ويبقى اسمه ليه وزن تقيل في مجاله ولسه النجاح مستمر.
            <span className="block text-xs text-gray-600 mt-2 font-mono">-منقول-</span>
          </p>
        </div>

        {/* كارت رسالة الطبيب والمعلم والمحاور الأربعة */}
        <div className="rounded-3xl border border-purple-500/10 bg-purple-500/[0.01] backdrop-blur-xl p-8 md:p-10 shadow-2xl space-y-6">
          <div>
            <h2 className="text-xl font-black text-purple-400 mb-4">كلمتين مهمين جدًا:-</h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              للي مش عارفني انا طبيب بشري (Doctor) وفي نفس الوقت مدرس أحياء خاص (Biology tutor) ومفيش أي تعارض بين الاتنين لانهم في نفس المجال ولاني مقولتش اني تربوي ولا إني شغال في مدرسة ولكن بحكم دراستي فانا عندي مادة علمية بقدمها لطلاب العلم الراغبين فيها ودي شيء حلال وقانوني وسليم وشائع في جميع دول العالم فنسألكم الدعاء بالتوفيق.
            </p>
          </div>

          <div className="border-t border-white/5 pt-6 space-y-4">
            <p className="text-base font-bold italic text-gray-200">
              "رسالة لطلبة العلم عندي اعتبروني أخاكم الكبير لا أكثر نتدارس العلم سويا ونستفيد جميعا لا أطلب منكم إلا النية بالاستعداد للتفوق وأنا بعَون اللَّه سأجعل منكم متفوقين ولن أدخر علما ولا مجهودًا وسنعمل على 4 محاور:-"
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 font-bold text-sm text-purple-300">1- الفهم العميق</div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 font-bold text-sm text-purple-300">2- الحفظ المتقن</div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 font-bold text-sm text-purple-300">3- المراجعة الدورية</div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 font-bold text-sm text-purple-300">4- الحل المكثف</div>
            </div>

            <p className="text-sm md:text-base font-medium text-gray-300 leading-relaxed pt-2">
              وتيقنوا أن التعمق وعُلوَّ مستوى الشرح وصعوبة الاختبارات ليس إلا لإفادتكم والارتقاء بعلمكم فخذوا الكتاب بقوة ولنستمتع معًا بالرحلة لنحتفل جميعًا بالوصول...فمرحبا بمن يناسبه نظامي.
            </p>
          </div>

          <div className="text-center text-purple-400 font-black pt-2 text-base md:text-lg">
            الحمد لله دائمًا وأبدًا على توفيقه وكرمه
          </div>
        </div>

      </main>

      {/* الـ Footer الاحترافي الصامت */}
      <footer className="w-full border-t border-white/5 bg-black/40 py-6 text-center text-xs text-gray-600 font-mono tracking-wider relative z-10">
        © {new Date().getFullYear()} DR-AHMED-TAMMAM. ALL RIGHTS RESERVED. <br />
        <span className="text-[10px] text-gray-700 block mt-1">ARCHITECTED BY ELGIZAWY 👑</span>
      </footer>

    </div>
  );
}
