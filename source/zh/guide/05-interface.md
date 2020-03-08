---
sidebarDepth: 5
---

# TypeScript中的接口

## 接口的作用

在面向对象编程中，接口是一种规范定义，它定义了行为和动作规范，在程序设计中，接口起到一种限制和规范的作用。接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类方法的实现细节，只规定这些类必须提供某些方法，提供这些方法得类就可以满足实际需求。TypeScript中提供的接口类似于Java，但同时增加了更加灵活的接口类型，包括属性、函数、可索引和类等。

## 属性接口
### 对json的约束
``` ts
function printLabel(labelledObj:{label:string}){
    console.log(labelledObj.label);
}

let myObj = {size:10,label:'Size 10 Object'};
printLabel(myObj);//Size 10 Object
```
上面例子中,`printLabel` 函数传入一个对象（`labelledObj`），并且该对象须有一个`string`类型的属性字段`label`

### 对函数参数对象的属性约束

`interface`关键字

``` ts
interface FullName {
    firstName: string;
    secondName: string;// 注意需要以分号[;]结尾
}

function printName(name: FullName) {
    //参数name必须有firstName和secondName属性字段
    console.log(`${name.firstName} · ${name.secondName}`);
}
```

``` ts
printName({
    age:25, //报错
    firstName: 'Steve',
    secondName: 'Jobs'
});
```
报错。

> 类型“{ age: number; firstName: string; secondName: string; }”的参数不能赋给类型“FullName”的参数。
>
> 对象文字可以只指定已知属性，并且“age”不在类型“FullName”中。

``` ts
printName({
    firstName: 'Steve',
    secondName: 'Jobs'
});//Steve · Jobs
```
 正确 以上写法时，参数对象**只能**包含接口规定的参数以及对应数据类型，多余参数会报错。

``` ts
var info= {
    age:25,
    firstName: 'Steve',
    secondName: 'Jobs'
}
printName(info);//Steve · Jobs
```
以上写法也正确 参数对象单独定义，再传入`printName`函数中，多余的参数不会报错，但接口规定的参数的属性字段数据类型依然必须保持一致。

### 对批量方法约束
`printName`函数上面两种正确传参的写法，不论哪一种，其实现方法`printName`的函数体内只能调用接口`FullName`规定好的属性字段，多余的会报错。比如：
``` ts
function printName(name: FullName) {
    //参数name必须有firstName和secondName属性字段
    console.log(`${name.firstName} · ${name.secondName} is ${name.age} years old.`);
}
```

其中在调用参数`name`的`age`属性时会报错：
```
类型“FullName”上不存在属性“age”。
```

### 可选属性接口
接口定义参数对象属性字段加上问好`?`，代表可选属性字段。
``` ts
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
```

## 函数接口
对方法的传入参数以及返回值进行约束。可以批量约束。
``` ts
// 举例：加密规范接口
interface encrypt {
    (key: string, value: string): string
}

var md5: encrypt = function (key: string, value: string): string {
    // 模拟结果
    return `md5 ${key} ${value}`
}

console.log(md5("asdfgh","Sogrey"));//md5 asdfgh Sogrey
```
## 可索引接口

### 对数组的约束

回顾ts定义数组定义：
``` ts
var arr: number[] = [11, 223];
var aar1: Array<string> = ['12', 'ased'];
```

``` ts
// 约束数组成员只能是string类型
interface UseArr{
    [index:number]:string
}

var ua:UseArr = ['aaa','sss'];
// var ua:UseArr = ['aaa','sss',1];//不能将类型“number”分配给类型“string”。

console.log(ua[1]);//sss
```
例子中定义的接口`UseArr`约束数组成员只能是string类型,当你定义一个`UseArr`类型的数组，其成员不全是`string`就会报错，这是`UseArr`接口约束的。

当然，如果将`UseArr`修改为：
``` ts
interface UseArr{
    [index:number]:any
}
```
`any`类型即不约束类型。

以上是定义接口对数组的约束，下面看下对对象的约束。

### 对对象的约束

``` ts
interface UseObject{
    [index:string]:string
}

var uo:UseObject = {
    index:'001',
    name:'Steve Jobs'
};

console.log(uo);//{index: "001", name: "Steve Jobs"}
```
这次接口`UseObject`定义中`index`为`string`类型,表明是对象的`index`属性类型为`string`类型。

## 类类型接口
对类的约束，与抽象类相似。
``` ts
interface Animals {
    name: string;
    eat(str: string): void;
}

class Cattle implements Animals {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    eat() {// 没有传参 str 也没有报错，但eat方法必须实现
        console.log(`${this.name} eat grass.`);
    }
}

var cattle = new Cattle('Beitina');
cattle.eat();//Beitina eat grass.
```
定义类`Cattle`必须要有`name`属性和`eat`方法，这是接口`Animals`规定的，但是`eat`方法没有传参`str`也没有报错。

## 接口扩展
//TODO