interface Insaan {
  naam: string;
  umar: string;

  salam(jumla: string): void;
}

let adam: Insaan;

adam = {
  naam: 'Adam',
  umar: '1199',
  salam(jumla: string) {
    console.log(
      `Asalam o Alaikum! Mera naam ${this.naam} hai, meri umar ${this.umar} saal hai. ${jumla}`
    );
  },
};

adam.salam('Aap kesey hai?');
