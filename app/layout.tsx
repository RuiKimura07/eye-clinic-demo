import type { Metadata } from 'next'
import { defaultMetadata } from '@/lib/metadata'
import { notoSerifJP } from '@/lib/fonts'
import { createStructuredData } from '@/lib/utils'
import HeaderModern from '@/components/layout/header-modern'
import Footer from '@/components/layout/footer'
import SkipLink from '@/components/layout/skip-link'
import './globals.css'

export const metadata: Metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = createStructuredData()

  return (
    <html lang="ja" className={notoSerifJP.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="font-serif antialiased">
        <SkipLink />
        <HeaderModern />
        <main id="main" className="pt-16 lg:pt-20" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}