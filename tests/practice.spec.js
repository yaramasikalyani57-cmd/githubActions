import { test, expect } from "@playwright/test";

test("login the url", async ({ page }) => {

    await page.goto("https://in.indeed.com/?r=us")
    await page.locator('//a[@id="FindJobs"]').click()
    await page.locator('//input[@id="text-input-what"]').fill("playwright jobs")
    await page.locator('//input[@value="Bengaluru, Karnataka"]').fill("Bengaluru")
    await page.locator('//button[@type="submit"]').click()
    await expect(page).toHaveURL("('https://in.indeed.com/jobs?q=playwright+jobs&l=Bengaluru%2C+Karnataka&from=searchOnHP&vjk=96b190377894bbd9')")

})