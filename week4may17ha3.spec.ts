import { test ,expect} from "@playwright/test";

test("Learn to handle windows", async ({ page,context}) => {


    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator('#username').fill('demosalesmanager')
    await page.locator('#password').fill('crmsfa')
    await page.locator('//input[@type="submit"]').click()
    await page.locator('//div[@id="label"]/a').click()
    await page.locator('//a[text()="Leads"]').click()
    await page.locator('//a[text()="Merge Leads"]').click()


  const [newPage] = await Promise.all([
  page.waitForEvent('popup'),      // Wait for the new window/tab to open
  page.locator('(//img[@alt="Lookup"])[1]').click() // The action that triggers the popup
]);

// 2. Wait for the new page to load fully
await newPage.waitForLoadState();

// 3. Perform actions on the new window
await newPage.locator('(//a[@class="linktext"])').first().click(); 


const [newPage1] = await Promise.all([
  page.waitForEvent('popup'),      // Wait for the new window/tab to open
  page.locator('(//img[@alt="Lookup"])[2]').click() // The action that triggers the popup
]);

// 2. Wait for the new page to load fully
await newPage1.waitForLoadState();

// 3. Perform actions on the new window
await newPage1.locator('(//div[@class="x-grid3-cell-inner x-grid3-col-partyId"]/a)[2]').click()
    await page.locator('//a[text()="Merge"]').click()
       page.on("dialog", async (alert) => { // playwrigt listener 

        console.log(`The type of alert is  ${alert.type()}`)  // Return the type of alert => simple, confirm, prompt

        console.log(`The message inside the alert is  ${alert.message()}`)

        //await alert.accept()

      })
       //await page.locator('//a[text()="Merge"]').click()
       const pageTitle= await page.title()
       expect(pageTitle).toBe('Merge Leads | opentaps CRM')
       console.log(pageTitle)
      })