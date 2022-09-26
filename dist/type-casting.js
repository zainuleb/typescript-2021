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
}
moveAnimal({ type: 'bird', flySpeed: 10 });
//Method 1
const userInputElement1 = (document.getElementById('user-input'));
//Method 2
const userInputElement2 = document.getElementById('user-input');
userInputElement2.value = 'Hi There!';
//Method 3
const userInputElement3 = document.getElementById('user-input');
if (userInputElement3) {
    userInputElement3.value = 'Hi! There';
}
