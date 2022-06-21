"use strict";
class Department {
    constructor(name) {
        this.name = name;
    }
    describe() {
        console.log('Department ' + this.name);
    }
}
const acc = new Department('IT');
acc.describe();
const accCpy = { describe: acc.describe };
accCpy.describe();
