class Department {
  private employee: string[] = [];

  constructor(private id: string, public name: string) {}

  describe(this: Department) {
    console.log('Department ' + this.name);
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
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  addEmployee(employee: string) {
    this.employee.push(employee);
  } // Overriding the addEmployee method
}

const it = new ITDepartment('1', ['max', 'mannn']);

it.addEmployee('Max');
it.addEmployee('Manu');

console.log(it);
