import AccessSimple from '@/components/sections/access-simple'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'アクセス',
  description: '青空眼科クリニックへのアクセス方法、駐車場、バリアフリー情報をご案内いたします。JR渋谷駅から徒歩5分の好立地です。',
}

export default function AccessPage() {
  return (
    <>
      <AccessSimple />
    </>
  )
}