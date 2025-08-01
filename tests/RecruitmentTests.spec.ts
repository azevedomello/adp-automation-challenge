import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { MainPage } from '../pages/MainPage';
import { RecruitmentPage } from '../pages/RecruitmentPage';
import { CandidatePage } from '../pages/CandidatePage';

test('Validate we are able to create a new candidate successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const mainPage = new MainPage(page);
  const recruitmentPage = new RecruitmentPage(page);
  const candidatePage = new CandidatePage(page);
 
  await loginPage.visitLoginPage();
  await loginPage.fillCredentialsAndConfirm("Admin", "admin123");
  await mainPage.clickOnNavSideMenuOption("Recruitment");
  await recruitmentPage.clickOnAddCanditateButton();
  await candidatePage.fillCanditadeData();
  
  const candidateData = candidatePage.getCandidateData();
  await recruitmentPage.validateCandidateSuccessfullyCreated(candidateData.firstName, candidateData.lastName);
});
