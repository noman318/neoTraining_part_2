"use strict";
exports.__esModule = true;
exports.Comp = exports.title = exports.xyz = void 0;
function xyz() {
    return 'Noman';
}
exports.xyz = xyz;
var title = 'myComp';
exports.title = title;
var Comp = /** @class */ (function () {
    function Comp() {
    }
    Comp.prototype.abc = function () {
        return 'This is my Company';
    };
    return Comp;
}());
exports.Comp = Comp;
