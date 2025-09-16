'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'

const navigation = [
  { name: 'ホーム', href: '/' },
  { name: 'クリニック案内', href: '/about' },
  { name: '診療案内', href: '/services' },
  { name: '医師紹介', href: '/doctors' },
  { name: 'アクセス', href: '/access' },
]

export default function HeaderModern() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  return (
    <header className="bg-white shadow-sm border-b border-neutral-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* ロゴ */}
          <Link
            href="/"
            className="flex items-center space-x-3 focus-ring rounded-lg p-2"
          >
            <div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div>
              <div className="text-xl font-bold text-text">青空眼科</div>
              <div className="text-xs text-text-muted">AOZORA EYE CLINIC</div>
            </div>
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus-ring relative ${
                    isActive
                      ? 'text-brand bg-brand-100 font-semibold border border-brand-200 shadow-sm'
                      : 'text-text-muted hover:text-brand hover:bg-brand-50'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-brand rounded-full"></span>
                  )}
                </Link>
              )
            })}
          </nav>

          {/* 右側のCTA */}
          <div className="flex items-center space-x-4">
            {/* 電話番号（デスクトップのみ） */}
            <div className="hidden lg:flex flex-col items-end">
              <a
                href="tel:03-1234-5678"
                className="text-brand font-semibold text-lg hover:text-brand-600 transition-colors focus-ring rounded px-2 py-1"
              >
                03-1234-5678
              </a>
              <span className="text-xs text-text-muted">平日 9:00-18:00</span>
            </div>

            {/* WEB予約ボタン */}
            <Button asChild className="shadow-md">
              <Link href="/contact">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                WEB予約
              </Link>
            </Button>

            {/* モバイルメニューボタン */}
            <button
              className="lg:hidden p-2 text-text-muted hover:text-brand hover:bg-neutral-50 rounded-lg transition-colors focus-ring"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="メニューを開く"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* モバイルナビゲーション */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-neutral-200 py-4">
          <nav className="space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 relative ${
                    isActive
                      ? 'text-brand bg-brand-100 font-semibold border border-brand-200 shadow-sm'
                      : 'text-text-muted hover:text-brand hover:bg-brand-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="flex items-center">
                    {item.name}
                    {isActive && (
                      <svg className="w-4 h-4 ml-2 text-brand" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </span>
                </Link>
              )
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-neutral-200">
            <a
              href="tel:03-1234-5678"
              className="flex items-center px-4 py-3 text-brand font-semibold hover:bg-brand-50 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              03-1234-5678
            </a>
          </div>
          </div>
        )}
      </div>
    </header>
  )
}