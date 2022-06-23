class Department {
  private employee: string[] = [];
  static fiscalYear = 2020;

  constructor(private id: string, public name: string) {
    console.log(this.fiscalYear);
  }

  static describe(this: Department) {
    console.log('Department ' + this.name);
    console.log('fiscalYear ' + this.fiscalYear);
  }

  addEmployee(employee: string) {
    this.employee.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employee.length);
    console.log(this.employee);
  }
}

//Extending Classes
class ITDepartment extends Department {
  private lastAdmin: string;

  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
    this.lastAdmin = admins[0];
  }

  static createEmployee(name: string) {
    return { name: name };
  }
}

const emp1 = ITDepartment.createEmployee('Max');
console.log(emp1);
