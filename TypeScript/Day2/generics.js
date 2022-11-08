var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
console.log('myGenerics');
function getRanElem(items) {
    var ranInd = Math.floor(Math.random() * items.length);
    return items[ranInd];
}
var num = [1, 3, 4, 5, 6, 7];
var randElem = getRanElem(num);
// console.log(randElem)
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var person = merge({ name: 'Noman' }, { age: 22 });
console.log(person);
