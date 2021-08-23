"use strict";
//TypeScript中的继承
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getInfo = function () {
        return "My name is " + this.name + ", I'm " + this.age + " years old.";
    };
    return Person;
}());
var p = new Person('Sogrey', 30);
console.log(p.getInfo()); //"My name is Sogrey, I'm 30 years old."
///////////
//继承
///////////
var Man = /** @class */ (function (_super) {
    __extends(Man, _super);
    function Man(name, age) {
        return _super.call(this, name, age) || this;
    }
    return Man;
}(Person));
var man = new Man('Linda', 20);
console.log(man.getInfo()); //"My name is Linda, I'm 20 years old."
//类里面的修饰符
///////////////////
//静态属性、静态方法
///////////////////
var Woman = /** @class */ (function () {
    function Woman(name, age) {
        this.name = 'Sogrey'; //属性 前面省略了`public`关键字
        this.age = 30;
        this.name = name;
        this.age = age;
    }
    //实例方法
    Woman.prototype.getInfo = function () {
        return "My name is " + this.name + ", I'm " + this.age + " years old.";
    };
    //静态方法
    Woman.print = function () {
        console.log("This is a static function.");
        // console.log(`My name is ${this.name}, I'm ${this.age} years old.`);//类型“typeof Woman”上不存在属性“age”。
        console.log("Sex is " + this.sex + ".");
    };
    Woman.sex = '男'; //静态属性
    return Woman;
}());
Woman.print();
//This is a static function.
//Sex is 男.
/////////////////////
//抽象类 继承 多态
/////////////////////
//多态
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    //多态 父类定义一个方法而不去实现它，让子类实现，每个子类将有不同表现。
    Animal.prototype.run = function () {
        // console.log(`${this.name} is running.`);
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.run = function () {
        return this.name + " is sleeping.";
    };
    return Cat;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.run = function () {
        return this.name + " is jumping.";
    };
    return Dog;
}(Animal));
//抽象类
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
// var s = new Student();//报错 无法创建抽象类的实例。
var Pupil = /** @class */ (function (_super) {
    __extends(Pupil, _super);
    function Pupil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //继承抽象类，其抽象方法必须实现
    Pupil.prototype.getType = function () {
        return "Pupil";
    };
    return Pupil;
}(Student));
