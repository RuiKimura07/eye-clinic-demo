import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const timeSlots = [
  '9:00-10:00',
  '10:00-11:00',
  '11:00-12:00',
  '15:00-16:00',
  '16:00-17:00',
  '17:00-18:00'
]

export default function ContactFormStatic() {
  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-brand text-center">
          ご予約・お問い合わせフォーム
        </CardTitle>
        <p className="text-text-muted text-center">
          以下のフォームにご記入いただき、送信してください。
        </p>
      </CardHeader>
      <CardContent className="p-8">
        <form className="space-y-6" action="#" method="post">
          {/* 氏名 */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-brand mb-2">
              氏名 <span className="text-red-500">*</span>
            </label>
            <Input
              id="name"
              name="name"
              placeholder="山田 太郎"
              required
            />
          </div>

          {/* メールアドレス */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brand mb-2">
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="example@email.com"
              required
            />
          </div>

          {/* 電話番号 */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-brand mb-2">
              電話番号 <span className="text-red-500">*</span>
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="03-1234-5678"
              required
            />
          </div>

          {/* 希望日時 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="preferredDate" className="block text-sm font-medium text-brand mb-2">
                希望日 <span className="text-red-500">*</span>
              </label>
              <Input
                id="preferredDate"
                name="preferredDate"
                type="date"
                required
              />
            </div>

            <div>
              <label htmlFor="preferredTime" className="block text-sm font-medium text-brand mb-2">
                希望時間 <span className="text-red-500">*</span>
              </label>
              <select
                id="preferredTime"
                name="preferredTime"
                className="flex h-12 w-full rounded-lg border border-border bg-white px-4 py-3 text-base focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
                required
              >
                <option value="">時間を選択してください</option>
                {timeSlots.map(slot => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 相談内容 */}
          <div>
            <label htmlFor="inquiry" className="block text-sm font-medium text-brand mb-2">
              相談内容・症状 <span className="text-red-500">*</span>
            </label>
            <Textarea
              id="inquiry"
              name="inquiry"
              placeholder="症状やご相談内容を詳しくお聞かせください。&#10;例：最近目がかすむ、視力が低下したような気がする、コンタクトレンズの処方を希望するなど"
              rows={6}
              required
            />
          </div>

          {/* プライバシーポリシー同意 */}
          <div>
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="privacyConsent"
                className="mt-1 h-4 w-4 text-brand border-border rounded focus:ring-2 focus:ring-brand focus:ring-offset-2"
                required
              />
              <span className="text-sm">
                <a href="/privacy" className="text-brand hover:text-brand-600 underline" target="_blank">
                  プライバシーポリシー
                </a>
                に同意します <span className="text-red-500">*</span>
              </span>
            </label>
          </div>

          {/* 送信ボタン */}
          <Button
            type="submit"
            size="lg"
            className="w-full"
          >
            送信する
          </Button>

          <div className="text-center text-sm text-text-muted">
            <p>
              送信いただいた内容は、2営業日以内にご返信いたします。
              <br />
              お急ぎの場合は、
              <a href="tel:03-1234-5678" className="text-brand hover:text-brand-600 font-medium">
                03-1234-5678
              </a>
              までお電話ください。
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}