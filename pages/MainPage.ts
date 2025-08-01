import { expect, Page } from "@playwright/test";
import { loggerStep } from "../utils/logHelpers";


export class MainPage {
    constructor(private page: Page) { }

    get itemsNavSidePanel() { return this.page.locator('ul.oxd-main-menu li.oxd-main-menu-item-wrapper') }
    get mainPageTitle() { return this.page.locator(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module") }

    async getMainPageTitleLabel() {
        loggerStep("Getting the title of the page");
        let title = await this.mainPageTitle.textContent();
        loggerStep("The title of the page is: " + title);
        return title;
    }
    async clickOnNavSideMenuOption(desiredItem: string) {
        loggerStep('Clicking in the option: ' + desiredItem + " in the Nav side Menu ")
        const allSidePanelLocators = this.itemsNavSidePanel;
        const desiredLocator = allSidePanelLocators.filter({ hasText: desiredItem }).first();
        await desiredLocator.waitFor({ state: "visible" });
        await desiredLocator.click();
    }

    private async getActiveLocatorSelectedInNavSideMenu() {
        loggerStep("Getting the Locator actived in Nav Menu");
        const allSidePanelLocators = this.itemsNavSidePanel;
        const desiredLocator = allSidePanelLocators.filter({ has: this.page.locator('a.active') }).first();
        return desiredLocator;
    }

    async getSelectedNavSideMenuItemLabel() {
        loggerStep("Getting the Selected Nav Side Menu Item Label");
        const selectedItem = await this.getActiveLocatorSelectedInNavSideMenu();
        const itemLabel = await selectedItem.locator('span').textContent();
        const label = itemLabel?.trim() || '';
        loggerStep("The selected item there is: " + label);
        return label
    }

    async goToRecruitmentPage(desiredItem = "Recruitment") {
        loggerStep("Going to Recruitment Page...");
        this.clickOnNavSideMenuOption(desiredItem);
        await this.page.waitForLoadState("load");
    }

    async validateSelectedNavItem(expectedItem: string) {
        const currentSelectedItem = await this.getSelectedNavSideMenuItemLabel();
        loggerStep("Comparing if the expected selected menu: " + currentSelectedItem + " is the same as the one selected: " + currentSelectedItem);
        expect(currentSelectedItem?.toLowerCase()).toBe(expectedItem.toLowerCase());
    }

    async validateCurrentPageTitle(expectedTitle: string) {
        const currentMainPageTitle = await this.getMainPageTitleLabel();
        loggerStep("Comparing if the expected selected menu: " + expectedTitle + " is the same as the one selected: " + currentMainPageTitle);
        expect(currentMainPageTitle?.toLowerCase()).toBe(expectedTitle.toLowerCase());
    }

}