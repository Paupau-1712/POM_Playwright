import {test, expect } from '@playwright/test';
import {demoLoginpage} from "../pages/demo-login";
import {invalidCreds , LoginParams , validCreds} from "../testdata/Testdata";


test.describe('Demo-Login', () => {

    test.beforeEach(( async ({ page }) => {
        let login = new demoLoginpage(page)
        await login.gotologinsite()
        console.log('Before Each works for each test case')
    }));

    test.afterEach(( async ({ page }) => {
        let login = new demoLoginpage(page)
        await login.closebrowser()
        console.log('After Each works for each test case')
    }));

    test.afterAll(async () => {
        console.log('Done with test case');
        // ...
    });

    //Positive Test
    for (const validLogin of validCreds) {
        test(`Successful Login: with valid credentials ${validLogin.username} and ${validLogin.password} `, async ({ page }) => {
            const login = new demoLoginpage(page);
            await login.validate_successful_login(validLogin.username, validLogin.password);
            // Your assertions or other test logic for a successful login
        });
    }

    //Negative Test
    for (const invalidLogin of invalidCreds) {
        test(`Invalid Login: with invalid credentials ${invalidLogin.username} and ${invalidLogin.password}`, async ({ page }) => {
            const login = new demoLoginpage(page);
            await login.validate_invalid_login(invalidLogin.username,invalidLogin.password);
            // Your assertions or other test logic for an invalid login
        });
    }


    // Add more tests as needed
});