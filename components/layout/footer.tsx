import Link from 'next/link'
import { siteConfig } from '@/lib/metadata'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* クリニック情報 */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-semibold text-brand mb-4">青空眼科クリニック</h3>
              <div className="space-y-2 text-text-muted">
                <p>{siteConfig.address}</p>
                <p>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="hover:text-brand transition-colors focus-ring rounded"
                  >
                    {siteConfig.phone}
                  </a>
                </p>
              </div>
            </div>

            {/* 診療時間 */}
            <div>
              <h3 className="text-lg font-semibold text-brand mb-4">診療時間</h3>
              <div className="space-y-2 text-sm text-text-muted">
                <div className="flex justify-between">
                  <span>月・火・水・金</span>
                  <span>9:00-12:30 / 15:00-18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>木曜日</span>
                  <span>9:00-13:00</span>
                </div>
                <div className="flex justify-between">
                  <span>土曜日</span>
                  <span>9:00-12:30 / 14:00-17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>日・祝</span>
                  <span>休診</span>
                </div>
              </div>
            </div>

            {/* サイトマップ */}
            <div>
              <h3 className="text-lg font-semibold text-brand mb-4">サイトマップ</h3>
              <nav className="space-y-2">
                <Link
                  href="/about"
                  className="block text-text-muted hover:text-brand transition-colors focus-ring rounded"
                >
                  クリニック案内
                </Link>
                <Link
                  href="/services"
                  className="block text-text-muted hover:text-brand transition-colors focus-ring rounded"
                >
                  診療案内
                </Link>
                <Link
                  href="/doctors"
                  className="block text-text-muted hover:text-brand transition-colors focus-ring rounded"
                >
                  医師紹介
                </Link>
                <Link
                  href="/access"
                  className="block text-text-muted hover:text-brand transition-colors focus-ring rounded"
                >
                  アクセス
                </Link>
                <Link
                  href="/contact"
                  className="block text-text-muted hover:text-brand transition-colors focus-ring rounded"
                >
                  お問い合わせ
                </Link>
              </nav>
            </div>

            {/* その他のリンク */}
            <div>
              <h3 className="text-lg font-semibold text-brand mb-4">その他</h3>
              <nav className="space-y-2">
                <Link
                  href="/privacy"
                  className="block text-text-muted hover:text-brand transition-colors focus-ring rounded"
                >
                  プライバシーポリシー
                </Link>
                <Link
                  href="/terms"
                  className="block text-text-muted hover:text-brand transition-colors focus-ring rounded"
                >
                  利用規約
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-text-muted">
              © {currentYear} 青空眼科クリニック. All rights reserved.
            </p>
            <p className="text-sm text-text-muted">
              〒150-0001 {siteConfig.address}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}