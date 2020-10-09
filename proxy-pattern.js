var RealSubject = (function () {
    function RealSubject() {
    }
    RealSubject.prototype.request = function () {
        console.log("RealSubject: Handling request.");
    };
    return RealSubject;
})();
var Proxy = (function () {
    function Proxy(realSubject) {
        this.realSubject = realSubject;
    }
    Proxy.prototype.request = function () {
        this.realSubject.request();
    };
    return Proxy;
})();
var clientCode = function (subject) {
    subject.request();
};
console.log("Client: Executing the client code with a real subject:");
var realSubject = new RealSubject();
clientCode(realSubject);
console.log("====================");
console.log("Client: Executing the same client code with a proxy:");
var proxy = new Proxy(realSubject);
clientCode(proxy);
