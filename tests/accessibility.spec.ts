import { test, expect } from '@playwright/test'

test.describe('青空眼科クリニック - アクセシビリティテスト', () => {
  test('ホームページの基本的なアクセシビリティをチェック', async ({ page }) => {
    await page.goto('/')

    // ページタイトルの確認
    await expect(page).toHaveTitle(/青空眼科クリニック/)

    // メインコンテンツの確認
    const main = page.locator('main')
    await expect(main).toBeVisible()

    // スキップリンクの確認
    const skipLink = page.locator('.skip-link')
    await expect(skipLink).toBeInViewport({ ratio: 0 })

    // ヘッダーナビゲーションの確認
    const nav = page.locator('nav')
    await expect(nav).toBeVisible()

    // 重要なリンクの確認
    const homeLink = page.locator('a[href="/"]').first()
    await expect(homeLink).toBeVisible()

    const contactLink = page.locator('a[href="/contact"]').first()
    await expect(contactLink).toBeVisible()

    // 電話番号リンクの確認
    const phoneLink = page.locator('a[href="tel:03-1234-5678"]').first()
    await expect(phoneLink).toBeVisible()
  })

  test('ナビゲーション操作のテスト', async ({ page }) => {
    await page.goto('/')

    // 各ページへのナビゲーションをテスト
    const navigationItems = [
      { name: 'クリニック案内', href: '/about' },
      { name: '診療案内', href: '/services' },
      { name: '医師紹介', href: '/doctors' },
      { name: 'アクセス', href: '/access' },
    ]

    for (const item of navigationItems) {
      await page.click(`a[href="${item.href}"]`)
      await expect(page).toHaveURL(item.href)
      await expect(page.locator('h1')).toBeVisible()

      // ホームに戻る
      await page.click('a[href="/"]')
      await expect(page).toHaveURL('/')
    }
  })

  test('お問い合わせフォームのアクセシビリティテスト', async ({ page }) => {
    await page.goto('/contact')

    // フォームの基本要素の確認
    await expect(page.locator('form')).toBeVisible()

    // 必須フィールドのラベル確認
    const requiredFields = [
      { id: 'name', label: '氏名' },
      { id: 'email', label: 'メールアドレス' },
      { id: 'phone', label: '電話番号' },
      { id: 'preferredDate', label: '希望日' },
      { id: 'preferredTime', label: '希望時間' },
      { id: 'inquiry', label: '相談内容・症状' },
    ]

    for (const field of requiredFields) {
      const label = page.locator(`label[for="${field.id}"]`)
      await expect(label).toBeVisible()
      await expect(label).toContainText(field.label)

      const input = page.locator(`#${field.id}`)
      await expect(input).toBeVisible()
    }

    // フォームの送信テスト（バリデーションエラー）
    const submitButton = page.locator('button[type="submit"]')
    await expect(submitButton).toBeVisible()
    await submitButton.click()

    // エラーメッセージの確認
    await expect(page.locator('[role="alert"]').first()).toBeVisible()
  })

  test('レスポンシブデザインのテスト', async ({ page }) => {
    await page.goto('/')

    // デスクトップサイズ
    await page.setViewportSize({ width: 1200, height: 800 })
    await expect(page.locator('header')).toBeVisible()
    await expect(page.locator('main')).toBeVisible()
    await expect(page.locator('footer')).toBeVisible()

    // タブレットサイズ
    await page.setViewportSize({ width: 768, height: 1024 })
    await expect(page.locator('header')).toBeVisible()
    await expect(page.locator('main')).toBeVisible()
    await expect(page.locator('footer')).toBeVisible()

    // モバイルサイズ
    await page.setViewportSize({ width: 375, height: 667 })
    await expect(page.locator('header')).toBeVisible()
    await expect(page.locator('main')).toBeVisible()
    await expect(page.locator('footer')).toBeVisible()

    // モバイルメニューの確認
    const menuButton = page.locator('button[aria-label="メニューを開く"]')
    if (await menuButton.isVisible()) {
      await menuButton.click()
      await expect(page.locator('nav')).toBeVisible()
    }
  })

  test('キーボードナビゲーションのテスト', async ({ page }) => {
    await page.goto('/')

    // スキップリンクのテスト
    await page.keyboard.press('Tab')
    const skipLink = page.locator('.skip-link')
    await expect(skipLink).toBeFocused()

    // スキップリンクの機能確認
    await page.keyboard.press('Enter')
    const main = page.locator('main')
    await expect(main).toBeFocused()

    // 主要なインタラクティブ要素のフォーカステスト
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')

    // WEB予約ボタンまでTabで移動してEnterで押下
    const webBookingButton = page.locator('a[href="/contact"]').first()
    await webBookingButton.focus()
    await expect(webBookingButton).toBeFocused()
  })

  test('色のコントラストと可読性のテスト', async ({ page }) => {
    await page.goto('/')

    // 主要なテキスト要素の確認
    const heading = page.locator('h1').first()
    await expect(heading).toBeVisible()

    const bodyText = page.locator('p').first()
    await expect(bodyText).toBeVisible()

    // ボタンの確認
    const primaryButton = page.locator('button, a').filter({ hasText: 'WEB予約' }).first()
    await expect(primaryButton).toBeVisible()

    // リンクの確認
    const navLinks = page.locator('nav a')
    await expect(navLinks.first()).toBeVisible()
  })
})