import type { Metadata } from 'next'
import { Lora, IBM_Plex_Sans_Thai } from 'next/font/google'
import './globals.css'

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
  display: 'swap',
})

const ibm = IBM_Plex_Sans_Thai({
  subsets: ['latin', 'thai'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-ibm',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hotel Portfolio | Koko Global Hospitality',
  description:
    'Explore 44 hotels and resorts operated by Koko Global Hospitality across Thailand and the Philippines.',
  openGraph: {
    title: 'Hotel Portfolio | Koko Global Hospitality',
    description: 'Explore our portfolio of hotels across Asia.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lora.variable} ${ibm.variable}`}>
      <body>{children}</body>
    </html>
  )
}
