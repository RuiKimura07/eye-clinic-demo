import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function DoctorsPreview() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand mb-4 text-balance">
            医師紹介
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto text-pretty">
            豊富な経験と専門知識を持つ医師が、患者様の目の健康を責任を持ってサポートいたします。
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="hover-lift">
            <div className="md:flex">
              <div className="md:w-1/3 p-6 flex items-center justify-center">
                <div className="w-32 h-32 bg-brand-100 rounded-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-brand" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
              <div className="md:w-2/3 p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl text-brand">
                    院長　青空 太郎
                  </CardTitle>
                  <p className="text-text-muted">眼科専門医・医学博士</p>
                </CardHeader>
                <CardContent className="px-0">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-brand mb-2">専門分野</h4>
                      <p className="text-text-muted">白内障手術、緑内障治療、ドライアイ治療</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-brand mb-2">所属学会</h4>
                      <p className="text-text-muted">日本眼科学会、日本白内障屈折矯正手術学会、日本緑内障学会</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-brand mb-2">ご挨拶</h4>
                      <p className="text-text-muted text-pretty">
                        患者様お一人おひとりの目の健康を守ることを使命として、日々診療に取り組んでおります。
                        些細なことでもお気軽にご相談ください。
                      </p>
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center mt-8">
          <Button size="lg" variant="outline" asChild>
            <Link href="/doctors">医師紹介を詳しく見る</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}