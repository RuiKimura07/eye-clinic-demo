export interface ContactFormData {
  name: string
  email: string
  phone: string
  preferredDate: string
  preferredTime: string
  inquiry: string
  privacyConsent: boolean
}

export interface Doctor {
  id: string
  name: string
  title: string
  specialties: string[]
  experience: string
  education: string[]
  societies: string[]
  image?: string
}

export interface Service {
  id: string
  name: string
  description: string
  details: string[]
  icon?: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
}

export interface OpeningHours {
  day: string
  morning: string
  afternoon: string
  isClosed?: boolean
}