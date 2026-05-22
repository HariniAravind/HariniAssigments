/// <reference types="node" />
import { test ,expect} from "@playwright/test";
import path from "path";

test("Learn to handle Alerts1", async ({ page }) => {


    await page.goto("https://login.salesforce.com/")
    await page.locator('#username').fill("dilipkumar.rajendran@testleaf.com")
    await page.locator('#password').fill("TestLeaf@2025")
    await page.locator('#Login').click()
    await page.locator('//div[@class="slds-icon-waffle"]').click()
    await page.locator('//button[text()="View All"]').click()
    await page.locator('//input[@placeholder="Search apps or items..."]').fill("Accounts")
await page.locator('//mark[text()="Accounts"]').click()
await page.locator('(//a[@class="forceActionLink"])[1]').click()
await page.locator('//input[@name="Name"]').fill("Harini")
//await page.locator('//button[@aria-label="Rating"]').click()
//await page.locator('(//span[text()="Warm"])[1]').click()
await page.locator('//button[@aria-label="Type"]').click()
await page.locator('(//span[text()="Prospect"])[1]').click()
await page.locator('//button[@aria-label="Industry"]').click()
await page.locator('(//span[text()="Banking"])[1]').click()
//await page.locator('//button[@aria-label="Ownership"]').click()
//await page.locator('(//span[text()="Public"])[1]').click()
await page.locator('//button[@name="SaveEdit"]').click()
const value=await page.locator('//lightning-formatted-text[@slot="primaryField"]').innerText()
expect(value).toBe("Harini")
const uploadFile=await page.locator('//span[@class="slds-file-selector__button slds-button slds-button_neutral"]')
uploadFile.setInputFiles(path.join(__dirname, '../Data/Absolute.png'))
await page.locator('//span[text()="Done"]').click()
const value2=await page.locator('//span[text()="1 file was added to the Account."]').innerText()
expect(value2).toBe("1 file was added to the Account.");

})