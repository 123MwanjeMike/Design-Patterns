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

    constructor(name: string, category: string, cost: number, id: string, serialNumber: string) {
        this.name = name;
        this.category = category;
        this.cost = cost;
        this.id = id;
        this.serialNumber = serialNumber;
    }
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

    constructor(name: string, category: string, cost: number, id: string, serialNumber: string) {
        super(name, "Desktop Computer", cost, id, serialNumber)
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
        super(name, "Laptop Computer", cost, id, serialNumber)
        this.name = name;
        this.cost = cost;
        this.id = id;
        this.serialNumber = serialNumber;
    }
}

class ComputerDecorator extends Computer {
    computer: Computer;

    constructor(computer: Computer, name: string, category: string, cost: number, id: string, serialNumber: string) {
        super(name, category, cost, id, serialNumber)
        this.computer = computer;
    }
}

class ComputerWithMouse extends ComputerDecorator {
    constructor(computer: Computer, name: string, category: string, cost: number, id: string, serialNumber: string) {
        computer.category = computer.category + "with mouse"
        super(computer, name, category, cost, id, serialNumber)
    }
}

let laptop1 = new Laptop("Mac Probook", 250, "160", "32156jkg7")
console.table(laptop1)

module.exports = Computer;