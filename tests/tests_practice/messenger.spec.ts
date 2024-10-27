import {test, expect } from '@playwright/test';
import {messengerLoginpage} from "../pages/messenger-login";

test.describe('Messenger_Login', () => {

    test.beforeEach(( async ({ page }) => {
        let login: messengerLoginpage = new messengerLoginpage(page)
        await login.gotologinsite()
    }));
});