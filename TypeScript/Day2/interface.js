var Person = /** @class */ (function () {
    function Person(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    Person.prototype.toJson = function () {
        return JSON.stringify({ fname: this.fname, lname: this.lname });
    };
    return Person;
}());
var obj = new Person('Shaikh', 'Noman');
console.log(obj.toJson());
