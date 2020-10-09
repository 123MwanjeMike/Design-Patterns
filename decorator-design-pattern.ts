interface Product {
  name: string;
  category: string;
  cost: number;
  id: string;
  serialNumber: string;

  setCost(cost: number): void;
  getCost(): number;
  getDescription(): string;
}

class Computer implements Product {
  name: string;
  category: string;
  cost: number;
  id: string;
  serialNumber: string;

  setCost(cost: number) {
    this.cost = cost;
  }
  getCost() {
    return this.cost;
  }
  getDescription() {
    return "Generic Computer";
  }
}

class Desktop extends Computer {
  name = "Desktop Computer";
  category = "Desktop Computer";

  constructor(name: string, cost: number, id: string, serialNumber: string) {
    super();
    this.name = name;
    this.cost = cost;
    this.id = id;
    this.serialNumber = serialNumber;
  }
  getCost() {
    return this.cost;
  }
  getDescription() {
    return "Desktop Computer";
  }
}

class Laptop extends Computer {
  name = "Laptop Computer";
  category = "Laptop Computer";

  constructor(name: string, cost: number, id: string, serialNumber: string) {
    super();
    this.name = name;
    this.cost = cost;
    this.id = id;
    this.serialNumber = serialNumber;
  }
  getCost() {
    return this.cost;
  }
  getDescription() {
    return "Laptop Computer";
  }
}

class ComputerDecorator extends Computer {
  computer: Computer;

  constructor(computer: Computer) {
    super();
    this.computer = computer;
  }
  setCost(cost: number) {
    this.cost = cost;
  }
  getCost() {
    return this.cost;
  }
}

class ComputerWithMouse extends ComputerDecorator {
  constructor(computer: Computer) {
    super(computer);
    this.computer = computer;
    this.setCost();
  }
  setCost() {
    this.cost = this.computer.cost + 5;
  }
  getCost() {
    return this.computer.cost;
  }
  getDescription() {
    return this.computer.getDescription() + " + 1 Mouse.";
  }
}

class ComputerWithSilverBody extends ComputerDecorator {
    constructor(computer: Computer) {
        super(computer);
        this.computer = computer;
        this.setCost()
      }
      setCost() {
        this.cost = this.computer.cost + 10;
      }
      getCost() {
        return this.computer.cost;
      }
      getDescription() {
        return this.computer.getDescription() + " + 1 Silver Body Coarting.";
      }
}

class ComputerWithHDCamera extends ComputerDecorator {
    constructor(computer: Computer) {
        super(computer);
        this.computer = computer;
        this.setCost()
      }
      setCost() {
        this.cost = this.computer.cost + 30;
      }
      getDescription() {
        return this.computer.getDescription() + " + 1 HD Camera.";
      }
}

// let laptop1 = new Laptop("Mac Probook Air", 250, "160", "32156jkg7")
// console.log(laptop1)
// laptop1 = new ComputerWithMouse(laptop1)
// console.log(laptop1)
// laptop1 = new ComputerWithHDCamera(laptop1)
// console.log(laptop1)
// laptop1 = new ComputerWithSilverBody(laptop1)
// console.log(laptop1)

module.exports
