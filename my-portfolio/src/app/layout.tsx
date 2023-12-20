import type { Metadata } from 'next'
import './globals.css'
import { Silkscreen } from 'next/font/google'

const silkscreen = Silkscreen({ 
  weight: ["400"],
  subsets: ['latin']
 })

export const metadata: Metadata = {
  title: 'Ahmed Ballal',
  description: 'Personal Software Engineering Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={silkscreen.className}>{children}</body>
    </html>
  )
}
