import { Page, Locator, expect } from '@playwright/test';
import { promises } from 'node:dns';


export class PimPage 
{
  private page: Page;
  readonly headerTitle : Locator;
  readonly AddEmployeeLink : Locator;
  readonly PIMLocator : Locator;

  readonly EmployeeFirstName : Locator;
  readonly EmployeeMiddleName : Locator;
  readonly EmployeeLastName : Locator;
  readonly saveButton : Locator;
  readonly successMessage : Locator;
  readonly EmployeeId : Locator;

  readonly EmployeeListURL : Locator;
  readonly searchfield : Locator;
  readonly searchButton : Locator;
  readonly searchResultEditButton : Locator;

  readonly JobLink : Locator;

  constructor(page: Page) 
  {
    this.page = page;
    this.headerTitle =  page.locator('h6:has-text("PIM")');
    this.AddEmployeeLink =  page.getByRole('link', { name: 'Add Employee' })
    this.PIMLocator =  page.getByRole('link', { name: 'PIM' });
    this.EmployeeFirstName =  page.getByRole('textbox', { name: 'First Name' });
    this.EmployeeMiddleName = page.getByRole('textbox', { name: 'Middle Name' });
    this.EmployeeLastName = page.getByRole('textbox', { name: 'Last Name' });
    this.EmployeeId = page.locator("(//input[@class='oxd-input oxd-input--active'])[2]");
    this.saveButton =  page.getByRole('button', { name: 'Save' });
    this.successMessage =  page.locator('div.oxd-toast.oxd-toast--success.oxd-toast-container--toast');

    this.EmployeeListURL =  page.getByRole('link', { name: 'Employee List' });
    this.searchfield =   page.locator("(//input[@placeholder='Type for hints...'])[1]");
    this.searchButton =  page.getByRole('button', { name: 'Search' })
    this.searchResultEditButton = page.locator("(//button[@type='button'])[6]");

    this.JobLink =  page.getByRole('link', { name: 'Job' });
  }

  async NavigateToAddEmployee()
  {
     await this.PIMLocator.click();
     await this.AddEmployeeLink.click();
  }

  async AddingEmployee(firstName: string, middleName : string, lastnmame : string, id : string ) : Promise<void> 
  {
    
    await this.EmployeeFirstName.fill(firstName);
    await this.EmployeeMiddleName.fill(middleName);
    await this.EmployeeLastName.fill(lastnmame);
    await this.EmployeeId.fill(id);
    await this.saveButton.click();

  }

  async NavigateToEmployeeList()
  {
    await this.PIMLocator.click();
    await this.EmployeeListURL.click();
  }

  async SearchEmployee(firstname : string) : Promise<void>
  {
    await this.searchfield.fill(firstname);
    await this.searchButton.click();
    
  }

  async navigateToEditEmployeeDetails()
  {
    await this.searchResultEditButton.click();
    await this.JobLink.click();
  }
}