import { faker } from '@faker-js/faker';

export interface EmployeeData {
  firstName: string;
  middleName: string;
  lastName: string;
  fullName: string;
  employeeId: string;
  username: string;
  password: string;
}

export class FakerData {
  
  static generateEmployee(): EmployeeData {
    const firstName = faker.person.firstName();
    const middleName = faker.person.firstName(); 
    const lastName = faker.person.lastName();
    const fullName = `${firstName} ${middleName} ${lastName}`;
    
    const username = faker.internet.username({ firstName, lastName });
    
    const password = faker.internet.password({ 
      length: 12, 
      memorable: false, 
      pattern: /[A-Za-z0-9]/ 
    }) + 'A1!';

    return {
      firstName,
      middleName,
      lastName,
      fullName,
      employeeId: faker.string.numeric({ length: 5 }),
      username,
      password
    };
  }
  
}