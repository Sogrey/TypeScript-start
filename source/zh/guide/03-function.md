---
sidebarDepth: 5
---

# TypeScript 函数

## 函数的定义
ES5中：
``` js
function name(params) {
    //...
}
var name2 = function(params){
    //...
}
```
Tyscript中：
``` ts
function run():number{
    return 123;
}
run();//123

/*
错误，返回数据类型不对应
function run():string{
    return 123;
}
*/

var fun = function():number{
    return 123;
}
fun();//123
```
## 函数传参

函数有返回值类型，参数也有类型指定，传参必须符合数据类型，否则报错。
``` ts
function addNumber(a:number,b:number):number{
    return a+b;
}
addNumber(2,3);//5

var getInfo = function(name:string,age:number):string{
    return `${name} is ${age} years old.`
}
getInfo("sogrey",25);//"sogrey is 25 years old."
```

## 可选参数
ES5中方法的实参与形参可以不一样，但在ts中必须一样。如果不一样，可配置可选参数`?`来实现。
``` ts
var getInfo2 = function (name: string, age? : number): string {
    if (age) {
        return `${name} is ${age} years old.`
    } else {
        return `How old is ${name}?`
    }
}
getInfo2("sogrey", 25);//"sogrey is 25 years old."
getInfo2("sogrey");//"How old is sogrey?"
```

> **注意**：可选参数必须配置到参数列表末尾。
> 
> ``` ts
> // 错误写法
> var getInfo2 = function (name? : string, age : number): string {
>     //...
> }
> ```



## 默认参数
ES5中没有默认参数，ES6和TS有。
``` ts
var getInfo3 = function (name: string, age : number=20): string {
    if (age) {
        return `${name} is ${age} years old.`
    } else {
        return `How old is ${name}?`
    }
}
getInfo3("sogrey");//"sogrey is 20 years old."
```
## 剩余参数

``` ts
function sum(a: number, b: number, c: number, d: number): number {
    return a + b + c + d;
}
sum(1, 2, 3, 4);//10

//  ↓

function sum2(...a: number[]): number {
    var sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}
sum2(1, 2, 3, 4);//10
```

另一种方式：
``` ts
function sum3(q:number,...a: number[]): number {
    var sum = q;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}
sum3(1, 2, 3, 4);//10
```

## 函数重载

Java中方法的重载指的是两个同名函数，参数不一样，即为重载。

TypeScript中通过一个函数提供多个函数类型定义实现多重功能。为兼容ES5和ES6，TypeScript的重载与Java不同。

ES5中：
``` js
function css(config){

}
function css(config,value){
    
}
//后一个重名函数会覆盖前一个
```
ts中：
``` ts
function getPersonInfo(name:string):string;
function getPersonInfo(age:number):string;
function getPersonInfo(str:any):any{
    if(typeof str==="string"){
        return `My name is ${str}`;
    }else if(typeof str==="number"){
        return `I'm ${str} years old.`;
    }
}

getPersonInfo("sogtey"); // "My name is sogtey"
getPersonInfo(25); // "I'm 25 years old."
```
``` ts
function getPersonInfo2(name:string):string;
function getPersonInfo2(name:string,age:number):string;
function getPersonInfo2(name:any,age?:any):any{
    if(age){
        return `My name is ${name},I'm ${age} years old.`;
    }else{
        return `My name is ${name}.`;
    }
}

getPersonInfo2("sogrey"); // "My name is sogrey."
getPersonInfo2("sogrey",25); // "My name is sogrey,I'm 25 years old."
```

## 箭头函数

ES6中的功能。

ES5:
``` js
setTimeout(function(){
    alert("超时");
},1000)
```

ES6:
``` js
setTimeout(()=>{
    alert("超时");
},1000)
```

> **注意**：箭头函数里的`this`指向上下文。

``` ts
function myFun(fun1:any, fun2:any) {
    fun1();
    fun2("参数来自fun2");
}

myFun(() => {
    console.log("fun1");
}, (value:any) => {
    console.log(value);
});
```
输出：
```
fun1
参数来自fun2
```



