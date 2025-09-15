import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-white via-brand-50 to-surface pt-24 lg:pt-32 pb-16 lg:pb-24">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-brand mb-6 text-balance">
            地域の皆様の
            <br />
            目の健康を守ります
          </h1>
          <p className="text-lg lg:text-xl text-text-muted mb-8 max-w-2xl mx-auto text-pretty">
            最新の医療機器と豊富な経験を持つ医師による丁寧な診療で、近視・遠視・乱視からドライアイ、白内障まで幅広く対応いたします。
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="outline" size="lg" asChild className="text-brand hover:bg-brand hover:text-white">
              <Link href="/contact">WEB予約</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:03-1234-5678">お電話でのご予約</a>
            </Button>
          </div>

          {/* 診療時間・連絡先 */}
          <div className="bg-white rounded-xl p-6 shadow-soft max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-brand mb-3">診療時間</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>月・火・水・金</span>
                    <span className="font-medium">9:00-18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>木曜日</span>
                    <span className="font-medium">9:00-13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>土曜日</span>
                    <span className="font-medium">9:00-17:00</span>
                  </div>
                  <div className="flex justify-between text-text-muted">
                    <span>日・祝</span>
                    <span>休診</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand mb-3">お電話でのご予約</h3>
                <a
                  href="tel:03-1234-5678"
                  className="text-2xl font-bold text-brand hover:text-brand-600 transition-colors focus-ring rounded-lg"
                >
                  03-1234-5678
                </a>
                <p className="text-sm text-text-muted mt-2">
                  平日 9:00-17:30
                  <br />
                  土曜 9:00-16:30
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 装飾的な要素 */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-100 rounded-full -translate-y-32 translate-x-32 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full translate-y-24 -translate-x-24"></div>
    </section>
  )
}