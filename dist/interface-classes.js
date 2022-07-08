"use strict";
/* let adam: Insaan; */
class Banda {
    constructor(naam, umar) {
        this.naam = naam;
        this.umar = umar;
    }
    salam(jumla) {
        console.log(`Asalam o Alaikum! Mera naam ${this.naam} hai, meri umar ${this.umar} saal hai. ${jumla}`);
    }
}
const adam = new Banda('Adam', '1099');
adam.naam = 'Adama';
adam.salam('Aapka jumla');
