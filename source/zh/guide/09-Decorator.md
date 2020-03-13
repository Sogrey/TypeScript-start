---
sidebarDepth: 5
---

# 09 装饰器

## 装饰器的概念

装饰器是一种特殊类型的声明，它能够被附加到类声明、方法、属性或者参数上，可以修改类的行为。

通俗讲，装饰器就是一个方法，可以注入到类、方法、属性上来扩展类、属性、方法和参数的功能。

常见装饰器有：类装饰器、属性装饰器、方法装饰器、参数装饰器

装饰器的写法：普通装饰器（无法传参）、装饰器工厂（可传参）

装饰器是过去几年中js最大成就之一，已是ES7的标准特征之一。

## 类装饰器

类装饰器在类声明之前被声明（紧靠着类声明，类似与Java中的注解）。类装饰器应用于类构造函数，可以用来监视、修改或者替换类定义。传入一个参数。

### 普通装饰器

首先看一个普通装饰器的例子：
``` ts

//装饰器
function logClazz(params: any) {
    console.log(params);
}

@logClazz
class HttpClient {
    constructor() {

    }
    getData() {

    }
}
```
在页面控制台看到输出：
```
ƒ HttpClient() {
    }
```
其中装饰器的参数`params`就是当前类`HttpClient`。既然已经能拿到类的实例，我们为他扩展方法：
``` ts
//装饰器
function logClazz(params: any) {
    console.log(params);

    //params 就是当前类
    params.prototype.apiUrl = "https://sogrey.top"
}
```
创建一个类的实例：
``` ts
var http = new HttpClient();
console.log(http.apiUrl)//https://sogrey.top
```
果然能拿到刚刚扩展的属性`apiUrl`。

同样可以扩展类的函数，你可以自己试一试。

### 装饰器工厂

看完普通装饰器再看看装饰器工厂：

``` ts
function logClazz(params: string) {    
    return function (target: any) {
        console.log(params);
        console.log(target);//此时的target就是当前类

        target.prototype.apiUrl = params;
    }
}

@logClazz('https://sogrey.top/api')
class HttpClient {
    constructor() {

    }
    getData() {

    }
}
```
输出了：
```
http
ƒ HttpClient() {
    }
```
类的属性、方法的扩展与前面基本雷同。

``` ts
var http = new HttpClient();
console.log(http.apiUrl)//https://sogrey.top/api
```

### 装饰器重载构造函数

``` ts
function logClazz(params: any) {
    console.log(params);
    return class extends params{//重载构造函数
       apiUrl:string = "url 被修改";//重载属性

       getData(){//重载函数
           console.log(`现在的URL：${this.apiUrl}`);
       }
    }
}

@logClazz
class HttpClient {
    apiUrl:string|undefined;
    constructor() {
       this.apiUrl = "url";
    }
    getData() {
       console.log(this.apiUrl);
    }
}
```

## 属性装饰器

属性装饰器接受两个参数：

1. 对于静态成员来说类的构造函数，对于实例成员是类的原型对象
2. 成员的名字

``` ts
//类装饰器
function logClazz(params: string) {    
    return function (target: any) {
        console.log(params);
        console.log(target);//此时的target就是当前类        
    }
}

//属性装饰器
function logProterty(params: string){
   return function(target:any,attr:any){
      console.log(target);//当前类
      console.log(attr);//类的属性名

      target[attr] = params;//修改类target的属性attr值为params的值
   }
}

@logClazz('/getUser')
class HttpClient {
    @logProterty('https://sogrey.top/api')
    url:string|undefined;
    constructor() {    }
    getData() {    }
}
/*
运行输出：
{getData: ƒ, constructor: ƒ}
url
/getUser
ƒ HttpClient() {
    }

*/

var http = new HttpClient();
console.log(http.url);//https://sogrey.top/api
```

## 方法装饰器

方法装饰器会被应用到方法的属性描述符上，可以用来监视、修改或者替换方法的定义。

方法装饰器在运行时传入三个参数：

1. 对于静态成员来说类的构造函数，对于实例成员是类的原型对象
2. 成员的名字
3. 成员的属性描述符

``` ts
//方法装饰器  扩展
function get(params:any){
    return function (target:any,methodName:any,desc:any) {
        console.log(target);//当前类
        console.log(methodName);//方法名
        console.log(desc);//方法描述符

        //

        //扩展
        target.url = "扩展的 URL";
        target.run = function(){
            console.log("扩展的方法");
        }
    }
}

class HttpClient {
    url:string|undefined;
    httpHost:string|undefined;
    constructor() {

    }
    @get('https://sogrey.top/api')
    getData() {
       console.log(this.httpHost);
    }
}

/*
{getData: ƒ, constructor: ƒ}
getData
{writable: true, enumerable: true, configurable: true, value: ƒ}
*/

var http = new HttpClient();
console.log(http.url);//扩展的 URL
http.run();//扩展的 URL
```


修改装饰器方法：把装饰器方法里面传入的所有参数改为string类型

``` ts
//方法装饰器 修改
function get(params: any) {//params 装饰器传入参数
    return function (target: any, methodName: any, desc: any) {
        console.log(target);//当前类
        console.log(methodName);//方法名
        console.log(desc);//方法描述符

        //1. 保存当前方法
        var oMethod = desc.value;

        desc.value = function (...args: any[]) {
            args = args.map((value) => {
                return String(value);
            });
            console.log(args);

            oMethod.apply(this, args);
        }
    }
}

class HttpClient {
    url: string | undefined;
    constructor() {

    }
    @get('https://sogrey.top/api')
    getData(...args: any[]) {
        console.log(args);
        console.log("这是getData输出的");
    }
}

/*
{getData: ƒ, constructor: ƒ}
getData
{writable: true, enumerable: true, configurable: true, value: ƒ}
*/

var http = new HttpClient();
console.log(http.url);//扩展的 URL
http.run();//扩展的 URL

http.getData(123, "ABS");

/*
["123", "ABS"]
["123", "ABS"]
这是getData输出的
*/
```

## 方法参数装饰器

参数装饰器表达式会在运行时当做函数被调用，可以使用参数装饰器味蕾的原型增加一些元素数据，传入下列三个参数：

1. 对于静态成员来说类的构造函数，对于实例成员是类的原型对象
2. 方法名
3. 参数在函数参数列表中的索引

``` ts

function logParams(params: any) {
    return function (target: any, methodName: any, paramsIndex: any) {
        console.log(params);//装饰器传入参数
        console.log(target);//当前类
        console.log(methodName);//方法名
        console.log(paramsIndex);//参数索引

        //扩展属性
        target.apiUrl = 'https://sogrey.top/api';
    }
}

class HttpClient {
    url: string | undefined;
    constructor() {

    }
    getData(@logParams('uuid') uuid:any) {
        console.log(uuid);
    }
}

var http= new HttpClient();
http.getData(123456);

/*
uuid
{getData: ƒ, constructor: ƒ}
getData
0
123456
*/

console.log(http.apiUrl)//https://sogrey.top/api
```


## 各个装饰器执行顺序

``` ts
//类装饰器
function logClazz1(params: any) {
    return function (target: any) {
        console.log("类装饰器1");
    }
}
function logClazz2(params: any) {
    return function (target: any) {
        console.log("类装饰器2");
    }
}
//属性装饰器
function logAttr(params?: string) {
    return function (target: any, attrName: any) {
        console.log("属性装饰器");
    }
}
//方法装饰器
function logMethod(params?: string) {
    return function (target: any, methodName: any, desc: any) {
        console.log("方法装饰器");
    }
}
//参数装饰器
function logParams1(params?: string) {
    return function (target: any, methodName: any, desc: any) {
        console.log("参数装饰器1");
    }
}
function logParams2(params?: string) {
    return function (target: any, methodName: any, desc: any) {
        console.log("参数装饰器2");
    }
}

@logClazz1('类装饰器')
@logClazz2('类装饰器')
class HttpClient {
    @logAttr()
    url: string | undefined;
    constructor() {

    }
    @logMethod()
    getData() {
        console.log("getData");
    }

    setData(@logParams1() attr1:any,@logParams2() attr2:any){

    }
}

var http = new HttpClient();
http.setData(123,'123')
/*

属性装饰器
方法装饰器
参数装饰器2
参数装饰器1
类装饰器2
类装饰器1
*/
```

由此可见：
```
属性装饰器>方法装饰器>方法参数装饰器>类装饰器
```
如果有多个同类装饰器，先执行后一个。