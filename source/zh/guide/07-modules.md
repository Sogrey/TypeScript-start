---
sidebarDepth: 5
---

# 07 TypeScript中的模块化

## 模块化概念

在JS的项目中,随着工程的不断增大,为了便于管理和模块复用,产生了很多模块化解决方案，如CommonJS,AMD,CMD及ES模块,目前最常用的是ES6的模块和CommonJS模块

TS对这两种模块系统都有比较好的支持。

TypeScript 1.5中术语名发生变化，“内部模块”现称作“命名空间”(见[08-namespace.md])，“外部模块”现简称为“模块”，模块在自身的作用域里执行，而不是全局作用。这就意味着定义在模块内部的变量、函数、类等等在模块外是`不可见`的,除非你明确的使用`export`形式之一导出它，否则，这些模块内的变量、函数、接口等都是私有的，外部不可调用。相应的，如果想使用其他模块到处的变量、函数、类和接口等，你必须要是用`import`形式之一导入它。

## 模块的导出、导入方式

新建一个`lib.ts`文件,并导出相关函数：
``` ts
export function printString(str: string): void {
    console.log(`打印输出 ${str}`);
}
```
在另一个文件中`07-modules.ts`中导入`lib`，并指定要导入的函数名：
``` ts
import {printString} from './lib'

printString("武汉加油，战疫必胜。");
```
然而，页面直接引入编译后生成的`07-modules.js`会报错：
``` js
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });//Uncaught ReferenceError: exports is not defined
var lib_1 = require("./lib");
lib_1.printString("武汉加油，战疫必胜。");
```
这是因为浏览器并不能识别这样的模块化管理，这就需要借助到`node.js`或`webpack`这些打包工具，将源码打包成浏览器可识别的ES5语法。

我们可以使用`node.js`测试一下刚才的代码，`cd`到编译生成js的目录：
``` bash
> cd 07-modules
```
执行：
``` bash
> node 07-modules.js
打印输出 武汉加油，战疫必胜。
```
如期输出了我们预期的结果。

---

上面的例子中，我们使用`export`关键字导出模块内的方法，其实也可以这样导出变量，如：
``` ts
export var config = {
    //...
};
```
但实际中，我们用的模块内方法变量以及接口众多，每个都在前面加`export`就有些不方便了。其实还有一种导出方法,在文档末尾加上：
``` ts
export {
    variable,
    function1,
    function2
}
```
引入时：
``` ts
import {variable,function1,function2} from './lib'

function1();
function2(variable);
```
有时，方法名、变量名太长太复杂也可以使用`as`关键字设置别名简化使用：
``` ts
import {variable,function1 as fun1,function2 as fun2} from './lib'

fun1();
fun2(variable);
```

## export default 默认导出

每个模块都可以有一个`default`导出。默认导出使用`default`关键字标记，并且一个模块只能够有一个`default`导出。

``` ts
export default function1;
```

但`default`导出的需要使用一种特殊导入形式

``` ts
import function1 from './lib'

function1();
```