import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Vegam Infotech | AI Development & Digital Marketing Solutions',
  description:
    'Leading AI development and digital marketing agency delivering transformative enterprise solutions to accelerate business growth, optimize operations, and maximize revenue. Expert innovation for startups and enterprises.',


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
