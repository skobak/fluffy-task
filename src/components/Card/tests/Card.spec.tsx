import { test, expect } from '@playwright/experimental-ct-react'
import Card from '../../Card'

test.use({ viewport: { width: 500, height: 500 } })

test('should work', async ({ mount }) => {
  const component = await mount(
    <Card title="Super cat" description="here is a cat description" />
  )
  await expect(component).toContainText('Super cat')
  await expect(component).toContainText('here is a cat description')
})

test('should show no description provided ', async ({ mount }) => {
  const component = await mount(<Card title="Super cat" description="" />)
  await expect(component).toContainText('Super cat')
  await expect(component).toContainText('No description provided')
})
