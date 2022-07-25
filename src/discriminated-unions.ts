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
  console.log(speed);
}

moveAnimal({ type: 'bird', flySpeed: 10 });
