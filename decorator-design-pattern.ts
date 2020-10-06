interface Product {
    name: string;
    category: string;
    cost: number;
    id: string;
    serialNumber: string;

    setCost(cost: number): void;
    getCost(): number;
}

class Computer implements Product {
    name: string;
    category: string;
    cost: number;
    id: string;
    serialNumber: string;

    constructor(){}
    setCost(cost: number){
        this.cost = cost;
    }
    getCost(){
        return this.cost;
    }
}

class Desktop extends Computer {
    name = "Desktop Computer";
    category = "Desktop Computer";

    constructor(name: string, cost: number, id: string, serialNumber: string) {
        super()
        this.name = name;
        this.cost = cost;
        this.id = id;
        this.serialNumber = serialNumber;
    }
}

class Laptop extends Computer {
    name = "Laptop Computer";
    category = "Laptop Computer";

    constructor(name: string, cost: number, id: string, serialNumber: string) {
        super()
        this.name = name;
        this.cost = cost;
        this.id = id;
        this.serialNumber = serialNumber;
    }
}

class ComputerDecorator extends Computer {
    computer: Computer;

    constructor(computer: Computer) {
        super()
        this.computer = computer;
    }
}

class ComputerWithMouse extends ComputerDecorator {
    constructor(computer: Computer) {
        computer.category = `${computer.category} with mouse`;
        computer.cost = computer.cost + 5;
        super(computer)
    }
}

class ComputerWithSilverBody extends ComputerDecorator {
    constructor(computer: Computer) {
        computer.category = `${computer.category} with silver body`;
        computer.cost = computer.cost + 10;
        super(computer)
    }
}

class ComputerWithHDCamera extends ComputerDecorator {
    constructor(computer: Computer) {
        computer.category = `${computer.category} with HD camera`;
        computer.cost = computer.cost + 100;
        super(computer)
    }
}
let computer1 = new Computer()
console.log(computer1)
computer1 = new ComputerWithMouse(computer1)
console.log(computer1)

let laptop1 = new Laptop("Mac Probook Air", 250, "160", "32156jkg7")
console.log(laptop1)
laptop1 = new ComputerWithMouse(laptop1)
console.log(laptop1)

let desktop1 = new Desktop("Macbook Desktop", 150, "124", "32156dfdfdf")
console.log(desktop1)
desktop1 = new ComputerWithSilverBody(desktop1)
console.log(desktop1)

module.exports = Computer;