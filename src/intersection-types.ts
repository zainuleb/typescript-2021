interface Admin {
  name: string;
  privilege: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

interface ElevatedEmployee extends Employee, Admin {}

const e1: ElevatedEmployee = {
  name: 'Max',
  privilege: ['create-server', 'delete-server'],
  startDate: new Date(),
};
