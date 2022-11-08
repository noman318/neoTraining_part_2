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
    function Employee(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    Object.defineProperty(Employee.prototype, "FullName", {
        get: function () {
            return "".concat(this.fname, " ").concat(this.lname);
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.statement = function () {
        return "".concat(this.FullName, " got ").concat(this.getSalary(), " per month");
    };
    return Employee;
}());
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee(fname, lname, salary) {
        var _this = _super.call(this, fname, lname) || this;
        _this.salary = salary;
        return _this;
    }
    FullTimeEmployee.prototype.getSalary = function () {
        return this.salary;
    };
    return FullTimeEmployee;
}(Employee));
var obj12 = new FullTimeEmployee("Shikh", "Noman", 56000);
console.log(obj12.statement());
