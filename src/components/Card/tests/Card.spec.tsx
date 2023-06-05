import { test, expect } from '@playwright/experimental-ct-react'
import { Cat } from '../../../models/Cat'
import Card from '../../Card'

test.use({ viewport: { width: 500, height: 500 } })

test('should work', async ({ mount }) => {
  const cat: Cat = {
    id: '1',
    name: 'Super cat',
    bio: 'here is a cat description'
  }
  const component = await mount(<Card cat={cat} />)
  await expect(component).toContainText('Super cat')
  await expect(component).toContainText('here is a cat description')
})

test('should show no description provided ', async ({ mount }) => {
  const cat: Cat = {
    id: '1',
    name: 'Super cat'
  }

  const component = await mount(<Card cat={cat} />)
  await expect(component).toContainText('Super cat')
  await expect(component).toContainText('No description provided')
})
