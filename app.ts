const chalk = require('chalk');
const title = chalk.blue;

class shoppingCart {

    items: any[] = [];
    prices: number[] = [];
    totalItems: number = 0;
    totalAmount: number;
    cartName: String;
    static current: shoppingCart;
    static instances: number = 0;

    constructor(name, list){
        if(shoppingCart.instances !== 0){
            return shoppingCart.current;
        }else{
            shoppingCart.instances = 1;
            shoppingCart.current = this;
            this.cartName = name;
            this.addMany(list)
        }
    }
    
    private addPrice(price){
        this.prices.push(price);        
    }
    private addItem(item) {
        this.items.push(item);
    }
    add(item, price) {
        this.addItem(item);
        this.addPrice(price);
        this.totalItems += 1;
    }
    addMany(list){
        for (let i = 0; i < list.length; i+=2) {
            let item = list[i];
            let price = list[(i+1)]
            this.add(item, price)        
        }
    }

    private removePrice(index){        
        this.prices.splice(index, 1);
    }
    private removeItem(index) {
        this.items.splice(index, 1);
    }
    remove(item) {
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.removeItem(index);
            this.removePrice(index);
            this.totalItems -= 1
        }
    }
    showItems() {
        return chalk.green(this.items);
    }
    getTotalAmount() {
        this.totalAmount = 0;
        for (var i in this.prices){
            this.totalAmount += this.prices[i]
        }
        return chalk.red(this.totalAmount);   
    }
    checkout() {
        console.log(chalk.blue.bgYellowBright(`${this.cartName} details`));
        console.log(title(`Items: ${this.showItems()}`));        
        console.log(title('Total Items:'), chalk.green(`${this.totalItems}`));
        console.log(title(`Total amount: ${this.getTotalAmount()}`));        
    }
}
let cart1 = new shoppingCart("cart1", ['Apple', 2000, 'Banana', 2000, 'Jackfruit', 5000, 'Orange', 1000]);
cart1.checkout()
cart1.add('Pineapple', 2000);
cart1.checkout()
let cart2 = new shoppingCart("cart2", ['Apple', 2000]);
cart2.add('Grapes', 2000)
cart2.checkout()