class Department {
  name: string;
  employee: string[] = [];
  constructor(n: string) {
    this.name = n;
  }

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

const acc = new Department('IT');

acc.addEmployee('Max');
acc.addEmployee('Manu');

acc.printEmployeeInformation();
