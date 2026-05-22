import { test ,expect} from "@playwright/test";

test("Learn to handle Alerts1", async ({ page }) => {


    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");
    const frame1= await page.frameLocator('[id="iframeResult"]')
     page.on("dialog", async (alert) => { // playwrigt listener 

        console.log(`The type of alert is  ${alert.type()}`)  // Return the type of alert => simple, confirm, prompt

        console.log(`The message inside the alert is  ${alert.message()}`)

        alert.accept()
        expect(alert.message()).toBe("Press a button!")
   

    })
    await frame1.locator('//button[text()="Try it"]').click()
    
    })
