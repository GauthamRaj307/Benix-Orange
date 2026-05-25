import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/Dashboard';
import { PimPage } from '../pages/PimPage';
import {EmployeeDetailsPage} from '../pages/employeeDetailsPage';
import {AdminPage} from '../pages/AdminPage';
import { Recruitment } from '../pages/RecruitmentPage';




type MyFixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  pimPage : PimPage;
  employeeDetails : EmployeeDetailsPage;
  admin : AdminPage;
  recruitment : Recruitment;
};


export const test = baseTest.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    // Setup phase (runs before each test that uses this fixture)
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  dashboardPage: async ({ page }, use) => {
    const dashboardPage = new DashboardPage(page);
    await use(dashboardPage);
  },
  
  pimPage: async ({ page }, use) => {
    const pimPage = new PimPage(page);
    await use(pimPage);
  },

  employeeDetails : async ({page},use)=>
  {
    const employeeDetails = new EmployeeDetailsPage(page);
    await use(employeeDetails);
  },

  admin : async ({page},use)=>
  {
    const admin = new AdminPage(page);
    await use(admin);
  },

recruitment : async ({page},use)=>
  {
    const recruitment = new Recruitment(page);
    await use(recruitment);
  }

});

export { expect } from '@playwright/test';