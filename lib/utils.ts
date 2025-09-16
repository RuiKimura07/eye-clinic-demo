import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { clinic } from './clinic-config'

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
    name: clinic.nameJa,
    description: clinic.description,
    url: clinic.url,
    telephone: clinic.phoneInternational,
    email: clinic.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${clinic.address.line1.split('渋谷区')[1]} ${clinic.address.building}`,
      addressLocality: '渋谷区',
      addressRegion: '東京都',
      postalCode: clinic.address.postal.replace('〒', ''),
      addressCountry: 'JP',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: clinic.geo.latitude,
      longitude: clinic.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
        opens: clinic.hours.mon.am.split('-')[0],
        closes: clinic.hours.mon.pm!.split('-')[1],
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Thursday',
        opens: clinic.hours.thu.am.split('-')[0],
        closes: clinic.hours.thu.am.split('-')[1],
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: clinic.hours.sat.am.split('-')[0],
        closes: clinic.hours.sat.pm!.split('-')[1],
      },
    ],
    medicalSpecialty: ['Ophthalmology'],
    paymentAccepted: ['Cash', 'Credit Card', 'Insurance'],
    currenciesAccepted: 'JPY',
    priceRange: '$$',
  }
}