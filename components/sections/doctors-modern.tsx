import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const doctors = [
  {
    name: '青空 太郎',
    title: '院長',
    subtitle: '眼科専門医・医学博士',
    specialties: ['白内障手術', '緑内障治療', 'ドライアイ'],
    experience: '眼科医歴25年',
    message: '患者様お一人おひとりに寄り添った診療を心がけています',
    achievements: ['年間手術実績500例以上', '学会発表多数', '地域医療貢献賞受賞']
  },
  {
    name: '青空 花子',
    title: '副院長',
    subtitle: '眼科専門医',
    specialties: ['小児眼科', 'コンタクトレンズ', '網膜疾患'],
    experience: '眼科医歴15年',
    message: 'お子様から高齢者まで、安心して受診いただける環境づくりに努めています',
    achievements: ['小児眼科認定医', '学術論文50報以上', '医療安全管理者']
  }
]

export default function DoctorsModern() {
  return (
    <section className="section bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-100 text-brand text-sm font-medium mb-4">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            経験豊富な専門医
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-text mb-6 text-balance">
            医師紹介
          </h2>
          <p className="text-lg lg:text-xl text-text-muted max-w-3xl mx-auto text-pretty">
            豊富な経験と最新の知識を持つ医師が、患者様の目の健康を責任を持ってサポートいたします。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {doctors.map((doctor, index) => (
            <Card key={index} className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-0">
              <div className="relative">
                {/* 医師写真エリア */}
                <div className="aspect-[4/3] bg-gradient-to-br from-brand-100 via-accent-50 to-neutral-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-brand-600 space-y-4">
                      <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm font-medium opacity-70">医師写真</div>
                        <div className="text-xs opacity-50">Professional Portrait</div>
                      </div>
                    </div>
                  </div>

                  {/* 装飾要素 */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-brand/20 rounded-full"></div>
                </div>

                {/* 経験年数バッジ */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-brand">
                  {doctor.experience}
                </div>
              </div>

              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* 医師情報 */}
                  <div>
                    <h3 className="text-2xl font-bold text-text mb-2">{doctor.name}</h3>
                    <div className="space-y-1">
                      <div className="text-lg font-semibold text-brand">{doctor.title}</div>
                      <div className="text-text-muted">{doctor.subtitle}</div>
                    </div>
                  </div>

                  {/* 専門分野 */}
                  <div>
                    <h4 className="font-semibold text-text mb-3">専門分野</h4>
                    <div className="flex flex-wrap gap-2">
                      {doctor.specialties.map((specialty, specialtyIndex) => (
                        <span
                          key={specialtyIndex}
                          className="px-3 py-1 bg-brand-100 text-brand text-sm rounded-full font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 実績 */}
                  <div>
                    <h4 className="font-semibold text-text mb-3">主な実績</h4>
                    <div className="space-y-2">
                      {doctor.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm text-text-muted">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* メッセージ */}
                  <div className="bg-neutral-50 p-4 rounded-xl">
                    <div className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-brand mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                      </svg>
                      <p className="text-sm text-text-muted italic leading-relaxed">
                        「{doctor.message}」
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" asChild className="shadow-md">
            <Link href="/doctors">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              医師紹介を詳しく見る
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}