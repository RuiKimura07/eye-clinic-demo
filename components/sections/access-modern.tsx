import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const transportOptions = [
  {
    type: 'JR山手線・埼京線',
    station: '渋谷駅',
    walkTime: '徒歩5分',
    exit: '東口',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    )
  },
  {
    type: '東京メトロ副都心線',
    station: '渋谷駅',
    walkTime: '徒歩3分',
    exit: 'C1出口',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    type: '東急東横線・田園都市線',
    station: '渋谷駅',
    walkTime: '徒歩4分',
    exit: '中央改札',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    )
  }
]

const clinicFeatures = [
  {
    title: '駐車場完備',
    description: '提携駐車場 1時間無料',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: 'バリアフリー',
    description: '車椅子・ベビーカー対応',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: 'エレベーター',
    description: '2Fまでスムーズにアクセス',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
      </svg>
    )
  },
  {
    title: '感染対策',
    description: '安心・安全な診療環境',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
]

const openingHours = [
  { day: '月', morning: '9:00-12:30', afternoon: '15:00-18:00', isToday: false },
  { day: '火', morning: '9:00-12:30', afternoon: '15:00-18:00', isToday: false },
  { day: '水', morning: '9:00-12:30', afternoon: '15:00-18:00', isToday: true },
  { day: '木', morning: '9:00-13:00', afternoon: '休診', isToday: false },
  { day: '金', morning: '9:00-12:30', afternoon: '15:00-18:00', isToday: false },
  { day: '土', morning: '9:00-12:30', afternoon: '14:00-17:00', isToday: false },
  { day: '日', morning: '休診', afternoon: '休診', isToday: false },
]

export default function AccessModern() {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-100 text-brand text-sm font-medium mb-4">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            渋谷駅から徒歩5分
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-text mb-6 text-balance">
            アクセス・診療時間
          </h2>
          <p className="text-lg lg:text-xl text-text-muted max-w-3xl mx-auto text-pretty">
            各線渋谷駅からアクセス良好。車椅子対応、駐車場完備で、
            どなたでも安心してご来院いただけます。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* 地図エリア */}
          <div className="space-y-6">
            <Card className="overflow-hidden shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-brand-50 to-neutral-100 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <a
                    href="https://maps.google.com/?q=東京都渋谷区"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center text-brand-600 hover:text-brand-700 transition-colors group"
                  >
                    <svg className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div className="space-y-2">
                      <div className="text-lg font-semibold">Google Mapで見る</div>
                      <div className="text-sm opacity-70">詳細な道案内はこちら</div>
                    </div>
                  </a>
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg text-sm font-medium text-brand">
                  📍 青空ビル2F
                </div>
              </div>
            </Card>

            {/* 住所・連絡先 */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-text mb-4">所在地・お問い合わせ</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-brand mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <div className="font-medium text-text">〒150-0001</div>
                      <div className="text-text-muted">東京都渋谷区青空1-2-3 青空ビル2F</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a
                      href="tel:03-1234-5678"
                      className="text-xl font-bold text-brand hover:text-brand-600 transition-colors"
                    >
                      03-1234-5678
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 交通アクセス */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-text mb-6">電車でのアクセス</h3>
                <div className="space-y-4">
                  {transportOptions.map((transport, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-neutral-50 rounded-lg">
                      <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center text-brand">
                        {transport.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-text">{transport.type}</div>
                        <div className="text-sm text-text-muted">{transport.station} {transport.exit}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-brand">{transport.walkTime}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 診療時間 */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-text mb-6">診療時間</h3>
                <div className="space-y-2">
                  {openingHours.map((schedule, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-3 rounded-lg ${
                        schedule.isToday ? 'bg-brand-100 border border-brand-200' : 'bg-neutral-50'
                      }`}
                    >
                      <div className={`font-medium ${schedule.isToday ? 'text-brand' : 'text-text'}`}>
                        {schedule.day}
                        {schedule.isToday && <span className="ml-2 text-xs bg-brand text-white px-2 py-1 rounded-full">本日</span>}
                      </div>
                      <div className="text-right space-y-1">
                        <div className={`text-sm ${schedule.morning === '休診' ? 'text-text-light' : 'text-text-muted'}`}>
                          午前: {schedule.morning}
                        </div>
                        <div className={`text-sm ${schedule.afternoon === '休診' ? 'text-text-light' : 'text-text-muted'}`}>
                          午後: {schedule.afternoon}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-accent-50 rounded-lg">
                  <div className="text-sm text-accent-dark">
                    <strong>受付時間:</strong> 診療終了30分前まで
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 院内設備 */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-text text-center mb-8">院内設備・サービス</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clinicFeatures.map((feature, index) => (
              <Card key={index} className="text-center shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center text-brand mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold text-text mb-2">{feature.title}</h4>
                  <p className="text-sm text-text-muted">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-brand-50 to-accent-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-text mb-4">
              ご来院をお待ちしております
            </h3>
            <p className="text-text-muted mb-8 max-w-2xl mx-auto">
              初診の方もお気軽にお越しください。事前のご予約でスムーズに診療を受けていただけます。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" asChild className="text-brand hover:bg-brand hover:text-white shadow-lg">
                <Link href="/contact">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v12a2 2 0 002 2z" />
                  </svg>
                  WEB予約
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="shadow-md">
                <Link href="/access">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  詳細なアクセス情報
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}