"use client";

import React from "react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F4F6F9] text-[#1E293B] font-sans relative overflow-x-hidden antialiased">
      
      {/* تأثيرات خلفية ناعمة جداً بدون زغللة */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-200/40 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* الـ Navbar الرايق - الأزرار فوق على الشمال فقط */}
      <nav className="w-full border-b border-gray-200/60 bg-white/40 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* الأزرار فوق على الشمال */}
          <div className="flex space-x-3">
            <Link 
              href="/auth/login" 
              className="px-5 py-2.5 rounded-xl text-sm font-bold text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300"
            >
              تسجيل الدخول
            </Link>
            <Link 
              href="/auth/register" 
              className="px-5 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white shadow-md shadow-purple-500/10 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              إنشاء حساب
            </Link>
          </div>
          
          {/* اليمين فارغ تماماً وهادئ */}
          <div></div>
        </div>
      </nav>

      {/* الرأس الرئيسي (Hero) */}
      <header className="max-w-4xl mx-auto text-center px-6 pt-16 pb-12 relative z-10 space-y-6" dir="rtl">
        <h1 className="text-4xl md:text-5xl font-black leading-tight text-gray-900">
          طبيب والمعلم <br />
          <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 bg-clip-text text-transparent">
            (د.أحمد تمَّام)
          </span>
        </h1>
        <p className="text-lg md:text-xl font-bold text-purple-700">
          دكتور في كلية طب بشري جامعة عين شمس
        </p>
      </header>

      {/* المحتوى الرئيسي منسق في كروت زجاجية مريحة */}
      <main className="max-w-4xl mx-auto px-6 pb-20 space-y-8 relative z-10" dir="rtl">
        
        {/* كارت التعريف والنجاح */}
        <div className="rounded-3xl border border-white/60 bg-white/50 backdrop-blur-xl p-8 md:p-10 shadow-sm space-y-6">
          <p className="text-base md:text-lg font-medium leading-relaxed text-gray-800">
            صاحب أفضل سبورة في مصر (علميًا وتنظيميًا وفنيًا) بشهادة كل الطلبة والمدرسين. <br /><br />
            معد كتاب المايسترو في الأحياء كتاب متقن وقوي جدا علميا وفكريا على مستوى الشرح والتنظيم والأسئلة وهو عصير كتب حقيقي مبهر ده غير البوسترات والملازم الممتازة.
          </p>

          <div className="border-t border-gray-200/60 pt-6 space-y-4">
            <h3 className="text-lg font-black text-gray-900">لماذا نظام الدكتور أحمد تمام؟</h3>
            <ul className="space-y-3 text-gray-700 text-sm md:text-base list-disc list-inside pr-2">
              <li>بيشرح بطريقة منظمة جدا بالخرائط الذهنية وبيتعمق في المعلومات وبيرتقي بالأفكار لمستويات عالية جدا فبيوصلك لدرجة فهم كامل للمادة بتفاصيلها.</li>
              <li>بيحل كم ضخم من الأسئلة اختياري ومقالي وبيمتحن طلابه كل حصة وشوامل بشكل دوري.</li>
              <li>بيراجع على كل معلومة مرة واتنين وتلاتة لتثبيت الحفظ.</li>
              <li>بيستخدم صور وفيديوهات ونماذج عملية ملموسة لتسهيل التخيل والفهم.</li>
              <li>دايما بعد كل حصة ليه جلسه مع طلابه يجاوبهم على كل أسئلتهم ويشرحلهم كل اللي محتاجينه.</li>
            </ul>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed pt-2">
            ده غير ان دكتور أحمد كمان على المستوى الشخصي قدوة جميلة ليكم كلكم علميا وخلقيا وثقافيا هتحبوه وهتتعلموا منه كتير في حياتكم مش بس مادة علمية. <br /><br />
            دي بعد توفيق ربنا هي الأسباب اللي خلت دكتور أحمد تمام يحقق نجاح كبير في فترة قصيرة ويبقى عنده طلاب وأوائل بأعداد كبيرة جدا ويبقى اسمه ليه وزن تقيل في مجاله ولسه النجاح مستمر.
            <span className="block text-xs text-gray-400 mt-2 font-mono">-منقول-</span>
          </p>
        </div>

        {/* كارت رسالة الطبيب والمعلم الكلمتين المهمين */}
        <div className="rounded-3xl border border-purple-100 bg-purple-50/40 backdrop-blur-xl p-8 md:p-10 shadow-sm space-y-6">
          <div>
            <h2 className="text-xl font-black text-purple-900 mb-4">كلمتين مهمين جدًا:-</h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              للي مش عارفني انا طبيب بشري (Doctor) وفي نفس الوقت مدرس أحياء خاص (Biology tutor) ومفيش أي تعارض بين الاتنين لانهم في نفس المجال ولاني مقولتش اني تربوي ولا إني شغال في مدرسة ولكن بحكم دراستي فانا عندي مادة علمية بقدمها لطلاب العلم الراغبين فيها ودي شيء حلال وقانوني وسليم وشائع في جميع دول العالم فنسألكم الدعاء بالتوفيق.
            </p>
          </div>

          <div className="border-t border-purple-200/60 pt-6 space-y-4">
            <p className="text-base font-bold italic text-gray-800">
              "رسالة لطلبة العلم عندي اعتبروني أخاكم الكبير لا أكثر نتدارس العلم سويا ونستفيد جميعا لا أطلب منكم إلا النية بالاستعداد للتفوق وأنا بعَون اللَّه سأجعل منكم متفوقين ولن أدخر علما ولا مجهودًا وسنعمل على 4 محاور:-"
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
              <div className="p-3 rounded-xl bg-white/80 border border-purple-100 font-bold text-sm text-purple-800">1- الفهم العميق</div>
              <div className="p-3 rounded-xl bg-white/80 border border-purple-100 font-bold text-sm text-purple-800">2- الحفظ المتقن</div>
              <div className="p-3 rounded-xl bg-white/80 border border-purple-100 font-bold text-sm text-purple-800">3- المراجعة الدورية</div>
              <div className="p-3 rounded-xl bg-white/80 border border-purple-100 font-bold text-sm text-purple-800">4- الحل المكثف</div>
            </div>

            <p className="text-sm md:text-base font-medium text-gray-700 leading-relaxed pt-2">
              وتيقنوا أن التعمق وعُلوَّ مستوى الشرح وصعوبة الاختبارات ليس إلا لإفادتكم والارتقاء بعلمكم فخذوا الكتاب بقوة ولنستمتع معًا بالرحلة لنحتفل جميعًا بالوصول...فمرحبا بمن يناسبه نظامي.
            </p>
          </div>

          <div className="text-center text-purple-900 font-black pt-2 text-base md:text-lg">
            الحمد لله دائمًا وأبدًا على توفيقه وكرمه
          </div>
        </div>

      </main>

      {/* الـ Footer النظيف السلس */}
      <footer className="w-full border-t border-gray-200 bg-white/60 py-6 text-center text-xs text-gray-400 font-mono tracking-wider relative z-10">
        © {new Date().getFullYear()} DR-AHMED-TAMMAM. ALL RIGHTS RESERVED.
      </footer>

    </div>
  );
}
