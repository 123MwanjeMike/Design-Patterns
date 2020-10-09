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
    Computer.prototype.getDescription = function () {
        return "Generic Computer";
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
    Desktop.prototype.getCost = function () {
        return this.cost;
    };
    Desktop.prototype.getDescription = function () {
        return "Desktop Computer";
    };
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
    Laptop.prototype.getCost = function () {
        return this.cost;
    };
    Laptop.prototype.getDescription = function () {
        return "Laptop Computer";
    };
    return Laptop;
})(Computer);
var ComputerDecorator = (function (_super) {
    __extends(ComputerDecorator, _super);
    function ComputerDecorator(computer) {
        _super.call(this);
        this.computer = computer;
    }
    ComputerDecorator.prototype.setCost = function (cost) {
        this.cost = cost;
    };
    ComputerDecorator.prototype.getCost = function () {
        return this.cost;
    };
    return ComputerDecorator;
})(Computer);
var ComputerWithMouse = (function (_super) {
    __extends(ComputerWithMouse, _super);
    function ComputerWithMouse(computer) {
        _super.call(this, computer);
        this.computer = computer;
        this.setCost();
    }
    ComputerWithMouse.prototype.setCost = function () {
        this.cost = this.computer.cost + 5;
    };
    ComputerWithMouse.prototype.getCost = function () {
        return this.computer.cost;
    };
    ComputerWithMouse.prototype.getDescription = function () {
        return this.computer.getDescription() + " + 1 Mouse.";
    };
    return ComputerWithMouse;
})(ComputerDecorator);
var ComputerWithSilverBody = (function (_super) {
    __extends(ComputerWithSilverBody, _super);
    function ComputerWithSilverBody(computer) {
        _super.call(this, computer);
        this.computer = computer;
        this.setCost();
    }
    ComputerWithSilverBody.prototype.setCost = function () {
        this.cost = this.computer.cost + 10;
    };
    ComputerWithSilverBody.prototype.getCost = function () {
        return this.computer.cost;
    };
    ComputerWithSilverBody.prototype.getDescription = function () {
        return this.computer.getDescription() + " + 1 Silver Body Coarting.";
    };
    return ComputerWithSilverBody;
})(ComputerDecorator);
var ComputerWithHDCamera = (function (_super) {
    __extends(ComputerWithHDCamera, _super);
    function ComputerWithHDCamera(computer) {
        _super.call(this, computer);
        this.computer = computer;
        this.setCost();
    }
    ComputerWithHDCamera.prototype.setCost = function () {
        this.cost = this.computer.cost + 30;
    };
    ComputerWithHDCamera.prototype.getDescription = function () {
        return this.computer.getDescription() + " + 1 HD Camera.";
    };
    return ComputerWithHDCamera;
})(ComputerDecorator);
var laptop1 = new Laptop("Mac Probook Air", 250, "160", "32156jkg7");
console.log(laptop1);
laptop1 = new ComputerWithMouse(laptop1);
console.log(laptop1);
laptop1 = new ComputerWithHDCamera(laptop1);
console.log(laptop1);
laptop1 = new ComputerWithSilverBody(laptop1);
console.log(laptop1);
