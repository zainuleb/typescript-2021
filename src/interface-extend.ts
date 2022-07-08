interface Laqab {
  readonly name: string;
}

interface Greetable extends Laqab {
  greet(jumla: string): void;
}

class Insaan implements Greetable {
  name: string;
  age: number = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(jumla: string) {
    console.log(jumla);
  }
}
