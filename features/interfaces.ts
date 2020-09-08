const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name is ${this.name}`;
  },
};

// FROM

const printVehicle = (vehicle: {
  name: string;
  year: Date;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Is broken?: ${vehicle.broken}`);
};

// TO

// we create a new type called Vehicle
interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  // we can add functions to interfaces
  summary(): string;
}

const printVehicle2 = (vehicle: Vehicle): void => {
  // console.log(`Name: ${vehicle.name}`);
  // console.log(`Year: ${vehicle.year}`);
  // console.log(`Is broken?: ${vehicle.broken}`);
  console.log(vehicle.summary());
};

// void -> function doesn't return anything
printVehicle(oldCivic);
printVehicle2(oldCivic);

// -------------------------------------------------------

interface Reportable {
  summary(): string;
}

const oldTesla = {
  name: 'X',
  year: new Date(),
  broken: false,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 45,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldTesla);
printSummary(drink);
