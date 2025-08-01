import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { MainPage } from '../pages/MainPage';

test('Validate we are successfuly login and openning the dashboard page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const mainPage = new MainPage(page);

  await loginPage.visitLoginPage();
  await loginPage.fillCredentialsAndConfirm("Admin", "admin123");
  await mainPage.validateCurrentPageTitle("Dashboard");
  await mainPage.validateSelectedNavItem("Dashboard");
});