class Department {
  /*   private id:string;
  private name: string;
 */ private employee: string[] = [];

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

const acc = new Department('1', 'IT');

acc.addEmployee('Max');
acc.addEmployee('Manu');
console.log(acc.name);
acc.printEmployeeInformation();
