---
sidebarDepth: 5
---

# TypeScript中的接口

## 接口的作用

在面向对象编程中，接口是一种规范定义，它定义了行为和动作规范，在程序设计中，接口起到一种限制和规范的作用。接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类方法的实现细节，只规定这些类必须提供某些方法，提供这些方法得类就可以满足实际需求。TypeScript中提供的接口类似于Java，但同时增加了更加灵活的接口类型，包括属性、函数、可索引和类等。

## 属性接口
对json的约束。
``` ts
function printLabel(labelledObj:{label:string}){
    console.log(labelledObj.label);
}

let myObj = {size:10,label:'Size 10 Object'};
printLabel(myObj);//Size 10 Object
```
上面例子中,`printLabel` 函数传入一个对象（`labelledObj`），并且该对象须有一个`string`类型的属性字段`label`

对批量方法约束



`interface`关键字

## 函数接口

## 可索引接口

## 类类型接口

## 接口扩展
