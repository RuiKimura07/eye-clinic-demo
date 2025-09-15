import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '医師紹介',
  description: '青空眼科クリニックの医師をご紹介いたします。豊富な経験と専門知識を持つ医師が、患者様の目の健康をサポートします。',
}

const doctors = [
  {
    name: '青空 太郎',
    title: '院長',
    subtitle: '眼科専門医・医学博士',
    specialties: ['白内障手術', '緑内障治療', 'ドライアイ治療', '網膜疾患'],
    experience: '眼科医歴25年',
    education: [
      '東京大学医学部 卒業',
      '東京大学大学院医学系研究科 修了（医学博士）',
      '東京大学医学部附属病院 眼科 研修医',
      '国立国際医療研究センター 眼科 医員',
      '青空眼科クリニック 開院'
    ],
    societies: [
      '日本眼科学会 専門医',
      '日本白内障屈折矯正手術学会',
      '日本緑内障学会',
      '日本網膜硝子体学会',
      '日本眼科手術学会'
    ],
    message: '患者様お一人おひとりの目の健康を守ることを使命として、日々診療に取り組んでおります。些細な症状でも、遠慮なくご相談ください。最新の医療技術と豊富な経験を活かし、安心で質の高い医療をご提供いたします。'
  },
  {
    name: '青空 花子',
    title: '副院長',
    subtitle: '眼科専門医',
    specialties: ['小児眼科', 'コンタクトレンズ', 'アレルギー性結膜炎', 'ドライアイ'],
    experience: '眼科医歴15年',
    education: [
      '慶應義塾大学医学部 卒業',
      '慶應義塾大学病院 眼科 研修医',
      '国立成育医療研究センター 眼科 医員',
      '聖路加国際病院 眼科 医長',
      '青空眼科クリニック 副院長就任'
    ],
    societies: [
      '日本眼科学会 専門医',
      '日本弱視斜視学会',
      '日本コンタクトレンズ学会',
      '日本角膜学会'
    ],
    message: 'お子様から高齢者まで、幅広い年齢層の患者様に寄り添った診療を心がけています。特に小児眼科では、お子様が安心して検査や治療を受けられるよう、優しく丁寧な対応を大切にしています。'
  }
]

export default function DoctorsPage() {
  return (
    <>
      {/* ヒーローセクション */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-white via-brand-50 to-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-text mb-6 text-balance">
              医師紹介
            </h1>
            <p className="text-lg lg:text-xl text-text-muted text-pretty">
              豊富な経験と専門知識を持つ医師が、
              患者様の目の健康を責任を持ってサポートいたします。
            </p>
          </div>
        </div>
      </section>

      {/* 医師紹介 */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 max-w-6xl mx-auto">
            {doctors.map((doctor, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-cols-2' : ''
              }`}>

                {/* 医師画像エリア */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[4/3] bg-gradient-to-br from-brand-100 to-accent-100 rounded-2xl relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-brand-600 space-y-4">
                        <div className="w-32 h-32 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                          </svg>
                        </div>
                        <div className="space-y-1">
                          <div className="text-sm font-medium opacity-70">医師写真</div>
                          <div className="text-xs opacity-50">{doctor.experience}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 医師情報 */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>

                  {/* 基本情報 */}
                  <div className="space-y-3">
                    <h3 className="text-3xl font-bold text-text">{doctor.name}</h3>
                    <div className="space-y-1">
                      <div className="text-xl font-semibold text-brand">{doctor.title}</div>
                      <div className="text-text-muted">{doctor.subtitle}</div>
                    </div>
                  </div>

                  {/* メッセージ */}
                  <div className="bg-neutral-50 p-6 rounded-xl">
                    <p className="text-text-muted italic leading-relaxed">
                      「{doctor.message}」
                    </p>
                  </div>

                  {/* 専門分野 */}
                  <div>
                    <h4 className="font-semibold text-text mb-3">専門分野</h4>
                    <div className="flex flex-wrap gap-2">
                      {doctor.specialties.map((specialty, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-brand-100 text-brand text-sm rounded-full font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 学歴・経歴 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-text mb-3">学歴・経歴</h4>
                      <ul className="space-y-2">
                        {doctor.education.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-sm text-text-muted">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-text mb-3">所属学会・資格</h4>
                      <ul className="space-y-2">
                        {doctor.societies.map((society, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-sm text-text-muted">{society}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 診療方針 */}
      <section className="py-20 lg:py-32 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-text text-center mb-16">
              私たちの診療方針
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-text mb-4">丁寧な説明</h3>
                <p className="text-text-muted leading-relaxed">
                  検査結果や診断内容について、患者様にわかりやすく丁寧にご説明いたします。
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-text mb-4">寄り添う医療</h3>
                <p className="text-text-muted leading-relaxed">
                  患者様の不安や悩みに真摯に向き合い、心に寄り添った医療を提供いたします。
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-text mb-4">最新の医療</h3>
                <p className="text-text-muted leading-relaxed">
                  常に最新の医療技術と知識を習得し、より良い治療をご提供いたします。
                </p>
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