import LoginPage from "@pages/Login.page";
import { test as baseTest } from "@playwright/test";
import menuPage from "@pages/menu.page";
import functions from "@testData/func";


const test = baseTest.extend<{
    loginPage: LoginPage;
    menuPage: menuPage;
    functions: functions;
   



}>({
    functions: async ({ page }, use) => {
        await use(new functions(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },  

    menuPage: async ({ page }, use) => {
        await use(new menuPage(page));
    },
    
    
    
})
export default test;
export const expect = test.expect;

