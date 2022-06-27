interface Insaan {
  naam: string;
  umar: string;

  salam(jumla: string): void;
}

/* let adam: Insaan; */

class Banda implements Insaan {
  naam: string;
  umar: string;
  constructor(naam: string, umar: string) {
    this.naam = naam;
    this.umar = umar;
  }

  salam(jumla: string): void {
    console.log(
      `Asalam o Alaikum! Mera naam ${this.naam} hai, meri umar ${this.umar} saal hai. ${jumla}`
    );
  }
}

const adam = new Banda('Adam', '1099');
adam.salam('Aapka jumla');
