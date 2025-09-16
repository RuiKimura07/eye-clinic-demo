'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'ホーム', href: '/' },
  { name: 'クリニック案内', href: '/about' },
  { name: '診療案内', href: '/services' },
  { name: '医師紹介', href: '/doctors' },
  { name: 'アクセス', href: '/access' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white shadow-soft'
          : 'bg-white/90 backdrop-blur-sm'
      )}
    >
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
                className={cn(
                  'text-base font-medium transition-colors focus-ring rounded-lg px-2 py-1 relative',
                  pathname === item.href
                    ? 'text-brand bg-brand-50 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-6 after:h-0.5 after:bg-brand after:rounded-full'
                    : 'text-text hover:text-brand hover:bg-brand-50'
                )}
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

          {/* モバイルメニューボタン */}
          <button
            type="button"
            className="lg:hidden p-2 text-text focus-ring rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="メニューを開く"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* モバイルメニュー */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-base font-medium px-4 py-2 rounded-lg transition-colors focus-ring',
                    pathname === item.href
                      ? 'text-brand bg-brand-50 border border-brand-200'
                      : 'text-text hover:text-brand hover:bg-brand-50'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="mt-4 px-4 space-y-3">
              <a
                href="tel:03-1234-5678"
                className="block text-brand font-medium hover:text-brand-600 transition-colors focus-ring rounded-lg px-2 py-1"
              >
                03-1234-5678
              </a>
              <Button className="w-full" asChild>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  WEB予約
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}