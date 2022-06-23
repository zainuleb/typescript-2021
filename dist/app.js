"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employee = [];
        console.log(this.fiscalYear);
    }
    static describe() {
        console.log('Department ' + this.name);
        console.log('fiscalYear ' + this.fiscalYear);
    }
    addEmployee(employee) {
        this.employee.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employee.length);
        console.log(this.employee);
    }
}
Department.fiscalYear = 2020;
//Extending Classes
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
        this.lastAdmin = admins[0];
    }
    static createEmployee(name) {
        return { name: name };
    }
}
const emp1 = ITDepartment.createEmployee('Max');
console.log(emp1);
