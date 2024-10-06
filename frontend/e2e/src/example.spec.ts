import { test, expect } from '@playwright/test';

test('has title set correctly', {
  tag: ['@example', '@firstSteps'],
  annotation: [
    {
      type: 'play around with',
      description: 'https://playwright.dev/docs/intro',
    }
  ]
}, async ({ page }) => {
  await page.goto('/');

  // Expect a title to contain a substring.
  await expect(page.getByTestId('pageTitle')).toHaveText('Recipe Box');
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
