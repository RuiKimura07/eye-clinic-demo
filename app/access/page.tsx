import AccessSimple from '@/components/sections/access-simple'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'アクセス',
  description: '青空眼科クリニックへのアクセス方法、駐車場、バリアフリー情報をご案内いたします。JR渋谷駅から徒歩5分の好立地です。',
}

export default function AccessPage() {
  return (
    <>
      {/* ヒーローセクション */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-white via-brand-50 to-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-brand mb-6 text-balance">
              アクセス
            </h1>
            <p className="text-lg lg:text-xl text-text-muted text-pretty">
              JR渋谷駅から徒歩5分の便利な立地。お車でお越しの方には専用駐車場もご用意しています。
            </p>
          </div>
        </div>
      </section>

      <AccessSimple />
    </>
  )
}