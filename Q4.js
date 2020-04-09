//Q3: Create a simple Calculator using TypeScript.Implement Add,Multiply,Subtract and Division operation on two numbers.
var Calculator = /** @class */ (function () {
    function Calculator() {
        this.addition = function (a, b) {
            return a + b;
        };
        this.subtraction = function (a, b) {
            return a - b;
        };
        this.multification = function (a, b) {
            return a * b;
        };
        this.Division = function (a, b) {
            return a / b;
        };
    }
    return Calculator;
}());
var val = new Calculator();
console.log(val.Division(10, 20));
console.log(val.addition(10, 20));
console.log(val.multification(10, 20));
console.log(val.subtraction(10, 20));
