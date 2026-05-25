import { Page, Locator, expect } from '@playwright/test';


export class Recruitment 
{
  private page: Page;
  readonly recruitmentLink : Locator;
  readonly vacancyLink  : Locator;
  readonly addNewVacancyButton : Locator;

  readonly vacancyNameTextField : Locator;
  readonly jobTitleSelector : Locator;
  readonly hiringManager : Locator;
  readonly noOfPositionsTextField  :Locator;
  readonly SaveButton : Locator;
 
  constructor(page: Page) 
  {
    this.page = page;
    this.recruitmentLink = page.locator('span').filter({ hasText: 'Recruitment' }).first();
    this.vacancyLink = page.getByText('Vacancies', { exact: true });
    this.addNewVacancyButton = page.getByRole('button', { name: 'Add' });

    this.vacancyNameTextField =  page.getByRole('textbox').nth(1);
    this.jobTitleSelector = page.getByText('-- Select --');
    this.hiringManager = page.getByRole('textbox', { name: 'Type for hints...' });
     this.noOfPositionsTextField = page.getByRole('textbox').nth(4)
     this.SaveButton = page.getByRole('button', { name: 'Save' });
  }

 async navigateToAdduserpage()
 {
  await this.recruitmentLink.click();
  
 }

 async createnewVacancy(name : string) : Promise<void>
 {
     await this.vacancyLink.click();
     await this.addNewVacancyButton.click();

     await this.vacancyNameTextField.fill(name);
     await this.jobTitleSelector.click();
     await this.page.getByText('Account Assistant').click();

     await this.hiringManager.fill('tes');
     await this.page.getByRole('option', { name: 'test A B' }).click();

     await this.noOfPositionsTextField.fill('1');

     await this.SaveButton.click();

 }


 

 
}