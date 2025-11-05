import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Manish Kumar | AI/ML Enthusiast & Full Stack Developer',
  description: 'Portfolio of Manish Kumar - Full Stack Developer & AI/ML Enthusiast. Finalist at Smart India Hackathon 2025.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
