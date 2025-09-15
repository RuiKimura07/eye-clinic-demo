import Link from 'next/link'
import { Button } from '@/components/ui/button'

const navigation = [
  { name: 'ホーム', href: '/' },
  { name: 'クリニック案内', href: '/about' },
  { name: '診療案内', href: '/services' },
  { name: '医師紹介', href: '/doctors' },
  { name: 'アクセス', href: '/access' },
]

export default function HeaderStatic() {
  return (
    <header className="bg-white shadow-soft">
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* ロゴ */}
          <Link
            href="/"
            className="text-2xl lg:text-3xl font-bold text-brand focus-ring rounded-lg"
          >
            青空眼科
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium text-text hover:text-brand focus-ring rounded-lg px-2 py-1 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTAボタン */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:03-1234-5678"
              className="text-brand font-medium hover:text-brand-600 transition-colors focus-ring rounded-lg px-2 py-1"
            >
              03-1234-5678
            </a>
            <Button asChild>
              <Link href="/contact">WEB予約</Link>
            </Button>
          </div>

          {/* モバイルナビゲーション */}
          <nav className="lg:hidden">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-text hover:text-brand focus-ring rounded-lg px-2 py-1 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-2 space-y-2">
                <a
                  href="tel:03-1234-5678"
                  className="block text-brand font-medium hover:text-brand-600 transition-colors focus-ring rounded-lg px-2 py-1"
                >
                  03-1234-5678
                </a>
                <Button className="w-full" size="sm" asChild>
                  <Link href="/contact">WEB予約</Link>
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}