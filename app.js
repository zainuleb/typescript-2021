//Return Number
function add(n1, n2) {
    return n1 + n2;
}
//Return add String
function addStr(n1, n2) {
    return n1 + n2;
}
var tempAdd;
tempAdd = add;
var tempAdd2;
tempAdd2 = add;
/* tempAdd2 = addStr; */ //Error Here
//Driver Codes
console.log(tempAdd(10, 20));
