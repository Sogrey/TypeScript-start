"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printString(str) {
    console.log("\u6253\u5370\u8F93\u51FA " + str);
}
exports.printString = printString;
var arr = [1, 2, 3, 4];
var newArr = arr.filter(function (item) { return item % 2 !== 0; });
console.log(newArr); // [1, 3];
