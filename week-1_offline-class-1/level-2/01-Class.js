
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }j
  describe() {
    console.log(`${this.name} has ${this.legCount} legs`);
  }
}

const dog = new Animal("kd", 4);
dog.describe();