import {test,chromium,firefox} from "@playwright/test"
import { channel } from "node:diagnostics_channel"



test("Test to Launch a Browser", async () =>{ // page fixture


const browser = await chromium.launch({headless:false,channel:"msedge"}) //=> Step1
const context = await browser.newContext()// => Step2
const page = await context.newPage() // Step 3
await page.goto("https://www.redbus.in")
await page.waitForTimeout(10000)         //test purpose
const title = await page.title();
console.log(`The page title is: ${title}`);
const url = await page.url();
console.log(`The page url is: ${url}`);
const browser1 = await firefox.launch({headless:false})
const context1 = await browser1.newContext()// => Step2
const page1 = await context1.newPage()
await page1.goto("https://www.flipkart.in")
await page1.waitForTimeout(10000)     //test purpose
const title1 = await page1.title();
console.log(`The page title is: ${title1}`);
const url1 = await page1.url();
console.log(`The page url is: ${url1}`);



})