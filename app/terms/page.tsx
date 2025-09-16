import type { Metadata } from 'next'
import Link from 'next/link'
import { clinic } from '@/lib/clinic-config'

export const metadata: Metadata = {
  title: '利用規約',
  description: '青空眼科クリニックのウェブサイト利用規約について説明しています。',
}

export default function TermsPage() {
  const lastUpdated = '2024年1月1日'

  return (
    <>
      {/* ヒーローセクション */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-white via-brand-50 to-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-brand mb-6 text-balance">
              利用規約
            </h1>
            <p className="text-lg lg:text-xl text-text-muted text-pretty">
              当クリニックのウェブサイトをご利用いただくにあたっての規約です。
            </p>
          </div>
        </div>
      </section>

      {/* 利用規約内容 */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-sm text-text-muted mb-8">最終更新日：{lastUpdated}</p>

            <h2>第1条（適用）</h2>
            <p>
              この利用規約（以下「本規約」）は、{clinic.nameJa}（以下「当クリニック」）が
              運営するウェブサイト（以下「本サイト」）の利用条件を定めるものです。
              本サイトをご利用いただくユーザーの皆様（以下「ユーザー」）は、
              本規約に同意したものとみなします。
            </p>

            <h2>第2条（利用登録）</h2>
            <p>
              本サイトでは、予約フォームの送信時に氏名、連絡先等の情報をご提供いただきますが、
              これらの情報は診療予約の目的のみに使用いたします。
            </p>

            <h2>第3条（禁止事項）</h2>
            <p>ユーザーは、本サイトの利用にあたり、以下の行為をしてはなりません：</p>
            <ul>
              <li>法令または公序良俗に反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>本サイトの運営を妨害するおそれのある行為</li>
              <li>当クリニックや第三者の知的財産権を侵害する行為</li>
              <li>当クリニックや第三者の名誉や信用を毀損する行為</li>
              <li>過度に交通量の多い問い合わせや、当クリニックの承諾のない商業的な問い合わせ</li>
              <li>コンピュータウィルスその他の有害なコンピュータプログラムを含む情報の送信</li>
              <li>その他、当クリニックが不適切と判断する行為</li>
            </ul>

            <h2>第4条（本サイトの提供停止等）</h2>
            <p>
              当クリニックは、以下のいずれかの事由があると判断した場合、
              ユーザーに事前に通知することなく本サイトの全部または一部の提供を停止または中断することができるものとします：
            </p>
            <ul>
              <li>本サイトにかかるコンピュータシステムの保守点検または更新を行う場合</li>
              <li>地震、落雷、火災、停電または天災などの不可抗力により、本サイトの提供が困難となった場合</li>
              <li>コンピュータまたは通信回線等が事故により停止した場合</li>
              <li>その他、当クリニックが本サイトの提供が困難と判断した場合</li>
            </ul>

            <h2>第5条（免責事項）</h2>
            <p>
              当クリニックは、本サイトに起因してユーザーに生じたあらゆる損害について、
              当クリニックの故意または重過失による場合を除き、一切の責任を負いません。
              本サイトの情報は参考程度にご利用いただき、実際の診療については必ず医師にご相談ください。
            </p>

            <h2>第6条（サービス内容の変更等）</h2>
            <p>
              当クリニックは、ユーザーに通知することなく、本サイトで提供する情報の内容を変更、
              追加または削除することがあり、ユーザーはこれに同意するものとします。
            </p>

            <h2>第7条（利用規約の変更）</h2>
            <p>
              当クリニックは、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。
              なお、本規約の変更後、本サイトの利用を継続したユーザーは、変更後の規約に同意したものとみなします。
            </p>

            <h2>第8条（個人情報の取扱い）</h2>
            <p>
              当クリニックは、本サイトの利用によって取得する個人情報については、
              当クリニック「<Link href="/privacy" className="text-brand hover:text-brand-600 underline">プライバシーポリシー</Link>」に従い適切に取り扱うものとします。
            </p>

            <h2>第9条（準拠法・裁判管轄）</h2>
            <p>
              本規約の解釈にあたっては、日本法を準拠法とします。
              本サイトに関して紛争が生じた場合には、当クリニック所在地を管轄する裁判所を専属的合意管轄とします。
            </p>

            <h2>お問い合わせ</h2>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <p className="font-semibold mb-2">{clinic.nameJa}</p>
              <p>住所：{clinic.address.postal} {clinic.address.line1} {clinic.address.building}</p>
              <p>電話：{clinic.phone}</p>
              <p>メール：{clinic.email}</p>
            </div>

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