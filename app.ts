class shoppingCart {
    items: any[] = [];
    prices: number[] = [];
    totalItems: number = 0;
    totalAmount: number = 0;
    
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
        return this.items;
    }
    getTotalAmount() {
        for (var i in this.prices){
            this.totalAmount += this.prices[i]
        }
        return this.totalAmount;   
    }
    checkout() {
        console.log('Checkout!')
        console.log(`Items: ${this.items}`);        
        console.log(`Total Items: ${this.totalItems}`);
        console.log(`Total amount: ${this.getTotalAmount()}`);
        
    }
}
let mine = new shoppingCart()
mine.add('Apple', 1000);
mine.add('Banana', 2000);
mine.add('Orange', 2000);
mine.checkout()