import type { Metadata } from 'next'
import './globals.css'
import '../styles/gooeynav.css';

export const metadata: Metadata = {
  title: 'My Portolio',
  description: 'My Portfolio Website',
  generator: 'My Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
