type Admin = {
  name: string;
  privelleges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const el: ElevatedEmployee = {
  name: 'Max',
  privelleges: ['create-server'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(`Name: ${emp.name}`);
  if ('privelleges' in emp) console.log(`Privelleges: ${emp.privelleges}`);
  if ('startDate' in emp) console.log(`Start Date: ${emp.startDate}`);
}

printEmployeeInformation({
  name: 'Maaz',
  privelleges: ['dukan-daar'],
  startDate: new Date(),
});
