interface Bird {
  type: 'bird';
  flySpeed: number;
}

interface Horse {
  type: 'horse';
  runSpeed: number;
}
type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
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
const userInputElement1 = <HTMLInputElement>(
  document.getElementById('user-input')!
);

//Method 2
const userInputElement2 = document.getElementById(
  'user-input'
)! as HTMLInputElement;

userInputElement2.value = 'Hi There!';

//Method 3
const userInputElement3 = document.getElementById('user-input');
if (userInputElement3) {
  (userInputElement3 as HTMLInputElement).value = 'Hi! There';
}
