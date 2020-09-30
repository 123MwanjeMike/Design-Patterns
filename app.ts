class shoppingCart {
    items: any[] = [];
    totalItems: number;
    totalAmount: number;

    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index > -1) {
          this.items.splice(index, 1);
        }
    }
    showItems() {
        for (var i in this.items){
            console.log(`${this.items[i]}`);
        }
    }
    getTotalAmount() {

    }
    checkout() {

    }
}
let mine = new shoppingCart()
mine.addItem('Apple');
mine.addItem('Banana');
mine.showItems();
mine.removeItem('Apple');
mine.showItems();