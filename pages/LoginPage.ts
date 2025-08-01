import { Page } from "@playwright/test";
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { loggerStep } from '../utils/logHelpers';


export class LoginPage {

    constructor(private page: Page) { }

    private get userNamefield() { return this.page.locator("input[name='username'][placeholder='Username']") }
    private get passwordField() { return this.page.locator("input[name='password'][placeholder='Password']") }
    private get loginButton() { return this.page.locator("button[type='submit']") }


    async visitLoginPage() {
        loggerStep('Acessing login page!!')
        await this.page.goto(process.env.HOMEPAGE_URL! + "/web/index.php/auth/login");
        await this.page.waitForLoadState("load");
    }

    private async fillLogin(login: string) {
        loggerStep('Fill in the login field with the user ' + login)
        await this.userNamefield.waitFor({ state: "visible" });
        await this.userNamefield.fill(login);
    }

    private async fillPassword(password: string) {
        loggerStep('Fill in the password')
        await this.passwordField.waitFor({ state: "visible" });
        await this.passwordField.fill(password);
    }

    private async clickOnLoginButton() {
        loggerStep('Clicking on login Button')
        await this.loginButton.waitFor({ state: "visible" });
        await this.loginButton.click();
    }

    async fillCredentialsAndConfirm(login: string, password: string) {
        await this.fillLogin(login)
        await this.fillPassword(password)
        await this.clickOnLoginButton();
    }

}