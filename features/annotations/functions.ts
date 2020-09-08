// FUNCTIONS
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const add = (a: number, b: number): number => {
  return a + b;
};

// a function that returns void can return null and undefined
const logger = (message: string): void => {
  console.log(message);
  // return null;
  // return undefined;
};

// never (exit the function early without returning a value)
const throwErr = (message: string): never => {
  throw new Error(message);
};

const throwErr2 = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }

  return message;
};

const throwErr3 = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

// destructuring

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);

// this function returns void (we need to always add annotation)
// arrow function
const subtract = (a: number, b: number) => {
  a - b;
};

// named function
function divide(a: number, b: number): number {
  return a / b;
}

// anonimous function assigned to a variable
const multiply = function (a: number, b: number): number {
  return a * b;
};
