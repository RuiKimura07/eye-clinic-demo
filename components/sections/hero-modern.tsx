import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HeroModern() {
  return (
    <section className="relative bg-neutral-50 overflow-hidden">
      {/* 背景画像（実際の実装では写真を使用） */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-50 to-accent-100/30">
        <div className="absolute inset-0 bg-white/60"></div>
      </div>

      {/* 装飾的な要素 */}
      <div className="absolute top-0 right-0 transform translate-x-32 -translate-y-32">
        <div className="w-96 h-96 bg-brand-100 rounded-full opacity-20"></div>
      </div>
      <div className="absolute bottom-0 left-0 transform -translate-x-24 translate-y-24">
        <div className="w-64 h-64 bg-accent-200 rounded-full opacity-15"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 左側：コンテンツ */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-100 text-brand text-sm font-medium">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                地域密着20年の実績
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-text leading-tight">
                目の健康を
                <br />
                <span className="text-brand">真剣に考える</span>
                <br />
                眼科クリニック
              </h1>

              <p className="text-lg lg:text-xl text-text-muted leading-relaxed max-w-2xl">
                最新の医療技術と温かい心で、患者様お一人おひとりの目の健康をサポート。
                近視・遠視から白内障・緑内障まで、幅広い眼科疾患に対応しています。
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" size="lg" asChild className="text-brand hover:bg-brand hover:text-white shadow-lg">
                <Link href="/contact">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  WEB予約
                </Link>
              </Button>

              <Button variant="outline" size="lg" asChild className="shadow-md">
                <a href="tel:03-1234-5678">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  お電話でご相談
                </a>
              </Button>
            </div>

            {/* 診療時間・アクセス情報 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-neutral-200">
              <div className="space-y-2">
                <div className="flex items-center text-brand font-medium">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  診療時間
                </div>
                <div className="text-text-muted space-y-1">
                  <div className="text-sm">平日 9:00-18:00</div>
                  <div className="text-sm">土曜 9:00-17:00</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center text-brand font-medium">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  アクセス
                </div>
                <div className="text-text-muted">
                  <div className="text-sm">JR渋谷駅 徒歩5分</div>
                  <div className="text-sm">駐車場完備</div>
                </div>
              </div>
            </div>
          </div>

          {/* 右側：画像エリア（実際の実装では写真を配置） */}
          <div className="relative">
            <div className="aspect-square lg:aspect-[4/5] bg-gradient-to-br from-brand-100 to-accent-100 rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-brand-600 space-y-4">
                  <svg className="w-24 h-24 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <div className="space-y-2">
                    <div className="text-lg font-semibold">院内・設備写真</div>
                    <div className="text-sm opacity-70">清潔で最新の診療環境</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 装飾的な要素 */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-2xl opacity-20"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-brand rounded-xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  )
}