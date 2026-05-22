import { test ,expect} from "@playwright/test";
import credentials from "../Data/leaftaps.json"
test.describe("data parameterization1",async () => {
test("Learn data parameterization", async ({ page }) => {
   
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator('#username').fill(credentials[0].Username)
    await page.locator('#password').fill(credentials[0].Password)
    await page.locator('//input[@type="submit"]').click()
    await page.locator('//div[@id="label"]/a').click()
    await page.locator('//a[text()="Leads"]').click()
    await page.locator('//a[text()="Create Lead"]').click()
    await page.locator('(//input[@name="companyName"])[2]').fill(credentials[0].companyName)
    await page.locator('(//input[@name="firstName"])[3]').fill(credentials[0].firstName)
    await page.locator('(//input[@name="lastName"])[3]').fill(credentials[0].lastName)
    await page.selectOption('//select[@id="createLeadForm_dataSourceId"]',{label:credentials[0].dataSourceId})
     await page.selectOption('//select[@id="createLeadForm_marketingCampaignId"]',{value:credentials[0].marketingCampaignId})
     const dropDownValue=await page.locator('//select[@id="createLeadForm_marketingCampaignId"]/option')
     const dropdownCount=await dropDownValue.count()
     console.log(`The values in  Marketing Campaign dropdown are`);
     
     for(let i=0;i<dropdownCount;i++)
     {
console.log(await dropDownValue.nth(i).innerText())

     }
     await page.selectOption('//select[@id="createLeadForm_industryEnumId"]',{index: 7})
     await page.selectOption('//select[@id="createLeadForm_currencyUomId"]',{label:credentials[0].currencyUomId})
     await page.selectOption('//select[@id="createLeadForm_generalCountryGeoId"]',{label:credentials[0].generalCountryGeoId})
     await page.selectOption('//select[@id="createLeadForm_generalStateProvinceGeoId"]',{label:credentials[0].generalStateProvinceGeoId})
     const dropDownValue1=await page.locator('//select[@id="createLeadForm_generalStateProvinceGeoId"]/option')
     const dropdownCount1=await dropDownValue1.count()
     console.log(`The values in  state dropdown are`);
     
     for(let j=0;j<dropdownCount1;j++)
     {
console.log(await dropDownValue1.nth(j).innerText())

     }
     })
    })