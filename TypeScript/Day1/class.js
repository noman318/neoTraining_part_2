var Car = /** @class */ (function () {
    function Car() {
        this.speed = 50;
    }
    Car.prototype.acc = function () {
        return this.speed += 30;
    };
    Car.prototype.checkSpeed = function () {
        console.log("this speed is ".concat(this.speed));
    };
    return Car;
}());
var obj = new Car();
// obj.speed()
obj.checkSpeed();
obj.acc();
obj.checkSpeed();
