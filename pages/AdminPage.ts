import { Page, Locator, expect } from '@playwright/test';


export class AdminPage 
{
  private page: Page;
  readonly AdminpageLink : Locator;
  readonly AddSystemUserButton : Locator;


  readonly roleSelector : Locator;
  readonly employeeNametextbox : Locator;
  readonly statusSelector : Locator;
  readonly userNametextbox : Locator;
  readonly passwordTextbox : Locator;
  readonly confirmPasswordTextbox : Locator;

  readonly role : Locator;
  readonly status : Locator;

  readonly Savebutton : Locator;

  constructor(page: Page) 
  {
    this.page = page;
    this.AdminpageLink = page.locator('span').filter({ hasText: 'Admin' }).first();
    this.AddSystemUserButton = page.getByRole('button', { name: 'Add' });

    this.roleSelector = page.locator('div.oxd-select-text.oxd-select-text--active').locator('div').nth(0);
    this.statusSelector = page.locator('div.oxd-select-text.oxd-select-text--active').locator('div').nth(2);
    this.employeeNametextbox = page.getByRole('textbox', { name: 'Type for hints...' });
    this.userNametextbox = page.getByRole('textbox').nth(2);
    this.passwordTextbox = page.getByRole('textbox').nth(3);
    this.confirmPasswordTextbox = page.getByRole('textbox').nth(4);

    this.role = page.getByRole('option', { name: 'ESS' });
    this.status = page.getByRole('option', { name: 'Enabled' });

    this.Savebutton = page.getByRole('button', { name: 'Save' });

  }

 async navigateToAdduserpage()
 {
  await this.AdminpageLink.click();
  
 }



 async creatNewuser(name: string, username : string, password : string) : Promise<void>
 {
  await this.AddSystemUserButton.click();

  await this.roleSelector.click();
  await this.role.click();

  await this.statusSelector.click();
  await this.status.click();

  await this.employeeNametextbox.fill(name);
  await this.page.getByRole('option', { name: name }).click();

  await this.userNametextbox.fill(username);
  await this.passwordTextbox.fill(password);
  await this.confirmPasswordTextbox.fill(password);
  await this.page.pause()
  await this.Savebutton.click();

 }
}