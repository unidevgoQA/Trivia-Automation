import test, { expect } from "@fixtures/basePages";
import * as data from "@testData/login.cred.json"
import Env from "@utils/environment";
import { readFileSync } from 'fs'



test("004M-000 | Select All The Menu Ready For UI Varification", async ({ loginPage, functions, menuPage, page, }, testInfo) => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        await menuPage.clickHomeAvater();
        await menuPage.mainMenuBtn();
        //Click on the menu page
        await menuPage.clickMenuPage()
        
        await menuPage.deleteUploadedFont()
        await functions.fontUploadFunction()
        await menuPage.clickToUploadFont()
        await menuPage.verifyFontUploadedSuccessfully()        

        await menuPage.clickBackgroundColorInputField()
        await menuPage.inputBackgroundColor()
        await menuPage.clickColorPickerWindowSaveBtn()

        await menuPage.clickTextColorInputField()
        await menuPage.inputTextColor()
        await menuPage.clickColorPickerWindowSaveBtn()


        await menuPage.clickActiveBackgroundColorInputField()
        await menuPage.inputActiveBackgroundColor()
        await menuPage.clickColorPickerWindowSaveBtn()


        await menuPage.clickActiveTextColorInputField()
        await menuPage.inputActiveTextColor()
        await menuPage.clickColorPickerWindowSaveBtn()


        await menuPage.selectBottomAlignmentMenuBar()

})




