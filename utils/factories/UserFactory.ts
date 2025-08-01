import { faker } from '@faker-js/faker';
import { NewCandidateDataInterface  } from '../../testModels/NewCandidateDataInterface'

export function generateNewCandidateData(): NewCandidateDataInterface  {
  return {
    firstName: faker.person.firstName(),
    middleName: faker.person.middleName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email()
  };
}