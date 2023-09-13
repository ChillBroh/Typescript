var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.empName = name;
    }
    Employee.prototype.hello = function () {
        console.log("Hello ".concat(this.empName));
    };
    Employee.prototype.job = function (jobname) {
        console.log("Your job is ".concat(jobname));
    };
    Employee.prototype.mySchool = function () {
        console.log("School from parent");
    };
    return Employee;
}());
var emp1 = new Employee("Ishara");
emp1.hello();
emp1.mySchool();
//inheritance
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, school) {
        var _this = _super.call(this, name) || this;
        _this.schoolName = school;
        return _this;
    }
    Manager.prototype.mySchool = function () {
        console.log("School from child");
    };
    return Manager;
}(Employee));
var emp2 = new Manager("Madusanka", "Richmond");
emp2.hello();
emp2.job("Manager");
emp2.mySchool();
