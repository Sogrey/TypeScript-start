//接口的作用
// ..


// 属性接口

//json约束
function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);//Size 10 Object

//传入对象的约束

interface FullName {
    firstName: string;
    secondName: string;// 注意需要以分号[;]结尾
}

function printName(name: FullName) {
    //参数name必须有firstName和secondName属性字段
    console.log(`${name.firstName} · ${name.secondName}`);
}

printName({
    firstName: 'Steve',
    secondName: 'Jobs'
});//Steve · Jobs