import type { Metadata } from 'next'
import Link from 'next/link'
import { clinic } from '@/lib/clinic-config'

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: '青空眼科クリニックのプライバシーポリシーについて説明しています。',
}

export default function PrivacyPage() {
  const lastUpdated = '2024年1月1日'

  return (
    <>
      {/* ヒーローセクション */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-white via-brand-50 to-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-brand mb-6 text-balance">
              プライバシーポリシー
            </h1>
            <p className="text-lg lg:text-xl text-text-muted text-pretty">
              患者様の個人情報保護に関する当クリニックの取り組みについてご説明いたします。
            </p>
          </div>
        </div>
      </section>

      {/* プライバシーポリシー内容 */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-sm text-text-muted mb-8">最終更新日：{lastUpdated}</p>

            <h2>基本方針</h2>
            <p>
              {clinic.nameJa}（以下「当クリニック」）は、患者様の個人情報の保護を重要な責務と認識し、
              個人情報の保護に関する法律その他関係法令を遵守し、患者様の個人情報を適切に取り扱います。
            </p>

            <h2>個人情報の利用目的</h2>
            <p>当クリニックでは、患者様の個人情報を以下の目的で利用いたします：</p>
            <ul>
              <li>診療、治療、予防接種等の医療の提供</li>
              <li>診療に関する事務（会計・受付業務等）</li>
              <li>患者様への連絡（診療予約の確認、検査結果の通知等）</li>
              <li>医療安全確保のための院内報告</li>
              <li>医療・介護・労災保険、公費負担医療に関する事務</li>
              <li>行政機関、保険者等への報告</li>
              <li>医療の質の向上を目的とした院内での症例研究</li>
            </ul>

            <h2>第三者への提供</h2>
            <p>
              当クリニックは、以下の場合を除き、患者様の同意なく個人情報を第三者に提供することはありません：
            </p>
            <ul>
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難である場合</li>
              <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
              <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
            </ul>

            <h2>アクセス解析について</h2>
            <p>
              当クリニックのウェブサイトでは、サービス向上のためにGoogle Analyticsを使用しています。
              Google Analyticsはクッキー（Cookie）を使用してユーザーの行動を分析しますが、
              個人を特定する情報は収集されません。
            </p>

            <h2>Cookie（クッキー）について</h2>
            <p>
              当サイトでは、ユーザーの利便性向上のためにクッキーを使用する場合があります。
              クッキーの使用を希望されない場合は、ブラウザの設定により無効化することができます。
            </p>

            <h2>個人情報の開示等について</h2>
            <p>
              患者様は、当クリニックが保有する患者様の個人情報について、開示、訂正・追加・削除、
              利用停止・消去および第三者提供の停止を求めることができます。
              これらのご請求については、下記のお問い合わせ窓口までご連絡ください。
            </p>

            <h2>お問い合わせ窓口</h2>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <p className="font-semibold mb-2">{clinic.nameJa}</p>
              <p>住所：{clinic.address.postal} {clinic.address.line1} {clinic.address.building}</p>
              <p>電話：{clinic.phone}</p>
              <p>メール：{clinic.email}</p>
            </div>

            <h2>プライバシーポリシーの変更</h2>
            <p>
              当クリニックは、必要に応じて本プライバシーポリシーを変更することがあります。
              変更した場合には、当ウェブサイトにて速やかに公表いたします。
            </p>

            <div className="mt-12 text-center">
              <Link
                href="/"
                className="inline-flex items-center text-brand hover:text-brand-600 transition-colors focus-ring rounded-lg px-2 py-1"
              >
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                ホームに戻る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}