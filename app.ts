//Return Number
function add(n1: number, n2: number): number {
  return n1 + n2;
}

//Return add String
function addStr(n1: string, n2: string): string {
  return n1 + n2;
}

let tempAdd: Function;
tempAdd = add;

let tempAdd2: (n1: number, n2: number) => number;
tempAdd2 = add;
/* tempAdd2 = addStr; */ //Error Here

//Driver Codes
console.log(tempAdd(10, 20));
