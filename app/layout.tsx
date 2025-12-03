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
      <body>
        {/* Set theme before React hydration to avoid FOUC */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(){
              try {
                var stored = localStorage.getItem('theme');
                var theme = stored || 'dark';
                document.documentElement.setAttribute('data-theme', theme);
              } catch (e) { /* noop */ }
            })();
          `,
          }}
        />
        {children}
      </body>
    </html>
  )
}
