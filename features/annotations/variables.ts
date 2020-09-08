// PRIMITIVES
let apples: number = 5;
// apples = 'abc';
// Type '"abc"' is not assignable to type 'number'

let speed: string = 'fast';
// speed = true;
// Type 'true' is not assignable to type 'string'.

let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// BUILD IN OBJECTS
let now: Date = new Date();
now.getTime();

// ARRAY
let colors: string[] = ['red', 'blue'];
let luckyNumbers: number[] = [7, 21, 5];
let isLucky: boolean[] = [true, false];

// CLASSES
class Car {}

let myCar: Car = new Car();

// OBJECT LITERAL
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// point.x = 'abc';
// Type '"abc"' is not assignable to type 'number'

// let point2: { x: number; y: number } = {
//   x: 10,
//   a: 20,
// };

//Object literal may only specify known properties,
// and 'a' does not exist in type '{ x: number; y: number; }'

// WHEN TO USE ANNOTATIONS
// 1. Function that returns the 'any' type

const json = '{ "x" : 10, "y" : 40 }';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// coordinates.latitude;
// Property 'latitude' does not exist on type '{ x: number; y: number; }

// 2. When we declare a variable on one line and initializate it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3. Variable whose type cannot be inferred correctly (| OR)
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
