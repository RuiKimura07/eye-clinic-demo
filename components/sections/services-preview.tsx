import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const services = [
  {
    title: '一般眼科診療',
    description: '近視・遠視・乱視の矯正、眼精疲労、結膜炎など日常的な目のトラブルに対応いたします。',
    details: ['屈折異常の検査・矯正', '眼精疲労の診断・治療', '結膜炎・ものもらいの治療']
  },
  {
    title: 'ドライアイ',
    description: '涙の分泌量や質の低下によるドライアイの診断と、個々の症状に応じた治療を行います。',
    details: ['涙液検査', '点眼治療', '涙点プラグ挿入術']
  },
  {
    title: '白内障',
    description: '水晶体の濁りによる視力低下を改善する白内障手術を、日帰りで安全に実施いたします。',
    details: ['白内障手術（日帰り）', '多焦点眼内レンズ', '術後フォローアップ']
  },
  {
    title: '緑内障',
    description: '早期発見・早期治療が重要な緑内障の検査と治療を、定期的な経過観察とともに行います。',
    details: ['眼圧検査', '視野検査', '点眼・レーザー治療']
  }
]

export default function ServicesPreview() {
  return (
    <section className="section bg-surface">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand mb-4 text-balance">
            診療案内
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto text-pretty">
            幅広い眼科疾患に対応し、患者様お一人おひとりの症状に合わせた最適な治療をご提供いたします。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="hover-lift">
              <CardHeader>
                <CardTitle className="text-xl text-brand">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-text-muted">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/services">診療案内を詳しく見る</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}