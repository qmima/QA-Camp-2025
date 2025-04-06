import { Page, expect } from '@playwright/test';

export class AutomationTestStore{
    constructor(private page: Page) {}

    async goto(){
        await this.page.goto('https://automationteststore.com/');
    } 

    async toHaveTitle(){
        await expect(this.page).toHaveTitle(/A place to practice your automation skills!/);
    }

    async loginRegister(){
        this.page.getByText('Login or register').click();
    }

    async toHaveUrl(){
        await expect(this.page).toHaveURL('https://automationteststore.com/index.php?rt=account/login');
    }
/*
    async toBeVisible(){
        await expect(this.loginRegister()).toBeVisible();
    }
*/
}