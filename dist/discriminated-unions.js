"use strict";
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flySpeed;
            break;
        case 'horse':
            speed = animal.runSpeed;
            break;
    }
    console.log(speed);
}
moveAnimal({ type: 'bird', flySpeed: 10 });
