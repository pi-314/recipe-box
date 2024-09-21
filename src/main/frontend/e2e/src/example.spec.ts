import { test, expect } from '@playwright/test';

test('has title set correctly', {
  tag: '@example'
}, async ({ page }) => {
  await page.goto('/');

  // Expect the element marked with 'data-testid="pageTitle"' (s. app.component.html) to contain an expected string.
  expect(await page.getByTestId('pageTitle').innerText()).toBe('Recipe Box');
});
