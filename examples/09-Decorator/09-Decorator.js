"use strict";
//装饰器
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
//类装饰器
//普通装饰器
/*
function logClazz(params: any) {
    console.log(params);

    //params 就是当前类
    params.prototype.apiUrl = "https://sogrey.top"
}

@logClazz
class HttpClient {
    constructor() {

    }
    getData() {

    }
}
*/
/*
输出了：

ƒ HttpClient() {
    }

*/
/*
var http = new HttpClient();
console.log(http.apiUrl)//https://sogrey.top
*/
// 装饰器工厂
/*
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
*/
/*
输出了：

http
ƒ HttpClient() {
    }
*/
/*
var http = new HttpClient();
console.log(http.apiUrl)//https://sogrey.top/api
*/
//属性装饰器
/*
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
      console.log(target);
      console.log(attr);

      target[attr] = params;
   }
}

@logClazz('/getUser')
class HttpClient {
    @logProterty('https://sogrey.top/api')
    url:string|undefined;
    constructor() {

    }
    getData() {

    }
}
*/
/*
运行输出：
{getData: ƒ, constructor: ƒ}
url
/getUser
ƒ HttpClient() {
    }

*/
/*
var http = new HttpClient();
console.log(http.url);//https://sogrey.top/api
*/
//方法装饰器
/*
function get(params: any) {//params 装饰器传入参数
    return function (target: any, methodName: any, desc: any) {
        console.log(target);//当前类
        console.log(methodName);//方法名
        console.log(desc);//方法描述符

        //扩展
        target.url = "扩展的 URL";
        target.run = function () {
            console.log("扩展的方法");
        }


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
*/
/*
{getData: ƒ, constructor: ƒ}
getData
{writable: true, enumerable: true, configurable: true, value: ƒ}
*/
/*
var http = new HttpClient();
console.log(http.url);//扩展的 URL
http.run();//扩展的 URL

http.getData(123, "ABS");// ["123", "ABS"]
*/
//方法参数装饰器
/*
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
*/
/*
uuid
{getData: ƒ, constructor: ƒ}
getData
0
123456
*/
/*
console.log(http.apiUrl)//https://sogrey.top/api
*/
//装饰器执行顺序
//类装饰器
function logClazz1(params) {
    return function (target) {
        console.log("类装饰器1");
    };
}
function logClazz2(params) {
    return function (target) {
        console.log("类装饰器2");
    };
}
//属性装饰器
function logAttr(params) {
    return function (target, attrName) {
        console.log("属性装饰器");
    };
}
//方法装饰器
function logMethod(params) {
    return function (target, methodName, desc) {
        console.log("方法装饰器");
    };
}
//参数装饰器
function logParams1(params) {
    return function (target, methodName, desc) {
        console.log("参数装饰器1");
    };
}
function logParams2(params) {
    return function (target, methodName, desc) {
        console.log("参数装饰器2");
    };
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.getData = function () {
        console.log("getData");
    };
    HttpClient.prototype.setData = function (attr1, attr2) {
    };
    __decorate([
        logAttr()
    ], HttpClient.prototype, "url", void 0);
    __decorate([
        logMethod()
    ], HttpClient.prototype, "getData", null);
    __decorate([
        __param(0, logParams1()), __param(1, logParams2())
    ], HttpClient.prototype, "setData", null);
    HttpClient = __decorate([
        logClazz1('类装饰器'),
        logClazz2('类装饰器')
    ], HttpClient);
    return HttpClient;
}());
var http = new HttpClient();
http.setData(123, '123');
/*

属性装饰器
方法装饰器
参数装饰器2
参数装饰器1
类装饰器2
类装饰器1
*/
