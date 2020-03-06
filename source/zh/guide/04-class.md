---
sidebarDepth: 5
---

# TypeScript中的类

## ES5中的类
``` js
function Person(){
    //属性
    this.name = 'Sogrey';
    this.age = 20;

    //方法
    this.getInfo = function(){
        return "My name is "+this.name+", I'm "+ this.age + ' years old.';
    }
}
var p = new Person();
console.log(p.name); // 'Sogrey'
console.log(p.age); // 20
console.log(p.getInfo());//"My name is Sogrey, I'm 20 years old."
```
### ES5类的原型链

ES5中不仅能在构造函数中增加属性和方法，也可以在**原型链**增加属性和方法：
``` js
Person.prototype.sex = "男";
Person.prototype.work = function(){
    console.log("从事软件工作。");
};
console.log(p.sex); // '男'
p.work(); // '从事软件工作。'
```
> **区别**：原型链上的属性会被多个实例共享，构造函数不会。

### ES5类中的静态方法
``` js
//静态属性
Person.type = 'Animal';
//静态方法
Person.getType = function(){
    console.log("这是静态方法。");
};
Person.getType();//这是静态方法。
```
> 类中静态方法不用实例化类对象，直接用`类名.方法名()`调用。

### ES5中类的继承

复用下上面的代码：
``` js
function Person(){
    //属性
    this.name = 'Sogrey';
    this.age = 20;

    //方法
    this.getInfo = function(){
        return "My name is "+this.name+", I'm "+ this.age + ' years old.';
    }
}

Person.prototype.sex = "男";
Person.prototype.work = function(){
    console.log("从事软件工作。");
};
```

#### 对象冒充的组合继承
``` js
function Man(){
    Person.call(this);
}

var man = new Man();
//构造方法中的属性和方法
console.log(man.name); // 'Sogrey'
console.log(man.age); // 20
console.log(man.getInfo());//"My name is Sogrey, I'm 20 years old."
//原型链上的属性和方法
console.log(man.sex); // undefined
man.work(); // 报错 Uncaught TypeError: man.work is not a function
```
> 对象冒充的组合继承方式可以继承构造函数中的属性和方法，但**不能继承**原型链上的属性和方法。

#### 原型链实现继承
``` js
function Woman(){
}
Woman.prototype = new Person();

var woman = new Woman();
//构造方法中的属性和方法
console.log(woman.name); // 'Sogrey'
console.log(woman.age); // 20
console.log(woman.getInfo());//"My name is Sogrey, I'm 20 years old."
//原型链上的属性和方法
console.log(woman.sex); // '男'
woman.work(); // '从事软件工作。'
```
> 原型链实现继承方式可以继承构造函数中的属性和方法，也**可以继承**原型链上的属性和方法。

#### 原型链实现继承的问题

``` js
function Person(name,age){
    //属性
    this.name = name;
    this.age = age;

    //方法
    this.getInfo = function(){
        return "My name is "+this.name+", I'm "+ this.age + ' years old.';
    }
}

Person.prototype.sex = "男";
Person.prototype.work = function(){
    console.log("从事软件工作。");
};

var p = new Person('Sogrey',25);
console.log(p.getInfo()); // My name is Sogrey, I'm 25 years old.   正常没有问题

function Woman(name,age){//当子类也有
}
Woman.prototype = new Person();

var woman1 = new Woman('Linda',32);
console.log(woman1.getInfo()); // My name is undefined, I'm undefined years old. 出错了

var woman2 = new Woman('Jack',19);
console.log(woman2.getInfo()); // My name is undefined, I'm undefined years old. 出错了
```
> 实例化子类时没法给父类传参

#### 原型链+构造函数组合实现继承
``` js
function Person(name,age){
    //属性
    this.name = name;
    this.age = age;

    //方法
    this.getInfo = function(){
        return "My name is "+this.name+", I'm "+ this.age + ' years old.';
    }
}

Person.prototype.sex = "男";
Person.prototype.work = function(){
    console.log("从事软件工作。");
};

var p = new Person('Sogrey',25);
console.log(p.getInfo()); // My name is Sogrey, I'm 25 years old.   正常没有问题

function Woman(name,age){//当子类也有
    Person.call(this,name,age); // <---- 重点在这里
}
Woman.prototype = new Person();

var woman1 = new Woman('Linda',32);
console.log(woman1.getInfo()); // My name is Linda, I'm 32 years old.  正常没有问题

var woman2 = new Woman('Jack',19);
console.log(woman2.getInfo()); // My name is Jack, I'm 19 years old.  正常没有问题
```
> 在原型链继承的基础上再结合对象冒充继承(例如上例中的`Person.call(this,name,age);`)实例化子类可以给父类传参。

另一种原型链+构造函数组合实现继承，只需要将上例中的：
``` js
Woman.prototype = new Person();
```
换成
``` js
Woman.prototype = Person.prototype;
```
## TypeScript中的类
简单回顾了ES5中类相关知识，终于来到TypeScript。
### 类的定义
ES5中类的定义：
``` js
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
```
TypeScript中类的定义：
``` ts
class Person {
    name: string;//属性 前面省略了`public`关键字
    age: number;

    constructor(name:string, age:number) {//构造函数 实例化时会触发
        this.name = name;
        this.age = age;
    }

    getInfo():string{
        return `My name is ${this.name}, I'm ${this.age} years old.`;
    }
}

var p = new Person('Sogrey',30);
console.log(p.getInfo());//"My name is Sogrey, I'm 30 years old."
```
- 使用关键字`class`定义类
- `constructor`构造函数

### 继承
ts中实现继承的两个关键字：`extends`和`super`.
``` ts
class Man extends Person{
    constructor(name:string, age:number) {//构造函数 实例化时会触发
        super(name, age);
    }
}

var man = new Man('Linda',20);
console.log(man.getInfo());//"My name is Linda, I'm 20 years old."
```
> 子类可以继承父类的属性和方法，如果子类中有与父类同名的方法或属性，就近选用子类中的属性和方法。

### 类里面的修饰符

三种修饰符：

- `public`    公有，   在类里面、子类、类外面都可以访问
- `protected` 保护类型，在类里面、子类里可以访问，类外面不可以访问
- `private`   私有，   在类里面可以访问，子类和类外面都不可以访问

属性不加修饰符默认`public`。

### 静态属性、静态方法
ES5中的静态方法参考上面[ES5类中的静态方法](#es5类中的静态方法)。

TypeScript中使用`static`关键字修饰静态方法。
``` ts
class Woman {
    name: string='Sogrey';//属性 前面省略了`public`关键字
    age: number=30;
    static sex:string = '男';//静态属性

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
```
> 静态方法里面没法直接调用类里面的非静态属性

### 抽象类 继承 多态

#### 多态

父类定义一个方法而不去实现它，让子类实现，每个子类将有不同表现。

多态属于继承。

``` ts
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
```
#### 抽象类

用`abstract`关键字修饰抽象类和抽象方法，**抽象类不能被实例化**，抽象类中的抽象方法不包含具体实现且**必须在派生类中实现**。

``` ts
abstract class Student {
    //abstract 修饰抽象方法，只能放在抽象类中，不用去实现它。
    abstract getType():any;
}

// var s = new Student();//报错 无法创建抽象类的实例。

class Pupil extends Student {
    //继承抽象类，其抽象方法必须实现
    getType(){
        return "Pupil";
    }
}
```