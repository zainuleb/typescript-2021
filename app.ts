type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    typeof input1 === 'number' &&
    typeof input2 === 'number' &&
    resultConversion === 'as-number'
  ) {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
}

const combineAges = combine(30, 40, 'as string');
console.log(combineAges);

const combinedStringAges = combine('30', '40', 'as-number');

const combineNames = combine('Max', 'Anna');
console.log(combineAges);
