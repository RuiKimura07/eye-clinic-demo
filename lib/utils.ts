import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPhoneNumber(phone: string): string {
  return phone.replace(/(\d{2,3})(\d{4})(\d{4})/, '$1-$2-$3')
}

export function formatAddress(address: string): string {
  return address.trim()
}

export function createStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: '青空眼科クリニック',
    description: '地域の皆様の目の健康を守る眼科クリニックです。最新の医療機器と丁寧な診療で、近視・遠視・乱視からドライアイ、白内障まで幅広く対応しています。',
    url: 'https://aozora-eyeclinic.example.com',
    telephone: '+81-3-1234-5678',
    email: 'info@aozora-eyeclinic.example.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '青空1-2-3 青空ビル2F',
      addressLocality: '渋谷区',
      addressRegion: '東京都',
      postalCode: '150-0001',
      addressCountry: 'JP',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.6584,
      longitude: 139.7016,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Thursday',
        opens: '09:00',
        closes: '13:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '17:00',
      },
    ],
    medicalSpecialty: ['Ophthalmology'],
    paymentAccepted: ['Cash', 'Credit Card', 'Insurance'],
    currenciesAccepted: 'JPY',
    priceRange: '$$',
  }
}