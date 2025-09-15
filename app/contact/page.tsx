import type { Metadata } from 'next'
import ContactFormStatic from '@/components/forms/contact-form-static'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'お問い合わせ・WEB予約',
  description: '青空眼科クリニックへのお問い合わせ・WEB予約フォームです。診療のご予約や目の症状に関するご相談を承っております。',
}

export default function ContactPage() {
  return (
    <>
      {/* ヒーローセクション */}
      <section className="section-lg bg-gradient-to-br from-white via-brand-50 to-surface">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-brand mb-6 text-balance">
              お問い合わせ・WEB予約
            </h1>
            <p className="text-lg lg:text-xl text-text-muted text-pretty">
              診療のご予約や目の症状に関するご相談を承っております。
              お気軽にお問い合わせください。
            </p>
          </div>
        </div>
      </section>

      {/* 連絡先情報 */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 電話予約 */}
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl text-brand">お電話でのご予約</CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="tel:03-1234-5678"
                    className="text-3xl font-bold text-brand hover:text-brand-600 transition-colors focus-ring rounded-lg"
                  >
                    03-1234-5678
                  </a>
                  <div className="mt-4 space-y-2 text-text-muted">
                    <p className="font-medium">受付時間</p>
                    <p className="text-sm">平日 9:00-17:30</p>
                    <p className="text-sm">土曜 9:00-16:30</p>
                    <p className="text-sm">（日・祝は休診）</p>
                  </div>
                  <Button className="mt-4" asChild>
                    <a href="tel:03-1234-5678">電話をかける</a>
                  </Button>
                </CardContent>
              </Card>

              {/* WEB予約 */}
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl text-brand">WEB予約</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-brand mb-4">24時間受付</p>
                  <div className="space-y-2 text-text-muted mb-6">
                    <p className="text-sm">下記フォームからお申し込みください</p>
                    <p className="text-sm">2営業日以内にご連絡いたします</p>
                    <p className="text-sm">お急ぎの場合はお電話ください</p>
                  </div>
                  <Button variant="outline" asChild className="text-brand hover:bg-brand hover:text-white">
                    <a href="#contact-form">WEB予約フォームへ</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* 初診の方へ */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-brand text-center">
                  初診の方へ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-brand mb-3">ご持参いただくもの</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>健康保険証</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>お薬手帳（お持ちの方）</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>現在使用中の眼鏡・コンタクトレンズ</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>他院からの紹介状（お持ちの方）</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-brand mb-3">ご来院時のお願い</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>診療終了30分前までにお越しください</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>車での来院時は散瞳検査後の運転にご注意ください</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>コンタクトレンズは検査前に外していただく場合があります</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>発熱などの症状がある場合は事前にお電話ください</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 予約フォーム */}
      <section id="contact-form" className="section bg-surface">
        <div className="container">
          <ContactFormStatic />
        </div>
      </section>

      {/* よくある質問 */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand text-center mb-12 text-balance">
              予約に関するよくある質問
            </h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-brand mb-2">
                    Q. 予約なしでも診てもらえますか？
                  </h3>
                  <p className="text-text-muted">
                    A. はい、予約なしでも診療いたします。ただし、予約の患者様を優先させていただくため、お待ちいただく場合がございます。スムーズな診療のため、事前のご予約をお勧めいたします。
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-brand mb-2">
                    Q. 当日の予約変更・キャンセルはできますか？
                  </h3>
                  <p className="text-text-muted">
                    A. 当日の予約変更・キャンセルも承っております。お電話にてご連絡ください。なお、無断キャンセルはお控えください。
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-brand mb-2">
                    Q. 検査にはどのくらい時間がかかりますか？
                  </h3>
                  <p className="text-text-muted">
                    A. 初診の場合、問診・検査・診察で約1時間程度お時間をいただいております。症状や検査内容により前後する場合がございます。
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-brand mb-2">
                    Q. コンタクトレンズの処方だけでも診てもらえますか？
                  </h3>
                  <p className="text-text-muted">
                    A. はい、コンタクトレンズの処方も行っております。初回は必ず眼科検査を行い、目の健康状態を確認してから適切なレンズをご提案いたします。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}