"use strict";
//接口的作用
// ..
// 属性接口
//json约束
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj); //Size 10 Object
function printName(name) {
    //参数name必须有firstName和secondName属性字段
    console.log(name.firstName + " \u00B7 " + name.secondName);
}
/*
printName({
    age:25,
    firstName: 'Steve',
    secondName: 'Jobs'
});
//报错
类型“{ age: number; firstName: string; secondName: string; }”的参数不能赋给类型“FullName”的参数。
对象文字可以只指定已知属性，并且“age”不在类型“FullName”中。
*/
printName({
    firstName: 'Steve',
    secondName: 'Jobs'
}); //Steve · Jobs
// 正确 以上写法时，参数对象只能包含接口规定的参数以及对应数据类型，多余参数会报错。
var info = {
    age: 25,
    firstName: 'Steve',
    secondName: 'Jobs'
};
printName(info); //Steve · Jobs
function printPersonInfo(info) {
    if (info.age)
        console.log(info.firstName + " \u00B7 " + info.secondName + " is " + info.age + " years old.");
    else
        console.log("How old is " + info.firstName + " \u00B7 " + info.secondName + " ?");
}
printPersonInfo({
    age: 25,
    firstName: 'Steve',
    secondName: 'Jobs'
}); //Steve · Jobs is 25 years old.
printPersonInfo({
    firstName: 'Steve',
    secondName: 'Jobs'
}); //How old is Steve · Jobs ?
var md5 = function (key, value) {
    // 模拟结果
    return "md5 " + key + " " + value;
};
console.log(md5("asdfgh", "Sogrey")); //md5 asdfgh Sogrey
// 可索引接口
// ts定义数组
var arr = [11, 223];
var aar1 = ['12', 'ased'];
var ua = ['aaa', 'sss'];
// var ua:UseArr = ['aaa','sss',1];//不能将类型“number”分配给类型“string”。
console.log(ua[1]); //sss
var uo = {
    index: '001',
    name: 'Steve Jobs'
};
console.log(uo); //{index: "001", name: "Steve Jobs"}
var Cattle = /** @class */ (function () {
    function Cattle(name) {
        this.name = name;
    }
    Cattle.prototype.eat = function () {
        console.log(this.name + " eat grass.");
    };
    return Cattle;
}());
var cattle = new Cattle('Beitina');
cattle.eat(); //Beitina eat grass.
// 接口扩展
