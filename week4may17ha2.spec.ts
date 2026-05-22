import { test ,expect} from "@playwright/test";

test("Learn to handle Alerts1", async ({ page }) => {


    await page.goto("https://dev304842.service-now.com/login.do")
    await page.locator("#user_name").fill("admin")
    await page.locator("#user_password").fill("T3REAv8g@lo@")
     await page.locator("#sysverb_login").click()
     await page.locator('div[aria-label="All"]').click()
     await page.locator('#filter').fill("Service Catalog", { timeout: 10000 })
     await page.getByText("Service Catalog").nth(1).click({ timeout: 10000 })
     const frame1=await page.frameLocator('#gsft_main')
     await frame1.locator('//a[@aria-label="Mobiles. Cell phones to meet your business needs."]/h2').click()
     await frame1.locator('(//h3[@class="h2"]/strong)[1]').click()
await frame1.locator('(//label[@class="radio-label"])[2]').click()
await frame1.locator('[class="form-control cat_item_option "]').selectOption({ index: 1 })
const dropDownValue= await frame1.locator('//select[@class="form-control cat_item_option "]')
    const dropDownCount= await dropDownValue.count()
    console.log(dropDownCount)
    
    for(let i=0;i<dropDownCount;i++)
    {
      console.log(await dropDownValue.nth(i).innerText())
    }
//await expect(page.locator('(//label[@class="radio-label"])[7]')).toHaveValue("Starlight")
await frame1.locator('(//label[@class="radio-label"])[7]').click()
//await expect(page.locator('(//label[@class="radio-label"])[10]')).toHaveValue("256 GB [add £74.52]")
await frame1.locator('(//label[@class="radio-label"])[10]').click({ timeout: 10000 })
await frame1.locator('//button[@id="oi_order_now_button"]').click({ timeout: 10000 })
//const successMsg=await frame1.locator('//span[text()="Thank you, your request has been submitted"]').innerText()
//await expect(successMsg).toBe("Thank you, your request has been submitted")
const tilte=await page.title()
console.log(tilte)
const url= page.url()
console.log(url)


})
