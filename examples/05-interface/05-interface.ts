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
});//Steve · Jobs

// 正确 以上写法时，参数对象只能包含接口规定的参数以及对应数据类型，多余参数会报错。

var info = {
    age: 25,
    firstName: 'Steve',
    secondName: 'Jobs'
}
printName(info);//Steve · Jobs

// 以上写法也正确 参数对象单独定义，在传入`printName`函数中，多余的参数不会报错，但接口规定的参数的属性字段数据类型必须保持一致。

// 对批量方法约束

// function printName(name: FullName) {
//     //参数name必须有firstName和secondName属性字段
//     console.log(`${name.firstName} · ${name.secondName} is ${name.age} years old.`);
// }// 类型“FullName”上不存在属性“age”。


// 可选属性接口

interface PersonInfo {
    firstName: string;
    secondName: string;
    age?: number;// ? 可选属性字段
}

function printPersonInfo(info: PersonInfo) {
    if (info.age)
        console.log(`${info.firstName} · ${info.secondName} is ${info.age} years old.`);
    else
        console.log(`How old is ${info.firstName} · ${info.secondName} ?`);
}

printPersonInfo({
    age: 25,
    firstName: 'Steve',
    secondName: 'Jobs'
});//Steve · Jobs is 25 years old.

printPersonInfo({
    firstName: 'Steve',
    secondName: 'Jobs'
});//How old is Steve · Jobs ?



// 函数接口
//对方法的传入参数以及返回值进行约束。

// 举例：加密接口
interface encrypt {
    (key: string, value: string): string
}

var md5: encrypt = function (key: string, value: string): string {
    // 模拟结果
    return `md5 ${key} ${value}`
}

console.log(md5("asdfgh", "Sogrey"));//md5 asdfgh Sogrey




// 可索引接口

// ts定义数组

var arr: number[] = [11, 223];
var aar1: Array<string> = ['12', 'ased'];

interface UseArr {
    [index: number]: string
}

var ua: UseArr = ['aaa', 'sss'];
// var ua:UseArr = ['aaa','sss',1];//不能将类型“number”分配给类型“string”。

console.log(ua[1]);//sss


interface UseObject {
    [index: string]: string
}

var uo: UseObject = {
    index: '001',
    name: 'Steve Jobs'
};

console.log(uo);//{index: "001", name: "Steve Jobs"}


// 类类型接口

interface Animals {
    name: string;
    eat(str: string): void;
}

class Cattle implements Animals {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} eat grass.`);
    }
}

var cattle = new Cattle('Beitina');
cattle.eat();//Beitina eat grass.

// 接口扩展
