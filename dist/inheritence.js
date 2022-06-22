"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employee = [];
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
//Extending Classes
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
const it = new ITDepartment('1', ['max', 'mannn']);
it.addEmployee('Max');
it.addEmployee('Manu');
console.log(it);
