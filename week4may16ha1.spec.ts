/// <reference types="node" />
import { test ,expect} from "@playwright/test";
import path from "path";

test("Learn to ulpoad files", async ({ page }) => {


    await page.goto("https://the-internet.herokuapp.com/upload")
    const uploadFileNew = page.locator('//input[@id="file-upload"]'); // reference of the locator to upload/ inject the file to the locator
   await uploadFileNew.setInputFiles(path.join(__dirname, '../Data/Absolute.png'));
    //const uploadFileNew1 = page.locator('//input[@id="drag-drop-upload"]'); // reference of the locator to upload/ inject the file to the locator
  // await uploadFileNew1.setInputFiles(path.join(__dirname, '../Data/primg2.jpeg'));
  const filePromise = page.waitForEvent("filechooser"); // filePromise is a variable that holds an unresolved promise
  
  
      await page.locator('div[id="drag-drop-upload"]').click();
  
  
      const fileUpload = await filePromise
  
  
      await fileUpload.setFiles([path.join(__dirname,"../Data/primg1.jpeg"),path.join(__dirname,"../Data/primg2.jpeg")]);
      const input=await page.locator('(//div[@class="dz-filename"]/span)[2]').innerText()
      const input1=await page.locator('(//div[@class="dz-filename"]/span)[1]').innerText()
  
expect(input).toBe("primg2.jpeg")
expect(input1).toBe("primg1.jpeg")

})
test.only("Learn to download files", async ({ page }) => {


    await page.goto("https://the-internet.herokuapp.com/download")

    const filePromise = page.waitForEvent("download") // Here we are asking playwright to listen to the downloaded file action


    await page.locator('//a[text()="inputdata.json"]').click();


    const fDown = await filePromise 
    await fDown.saveAs(path.join(__dirname,`../Data/Absolute1.png`))
    
    })