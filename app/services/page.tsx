import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '診療案内',
  description: '青空眼科クリニックの診療内容をご案内いたします。一般眼科から白内障・緑内障・ドライアイまで幅広く対応しています。',
}

const services = [
  {
    title: '一般眼科診療',
    description: '近視・遠視・乱視の矯正、眼精疲労、結膜炎など日常的な目のトラブルに対応いたします。',
    details: [
      '屈折異常（近視・遠視・乱視）の検査・矯正',
      '眼精疲労の診断と治療',
      '結膜炎・角膜炎の治療',
      'ものもらい（麦粒腫・霰粒腫）の治療',
      '眼瞼下垂の診断',
      'アレルギー性結膜炎の治療'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )
  },
  {
    title: 'ドライアイ',
    description: '涙の分泌量や質の低下によるドライアイの診断と、個々の症状に応じた治療を行います。',
    details: [
      'シルマーテスト（涙液分泌量検査）',
      'BUT検査（涙液の質的検査）',
      '点眼薬による治療',
      '涙点プラグ挿入術',
      'IPL（Intense Pulsed Light）治療',
      '生活指導・環境改善のアドバイス'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
      </svg>
    )
  },
  {
    title: '白内障',
    description: '水晶体の濁りによる視力低下を改善する白内障手術を、日帰りで安全に実施いたします。',
    details: [
      '白内障の詳細な診断と進行度評価',
      '日帰り白内障手術（超音波水晶体乳化吸引術）',
      '単焦点眼内レンズ挿入',
      '多焦点眼内レンズ挿入（選定療養）',
      '術前・術後の詳細な説明とフォローアップ',
      '合併症予防と対策'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: '緑内障',
    description: '早期発見・早期治療が重要な緑内障の検査と治療を、定期的な経過観察とともに行います。',
    details: [
      '眼圧検査（ゴールドマン圧平眼圧計）',
      '視野検査（ハンフリー視野計）',
      'OCT検査（視神経繊維層厚測定）',
      '点眼薬による眼圧下降治療',
      'SLTレーザー治療',
      '定期的な経過観察と病状管理'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: '網膜疾患',
    description: '糖尿病網膜症、加齢黄斑変性症、網膜剥離などの網膜疾患の診断と治療を行います。',
    details: [
      '眼底検査（散瞳・無散瞳）',
      'OCT検査（網膜断層撮影）',
      '蛍光眼底造影検査',
      '糖尿病網膜症の管理・治療',
      '加齢黄斑変性の診断・経過観察',
      '高次医療機関への適切な紹介'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: 'コンタクトレンズ',
    description: '各種コンタクトレンズの処方と定期検査、トラブル対応を行います。',
    details: [
      'ソフトコンタクトレンズ処方',
      'ハードコンタクトレンズ処方',
      '遠近両用コンタクトレンズ',
      '乱視用コンタクトレンズ',
      'コンタクトレンズの定期検査',
      'コンタクトレンズ障害の治療'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
]

export default function ServicesPage() {
  return (
    <>
      {/* ヒーローセクション */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-white via-brand-50 to-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-brand mb-6 text-balance">
              診療案内
            </h1>
            <p className="text-lg lg:text-xl text-text-muted text-pretty">
              幅広い眼科疾患に対応し、患者様お一人おひとりの症状に合わせた
              最適な治療をご提供いたします。
            </p>
          </div>
        </div>
      </section>

      {/* サービス一覧 */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {services.map((service, index) => (
              <div key={index} className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center text-brand flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-text mb-3">{service.title}</h3>
                    <p className="text-text-muted mb-4">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-text mb-3">対応内容</h4>
                  <ul className="space-y-2">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-text-muted text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 診療の流れ */}
      <section className="py-20 lg:py-32 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-text text-center mb-16">
              診療の流れ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '1', title: '受付', content: '保険証をご提示ください。初診の方は問診票をご記入いただきます。' },
                { step: '2', title: '検査', content: '症状に応じて視力検査、眼圧検査、眼底検査などを実施いたします。' },
                { step: '3', title: '診察', content: '医師が検査結果をもとに診察し、診断と治療方針をご説明いたします。' },
                { step: '4', title: '治療・処方', content: '必要に応じて処置を行い、お薬を処方いたします。' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-text mb-4">{item.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 注意事項 */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-text text-center mb-16">
              受診時のお願い
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-text mb-6">ご持参いただくもの</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-text-muted">健康保険証（毎回ご提示ください）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-text-muted">お薬手帳（お持ちの方）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-text-muted">現在使用中の眼鏡・コンタクトレンズ</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-text-muted">他院からの紹介状（お持ちの方）</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-text mb-6">検査時の注意点</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-text-muted">車でお越しの場合は散瞳検査後の運転をお控えください</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-text-muted">コンタクトレンズは検査前に外していただく場合があります</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-text-muted">アイメイクは検査に影響する場合があります</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-text-muted">服用中のお薬がございましたらお知らせください</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-brand-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-brand mb-6 text-balance">
              ご予約・お問い合わせ
            </h2>
            <p className="text-lg text-text-muted mb-8 text-pretty">
              目の症状やご不明な点がございましたら、お気軽にご相談ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="outline" size="lg" asChild className="text-brand hover:bg-brand hover:text-white">
                <Link href="/contact">WEB予約</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:03-1234-5678">お電話でのご予約</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}