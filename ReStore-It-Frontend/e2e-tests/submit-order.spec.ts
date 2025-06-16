import { test, expect } from '@playwright/test';


test('Submit order: test should verify that the order was made with confirmation', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByText('Fuffly hat').click();
  await page.getByRole('button', { name: ' Add to Cart' }).click();
  await page.getByRole('link', { name: 'Home', exact: true }).click();
  await page.locator('app-product-item').filter({ hasText: 'Vintage Nike Sneakers€1.00' }).locator('button').click();
  await page.locator('app-product-item').filter({ hasText: 'Trendy Block glasses€3.98 Add' }).locator('button').click();
  await page.locator('app-product-item').filter({ hasText: 'Mini skirt€12.00 Add to Cart' }).locator('button').click();
  await page.getByRole('button', { name: '' }).locator('a').click();
  await page.getByRole('row', { name: 'Fuffly hat Fuffly hat €12.00 ' }).getByRole('button').click();
  await page.getByRole('button', { name: 'Proceed to Checkout' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('First Name');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Last Name');
  await page.getByRole('textbox', { name: 'Phone Number' }).click();
  await page.getByRole('textbox', { name: 'Phone Number' }).fill('12345678');
  await page.getByText('EmailPlease enter a valid').click();
  await page.getByRole('textbox', { name: 'Email' }).fill('example@gmail.com');
  await page.getByRole('textbox', { name: 'Shipping Address' }).click();
  await page.getByRole('textbox', { name: 'Shipping Address' }).fill('shipping avenue, 2173GH, Country');
  await page.getByLabel('Payment Method').selectOption('credit-card');


  const responsePromise = page.waitForResponse((response) =>
    response.url().includes('http://localhost:8080/orders/submit') && response.status() === 201
  );
  await page.getByRole('button', { name: 'Complete Order' }).click();

  await expect(page.getByRole('heading')).toMatchAriaSnapshot(`- heading "Your Order Has Been Placed!" [level=3]`);

  const response = await responsePromise;
  const responseBody = await response.json();

  await expect(response.status()).toBe(201);

  const uiOrderIdText = await page.locator('.card-body p:has(strong)').innerText();
  const uiOrderId = uiOrderIdText.replace('Order ID: ', '').trim();

  await expect(uiOrderId).toEqual(responseBody);
});



