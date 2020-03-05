"use strict";
// TypeScript 基本数据类型
/////////////////////
// 布尔类型（boolean）
/////////////////////
/*

ES5语法：

var flag = true;
flag = 456;

*/
// TS语法：
var flag = true;
// flag = 456;//报错 不能将类型“456”分配给类型“boolean”。
flag = false; //正确
/////////////////////
// 数字类型（number）
/////////////////////
var num = 123;
num = 345;
console.log(num); //345
// num = 'str'//错误 不能将类型“"str"”分配给类型“number”。
//////////////////////
// 字符串类型（string）
//////////////////////
var str = "str";
str = "hello typescript";
// str = 123;//错误 不能将类型“123”分配给类型“string”。
////////////////////////
// 数组类型（array）
////////////////////////
// var array = ['1','2'];//ES5
// 方式一
var array = [11, 12, 13];
console.log(array);
// var array:number[]=[11,12,'13'];// 错误 不能将类型“string”分配给类型“number”。
// 方式二
var array2 = [11, 12, 13];
console.log(array2);
// var array2:Array<number> = [11,12,'13']; //错误 不能将类型“string”分配给类型“number”。
////////////////////////////////////
// 元组类型（tuple） 属于数组的一种
////////////////////////////////////
var tuple = [11, 12, 13];
console.log(tuple);
//元祖可以给数组中每个元素指定数据类型
var tuple2 = [11, '12']; //正确
console.log(tuple2);
// let tuple3:[number,string] = [11,12];//报错 不能将类型“number”分配给类型“string”。
/////////////////
// 枚举类型（enum）
/////////////////
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 0] = "success";
    Flag[Flag["erroe"] = 1] = "erroe";
})(Flag || (Flag = {}));
var f = Flag.success;
console.log(f); //0
// or
var Flag1;
(function (Flag1) {
    Flag1[Flag1["success"] = 1] = "success";
    Flag1[Flag1["erroe"] = 0] = "erroe";
})(Flag1 || (Flag1 = {}));
var f1 = Flag1.success;
console.log(f1); //1
///////////////////
// 任意类型（any）
//////////////////
var a = 123;
console.log(a); //123
a = "This is a str.";
console.log(a); //This is a str.
a = true;
console.log(a); //true
////////////////////////
// null和undefined
////////////////////////
var num1;
// console.log(num1);//报错 有输出`undefined` 在赋值前使用了变量“num1”。
var num2;
console.log(num2); //undefined
/////////////////////
// void类型
/////////////////////
function add() {
    console.log("add");
}
add(); //add
// 其声明类型不为 "void" 或 "any" 的函数必须返回值。
// function sub():undefined{
//     console.log("sub");
// }
function sub(a, b) {
    return a - b;
}
var subResult = sub(5, 3);
console.log(subResult); //2 = 5-3
//////////////
// never类型
//////////////
var aa;
aa = undefined;
var bb;
bb = null;
var cc;
// cc=123;//报错 不能将类型“123”分配给类型“never”。
//正确
cc = (function () {
    throw new Error('错误');
})();
