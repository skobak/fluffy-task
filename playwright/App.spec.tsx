import { test, expect } from '@playwright/test'

const URL = 'http://localhost:5173'

test('should add a cat', async ({ page }) => {
  await page.goto(URL)
  await page.click('text=Add')
  await page.fill('input[name="name"]', 'Super cat')
  await page.fill('textarea[name="bio"]', 'here is a cat description')
  await page.click('button:has-text("Submit")')
  const element = await page.$('text=Super cat')
  expect(element).toBeTruthy()
})

test('should show no description provided ', async ({ page }) => {
  await page.goto(URL)
  await page.click('text=Add')
  await page.fill('input[name="name"]', 'Super cat')
  await page.click('button:has-text("Submit")')
  const element = await page.$('text=No description provided')
  expect(element).toBeTruthy()
})

test('should edit cat', async ({ page }) => {
  await page.goto(URL)
  await page.click('text=Add')
  await page.fill('input[name="name"]', 'Super cat')
  await page.fill('textarea[name="bio"]', 'here is a cat description')
  await page.click('button:has-text("Submit")')
  await page.click('button[aria-label="Edit card"]')
  await page.fill('input[name="name"]', 'Super cat edited')
  await page.fill('textarea[name="bio"]', 'here is a cat description edited')
  await page.click('button:has-text("Submit")')
  const element = await page.$('text=Super cat edited')
  expect(element).toBeTruthy()
})

test('should delete cat', async ({ page }) => {
  await page.goto(URL)
  await page.click('text=Add')
  await page.fill('input[name="name"]', 'Super cat')
  await page.fill('textarea[name="bio"]', 'here is a cat description')
  await page.click('button:has-text("Submit")')
  await page.click('button[aria-label="Delete card"]')
  await page.click('button:has-text("Confirm")')
  const element = await page.$('text=Super cat')
  expect(element).toBeNull()
})

test('should cancel delete cat', async ({ page }) => {
  await page.goto(URL)
  await page.click('text=Add')
  await page.fill('input[name="name"]', 'Super cat')
  await page.fill('textarea[name="bio"]', 'here is a cat description')
  await page.click('button:has-text("Submit")')
  await page.click('button[aria-label="Delete card"]')
  await page.click('button:has-text("Cancel")')
  const element = await page.$('text=Super cat')
  expect(element).toBeTruthy()
})

test('should show error message when name is empty', async ({ page }) => {
  await page.goto(URL)
  await page.click('text=Add')
  await page.click('button:has-text("Submit")')
  const element = await page.$('text=name is a required field')
  expect(element).toBeTruthy()
})

test('should filter cats by name', async ({ page }) => {
  await page.goto(URL)
  await page.click('text=Add')
  await page.fill('input[name="name"]', 'Super cat')
  await page.fill('textarea[name="bio"]', 'here is a cat description')
  await page.click('button:has-text("Submit")')
  await page.click('text=Add')
  await page.fill('input[name="name"]', 'Marvel')
  await page.fill('textarea[name="bio"]', 'Fluffy and cute')
  await page.click('button:has-text("Submit")')
  await page.fill('input[name="search"]', 'Super cat')
  const element = await page.$('text=Marvel')
  expect(element).toBeNull()
  const element2 = await page.$('text=Super cat')
  expect(element2).toBeTruthy()
})

test('should filter cats by bio and case insensitive', async ({ page }) => {
  await page.goto(URL)
  await page.click('text=Add')
  await page.fill('input[name="name"]', 'Super cat')
  await page.fill('textarea[name="bio"]', 'here is a cat description')
  await page.click('button:has-text("Submit")')
  await page.click('text=Add')
  await page.fill('input[name="name"]', 'Marvel')
  await page.fill('textarea[name="bio"]', 'Fluffy and cute')
  await page.click('button:has-text("Submit")')
  await page.fill('input[name="search"]', 'fluffy')
  const element = await page.$('text=Marvel')
  expect(element).toBeTruthy()
  const element2 = await page.$('text=Super cat')
  expect(element2).toBeNull()
})

test('should sort by name', async ({ page }) => {
  await page.goto(URL)
  await page.click('text=Add')
  await page.fill('input[name="name"]', 'Super cat')
  await page.fill('textarea[name="bio"]', 'here is a cat description')
  await page.click('button:has-text("Submit")')
  await page.click('text=Add')
  await page.fill('input[name="name"]', 'Marvel')
  await page.fill('textarea[name="bio"]', 'Fluffy and cute')
  await page.click('button:has-text("Submit")')
  await page.click('button:has-text("Name")')
  // click button by id sortButton
  await page.click('#sortButton')
  // get container by id listOfCats on a page
  const container = await page.$('#listOfCats')
  // expect container is not null
  expect(container).toBeTruthy()
  // get all children of container
  if (!container) throw new Error('container is null')
  const children = await container.$$(':scope > *')
  // get first child
  const firstChild = children[0]
  // get text of first child
  const text = await firstChild.innerText()
  expect(text).toContain('MARVEL')
})

test('open the card', async ({ page }) => {
  await page.goto(URL)
  await page.click('text=Add')
  await page.fill('input[name="name"]', 'Super cat')
  await page.fill('textarea[name="bio"]', 'here is a cat description')
  // fill gender
  await page.selectOption('select[id="gender"]', 'Female')
  await page.click('button:has-text("Submit")')
  // click on open butotn
  await page.click('button:has-text("Open")')
  const element = await page.$('text=here is a cat description')
  expect(element).toBeTruthy()
  const genderElement = await page.$('text=Female')
  expect(genderElement).toBeTruthy()
})
