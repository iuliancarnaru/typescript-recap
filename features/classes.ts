// parent class (super class)
class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep beep');
  }
}

const vehicle = new Vehicle('orange');

// child class
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vrummmm');
  }

  startDriving(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'blue');
car.startDriving();

// car.honk();
// Property 'honk' is protected and only accessible
// within class 'Vehicle' and its subclasses.
