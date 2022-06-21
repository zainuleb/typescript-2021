"use strict";
class Department {
    constructor(n) {
        this.employee = [];
        this.name = n;
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
const acc = new Department('IT');
acc.addEmployee('Max');
acc.addEmployee('Manu');
acc.printEmployeeInformation();
