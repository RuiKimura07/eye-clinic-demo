import Link from 'next/link'
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

export default function DoctorsSimple() {
  return (
    <section className="py-20 lg:py-32 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* セクションヘッダー */}
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-text mb-6">
            医師紹介
          </h2>
          <p className="text-lg lg:text-xl text-text-muted max-w-3xl mx-auto">
            豊富な経験と最新の知識を持つ医師が、
            患者様の目の健康を責任を持ってサポートいたします。
          </p>
        </div>

        {/* 医師リスト */}
        <div className="space-y-20 max-w-6xl mx-auto mb-20">
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
                <div className="bg-white p-6 rounded-xl border-l-4 border-brand">
                  <p className="text-text-muted italic leading-relaxed">
                    「{doctor.message}」
                  </p>
                </div>

                {/* 専門分野 */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-text">専門分野</h4>
                  <div className="flex flex-wrap gap-2">
                    {doctor.specialties.map((specialty, specialtyIndex) => (
                      <span
                        key={specialtyIndex}
                        className="px-4 py-2 bg-brand-100 text-brand text-sm rounded-full font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 実績 */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-text">主な実績</h4>
                  <div className="space-y-2">
                    {doctor.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-text-muted">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/doctors">医師紹介を詳しく見る</Link>
          </Button>
        </div>

      </div>
    </section>
  )
}