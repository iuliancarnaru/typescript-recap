const carMakers = ['tesla', 'ford', 'dacia'];

// we cand add annotation when we declare an empty array
const fruits: string[] = [];

const dates = [new Date(), new Date()];

// two dimensional arrays
const carsByMake = [['S'], ['camaro'], ['logan']];
const fruitsByColor: string[][] = [];

// help with inference when extractiong values
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
// carMakers.push(100);

// help with 'map', 'forEach', 'reduce'
carMakers.map((car: string): string => {
  return car;
});

// multiple different types
const importantDates = [new Date(), '2020-10-12'];
const importantDays: (Date | string)[] = [];
importantDays.push('Friday');
importantDays.push(new Date());
