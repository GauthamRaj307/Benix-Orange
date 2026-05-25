import { test as setup } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage'
import { ENV } from '../config/env.config';
import path from 'path';

const authFile = path.join(__dirname, `../.auth/user-${ENV.ENVIRONMENT}.json`);

setup('authenticate user and save session state', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.navigate();
  await loginPage.login(ENV.ADMIN_USER, ENV.ADMIN_PASS);
  
  // Wait for post-login dashboard loading to confirm authentication succeeded
  await page.waitForURL('**/dashboard/index');
  
  // Save the state to storage file
  await page.context().storageState({ path: authFile });
});