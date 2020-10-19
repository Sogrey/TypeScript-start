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
function getData<T>(value: T): T {
    return value;
}
console.log(getData<number>(123));//123
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




// 泛型接口
/*
interface MathClass {
    (num1: number, num2: number): number;
}

var addFun: MathClass = function (num1: number, num2: number): number {
    return num1 + num2;
}

console.log(addFun(1,3));//4
*/


interface MathClass {
    <T>(value: T): T;
}

var getDataValue: MathClass = function <T>(value: T): T {
    return value;
}

console.log(getDataValue<number>(123));//123
console.log(getDataValue<string>("加油中国"));//加油中国
// console.log(getDataValue<string>(123));//报错 类型“123”的参数不能赋给类型“string”的参数。

interface PackingClass<T> {
    (value: T): T;
}

function getPackingDataValue<T>(value: T): T {
    return value;
}

var myGetPackingDataValue: PackingClass<string> = getPackingDataValue;

// console.log(myGetPackingDataValue(123));//报错 类型“123”的参数不能赋给类型“string”的参数。
console.log(myGetPackingDataValue("加油中国"));//加油中国


// 泛型类作为参数

/*
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
*/

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
        pics?: string[] | undefined//可空
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

var dbNews = new MySqlDb<News>();// 校验User类型
console.log(dbNews.add(n));//true
//News {title: "武汉疫情已得到全面控制", date: "2020-03-11", desc: "正文内容...", pics: undefined}
