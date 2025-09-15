const faqs = [
  {
    question: '初診の際に必要な持ち物を教えてください',
    answer: '健康保険証、お薬手帳（お持ちの方）、他院からの紹介状（お持ちの方）をご持参ください。コンタクトレンズをご使用の方は、普段使用しているレンズもお持ちいただけると診察がスムーズです。'
  },
  {
    question: 'WEB予約はどのように利用すればよいですか？',
    answer: '当院のウェブサイトから24時間いつでも予約が可能です。初診・再診問わず、お好きな時間を選択してご予約ください。緊急の場合は直接お電話でお問い合わせいただくことをお勧めします。'
  },
  {
    question: '白内障手術の日帰り手術は可能ですか？',
    answer: 'はい、当院では日帰り白内障手術を行っております。手術時間は通常15-20分程度で、術後は数時間の安静の後にお帰りいただけます。手術前に詳しい検査と説明を行い、患者様が安心して手術を受けられるよう配慮しています。'
  },
  {
    question: '子どもの視力検査は何歳から受けられますか？',
    answer: '3歳頃から本格的な視力検査が可能ですが、それ以前でも気になる症状がございましたらお気軽にご相談ください。小さなお子様には専用の検査方法を用意しており、お子様が怖がらないよう配慮して検査を行います。'
  },
  {
    question: '駐車場はありますか？',
    answer: '専用駐車場を8台分ご用意しており、診療を受けられる患者様は無料でご利用いただけます。満車の場合は近隣のコインパーキングをご利用ください（料金は患者様負担となります）。'
  },
  {
    question: 'ドライアイの治療にはどの程度の期間がかかりますか？',
    answer: '症状の程度により個人差がありますが、点眼治療で改善する軽度のドライアイは数週間から1ヶ月程度で症状の改善を実感していただけます。重度の場合は数ヶ月から長期的な治療が必要になることもあります。'
  },
  {
    question: '緑内障の定期検査はどの程度の頻度で受ける必要がありますか？',
    answer: '緑内障の進行度や治療状況によって異なりますが、一般的には3-6ヶ月に1回の定期検査をお勧めしています。初期の緑内障の場合は年2-3回、進行した緑内障の場合はより頻繁な検査が必要です。'
  },
  {
    question: '他院で処方されたコンタクトレンズの定期検査は受けられますか？',
    answer: 'はい、他院で処方されたコンタクトレンズの定期検査も承っております。コンタクトレンズによる眼のトラブルを予防するため、3ヶ月に1回程度の定期検査をお勧めしています。検査の際はご使用中のレンズをお持ちください。'
  }
]

export default function FAQSimple() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* セクションヘッダー */}
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-text mb-6">
            よくあるご質問
          </h2>
          <p className="text-lg lg:text-xl text-text-muted max-w-3xl mx-auto">
            患者様からよくいただくご質問をまとめました。<br />
            他にもご不明な点がございましたら、お気軽にお問い合わせください。
          </p>
        </div>

        {/* FAQ リスト */}
        <div className="max-w-4xl mx-auto space-y-6 mb-20">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-neutral-200 pb-6">
              <div className="space-y-4">

                {/* 質問 */}
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brand text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    Q
                  </div>
                  <h3 className="text-lg font-semibold text-text leading-relaxed pt-1">
                    {faq.question}
                  </h3>
                </div>

                {/* 回答 */}
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    A
                  </div>
                  <p className="text-text-muted leading-relaxed pt-1">
                    {faq.answer}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* お問い合わせCTA */}
        <div className="text-center space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-text">
              他にもご質問がございましたら
            </h3>
            <p className="text-text-muted">
              お電話またはWEBからお気軽にお問い合わせください
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:03-1234-5678"
              className="inline-flex items-center justify-center px-6 py-3 text-brand border border-brand rounded-lg hover:bg-brand hover:text-white transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              03-1234-5678
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-brand border border-brand rounded-lg hover:bg-brand hover:text-white transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              お問い合わせフォーム
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}