var shoppingCart = (function () {
	function shoppingCart() {
		this.items = []
	}
	shoppingCart.prototype.addItem = function (item) {
		this.items.push(item)
	}
	shoppingCart.prototype.removeItem = function (item) {
		var index = this.items.indexOf(item)
		if (index > -1) {
			this.items.splice(index, 1)
		}
	}
	shoppingCart.prototype.showItems = function () {
		for (var i in this.items) {
			console.log('' + this.items[i])
		}
	}
	shoppingCart.prototype.getTotalAmount = function () {
	}
	shoppingCart.prototype.checkout = function () {
	}
	return shoppingCart
})()
var mine = new shoppingCart()
mine.addItem('Apple')
mine.addItem('Banana')
mine.showItems()
mine.removeItem('Apple')
mine.showItems()
