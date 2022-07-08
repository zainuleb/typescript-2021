interface jamaFoo {
  (a: number, b: number): number;
}
let jama: jamaFoo;

jama = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Laqab {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Laqab {
  greet(jumla: string): void;
}

class Insaan implements Greetable {
  name?: string;
  age: number = 30;

  constructor(n?: string) {
    if (n) this.name = n;
  }

  greet(jumla: string) {
    console.log(jumla);
  }
}

let ismael: Greetable;

ismael = new Insaan();
