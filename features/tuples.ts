const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

const pepsi = [
  ['color', 'brown'],
  ['carbonated', true],
  ['sugar', 40],
];

// type alias (abstract)
type Drink = [string, boolean, number];

const cola: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 45];
const tea: Drink = ['dark', false, 0];

// hard to represent meningfull data comparing to objects
const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsePower: 400,
  weight: 3354,
};
