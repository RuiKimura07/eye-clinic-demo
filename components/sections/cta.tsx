import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function CTA() {
  return (
    <section className="section bg-gradient-brand text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
            目の健康について
            <br />
            お気軽にご相談ください
          </h2>
          <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-2xl mx-auto text-pretty">
            些細な症状でも放置せず、早めの受診をお勧めします。
            経験豊富な医師が丁寧に診察いたします。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-brand active:bg-gray-100 bg-transparent"
              asChild
            >
              <Link href="/contact">WEB予約はこちら</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-brand active:bg-gray-100 bg-transparent"
              asChild
            >
              <a href="tel:03-1234-5678">お電話でのご予約</a>
            </Button>
          </div>

          <div className="text-center opacity-90">
            <p className="text-sm mb-2">お電話でのご予約・お問い合わせ</p>
            <a
              href="tel:03-1234-5678"
              className="text-2xl font-bold hover:opacity-80 transition-opacity focus-ring rounded-lg"
            >
              03-1234-5678
            </a>
            <p className="text-sm mt-2">
              受付時間：平日 9:00-17:30 / 土曜 9:00-16:30
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}