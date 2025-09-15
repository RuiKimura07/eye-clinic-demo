export default function AccessSimple() {
  return (
    <section className="py-20 lg:py-32 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* セクションヘッダー */}
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-text mb-6">
            アクセス・診療時間
          </h2>
          <p className="text-lg lg:text-xl text-text-muted max-w-3xl mx-auto">
            JR渋谷駅から徒歩5分の便利な立地。お車でお越しの方には専用駐車場もご用意しています。
          </p>
        </div>

        {/* メイン情報グリッド */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 mb-20">

          {/* 地図エリア */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-neutral-600 space-y-4">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <div className="font-semibold">青空眼科クリニック</div>
                    <div className="text-sm">東京都渋谷区</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 基本情報 */}
          <div className="order-1 lg:order-2 space-y-12">

            {/* クリニック情報 */}
            <div>
              <h3 className="text-2xl font-bold text-text mb-6">クリニック情報</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 text-brand mr-4 mt-1 flex-shrink-0">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-text">青空眼科クリニック</div>
                    <div className="text-text-muted">〒150-0002 東京都渋谷区渋谷1-2-3 青空ビル5F</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 text-brand mr-4 mt-1 flex-shrink-0">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-text">03-1234-5678</div>
                    <div className="text-text-muted text-sm">予約・お問い合わせ</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 text-brand mr-4 mt-1 flex-shrink-0">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-text">WEB予約対応</div>
                    <div className="text-text-muted text-sm">24時間受付可能</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 診療時間 */}
            <div>
              <h3 className="text-2xl font-bold text-text mb-6">診療時間</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-4 gap-4 text-center border-b border-neutral-200 pb-2">
                  <div className="font-semibold text-text">曜日</div>
                  <div className="font-semibold text-text">午前</div>
                  <div className="font-semibold text-text">午後</div>
                  <div className="font-semibold text-text">夜間</div>
                </div>

                <div className="space-y-3">
                  <div className="grid grid-cols-4 gap-4 text-center py-2">
                    <div className="font-medium text-text">月〜金</div>
                    <div className="text-text-muted">9:00-12:30</div>
                    <div className="text-text-muted">14:00-17:30</div>
                    <div className="text-text-muted">18:00-19:30</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 text-center py-2">
                    <div className="font-medium text-text">土曜</div>
                    <div className="text-text-muted">9:00-12:30</div>
                    <div className="text-text-muted">14:00-17:00</div>
                    <div className="text-neutral-400">休診</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 text-center py-2">
                    <div className="font-medium text-text">日・祝</div>
                    <div className="text-neutral-400">休診</div>
                    <div className="text-neutral-400">休診</div>
                    <div className="text-neutral-400">休診</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* アクセス情報 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">

          <div className="space-y-4">
            <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-text mb-2">電車でお越しの方</h4>
              <div className="text-text-muted space-y-1">
                <div className="text-sm">JR渋谷駅 東口より徒歩5分</div>
                <div className="text-sm">東急東横線 渋谷駅より徒歩6分</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-text mb-2">建物情報</h4>
              <div className="text-text-muted space-y-1">
                <div className="text-sm">青空ビル 5階</div>
                <div className="text-sm">エレベーター完備</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-text mb-2">お車でお越しの方</h4>
              <div className="text-text-muted space-y-1">
                <div className="text-sm">専用駐車場 8台完備</div>
                <div className="text-sm">駐車料金無料</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-text mb-2">バリアフリー</h4>
              <div className="text-text-muted space-y-1">
                <div className="text-sm">車椅子対応</div>
                <div className="text-sm">段差なし設計</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}