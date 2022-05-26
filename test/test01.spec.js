const { test, expect } = require('@playwright/test');

const URL = 'http://localhost:5500/index.html';

test('only valid email addresses can be submitted', async ({ page }) => {
  await page.goto(URL);

  const submitBtn = page.locator('text=Submit');

  await page.fill('[data-testid="email-input"]', 'asd@asd.com');

  await expect(submitBtn).toBeEnabled();
});
