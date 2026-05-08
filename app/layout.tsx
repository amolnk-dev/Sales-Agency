import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Saral Solutions',
  description:
    'AI Development and Digital Marketing agency delivering expert solutions to accelerate business growth. - info@vegaminfotech.com',


  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/png', sizes: '32x32' },
      { url: '/vegam-logo.png', type: 'image/png', sizes: '32x32' },
      { url: '/vegam-logo.png', type: 'image/png', sizes: '192x192' },
    ],
    shortcut: '/favicon.ico',
    apple: '/vegam-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
