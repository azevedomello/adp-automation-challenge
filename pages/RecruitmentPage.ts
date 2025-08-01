import { expect, Page } from "@playwright/test";
import { loggerStep } from "../utils/logHelpers";

export class RecruitmentPage {
    constructor(private page: Page) { }

    private get addCandidateButton() { return this.page.getByRole('button', { name: 'Add' }) };
    private get candidateApplicationStageTitle() {return this.page.locator("h6.oxd-text.oxd-text--h6.orangehrm-main-title", {hasText: "Application Stage",})};
    private candidateFullNameDisplayed(fullName: string) { return this.page.getByText(fullName, { exact: true });}
    
    async clickOnAddCanditateButton() {
        loggerStep("Clicking in Add to create a new candidate register");
        await this.addCandidateButton.waitFor({ state: "visible" });
        await this.addCandidateButton.click();
        await this.page.waitForLoadState("load");
    }

    async validateCandidateSuccessfullyCreated(firstName: string, lastName: string) {
        loggerStep("Validating candidate creation");
        await this.candidateApplicationStageTitle.waitFor({ state: "visible" });
        const title = await this.candidateApplicationStageTitle.textContent();
        loggerStep("title"+ title);
        expect(title?.trim()).toBe("Application Stage");
        const expectedName = `${firstName} ${lastName}`;
        const displayedName = await this.candidateFullNameDisplayed(expectedName).textContent();
        expect(displayedName?.replace(/\s+/g, ' ').trim()).toBe(expectedName.replace(/\s+/g, ' ').trim());
    }
}