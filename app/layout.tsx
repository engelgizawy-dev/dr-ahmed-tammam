import './globals.css'

export const metadata = {
  title: 'منصة الدكتور أحمد تمام',
  description: 'المنصة التعليمية الذكية لمادة الأحياء',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
