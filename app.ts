class Department {
  name: string;
  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log('Department ' + this.name);
  }
}

const acc = new Department('IT');
acc.describe();
const accCpy = { name: 'SEE', describe: acc.describe };

accCpy.describe();
