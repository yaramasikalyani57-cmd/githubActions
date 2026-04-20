import { test, expect } from '@playwright/test';



test.describe('Validate Orange HRM Login functionality with SessionStorage', () => {

  test('Add Employee ', async ({ page }) => {

    await page.goto('/web/index.php/pim/addEmployee')
    await page.locator('//input[@name="firstName"]').fill("Raju")

    await page.locator('//input[@name="lastName"]').fill("G")

    await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').clear()

    await page.locator('//input[@class="oxd-input oxd-input--focus"]').fill("123iif756")

    await page.locator('//button[@type="submit"]').click()

    await expect(page.locator("//h6[text()='Personal Details']")).toBeVisible()

  })


  // test('Add Job title ', async ({ page }) => {

  //   await page.goto('/web/index.php/admin/saveJobTitle')
  //   await page.locator("(//label[normalize-space(text())='Job Title']/following::input)[1]").fill("QA Analyst 4");

  //   await page.locator('//textarea[@placeholder="Type description here"]').fill("Testing Actiities")

  //   await page.locator('//input[@type="file"]').setInputFiles('testdata/learn.jpg')

  //   await page.waitForTimeout(5000)

  //   await page.locator('//textarea[@placeholder="Add note"]').fill("Test notes ")

  //   await page.locator('//button[@type="submit"]').click()

  //   await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList')


  // })

  //   test("My Leave Page", async ({ page }) => {

  //     await page.goto('/web/index.php/leave/viewMyLeaveList')

  //     await page.waitForTimeout('3000')
  //   })

})