//TypeScript中的继承

/////////
//类的定义
/////////
//ES5
/*
function Person(name,age){
    //属性
    this.name = name;
    this.age = age;

    //方法
    this.getInfo = function(){
        return "My name is "+this.name+", I'm "+ this.age + ' years old.';
    }
}
var p = new Person('Sogrey',25);
p.getInfo();
*/

//TypeScript
class Person {
    name: string;//属性 前面省略了`public`关键字
    age: number;

    constructor(name: string, age: number) {//构造函数 实例化时会触发
        this.name = name;
        this.age = age;
    }

    getInfo(): string {
        return `My name is ${this.name}, I'm ${this.age} years old.`;
    }
}

var p = new Person('Sogrey', 30);
console.log(p.getInfo());//"My name is Sogrey, I'm 30 years old."

///////////
//继承
///////////

class Man extends Person {
    constructor(name: string, age: number) {//构造函数 实例化时会触发
        super(name, age);
    }
}

var man = new Man('Linda', 20);
console.log(man.getInfo());//"My name is Linda, I'm 20 years old."


//类里面的修饰符

///////////////////
//静态属性、静态方法
///////////////////

class Woman {
    name: string = 'Sogrey';//属性 前面省略了`public`关键字
    age: number = 30;
    static sex: string = '男';//静态属性

    constructor(name: string, age: number) {//构造函数 实例化时会触发
        this.name = name;
        this.age = age;
    }

    //实例方法
    getInfo(): string {
        return `My name is ${this.name}, I'm ${this.age} years old.`;
    }
    //静态方法
    static print() {
        console.log(`This is a static function.`);
        // console.log(`My name is ${this.name}, I'm ${this.age} years old.`);//类型“typeof Woman”上不存在属性“age”。
        console.log(`Sex is ${this.sex}.`);
    }
}

Woman.print();
//This is a static function.
//Sex is 男.

/////////////////////
//抽象类 继承 多态
/////////////////////
//多态
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    //多态 父类定义一个方法而不去实现它，让子类实现，每个子类将有不同表现。
    run() {
        // console.log(`${this.name} is running.`);
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }
    run(){
        return `${this.name} is sleeping.`;
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    run(){
        return `${this.name} is jumping.`;
    }
}


//抽象类
abstract class Student {
    //abstract 修饰抽象方法，不用去实现它。
    abstract getType():any;
}

// var s = new Student();//报错 无法创建抽象类的实例。

class Pupil extends Student {
    //继承抽象类，其抽象方法必须实现
    getType(){
        return "Pupil";
    }
}