'use strict';
var Department = (function () {
    function Department(n) {
        this.name = n;
    }
    return Department;
})();
var acc = new Department('Accounting');
console.log(acc.name);
