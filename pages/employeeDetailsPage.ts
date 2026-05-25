import { Page, Locator } from '@playwright/test';

export class EmployeeDetailsPage
{
  private page: Page;

  readonly FirstName : Locator;
  readonly MiddleName : Locator;
  readonly LastName : Locator;
  readonly Id : Locator;
  
  readonly JobTitle : Locator;
  readonly Status : Locator;
  readonly Category : Locator;
  readonly JoiningDater : Locator;

  readonly job : Locator;
  readonly sta : Locator;
  readonly Cat : Locator;
  readonly date :  Locator;
 
  readonly successpopup : Locator;


     constructor(page : Page)
     {
          this.page = page;
          this.FirstName =  page.getByRole('textbox', { name: 'First Name' });
          this.MiddleName =  page.getByRole('textbox', { name: 'Middle Name' });
          this.LastName =  page.getByRole('textbox', { name: 'Last Name' })
          this.Id = page.locator("(//input[@class='oxd-input oxd-input--active'])[2]");

          this.JoiningDater =  page.locator('.oxd-icon.bi-calendar');
          this.JobTitle =  page.locator("(//div[@class='oxd-select-text-input'][normalize-space()='-- Select --'])[1]");
          this.Status =   page.locator('div:nth-child(7) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon');            
          this.Category =   page.locator('div:nth-child(4) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon');

          this.job = page.getByRole('option', { name: 'Account Assistant' });
          this.date =  page.getByText('29');
          this.Cat = page.getByRole('option', { name: 'Craft Workers' });
          this.sta = page.getByRole('option', { name: 'Freelance' });

          this.successpopup = page.getByText('Successfully Updated', { exact: true });

     }


     async UpdatingDetails()
     {
          await this.JobTitle.click();
          await this.job.click();

          await this.JoiningDater.click();
          await this.date.click();

          await this.Status.click();
          await this.sta.click();

          await this.Category.click()
          await this.Cat.click();
          

     }

       
}