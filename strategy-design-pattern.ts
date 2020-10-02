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

    constructor(username) {
        this.username = username
        console.log(`User ${this.username} created`)
    }
    login(userName: String, Password: String){}
    editProfile(){}
    viewProfile(){}
    logout(){}
    setSaleApprovalMethod( sam: SalesApproval){
        // Is used by the subtype to set a preferred SalesApproval approach. Either by mobile or bank payment
    }
    addProducToStock(){}
    viewProducts(){}
    addToCart(){}
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