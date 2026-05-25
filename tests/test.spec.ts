
import { test, expect } from '../utils/fixtures';
import { ENV } from '../config/env.config';
import {EmployeeData, FakerData} from '../utils/Faker'


const randomEmployee = FakerData.generateEmployee();
test.describe('OrangeHRM Admin Functionality', () => 
{
     test.describe.configure({ mode: 'serial' });
     const randomEmployee = FakerData.generateEmployee();
     
     test('Navigate to dashboard', async ({ loginPage, dashboardPage}) => 
          {
               await dashboardPage.NavigationToDashboard();
               await expect(dashboardPage.headerTitle).toHaveText('Dashboard');
          });

     test('Dynamic Employee Creation Flow',async ({dashboardPage,pimPage,employeeDetails}) =>
     {
          await dashboardPage.NavigationToDashboard();
          await pimPage.NavigateToAddEmployee();

          //adding employee
          
          await pimPage.AddingEmployee(randomEmployee.firstName,randomEmployee.middleName,randomEmployee.lastName, randomEmployee.employeeId);
          await expect(pimPage.successMessage).toContainText('Success');

          //checkingdata in employee details page
          await expect(employeeDetails.FirstName).toHaveValue(randomEmployee.firstName);
          await expect(employeeDetails.MiddleName).toHaveValue(randomEmployee.middleName);
          await expect(employeeDetails.LastName).toHaveValue(randomEmployee.lastName);
          await expect(employeeDetails.Id).toHaveValue(randomEmployee.employeeId);

     });

     test('Employee Job Details Update',async({dashboardPage,pimPage,employeeDetails})=>
     {
          await dashboardPage.NavigationToDashboard();
          await pimPage.NavigateToEmployeeList();
          await pimPage.SearchEmployee(randomEmployee.firstName);
          await pimPage.navigateToEditEmployeeDetails();

          await employeeDetails.UpdatingDetails();
          //await expect(employeeDetails.successpopup).toContainText('Success');

          test('Admin User Management Flow', async({dashboardPage,admin})=>
          {
               await dashboardPage.NavigationToDashboard();
               await admin.navigateToAdduserpage();

               await admin.creatNewuser(randomEmployee.firstName, randomEmployee.username, randomEmployee.password);
          
          });
     });
     
     /*test('Recruitment Module Workflow', async({dashboardPage,recruitment})=>
     {
           await dashboardPage.NavigationToDashboard();
           await recruitment.navigateToAdduserpage();
           await recruitment.createnewVacancy(randomEmployee.firstName);

     })*/
     
});
     