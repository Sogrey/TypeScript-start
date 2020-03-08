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
printName({
    firstName: 'Steve',
    secondName: 'Jobs'
}); //Steve · Jobs
