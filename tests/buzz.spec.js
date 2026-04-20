import { test, expect } from '@playwright/test';

// import moment from 'moment';

// const date = moment().format("DD-MMM-YY");

// console.log(date)


test.beforeEach(async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator('//input[@name="username"]').fill("Admin")
    await page.locator('//input[@type="password"]').fill("admin123")
    await page.locator('//button[@type="submit"]').click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    await page.locator('//a[@href="/web/index.php/buzz/viewBuzz"]').click()//click on buzz
})

test("upload text", async ({ page }) => {
    // await page.locator('//a[@href="/web/index.php/buzz/viewBuzz"]').click()
    await page.locator('//textarea[@class="oxd-buzz-post-input"]').fill("hi friends")//in text box write text
    await page.locator('//button[@type="submit"]').click()//click on post

})
test("upload text and image ", async ({ page }) => {
    await page.locator('//span[@class="oxd-glass-button-icon oxd-glass-button-icon--cameraglass"]').click()//click on share photo
    await page.locator("(//div[@class='oxd-buzz-post oxd-buzz-post--active']//textarea)[2]").fill("upload iamge")// write text in text area
    await page.locator("//div[@class='orangehrm-photo-upload-area']//p[1]").click()// click on share image

    const filePath = 'testdata.json/Hello Friends Images.jpg';// upload file
    await page.locator('//input[@type="file"]').setInputFiles(filePath)
    await page.locator('//div[@class="oxd-form-actions orangehrm-buzz-post-modal-actions"]/button').click()// click on share
    await expect(page.locator("(//div[@class='orangehrm-buzz-post-body-picture'])[1]")).toBeVisible()// verify image is visible or not
})

test("upload text and video ", async ({ page }) => {
    await page.locator('//span[@class="oxd-glass-button-icon oxd-glass-button-icon--videoglass"]').click()// click on share video 
    await page.locator("(//textarea[@class='oxd-buzz-post-input'])[2]").fill("upload video")// text 

    await page.locator('//textarea[@placeholder="Paste Video URL"]').fill("https://www.youtube.com/watch?v=vib8f9PC6JI&t=1549s")// give url inside text area
    await page.locator('//div[@class="oxd-buzz-post-slot"]/button').click()// click on share
    await expect(page.locator('//div[@class="orangehrm-buzz-video"]')).toBeVisible()// verify i,mage is visible or not

})