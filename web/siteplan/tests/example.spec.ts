import SvgService from '@/service/SvgService'
import { expect, test } from '@playwright/test'
import axios from 'axios'

test('setup SvgService', async ({ page }) => {
  console.log('hello!')
  // const axios: AxiosStatic
  const svgService = new SvgService(axios)

  // const style = svgService.getFeatureStyle(pzb, FeatureType.PZB, label)
})

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/)
})

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/')

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click()

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible()
})
