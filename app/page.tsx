import HeroSimple from '@/components/sections/hero-simple'
import Features from '@/components/sections/features'
import ServicesSimple from '@/components/sections/services-simple'
import DoctorsSimple from '@/components/sections/doctors-simple'
import AccessSimple from '@/components/sections/access-simple'
import FAQSimple from '@/components/sections/faq-simple'
import CTA from '@/components/sections/cta'

export default function HomePage() {
  return (
    <>
      <HeroSimple />
      <Features />
      <ServicesSimple />
      <DoctorsSimple />
      <AccessSimple />
      <FAQSimple />
      <CTA />
    </>
  )
}