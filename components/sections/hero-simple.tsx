import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HeroSimple() {
  return (
    <section className="relative bg-neutral-50 py-20 lg:py-32">
      {/* 背景装飾 */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50/30 to-transparent"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">

          {/* メインコピー */}
          <h1 className="text-4xl lg:text-6xl font-bold text-text mb-8 leading-tight">
            目の健康を
            <span className="text-brand block lg:inline lg:ml-4">真剣に考える</span>
            <span className="block mt-2">眼科クリニック</span>
          </h1>

          <p className="text-lg lg:text-xl text-text-muted mb-12 max-w-3xl mx-auto leading-relaxed">
            最新の医療技術と温かい心で、患者様お一人おひとりの目の健康をサポート。<br />
            近視・遠視から白内障・緑内障まで、幅広い眼科疾患に対応しています。
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="outline" size="lg" asChild className="text-lg px-8 py-4 text-brand hover:bg-brand hover:text-white">
              <Link href="/contact">WEB予約</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-lg px-8 py-4 text-brand hover:bg-brand hover:text-white">
              <a href="tel:03-1234-5678">お電話でのご予約</a>
            </Button>
          </div>

          {/* 基本情報 */}
          <div className="border-t border-neutral-200 pt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

              <div className="space-y-3">
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text">診療時間</h3>
                <div className="text-text-muted space-y-1">
                  <div className="text-sm">平日 9:00-18:00</div>
                  <div className="text-sm">土曜 9:00-17:00</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text">アクセス</h3>
                <div className="text-text-muted space-y-1">
                  <div className="text-sm">JR渋谷駅 徒歩5分</div>
                  <div className="text-sm">駐車場完備</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text">安心・安全</h3>
                <div className="text-text-muted space-y-1">
                  <div className="text-sm">最新設備導入</div>
                  <div className="text-sm">感染対策徹底</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}