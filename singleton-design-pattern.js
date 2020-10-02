var chalk = require('chalk');
var title = chalk.blue;
var ShoppingCart = (function () {
    function ShoppingCart(name, list) {
        this.items = [];
        this.prices = [];
        this.totalItems = 0;
        if (ShoppingCart.instances !== 0) {
            console.log("\n                You already have a Cart!");
            return ShoppingCart.current;
        }
        else {
            ShoppingCart.instances = 1;
            ShoppingCart.current = this;
            this.cartName = name;
            this.addMany(list);
        }
    }
    ShoppingCart.prototype.addPrice = function (price) {
        this.prices.push(price);
    };
    ShoppingCart.prototype.addItem = function (item) {
        this.items.push(item);
    };
    ShoppingCart.prototype.add = function (item, price) {
        this.addItem(item);
        this.addPrice(price);
        this.totalItems += 1;
    };
    ShoppingCart.prototype.addMany = function (list) {
        for (var i = 0; i < list.length; i += 2) {
            var item = list[i];
            var price = list[(i + 1)];
            this.add(item, price);
        }
    };
    ShoppingCart.prototype.removePrice = function (index) {
        this.prices.splice(index, 1);
    };
    ShoppingCart.prototype.removeItem = function (index) {
        this.items.splice(index, 1);
    };
    ShoppingCart.prototype.remove = function (item) {
        var index = this.items.indexOf(item);
        if (index > -1) {
            this.removeItem(index);
            this.removePrice(index);
            this.totalItems -= 1;
        }
    };
    ShoppingCart.prototype.showItems = function () {
        return chalk.green(this.items);
    };
    ShoppingCart.prototype.getTotalAmount = function () {
        this.totalAmount = 0;
        for (var i in this.prices) {
            this.totalAmount += this.prices[i];
        }
        return chalk.red(this.totalAmount);
    };
    ShoppingCart.prototype.checkout = function () {
        console.log(chalk.blue.bgYellowBright(this.cartName + " details"));
        console.log(title("Items: " + this.showItems()));
        console.log(title('Total Items:'), chalk.green("" + this.totalItems));
        console.log(title("Total amount: " + this.getTotalAmount()));
    };
    ShoppingCart.instances = 0;
    return ShoppingCart;
})();
var cart1 = new ShoppingCart("cart1", ['Apple', 2000, 'Banana', 2000, 'Jackfruit', 5000, 'Orange', 1000]);
cart1.checkout();
cart1.add('Pineapple', 2000);
cart1.checkout();
var cart2 = new ShoppingCart("cart2", ['Apple', 2000]);
cart2.add('Grapes', 2000);
cart2.checkout();
