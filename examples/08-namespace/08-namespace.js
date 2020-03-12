"use strict";
//命名空间
Object.defineProperty(exports, "__esModule", { value: true });
var AModules_1 = require("./AModules");
var aDog = new AModules_1.A.Dog("泰迪");
console.log(aDog.getName()); //A 泰迪
var bDog = new AModules_1.B.Dog("斗牛犬");
console.log(bDog.getName()); //B 斗牛犬
