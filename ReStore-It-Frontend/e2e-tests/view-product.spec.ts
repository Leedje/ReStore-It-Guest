import { test, expect } from '@playwright/test';

test('The selected product should be viewed', async ({ page }) => {
  await page.goto('http://localhost:4200/');

  const backendResponse = page.waitForResponse((response) =>
     response.status() === 200
  );
  await page.locator('app-product-item').filter({ hasText: 'Vintage Nike Sneakers€189.00' }).locator('h5').click();

  const response = await backendResponse;
  const responseBody = await response.json();

  await expect(response.status()).toBe(200);
  await expect(page.locator('h3')).toMatchAriaSnapshot(`- strong: Vintage Nike Sneakers`);
  await expect(page.locator('h4')).toMatchAriaSnapshot(`- heading /€\\d+\\.\\d+/ [level=4]`);

  await expect(page.locator('app-guest-product-page')).toMatchAriaSnapshot(`- text: /EUR \\d+/`);
  await expect(page.locator('app-guest-product-page')).toMatchAriaSnapshot(`- paragraph: "-"`);

  const formattedPrice = `€${responseBody.price.toFixed(2)}`;
  await expect(page.locator('h4')).toHaveText(formattedPrice);

});
