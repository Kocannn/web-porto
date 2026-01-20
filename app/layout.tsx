import type { Metadata } from 'next'
import './globals.css'
import '../styles/gooeynav.css';

export const metadata: Metadata = {
  title: 'Dwi Candra Andka | Fullstack Developer',
  description: 'Portfolio website of Dwi Candra Andka - Fullstack Developer specializing in React, Golang & Laravel',
  keywords: ['fullstack developer', 'react', 'golang', 'laravel', 'web developer', 'indonesia'],
  authors: [{ name: 'Dwi Candra Andka' }],
  creator: 'Dwi Candra Andka',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://dwicandraandka.dev',
    title: 'Dwi Candra Andka | Fullstack Developer',
    description: 'Portfolio website of Dwi Candra Andka - Fullstack Developer specializing in React, Golang & Laravel',
    siteName: 'Dwi Candra Andka Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dwi Candra Andka | Fullstack Developer',
    description: 'Portfolio website of Dwi Candra Andka - Fullstack Developer',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  )
}
