var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.getname = function () {
        return this.name;
    };
    Employee.prototype.setname = function (value) {
        this.name = value;
    };
    Employee.prototype.getcolor = function () {
        return this.color;
    };
    Employee.prototype.setcolor = function (value) {
        this.color = value;
    };
    Employee.prototype.getbirthYear = function () {
        return this.birthYear;
    };
    Employee.prototype.setbirthYear = function (value) {
        this.birthYear = value;
    };
    return Employee;
}());
var AdhocEmployee = /** @class */ (function (_super) {
    __extends(AdhocEmployee, _super);
    function AdhocEmployee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdhocEmployee.prototype.getNoOfWorkingHour = function () {
        return this.noOfWorkinghours;
    };
    AdhocEmployee.prototype.setNoOfWorkingHour = function (value) {
        this.noOfWorkinghours = value;
    };
    return AdhocEmployee;
}(Employee));
var emp = new Employee();
emp.setname("Amrit");
console.log(emp.getname());
emp.setbirthYear("20/09/1995");
console.log(emp.getbirthYear());
emp.setcolor("red");
console.log(emp.getcolor());
var adhocEmployee = new AdhocEmployee();
adhocEmployee.setNoOfWorkingHour(10);
console.log(adhocEmployee.getNoOfWorkingHour());
