"use strict";
const el = {
    name: 'Max',
    privelleges: ['create-server'],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log(`Name: ${emp.name}`);
    if ('privelleges' in emp)
        console.log(`Privelleges: ${emp.privelleges}`);
    if ('startDate' in emp)
        console.log(`Start Date: ${emp.startDate}`);
}
printEmployeeInformation({
    name: 'Maaz',
    privelleges: ['dukan-daar'],
    startDate: new Date(),
});
