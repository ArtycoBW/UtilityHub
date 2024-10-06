import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@styles/globals.scss'

const typefaceBook  = localFont({
  src: './fonts/Typeface.ttf',
  variable: '--font-typeface-book',
  weight: '450',
})

const typefaceRegular  = localFont({
  src: './fonts/Typeface.ttf',
  variable: '--font-typeface-regular',
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Utility Hub',
  description: 'Техническое задание',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${typefaceBook.variable} ${typefaceRegular.variable}`}>
      <div className="ellipse1" />
      <div className="ellipse2" />
      <div className="ellipse3" />
        {children}
      </body>
    </html>
  )
}
