---
sidebarDepth: 5
---

# 08 命名空间

## 命名空间的概念

在代码量较大的情况下，为了避免各种变量命名相互冲突，可以将相似功能的函数、类、接口等放置在命名空间内，同Java的包，.Net的命名空间一样，TypeScript的命名空间可以将代码包裹起来，只对外暴露需要在外部访问的对象。命名空间内的对象通过`export`关键字导出。

## 命名空间与模块的区别

- 命名空间：内部模块，主要用于组织代码，避免命名冲突。
- 模   块：ts的外部模块的简称，侧重于代码复用，一个模块里可能会有多个命名空间。

## 同文件内引入命名空间

比如有两个命名空间`A`和`B`,他们内部可以有同名的类、接口等出现，而不会互相冲突：
``` ts
namespace A{
    interface Animal{
        name:string;
        getName():string;
    }
    export class Dog implements Animal{
        name :string;
        constructor(name:string){
            this.name = name;
        }
        getName():string{
           return `A ${this.name}`;
        }
    }
}
namespace B{
    interface Animal{
        name:string;
        getName():string;
    }
    export class Dog implements Animal{
        name :string;
        constructor(name:string){
            this.name = name;
        }
        getName():string{
           return `B ${this.name}`;
        }
    }
}

var aDog = new A.Dog("泰迪");
console.log(aDog.getName());//A 泰迪

var bDog = new B.Dog("斗牛犬");
console.log(bDog.getName());//B 斗牛犬
```

## 引入包含命名空间的模块

模块`AModules.ts`:
``` ts
export namespace A{//模块内命名空间也要使用`export`导出方可在外部使用
    interface Animal{
        name:string;
        getName():string;
    }
    export class Dog implements Animal{//命名空间里的类、接口需要使用`export`导出方可在外部使用
        name :string;
        constructor(name:string){
            this.name = name;
        }
        getName():string{
           return `A ${this.name}`;
        }
    }
}
export namespace B{
    interface Animal{
        name:string;
        getName():string;
    }
    export class Dog implements Animal{
        name :string;
        constructor(name:string){
            this.name = name;
        }
        getName():string{
           return `B ${this.name}`;
        }
    }
}
```
引入以上模块：
``` ts
import {A,B} from './AModules'

var aDog = new A.Dog("泰迪");
console.log(aDog.getName());//A 泰迪

var bDog = new B.Dog("斗牛犬");
console.log(bDog.getName());//B 斗牛犬
```
同样使用`node.js`运行一下：
```
$ node 08-namespace.js
A 泰迪
B 斗牛犬
```
正确输出。