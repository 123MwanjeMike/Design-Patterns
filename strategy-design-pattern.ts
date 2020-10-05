const ShoppingCart = require('./singleton-design-pattern');

interface ProductRegistration {
    registerProduct()
}// Strategy for product registration

class RegisterProductMethodA implements ProductRegistration {
    registerProduct(){
        //Register a product with method A algorithm
        return 'Product registered with algorithm A'
    }
}
class RegisterProductMethodB implements ProductRegistration {
    registerProduct(){
        //Register a product with method B algorithm
        return 'Product registered with algorithm B'
    }
}

interface SalesApproval {
    approveASale()
}// Strategy for sales approval

class SaleApprovalByBankStatement implements SalesApproval {
    approveASale(){
        // Approve a sale with bank payment algorithm
        return 'Sales approved by bank statement'
    }
}
class SaleApprovalByMMTransaction implements SalesApproval {
    approveASale(){
        // Approve a sale with mobile money payment algorithm
        return 'Sales approved from mobile money payment'
    }
}

class User {
    userid: String;
    username: String;
    private password: String;
    firstName: String
    productRegistration: ProductRegistration
    salesApproval: SalesApproval
    surname: String
    role: String
    shoppingCart: any;
    

    constructor(username) {
        this.username = username
        console.log(`User ${this.username} created`)
    }
    setSaleApprovalMethod( salesApproval: SalesApproval){
        // Is used by the subtype to set a preferred SalesApproval approach. Either by mobile or bank payment
        this.salesApproval = salesApproval;
    }
    createCart(list){
        this.shoppingCart = new ShoppingCart(`${this.username} Cart`, list)
    }
    login(userName: String, Password: String){}
    editProfile(){}
    viewProfile(){}
    logout(){}
    addProducToStock(){}
    viewProducts(){}
    shop(){}
}

class StoreManager extends User{
    productRegistration = new  RegisterProductMethodA()
    registerSalesAgent(){}
}

class SalesAgent extends User{
    productRegistration = new  RegisterProductMethodB()
    approveASale(){}
}

class Client extends User{
    approveASale(){}
}

let manager1 = new StoreManager('manager1')
console.log(manager1.productRegistration.registerProduct())
let agent1 = new SalesAgent('agent1')
console.log(agent1.productRegistration.registerProduct())
agent1.setSaleApprovalMethod(new SaleApprovalByBankStatement)
console.log(agent1.salesApproval.approveASale())
agent1.setSaleApprovalMethod(new SaleApprovalByMMTransaction)
console.log(agent1.salesApproval.approveASale())
agent1.createCart(['Apple', 2000, 'Banana', 2000, 'Jackfruit', 5000, 'Orange', 1000])
agent1.shoppingCart.checkout()
