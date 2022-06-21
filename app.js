"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        /*   private id:string;
        private name: string;
       */ this.employee = [];
    }
    describe() {
        console.log('Department ' + this.name);
    }
    addEmployee(employee) {
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
