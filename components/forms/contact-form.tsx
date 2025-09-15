'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const contactFormSchema = z.object({
  name: z.string().min(1, '氏名を入力してください'),
  email: z.string().email('正しいメールアドレスを入力してください'),
  phone: z.string().min(1, '電話番号を入力してください').regex(/^[0-9-]+$/, '電話番号は数字とハイフンのみで入力してください'),
  preferredDate: z.string().min(1, '希望日を選択してください'),
  preferredTime: z.string().min(1, '希望時間を選択してください'),
  inquiry: z.string().min(10, '相談内容は10文字以上で入力してください'),
  privacyConsent: z.boolean().refine(val => val === true, 'プライバシーポリシーに同意してください'),
  honeypot: z.string().max(0, 'スパムが検出されました') // ハニーポット
})

type ContactFormData = z.infer<typeof contactFormSchema>

const timeSlots = [
  '9:00-10:00',
  '10:00-11:00',
  '11:00-12:00',
  '15:00-16:00',
  '16:00-17:00',
  '17:00-18:00'
]

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      honeypot: ''
    }
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    // 実際の実装では、ここでAPIにデータを送信
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)) // 模擬送信
      console.log('送信データ:', data)
      setIsSubmitted(true)
      reset()
    } catch (error) {
      console.error('送信エラー:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-brand mb-4">お問い合わせありがとうございます</h3>
          <p className="text-text-muted mb-6">
            お問い合わせ内容を確認させていただき、2営業日以内にご連絡いたします。
            お急ぎの場合は、お電話でお問い合わせください。
          </p>
          <div className="space-y-4">
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
            >
              新しいお問い合わせ
            </Button>
            <div className="text-center">
              <p className="text-sm text-text-muted mb-2">お急ぎの場合</p>
              <a
                href="tel:03-1234-5678"
                className="text-brand font-semibold hover:text-brand-600 transition-colors"
              >
                03-1234-5678
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

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
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* ハニーポット（スパム対策） */}
          <input
            {...register('honeypot')}
            type="text"
            className="absolute -left-9999px"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          {/* 氏名 */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-brand mb-2">
              氏名 <span className="text-red-500">*</span>
            </label>
            <Input
              id="name"
              {...register('name')}
              placeholder="山田 太郎"
              aria-describedby={errors.name ? 'name-error' : undefined}
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && (
              <p id="name-error" className="mt-2 text-sm text-red-600" role="alert">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* メールアドレス */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brand mb-2">
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <Input
              id="email"
              type="email"
              {...register('email')}
              placeholder="example@email.com"
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && (
              <p id="email-error" className="mt-2 text-sm text-red-600" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* 電話番号 */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-brand mb-2">
              電話番号 <span className="text-red-500">*</span>
            </label>
            <Input
              id="phone"
              type="tel"
              {...register('phone')}
              placeholder="03-1234-5678"
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              className={errors.phone ? 'border-red-500' : ''}
            />
            {errors.phone && (
              <p id="phone-error" className="mt-2 text-sm text-red-600" role="alert">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* 希望日時 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="preferredDate" className="block text-sm font-medium text-brand mb-2">
                希望日 <span className="text-red-500">*</span>
              </label>
              <Input
                id="preferredDate"
                type="date"
                {...register('preferredDate')}
                min={new Date().toISOString().split('T')[0]}
                aria-describedby={errors.preferredDate ? 'date-error' : undefined}
                className={errors.preferredDate ? 'border-red-500' : ''}
              />
              {errors.preferredDate && (
                <p id="date-error" className="mt-2 text-sm text-red-600" role="alert">
                  {errors.preferredDate.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="preferredTime" className="block text-sm font-medium text-brand mb-2">
                希望時間 <span className="text-red-500">*</span>
              </label>
              <select
                id="preferredTime"
                {...register('preferredTime')}
                className={`flex h-12 w-full rounded-lg border border-border bg-white px-4 py-3 text-base focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 ${
                  errors.preferredTime ? 'border-red-500' : ''
                }`}
                aria-describedby={errors.preferredTime ? 'time-error' : undefined}
              >
                <option value="">時間を選択してください</option>
                {timeSlots.map(slot => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
              {errors.preferredTime && (
                <p id="time-error" className="mt-2 text-sm text-red-600" role="alert">
                  {errors.preferredTime.message}
                </p>
              )}
            </div>
          </div>

          {/* 相談内容 */}
          <div>
            <label htmlFor="inquiry" className="block text-sm font-medium text-brand mb-2">
              相談内容・症状 <span className="text-red-500">*</span>
            </label>
            <Textarea
              id="inquiry"
              {...register('inquiry')}
              placeholder="症状やご相談内容を詳しくお聞かせください。&#10;例：最近目がかすむ、視力が低下したような気がする、コンタクトレンズの処方を希望するなど"
              rows={6}
              aria-describedby={errors.inquiry ? 'inquiry-error' : undefined}
              className={errors.inquiry ? 'border-red-500' : ''}
            />
            {errors.inquiry && (
              <p id="inquiry-error" className="mt-2 text-sm text-red-600" role="alert">
                {errors.inquiry.message}
              </p>
            )}
          </div>

          {/* プライバシーポリシー同意 */}
          <div>
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                {...register('privacyConsent')}
                className="mt-1 h-4 w-4 text-brand border-border rounded focus:ring-2 focus:ring-brand focus:ring-offset-2"
              />
              <span className="text-sm">
                <a href="/privacy" className="text-brand hover:text-brand-600 underline" target="_blank">
                  プライバシーポリシー
                </a>
                に同意します <span className="text-red-500">*</span>
              </span>
            </label>
            {errors.privacyConsent && (
              <p className="mt-2 text-sm text-red-600" role="alert">
                {errors.privacyConsent.message}
              </p>
            )}
          </div>

          {/* 送信ボタン */}
          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                送信中...
              </>
            ) : (
              '送信する'
            )}
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