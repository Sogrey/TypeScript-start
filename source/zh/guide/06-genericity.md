---
sidebarDepth: 5
---

# 06 TypeScript中的泛型

## 泛型的定义
软件工作中，我们不仅要创建一致定义良好的API,同时还要考虑**可复用性**。组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型项目时为你提供十分灵活的功能。

像C#和Java这样的语言中，可以使用泛型**创建可重用的组件**，一个组件可以**支持多种类型的数据**。这样用户可以以自己的数据类型使用这些组件。

泛型就是**解决类、接口、方法的复用性、以及对不特定类型的数据的支持**。

## 泛型函数
``` ts
function getData(value:string):string{
    return value;
}
function getData1(num:number):number{
    return num;
}
```
以上两个函数结构雷同，功能能相似，只是传入和返回值类型不同，这样的的一类方法可以用一个方法复用：
``` ts
function getData(value:any):any{
    return value;
}
```
但会有个问题：`any`类型相当于放弃类型检查。现在加一条约束条件：传入`number`类型参数必须返回`number`类型的返回值，传入`string`类型的参数就必须返回`string`类型的返回值。
``` ts
function getData<T>(value:T):T{
    return value;
}
console.log(getData<number>(123));//123
// console.log(getData<number>(`123`));//报错 类型“"123"”的参数不能赋给类型“number”的参数。
```
`T`表示泛型，具体什么类型时调用这个方法时决定的。
## 泛型类
举例求最小值：

``` ts
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
```
上面仅支持`number`类型数据。改造让其同时支持`string`类型：
``` ts
class MinClass<T> {
    public list: T[] = [];
    add(value: T) {
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
var m = new MinClass<number>();
var min = m.min();
console.log(min);//undefined
m.add(2).add(3).add(1).add(-6).add(8);
min = m.min();
console.log(min);//-6

var m2 = new MinClass<string>();
var min2 = m2.min();
console.log(min2);//undefined
m2.add(`Z`).add(`a`).add(`A`).add(`D`).add(`b`);
min2 = m2.min();
console.log(min2);//'A'
```
## 泛型接口

``` ts
interface MathClass {
    (num1: number, num2: number): number;
}

var addFun: MathClass = function (num1: number, num2: number): number {
    return num1 + num2;
}

console.log(addFun(1,3));//4
```
以上接口仅支持`number`类型，现在扩展他使其同时支持`string`类型：
``` ts
interface MathClass {
    <T>(value: T): T;
}

var getDataValue: MathClass = function <T> (value: T): T {
    return value;
}

console.log(getDataValue<number>(123));//123
console.log(getDataValue<string>("加油中国"));//加油中国
// console.log(getDataValue<string>(123));//报错 类型“123”的参数不能赋给类型“string”的参数。
```

还有一种定义泛型接口方法：
``` ts
interface PackingClass <T>{
    (value: T): T;
}

function getPackingDataValue<T>(value: T): T {
    return value;
}

//指定泛型类型为 string
var myGetPackingDataValue:PackingClass<string> = getPackingDataValue;

// console.log(myGetPackingDataValue(123));//报错 类型“123”的参数不能赋给类型“string”的参数。
console.log(myGetPackingDataValue("加油中国"));//加油中国
```

## 泛型类作为参数
举例用户信息入库：
``` ts
class User {
    userName: string | undefined;
    password: string | undefined;
}
class MySqlDb {
    add(user: User): Boolean {
        console.log(user);
        // 插入数据库操作等...
        // ...
        return true;
    }
}

var u = new User();
u.userName = `Sogrey`;
u.password = `123456`;

var db = new MySqlDb();
console.log(db.add(u));
```
使用泛型封装：
``` ts

class User {
    userName: string | undefined;
    password: string | undefined;
}
class News {
    title: string | undefined;
    date: string | undefined;
    desc: string | undefined;
    pics: string[] | undefined;
    constructor(params: {
        title: string | undefined,
        date: string | undefined,
        desc: string | undefined,
        pics?: string[] | undefined//可选参数
    }) {
        this.title = params.title;
        this.date = params.date;
        this.desc = params.desc;
        this.pics = params.pics;
    }
}
class MySqlDb<T> {
    add(t: T): Boolean {
        console.log(t);
        // 插入数据库操作等...
        // ...
        return true;
    }
}

var u = new User();
u.userName = `Sogrey`;
u.password = `123456`;

var db = new MySqlDb<User>();// 校验User类型
console.log(db.add(u));//true
//User {userName: "Sogrey", password: "123456"}
// db.add("123");//报错 类型“"123"”的参数不能赋给类型“User”的参数。

var n = new News({
    title: "武汉疫情已得到全面控制",
    date: "2020-03-11",
    desc: "正文内容..."
});
var dbNews = new MySqlDb<News>();// 校验News类型
console.log(dbNews.add(n));//true
//News {title: "武汉疫情已得到全面控制", date: "2020-03-11", desc: "正文内容...", pics: undefined}
```