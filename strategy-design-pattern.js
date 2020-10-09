var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ShoppingCart = require('./singleton-design-pattern');
var RegisterProductMethodA = (function () {
    function RegisterProductMethodA() {
    }
    RegisterProductMethodA.prototype.registerProduct = function () {
        //Register a product with method A algorithm
        return 'Product registered with algorithm A';
    };
    return RegisterProductMethodA;
})();
var RegisterProductMethodB = (function () {
    function RegisterProductMethodB() {
    }
    RegisterProductMethodB.prototype.registerProduct = function () {
        //Register a product with method B algorithm
        return 'Product registered with algorithm B';
    };
    return RegisterProductMethodB;
})();
var SaleApprovalByBankStatement = (function () {
    function SaleApprovalByBankStatement() {
    }
    SaleApprovalByBankStatement.prototype.approveASale = function () {
        // Approve a sale with bank payment algorithm
        return 'Sales approved by bank statement';
    };
    return SaleApprovalByBankStatement;
})();
var SaleApprovalByMMTransaction = (function () {
    function SaleApprovalByMMTransaction() {
    }
    SaleApprovalByMMTransaction.prototype.approveASale = function () {
        // Approve a sale with mobile money payment algorithm
        return 'Sales approved from mobile money payment';
    };
    return SaleApprovalByMMTransaction;
})();
var User = (function () {
    function User(username) {
        this.username = username;
        console.log("User " + this.username + " created");
    }
    User.prototype.setSaleApprovalMethod = function (salesApproval) {
        // Is used by the subtype to set a preferred SalesApproval approach. Either by mobile or bank payment
        this.salesApproval = salesApproval;
    };
    User.prototype.createCart = function (list) {
        this.shoppingCart = new ShoppingCart(this.username + " Cart", list);
    };
    User.prototype.login = function (userName, Password) { };
    User.prototype.editProfile = function () { };
    User.prototype.viewProfile = function () { };
    User.prototype.logout = function () { };
    User.prototype.addProducToStock = function () { };
    User.prototype.viewProducts = function () { };
    User.prototype.shop = function () { };
    return User;
})();
var StoreManager = (function (_super) {
    __extends(StoreManager, _super);
    function StoreManager() {
        _super.apply(this, arguments);
        this.productRegistration = new RegisterProductMethodA();
    }
    StoreManager.prototype.registerSalesAgent = function () { };
    return StoreManager;
})(User);
var SalesAgent = (function (_super) {
    __extends(SalesAgent, _super);
    function SalesAgent() {
        _super.apply(this, arguments);
        this.productRegistration = new RegisterProductMethodB();
    }
    SalesAgent.prototype.approveASale = function () { };
    return SalesAgent;
})(User);
var Client = (function (_super) {
    __extends(Client, _super);
    function Client() {
        _super.apply(this, arguments);
    }
    Client.prototype.approveASale = function () { };
    return Client;
})(User);
var manager1 = new StoreManager('manager1');
console.log(manager1.productRegistration.registerProduct());
var agent1 = new SalesAgent('agent1');
console.log(agent1.productRegistration.registerProduct());
agent1.setSaleApprovalMethod(new SaleApprovalByBankStatement);
console.log(agent1.salesApproval.approveASale());
agent1.setSaleApprovalMethod(new SaleApprovalByMMTransaction);
console.log(agent1.salesApproval.approveASale());
agent1.createCart(['Apple', 2000, 'Banana', 2000, 'Jackfruit', 5000, 'Orange', 1000]);
agent1.shoppingCart.checkout();
