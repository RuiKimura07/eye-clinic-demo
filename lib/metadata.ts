import type { Metadata } from 'next'

export const siteConfig = {
  name: '青空眼科クリニック',
  description: '地域の皆様の目の健康を守る眼科クリニックです。最新の医療機器と丁寧な診療で、近視・遠視・乱視からドライアイ、白内障まで幅広く対応しています。',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://aozora-eyeclinic.example.com',
  phone: '03-1234-5678',
  address: '東京都渋谷区青空1-2-3 青空ビル2F',
}

export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['眼科', '眼科クリニック', '目の病気', '白内障', 'ドライアイ', '近視', '遠視', '乱視', '緑内障', '渋谷区'],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/icon.png',
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: ['/icon.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}