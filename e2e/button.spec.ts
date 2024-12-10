import { expect, test } from '@playwright/test'

const url =
  'http://localhost:53741/iframe.html?globals=&args=&id=components-button--'

test.describe('Button Component', () => {
  test('should render filled button correctly', async ({ page }) => {
    await page.goto(`${url}filled`)
    const button = page.getByRole('button', { name: 'Filled' })

    await expect(button).toBeVisible()
    await expect(button).toHaveScreenshot('filled.png', { maxDiffPixels: 1 })
  })

  test('should render outline button correctly', async ({ page }) => {
    await page.goto(`${url}outline`)
    const button = page.getByRole('button', { name: 'Outline' })

    await expect(button).toBeVisible()
    await expect(button).toHaveScreenshot('outline.png', { maxDiffPixels: 1 })
  })
})
