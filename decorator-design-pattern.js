var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Computer = (function () {
    function Computer() {
    }
    Computer.prototype.setCost = function (cost) {
        this.cost = cost;
    };
    Computer.prototype.getCost = function () {
        return this.cost;
    };
    return Computer;
})();
var Desktop = (function (_super) {
    __extends(Desktop, _super);
    function Desktop(name, cost, id, serialNumber) {
        _super.call(this);
        this.name = "Desktop Computer";
        this.category = "Desktop Computer";
        this.name = name;
        this.cost = cost;
        this.id = id;
        this.serialNumber = serialNumber;
    }
    return Desktop;
})(Computer);
var Laptop = (function (_super) {
    __extends(Laptop, _super);
    function Laptop(name, cost, id, serialNumber) {
        _super.call(this);
        this.name = "Laptop Computer";
        this.category = "Laptop Computer";
        this.name = name;
        this.cost = cost;
        this.id = id;
        this.serialNumber = serialNumber;
    }
    return Laptop;
})(Computer);
var ComputerDecorator = (function (_super) {
    __extends(ComputerDecorator, _super);
    function ComputerDecorator(computer) {
        _super.call(this);
        this.computer = computer;
    }
    return ComputerDecorator;
})(Computer);
var ComputerWithMouse = (function (_super) {
    __extends(ComputerWithMouse, _super);
    function ComputerWithMouse(computer) {
        computer.category = computer.category + " with mouse";
        computer.cost = computer.cost + 5;
        _super.call(this, computer);
    }
    return ComputerWithMouse;
})(ComputerDecorator);
var ComputerWithSilverBody = (function (_super) {
    __extends(ComputerWithSilverBody, _super);
    function ComputerWithSilverBody(computer) {
        computer.category = computer.category + " with silver body";
        computer.cost = computer.cost + 10;
        _super.call(this, computer);
    }
    return ComputerWithSilverBody;
})(ComputerDecorator);
var ComputerWithHDCamera = (function (_super) {
    __extends(ComputerWithHDCamera, _super);
    function ComputerWithHDCamera(computer) {
        computer.category = computer.category + " with HD camera";
        computer.cost = computer.cost + 100;
        _super.call(this, computer);
    }
    return ComputerWithHDCamera;
})(ComputerDecorator);
var computer1 = new Computer();
console.log(computer1);
computer1 = new ComputerWithMouse(computer1);
console.log(computer1);
var laptop1 = new Laptop("Mac Probook Air", 250, "160", "32156jkg7");
console.log(laptop1);
laptop1 = new ComputerWithMouse(laptop1);
console.log(laptop1);
var desktop1 = new Desktop("Macbook Desktop", 150, "124", "32156dfdfdf");
console.log(desktop1);
desktop1 = new ComputerWithSilverBody(desktop1);
console.log(desktop1);
module.exports = Computer;
