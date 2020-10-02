const chalk = require('chalk');
const title = chalk.blue;

class ShoppingCart {

    items: any[] = [];
    prices: number[] = [];
    totalItems: number = 0;
    totalAmount: number;
    cartName: String;
    static current: ShoppingCart;
    static instances: number = 0;

    constructor(name, list){
        if(ShoppingCart.instances !== 0){
            console.log(`
                You already have a Cart!`)
            return ShoppingCart.current;
        }else{
            ShoppingCart.instances = 1;
            ShoppingCart.current = this;
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
let cart1 = new ShoppingCart("cart1", ['Apple', 2000, 'Banana', 2000, 'Jackfruit', 5000, 'Orange', 1000]);
cart1.checkout()
cart1.add('Pineapple', 2000);
cart1.checkout()
let cart2 = new ShoppingCart("cart2", ['Apple', 2000]);
cart2.add('Grapes', 2000)
cart2.checkout()
let cart3 = new ShoppingCart("cart2", ['Apple', 2000]);
cart3.remove('Grapes')
cart3.checkout()