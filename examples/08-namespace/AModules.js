"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var A;
(function (A) {
    var Dog = /** @class */ (function () {
        function Dog(name) {
            this.name = name;
        }
        Dog.prototype.getName = function () {
            return "A " + this.name;
        };
        return Dog;
    }());
    A.Dog = Dog;
})(A = exports.A || (exports.A = {}));
var B;
(function (B) {
    var Dog = /** @class */ (function () {
        function Dog(name) {
            this.name = name;
        }
        Dog.prototype.getName = function () {
            return "B " + this.name;
        };
        return Dog;
    }());
    B.Dog = Dog;
})(B = exports.B || (exports.B = {}));
