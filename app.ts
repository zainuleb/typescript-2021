class Department {
  name: string;
  constructor(name: string) {
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
