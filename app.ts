const chalk = require('chalk');

class shoppingCart {
    items: any[] = [];
    prices: number[] = [];
    totalItems: number = 0;
    totalAmount: number;
    static current: shoppingCart;
    static instances: number = 0;

    constructor(list){
        if(shoppingCart.instances !== 0){
            return shoppingCart.current;
        }else{
            shoppingCart.instances = 1;
            shoppingCart.current = this;
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
        return this.totalAmount;   
    }
    checkout() {
        console.log(chalk.blue.bgYellowBright('Checkout!'))
        console.log(`Items: ${this.showItems()}`);        
        console.log(chalk.blue(`Total Items: ${this.totalItems}`));
        console.log(`Total amount: ${this.getTotalAmount()}`);        
    }
}
let cart1 = new shoppingCart(['Apple', 2000, 'Banana', 2000, 'Orange', 1000]);
cart1.checkout()
// mine.add('Apple', 1000);
// mine.add('Banana', 2000);
cart1.add('Pineapple', 2000);
cart1.checkout()
let cart2 = new shoppingCart(['Apple', 2000]);
cart2.add('Grapes', 2000)
cart2.remove('Banana')
cart2.checkout()