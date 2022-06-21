"use strict";
class Department {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log('Department ' + this.name);
    }
}
const acc = new Department('IT');
acc.describe();
const accCpy = { name: 'SEE', describe: acc.describe };
accCpy.describe();
