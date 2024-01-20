import {test, expect } from '@playwright/test';
import {demoLoginpage} from "../pages/demo-login";
import {invalid_login_creds , LoginParams , valid_login_creds} from "../testdata/Testdata";


test.describe('Demo_Login', () => {

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

    //Positive Test for login
    for (const validLogin of valid_login_creds) {
        test(`Successful Login: with valid credentials ${validLogin.username} and ${validLogin.password} `, async ({ page }) => {
            const login = new demoLoginpage(page);
            await login.validate_successful_login(validLogin.username, validLogin.password);
            // Your assertions or other test logic for a successful login
            await login.assert_successful_login();
        });
    }

    //Negative Test for login
    for (const invalidLogin of invalid_login_creds) {
        test(`Invalid Login: with invalid credentials ${invalidLogin.username} and ${invalidLogin.password}`, async ({ page }) => {
            const login = new demoLoginpage(page);
            await login.validate_invalid_login(invalidLogin.username,invalidLogin.password);
            // Your assertions or other test logic for an invalid login
            await login.assert_invalid_login();
        });
    }


    // Add more tests as needed
});

test.describe('Orange_Admin_Login',()=>{

              });