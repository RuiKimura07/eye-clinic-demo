import Link from 'next/link'
import { Button } from '@/components/ui/button'

const services = [
  {
    title: '一般眼科診療',
    description: '近視・遠視・乱視、眼精疲労、結膜炎など日常的な目のトラブルに幅広く対応',
    features: ['視力検査', '屈折検査', '眼圧測定', '眼底検査'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )
  },
  {
    title: 'ドライアイ治療',
    description: '涙の分泌量や質の異常による不快症状を専門的に診断・治療',
    features: ['涙液検査', '点眼治療', '涙点プラグ', 'IPL治療'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
      </svg>
    )
  },
  {
    title: '白内障手術',
    description: '日帰り白内障手術により、濁った水晶体を透明な眼内レンズに交換',
    features: ['日帰り手術', '多焦点レンズ', '術前検査', '術後ケア'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: '緑内障治療',
    description: '早期発見・早期治療により視野欠損の進行を防ぐ専門治療',
    features: ['眼圧管理', '視野検査', 'レーザー治療', '点眼指導'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: '網膜疾患',
    description: '糖尿病網膜症、加齢黄斑変性などの網膜疾患の診断と治療',
    features: ['OCT検査', '眼底造影', '硝子体注射', '光凝固術'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: 'コンタクトレンズ',
    description: '各種コンタクトレンズの処方と安全な使用法の指導',
    features: ['初回処方', '定期検査', 'トラブル対応', '使用指導'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
]

export default function ServicesSimple() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* セクションヘッダー */}
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-text mb-6">
            診療案内
          </h2>
          <p className="text-lg lg:text-xl text-text-muted max-w-3xl mx-auto">
            患者様の症状に合わせた最適な治療法をご提案。
            最新の医療技術と豊富な経験で、確実な診断と治療を行います。
          </p>
        </div>

        {/* サービスグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-20">
          {services.map((service, index) => (
            <div key={index} className="text-center group">

              {/* アイコン */}
              <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center text-brand mx-auto mb-6 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>

              {/* コンテンツ */}
              <h3 className="text-xl font-bold text-text mb-4 group-hover:text-brand transition-colors">
                {service.title}
              </h3>

              <p className="text-text-muted mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* 機能リスト */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center justify-center text-sm text-text-muted">
                    <div className="w-1.5 h-1.5 bg-brand rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/services">すべての診療案内を見る</Link>
          </Button>
        </div>

      </div>
    </section>
  )
}