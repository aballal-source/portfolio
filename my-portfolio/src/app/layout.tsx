import type { Metadata } from 'next'
import './globals.css'
import { Silkscreen } from 'next/font/google'

const silkscreen = Silkscreen({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Ahmed Ballal',
  description: 'Frontend-focused web developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-black text-white ${silkscreen.variable}`}>
        {children}
      </body>
    </html>
  )
}
