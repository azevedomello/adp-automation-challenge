import { expect, Page } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { loggerStep } from "../utils/logHelpers";
import { NewCandidateDataInterface } from "../testModels/NewCandidateDataInterface";
import { generateNewCandidateData } from "../utils/factories/UserFactory";


export class CandidatePage {
    private candidateData: NewCandidateDataInterface | null = null;

    constructor(private page: Page) {
        this.candidateData = generateNewCandidateData();
    }

    private get firstNamefield() { return this.page.locator("input[name='firstName'][placeholder='First Name']") }
    private get lastNamefield() { return this.page.locator("input[name='lastName'][placeholder='Last Name']") }
    private get emailfield() { return this.page.locator("//label[contains(text(), 'Email')]/ancestor::div[1]/following-sibling::div[1]//input") }
    private get saveButton() { return this.page.locator("button[type='submit']") }


    async generateCandidateData() {
        this.candidateData = generateNewCandidateData();
    }

    async fillNameField() {
        const firstName = this.candidateData!.firstName
        loggerStep('Fill in the first Name field with: ' + firstName)
        await this.firstNamefield.waitFor({ state: "visible" });
        await this.firstNamefield.fill(firstName);
    }

    async fillLastNameField() {
        const lastName = this.candidateData!.lastName
        loggerStep('Fill in the first Name field with: ' + lastName)
        await this.lastNamefield.waitFor({ state: "visible" });
        await this.lastNamefield.fill(lastName);
    }

    async fillEmail() {
        const email = this.candidateData!.email;
        loggerStep('Fill in the password')
        await this.emailfield.waitFor({ state: "visible" });
        await this.emailfield.fill(email);
    }

    async clickOnSaveButton() {
        loggerStep('Click on the save Button')
        await this.saveButton.waitFor({ state: "visible" });
        await this.saveButton.click();
    }

    async fillCanditadeData() {
        await this.fillNameField();
        await this.fillLastNameField();
        await this.fillEmail();
        await this.clickOnSaveButton();
    }

    getCandidateData() {
        return this.candidateData!;
    }

}