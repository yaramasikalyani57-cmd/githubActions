import { test, expect } from "@playwright/test";

test('Add sauce labs onsite to cart', async ({ page }) => {

    await page.goto("https://www.saucedemo.com/")
    await page.locator('//input[@placeholder="Username"]').fill('standard_user')
    await page.locator('//input[@placeholder="Password"]').fill('secret_sauce')
    await page.locator('//input[@type="submit"]').click()

    // const product = 'Sauce Labs Backpack'

    const products = await page.locator('//div[@class="inventory_item_name "]').allTextContents();
    console.log(products);

    for (let i = 0; i < products.length; i++) {

        if (products[i].toLowerCase() === 'sauce labs backpack') {
            await page.locator('.inventory_item').nth(i).locator('//button[@class="btn btn_primary btn_small btn_inventory "]').click()
            break;
        }
    }
    await expect(page.locator("#remove-sauce-labs-backpack")).toBeVisible();

})





