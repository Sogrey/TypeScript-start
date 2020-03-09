---
sidebarDepth: 5
---

# 02 TypeScript 基础数据类型

::: tip TypeScript是强类型语言

TypeScript中为了是编写代码更加规范，更有利于维护，增加了数据类型校验。

:::

## 布尔类型（boolean）

ES5语法：
``` js
var flag = true;
flag = 456;
```
TS语法：
``` ts
var flag = true;
// flag = 456;//报错 不能将类型“456”分配给类型“boolean”。
flag = false;//正确
```
## 数字类型（number）
``` ts
var num:number = 123;
num=345;
console.log(num);//345

// num = 'str'//错误 不能将类型“"str"”分配给类型“number”。
```
## 字符串类型（string）
``` ts
var str:string = "str";
str = "hello typescript";
// str = 123;//错误 不能将类型“123”分配给类型“string”。
```
## 数组类型（array）

ES5：
``` js
var array = ['1','2'];
```
TS:

方式一
``` ts
var array:number[]=[11,12,13];
console.log(array);

// var array:number[]=[11,12,'13'];// 错误 不能将类型“string”分配给类型“number”。
```
方式二
``` ts
var array2:Array<number> = [11,12,13];
console.log(array2);

// var array2:Array<number> = [11,12,'13']; //错误 不能将类型“string”分配给类型“number”。
```

## 元组类型（tuple）

属于数组的一种
``` ts
var tuple:Array<number> = [11,12,13];
console.log(tuple);
```
元祖可以给数组中每个元素指定不同数据类型
``` ts
let tuple2:[number,string] = [11,'12'];//正确
// let tuple3:[number,string] = [11,12];//报错 不能将类型“number”分配给类型“string”。
```
## 枚举类型（enum）

语法格式：
``` ts
enum 枚举名{
    标识符1[=整形常数1],
    标识符2[=整形常数2],
    标识符3[=整形常数3],
    ...
    标识符n[=整形常数n]
}
```
比如：
``` ts
enum Flag{
    success,
    erroe
}
let f:Flag=Flag.success;
console.log(f);//0

// or

enum Flag1{
    success=1,
    erroe=0
}
let f1:Flag1=Flag1.success;
console.log(f1);//1
```
枚举标识符如果没有赋值，其值为其下标位置，如果赋值则为其值本身。

## 任意类型（any）
任意类型即不限类型,就和ES5中弱类型相似。

``` ts
var a:any = 123;
console.log(a);//123

a = "This is a str.";
console.log(a);//This is a str.

a = true;
console.log(a);//true
```

## null和undefined
定义了数据没有赋值，

``` ts
var num1: number;
// console.log(num1);//报错 有输出`undefined` 在赋值前使用了变量“num1”。

var num2: number | undefined;//可能是数字，可能为undefined
// var num2: number | undefined | null;//可能是数字，可能为undefined，可能为null
console.log(num2);//undefined
```

## void类型
函数没有返回值。
``` ts
function add():void{
    console.log("add");
}
add();//add

// 错误。其声明类型不为 "void" 或 "any" 的函数必须返回值。
// function sub():undefined{
//     console.log("sub");
// }
```
拓展,有指定返回值类型。
``` ts
function sub(a:number,b:number):number{
    return a-b;
}
var subResult=sub(5,3);
console.log(subResult);//2 = 5-3
```

## never类型

`never`类型是其他类型(包括`null`和`undefined`)的子类型,代表从不会出现的值。申明`never`类型的变量只能被`never`类型的值赋值。

``` ts
var aa : undefined;
aa = undefined;

var bb:null;
bb=null;


var cc:never;
// cc=123;//报错 不能将类型“123”分配给类型“never”。
// 正确
cc=(()=>{
    throw new Error('错误')
})()
```

## 参考

