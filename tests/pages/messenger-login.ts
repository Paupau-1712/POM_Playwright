import {expect , type Locator , type Page , selectors} from '@playwright/test';

export class messengerLoginpage {
    readonly page: Page;
    readonly messengerlink: Locator
    readonly username: Locator
    readonly password: Locator
    readonly login_button: Locator

    constructor(page: Page) {
        this.page = page;
        this.messengerlink = page.getByRole('heading', { name: 'Connect with your favourite people' });
        this.username = page.getByPlaceholder('Email or phone number');
        this.password = page.getByPlaceholder('Password');
        this.login_button =page.getByRole('button', { name: 'Log in' })
    }

    async gotologinsite() {
        await this.page.goto('https://www.messenger.com/login/');
    }


}