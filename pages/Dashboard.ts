import { Page, Locator, expect } from '@playwright/test';

export class DashboardPage {
  private page: Page;
  readonly headerTitle: Locator;

  readonly PIMLocator : Locator

  constructor(page: Page) 
  {
    this.page = page;
    this.headerTitle =  page.locator('h6:has-text("Dashboard")');
    this.PIMLocator = page.getByRole('link', { name: 'PIM' });
  }

  async TitleVerification()
  {
    await this.page.waitForLoadState('networkidle');
     await expect(this.headerTitle).toHaveText('Dashboard');
  }

  async NavigationToDashboard()
  {
    await this.page.goto('/', { waitUntil: 'commit' });
  }

  
}