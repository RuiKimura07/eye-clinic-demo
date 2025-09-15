import { Card, CardContent } from '@/components/ui/card'

const faqs = [
  {
    question: '初診時に必要な持ち物はありますか？',
    answer: '健康保険証、お薬手帳、現在使用中の眼鏡・コンタクトレンズをお持ちください。他院からの紹介状がある場合はご持参ください。'
  },
  {
    question: '予約は必要ですか？',
    answer: 'WEBまたはお電話でのご予約をお勧めしております。予約なしでも診療いたしますが、お待ちいただく場合がございます。'
  },
  {
    question: 'コンタクトレンズの処方はできますか？',
    answer: 'はい、各種コンタクトレンズの処方を行っております。初回は必ず眼科検査を行い、適切なレンズをご提案いたします。'
  },
  {
    question: '白内障手術は日帰りで可能ですか？',
    answer: '当院では日帰り白内障手術を行っております。術前検査により手術適応を判断し、安全に配慮して実施いたします。'
  },
  {
    question: '子どもの診療も行っていますか？',
    answer: 'はい、お子様の診療も行っております。近視の進行抑制治療や斜視・弱視の治療も対応可能です。'
  }
]

export default function FAQStatic() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand mb-4 text-balance">
            よくある質問
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto text-pretty">
            患者様からよくお寄せいただくご質問をまとめました。その他ご不明な点がございましたらお気軽にお問い合わせください。
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-brand mb-3 text-balance">
                  Q. {faq.question}
                </h3>
                <p className="text-text-muted text-pretty">
                  A. {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}