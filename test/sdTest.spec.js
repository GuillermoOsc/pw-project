const { expect, test } = require('@playwright/test');
const { chromium } = require('playwright');
const dotenv = require('dotenv');
const WorkFlowPage = require('../pages/workFlowPage');
const { URLS, CREDENTIALS } = require('../data/basePage');

dotenv.config();

test.describe('SauceDemo Tests', () => {
  let browser;
  let context;
  let page;
  let saucedemoPage;

  test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    saucedemoPage = new WorkFlowPage(page);
  });

  test.afterAll(async () => {
    await context.close();
  });

  test('should login successfully', async () => {
    await page.goto('https://www.saucedemo.com/');
    await saucedemoPage.login(CREDENTIALS.DEMOUSER, CREDENTIALS.DEMOPASS);

    const title = await page.title();
    expect(title).toBe('Swag Labs');
  });

  test('should select a product and add it to the cart', async () => {
    await saucedemoPage.selectProductAndAddToCart();

    const cartItemCount = await page.$eval('.shopping_cart_badge', (element) => element.textContent);
    expect(cartItemCount).toBe('1');
  });

  test('should go to the cart', async () => {
    await saucedemoPage.goToCart();

    const title = await page.title();
    expect(title).toBe('Swag Labs');
  });

  test('should complete the checkout process', async () => {
    await saucedemoPage.checkout();
    await saucedemoPage.fillCheckoutForm('Luis', 'García', '5090');
    await saucedemoPage.confirmPurchase();

    const confirmationMessage = await page.$eval('.complete-header', (element) => element.textContent);
    expect(confirmationMessage).toBe('Thank you for your order!');
  });
});
