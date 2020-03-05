////////////////
// 函数的定义
////////////////


// ES5中：
// function name(params) {
//     //...
// }
// var name2 = function(params){
//     //...
// }


// Tyscript中：

function run(): number {
    return 123;
}
run();//123

/*
错误，返回数据类型不对应
function run():string{
    return 123;
}
*/

var fun = function (): number {
    return 123;
}
fun();//123

//////////////
//函数传参
//////////////

function addNumber(a: number, b: number): number {
    return a + b;
}
addNumber(2, 3);//5

var getInfo = function (name: string, age: number): string {
    return `${name} is ${age} years old.`
}
getInfo("sogrey", 25);//"sogrey is 25 years old."

//////////
//可选参数
//////////

var getInfo2 = function (name: string, age?: number): string {
    if (age) {
        return `${name} is ${age} years old.`
    } else {
        return `How old is ${name}?`
    }
}
getInfo2("sogrey", 25);//"sogrey is 25 years old."
getInfo2("sogrey");//"How old is sogrey?"


//////////
//默认参数
//////////

var getInfo3 = function (name: string, age: number = 20): string {
    if (age) {
        return `${name} is ${age} years old.`
    } else {
        return `How old is ${name}?`
    }
}
getInfo3("sogrey");//"sogrey is 20 years old."



/////////////////
//剩余参数
/////////////////

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


// 另一种方式

function sum3(q:number,...a: number[]): number {
    var sum = q;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}
sum3(1, 2, 3, 4);//10

///////////
//函数重载
///////////

function getPersonInfo(name:string):string;
function getPersonInfo(age:number):string;
function getPersonInfo(str:any):any{
    if(typeof str==="string"){
        return `My name is ${str}`;
    }else if(typeof str==="number"){
        return `I'm ${str} years old.`;
    }
}

getPersonInfo("sogrey"); // "My name is sogrey"
getPersonInfo(25); // "I'm 25 years old."



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

///////////
//箭头函数
///////////

setTimeout(()=>{
    alert("超时");
},1000)


function myFun(fun1:any, fun2:any) {
    fun1();
    fun2("参数来自fun2");
}

myFun(() => {
    console.log("fun1");
}, (value:any) => {
    console.log(value);
});
