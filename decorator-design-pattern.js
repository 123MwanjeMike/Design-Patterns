var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Computer = (function () {
    function Computer(name, category, cost, id, serialNumber) {
        this.name = name;
        this.category = category;
        this.cost = cost;
        this.id = id;
        this.serialNumber = serialNumber;
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
    function Desktop(name, category, cost, id, serialNumber) {
        _super.call(this, name, "Desktop Computer", cost, id, serialNumber);
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
        _super.call(this, name, "Laptop Computer", cost, id, serialNumber);
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
    function ComputerDecorator(computer, name, category, cost, id, serialNumber) {
        _super.call(this, name, category, cost, id, serialNumber);
        this.computer = computer;
    }
    return ComputerDecorator;
})(Computer);
var ComputerWithMouse = (function (_super) {
    __extends(ComputerWithMouse, _super);
    function ComputerWithMouse(computer, name, category, cost, id, serialNumber) {
        computer.category = computer.category + "with mouse";
        _super.call(this, computer, name, category, cost, id, serialNumber);
    }
    return ComputerWithMouse;
})(ComputerDecorator);
var laptop1 = new Laptop("Mac Probook", 250, "160", "32156jkg7");
console.table(laptop1);
module.exports = Computer;
