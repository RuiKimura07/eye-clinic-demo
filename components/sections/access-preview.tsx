import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function AccessPreview() {
  return (
    <section className="section bg-surface">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand mb-4 text-balance">
            アクセス
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto text-pretty">
            JR渋谷駅から徒歩5分、アクセス良好な立地でお待ちしております。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* 地図エリア */}
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video bg-brand-50 flex items-center justify-center relative">
                <div className="text-center text-brand">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-sm font-medium">Google Map</p>
                  <p className="text-xs text-text-muted mt-1">クリックで詳細地図を表示</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* アクセス情報 */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-brand mb-4">所在地</h3>
                <div className="space-y-3">
                  <p className="flex items-start">
                    <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>〒150-0001<br />東京都渋谷区青空1-2-3 青空ビル2F</span>
                  </p>
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-brand rounded-full mr-3 flex-shrink-0"></span>
                    <span>JR渋谷駅東口より徒歩5分</span>
                  </p>
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-brand rounded-full mr-3 flex-shrink-0"></span>
                    <span>東京メトロ副都心線渋谷駅より徒歩3分</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-brand mb-4">駐車場・バリアフリー</h3>
                <div className="space-y-3">
                  <p className="flex items-start">
                    <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>提携駐車場あり（1時間無料）</span>
                  </p>
                  <p className="flex items-start">
                    <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>車椅子でのご来院も可能です</span>
                  </p>
                  <p className="flex items-start">
                    <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>エレベーター完備</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button size="lg" variant="outline" asChild>
            <Link href="/access">アクセス詳細を見る</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}