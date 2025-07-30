import { expect, test } from '@playwright/test';
// ... existing code ...
test('user cannot log in with invalid email', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  await page.fill('input[type="text"]', 'wrong@example.com');
  await page.fill('input[type="password"]', 'admin');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL(/\/login/);
  // await expect(page.locator('text=Invalid credentials')).toBeVisible();
});

test('user cannot log in with invalid password', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  await page.fill('input[type="text"]', 'admin@example.com');
  await page.fill('input[type="password"]', 'wrongpassword');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL(/\/login/);
  // await expect(page.locator('text=Invalid credentials')).toBeVisible();
});

test('user cannot log in with empty email', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  await page.fill('input[type="password"]', 'admin');
  await page.fill('input[type="text"]', '');
  await page.click('button[type="submit"]');
  await expect(page.locator('text=Email is required')).toBeVisible();
});

test('user cannot log in with empty password', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  await page.fill('input[type="text"]', 'admin@example.com');
  await page.fill('input[type="password"]', '');
  await page.click('button[type="submit"]');
  await expect(page.locator('text=Password is required')).toBeVisible();
});

test('user cannot log in with both fields empty', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  await page.fill('input[type="text"]', '');
  await page.fill('input[type="password"]', '');
  await page.click('button[type="submit"]');
  await expect(page.locator('text=Email is required')).toBeVisible();
  await expect(page.locator('text=Password is required')).toBeVisible();
});

test('user cannot log in with invalid email format', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  await page.fill('input[type="text"]', 'not-an-email');
  await page.fill('input[type="password"]', 'admin');
  await page.click('button[type="submit"]');
  await expect(page.locator('text=Email is invalid')).toBeVisible();
});
