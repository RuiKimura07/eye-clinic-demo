import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'クリニック案内',
  description: '青空眼科クリニックの理念、院内設備、アクセス情報をご紹介いたします。患者様に安心していただける環境づくりを心がけています。',
}

export default function AboutPage() {
  return (
    <>
      {/* ヒーローセクション */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-white via-brand-50 to-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-brand mb-6 text-balance">
              クリニック案内
            </h1>
            <p className="text-lg lg:text-xl text-text-muted text-pretty">
              地域の皆様に信頼される眼科クリニックとして、
              患者様お一人おひとりに寄り添った診療を心がけています。
            </p>
          </div>
        </div>
      </section>

      {/* 理念・方針 */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand text-center mb-12 text-balance">
              診療理念
            </h2>
            <div className="bg-brand-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-center text-brand mb-6">
                「患者様の目線に立った医療」
              </h3>
              <p className="text-lg text-center mb-8 text-text-muted">
                私たちは、患者様お一人おひとりの症状や生活環境を丁寧にお伺いし、
                最適な治療方針をご提案いたします。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <svg className="w-8 h-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-text mb-2">思いやり</h4>
                  <p className="text-sm text-text-muted">患者様の気持ちに寄り添い、安心できる診療環境を提供します</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <svg className="w-8 h-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-text mb-2">信頼</h4>
                  <p className="text-sm text-text-muted">豊富な経験と最新の知識で、確実な診断と治療を行います</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <svg className="w-8 h-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-text mb-2">革新</h4>
                  <p className="text-sm text-text-muted">最新の医療技術を積極的に導入し、より良い医療を追求します</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 院内設備 */}
      <section className="py-20 lg:py-32 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-brand text-center mb-12 text-balance">
              院内設備
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-text mb-6">最新の検査機器</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-text-muted"><strong className="text-text">OCT（光干渉断層計）</strong><br />網膜の詳細な断層画像を撮影</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-text-muted"><strong className="text-text">眼底カメラ</strong><br />眼底の状態を高解像度で記録</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-text-muted"><strong className="text-text">視野検査装置</strong><br />緑内障の早期発見に重要</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-text mb-6">手術設備</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-text-muted"><strong className="text-text">白内障手術装置</strong><br />日帰り手術に対応</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-text-muted"><strong className="text-text">YAGレーザー</strong><br />後発白内障治療に使用</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-text-muted"><strong className="text-text">清潔な手術室</strong><br />感染対策を徹底</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-text mb-6">患者様の快適性</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-text-muted"><strong className="text-text">バリアフリー設計</strong><br />車椅子でもご利用いただけます</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-text-muted"><strong className="text-text">待合室</strong><br />リラックスできる空間作り</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-text-muted"><strong className="text-text">キッズスペース</strong><br />お子様連れでも安心</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-text mb-6">衛生管理</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-text-muted"><strong className="text-text">高圧蒸気滅菌器</strong><br />医療器具の徹底的な滅菌</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-text-muted"><strong className="text-text">空気清浄システム</strong><br />院内の空気を常に清潔に</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-text-muted"><strong className="text-text">感染対策</strong><br />最新の感染予防対策を実施</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* アクセス・基本情報 */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand text-center mb-12 text-balance">
              基本情報
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-text mb-6">所在地・連絡先</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-brand mb-2">住所</p>
                    <p className="text-text-muted">〒150-0001<br />東京都渋谷区青空1-2-3 青空ビル2F</p>
                  </div>
                  <div>
                    <p className="font-medium text-brand mb-2">電話番号</p>
                    <a href="tel:03-1234-5678" className="text-lg font-semibold text-brand hover:text-brand-600 transition-colors">
                      03-1234-5678
                    </a>
                  </div>
                  <div>
                    <p className="font-medium text-brand mb-2">アクセス</p>
                    <p className="text-text-muted">JR渋谷駅東口より徒歩5分<br />東京メトロ副都心線渋谷駅より徒歩3分</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-text mb-6">診療時間</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-neutral-200">
                        <th className="text-left py-3 pr-4 font-medium text-text">曜日</th>
                        <th className="text-left py-3 pr-4 font-medium text-text">午前</th>
                        <th className="text-left py-3 font-medium text-text">午後</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-neutral-200">
                        <td className="py-3 pr-4 text-text-muted">月・火・水・金</td>
                        <td className="py-3 pr-4 text-text-muted">9:00-12:30</td>
                        <td className="py-3 text-text-muted">15:00-18:00</td>
                      </tr>
                      <tr className="border-b border-neutral-200">
                        <td className="py-3 pr-4 text-text-muted">木曜日</td>
                        <td className="py-3 pr-4 text-text-muted">9:00-13:00</td>
                        <td className="py-3 text-neutral-400">休診</td>
                      </tr>
                      <tr className="border-b border-neutral-200">
                        <td className="py-3 pr-4 text-text-muted">土曜日</td>
                        <td className="py-3 pr-4 text-text-muted">9:00-12:30</td>
                        <td className="py-3 text-text-muted">14:00-17:00</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 text-text-muted">日・祝</td>
                        <td className="py-3 pr-4 text-neutral-400">休診</td>
                        <td className="py-3 text-neutral-400">休診</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
              ご不明な点やご相談がございましたら、お気軽にお問い合わせください。
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