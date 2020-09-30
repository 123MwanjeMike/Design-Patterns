var chalk = require('chalk');
var shoppingCart = (function () {
    function shoppingCart(list) {
        this.items = [];
        this.prices = [];
        this.totalItems = 0;
        if (shoppingCart.instances !== 0) {
            return shoppingCart.current;
        }
        else {
            shoppingCart.instances = 1;
            shoppingCart.current = this;
            this.addMany(list);
        }
    }
    shoppingCart.prototype.addPrice = function (price) {
        this.prices.push(price);
    };
    shoppingCart.prototype.addItem = function (item) {
        this.items.push(item);
    };
    shoppingCart.prototype.add = function (item, price) {
        this.addItem(item);
        this.addPrice(price);
        this.totalItems += 1;
    };
    shoppingCart.prototype.addMany = function (list) {
        for (var i = 0; i < list.length; i += 2) {
            var item = list[i];
            var price = list[(i + 1)];
            this.add(item, price);
        }
    };
    shoppingCart.prototype.removePrice = function (index) {
        this.prices.splice(index, 1);
    };
    shoppingCart.prototype.removeItem = function (index) {
        this.items.splice(index, 1);
    };
    shoppingCart.prototype.remove = function (item) {
        var index = this.items.indexOf(item);
        if (index > -1) {
            this.removeItem(index);
            this.removePrice(index);
            this.totalItems -= 1;
        }
    };
    shoppingCart.prototype.showItems = function () {
        return chalk.green(this.items);
    };
    shoppingCart.prototype.getTotalAmount = function () {
        this.totalAmount = 0;
        for (var i in this.prices) {
            this.totalAmount += this.prices[i];
        }
        return chalk.redthis.totalAmount;
    };
    shoppingCart.prototype.checkout = function () {
        console.log(chalk.blue.bgYellowBright('Checkout!'));
        console.log("Items: " + this.showItems());
        console.log(chalk.blue("Total Items: " + this.totalItems + " " + this.showItems()));
        console.log("Total amount: " + this.getTotalAmount());
    };
    shoppingCart.instances = 0;
    return shoppingCart;
})();
var cart1 = new shoppingCart(['Apple', 2000, 'Banana', 2000, 'Orange', 1000]);
cart1.checkout();
// mine.add('Apple', 1000);
// mine.add('Banana', 2000);
cart1.add('Pineapple', 2000);
cart1.checkout();
var cart2 = new shoppingCart(['Apple', 2000]);
cart2.add('Grapes', 2000);
cart2.remove('Banana');
cart2.checkout();
