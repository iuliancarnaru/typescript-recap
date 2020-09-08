const profile = {
  name: 'Iulian',
  age: 35,
  coords: {
    lat: 10,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// destructuring
const { age }: { age: number } = profile;

// nested destructuring
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
