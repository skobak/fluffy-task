import { chromium, Page, Browser } from '@playwright/test'
import { test, expect } from '@playwright/experimental-ct-react'

// This test assumes you have a button with the id "myButton" on your main page
test('clicks the button on the main page', async () => {
  const browser: Browser = await chromium.launch()
  const page: Page = await browser.newPage()

  // Navigate to your React app
  await page.goto('http://localhost:5173/')

  // Click the button
  await page.click('#mockServerButton')
  const text = await page.textContent('#mockServerMessage')

  // Check that the text is what you expect
  expect(text).toBe('Loading...')
  // TODO: we need to make the mock server work working with playwright-ct
  // currently the Service worker are intercepting by playwright-ct
  // and do not work as expected
  await browser.close()
})
