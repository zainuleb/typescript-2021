"use strict";
let adam;
adam = {
    naam: 'Adam',
    umar: '1199',
    salam(jumla) {
        console.log(`Asalam o Alaikum! Mera naam ${this.naam} hai, meri umar ${this.umar} saal hai. ${jumla}`);
    },
};
adam.salam('Aap kesey hai?');
