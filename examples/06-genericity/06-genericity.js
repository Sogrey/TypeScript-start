"use strict";
// 泛型的定义
// 泛型函数
/*
function getData(value:string):string{
    return value;
}
function getData1(num:number):number{
    return num;
}
*/
// ↓
/*
function getData(value:any):any{
    return value;
}
*/
// ↓
function getData(value) {
    return value;
}
console.log(getData(123)); //123
// console.log(getData<number>(`123`));//报错 类型“"123"”的参数不能赋给类型“number”的参数。
// 泛型类
/*
class MinClass {
    public list: number[] = [];
    add(value: number) {
        this.list.push(value);
        return this;//这里this指向MinClass本身
    }
    min() {
        if (this.list.length > 0) {
            var minNum = this.list[0];
            for (let i = 0; i < this.list.length; i++) {
                if (this.list[i] < minNum)
                    minNum = this.list[i];
            }
            return minNum;
        }
        return undefined;
    }
}
var m = new MinClass();
var min = m.min();
console.log(min);//undefined
m.add(2).add(3).add(1).add(-6).add(8);
min = m.min();
console.log(min);//-6
*/
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (value) {
        this.list.push(value);
        return this; //这里this指向MinClass本身
    };
    MinClass.prototype.min = function () {
        if (this.list.length > 0) {
            var minNum = this.list[0];
            for (var i = 0; i < this.list.length; i++) {
                if (this.list[i] < minNum)
                    minNum = this.list[i];
            }
            return minNum;
        }
        return undefined;
    };
    return MinClass;
}());
var m = new MinClass();
var min = m.min();
console.log(min); //undefined
m.add(2).add(3).add(1).add(-6).add(8);
min = m.min();
console.log(min); //-6
var m2 = new MinClass();
var min2 = m2.min();
console.log(min2); //undefined
m2.add("Z").add("a").add("A").add("D").add("b");
min2 = m2.min();
console.log(min2); //'A'
var getDataValue = function (value) {
    return value;
};
console.log(getDataValue(123)); //123
console.log(getDataValue("加油中国")); //加油中国
function getPackingDataValue(value) {
    return value;
}
var myGetPackingDataValue = getPackingDataValue;
// console.log(myGetPackingDataValue(123));//报错 类型“123”的参数不能赋给类型“string”的参数。
console.log(myGetPackingDataValue("加油中国")); //加油中国
